# Proxy Caddy — cómo se publica un sitio

Un solo contenedor puede escuchar en los puertos 80 y 443. Ese contenedor es
**Caddy**, y reparte el tráfico según el dominio que pida el visitante. Todo lo
demás vive detrás, sin puertos publicados.

Caddy pide y renueva los certificados TLS solo, sin certbot ni cron.

- **Dónde corre:** `/opt/proxy` en el [VPS](vps-velo.md), contenedor `caddy`.
- **Configuración versionada:** [magiaRojaV3/infra/proxy/](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/infra/proxy).

## Las dos formas de publicar un sitio

### 1. Sitio estático — archivos servidos directamente

No necesita contenedor propio. Los archivos van a `/opt/proxy/sitios/<nombre>/`,
que Caddy monta en `/srv` como solo-lectura.

Es la forma correcta cuando el sitio no necesita un proceso en ejecución: HTML
plano, o un framework capaz de exportar estático. Así está publicada la
presentación de Theker: es un Next.js con `output: "export"`, y en producción no
hay ningún Node corriendo. En un VPS de 1 vCPU eso importa.

Bloque en el `Caddyfile`:

```caddyfile
{$DOMINIO_THEKER} {
	import comunes

	root * /srv/theker

	# Los assets con hash de Next son inmutables: cache larga.
	@estaticos path /_next/static/*
	header @estaticos Cache-Control "public, max-age=31536000, immutable"

	# La exportación escribe una página por ruta como `<ruta>.html`.
	try_files {path} {path}.html {path}/index.html
	file_server

	handle_errors 404 {
		rewrite * /404.html
		file_server
	}
}
```

### 2. Aplicación — proxy inverso a un contenedor

Cuando hace falta un proceso vivo (SSR, API, base de datos). El stack se levanta
conectado a la red `edge` con un `container_name` fijo, sin publicar puertos, y
Caddy lo alcanza por ese nombre:

```caddyfile
{$DOMINIO_VELO} {
	import comunes
	reverse_proxy web-velo:3000
}
```

Así están la landing de la CNC (`web-velo:3000`) y n8n (`n8n:5678`).

## Cabeceras comunes

Se definen una vez en un *snippet* y se importan en cada bloque, para que ningún
sitio se quede sin ellas por olvido:

```caddyfile
(comunes) {
	encode zstd gzip
	header {
		Strict-Transport-Security "max-age=31536000; includeSubDomains"
		X-Content-Type-Options "nosniff"
		Referrer-Policy "strict-origin-when-cross-origin"
		Permissions-Policy "camera=(), microphone=(), geolocation=()"
		-Server
	}
}
```

## Procedimiento para publicar un dominio nuevo

Este es el orden que funciona. Se probó el 2026-07-30 con
`theker.velasquezlopez.com` y el certificado salió en 4 segundos.

**1. Crear el registro A y esperar a que resuelva.** No negociable — ver
[dominios-y-dns.md](dominios-y-dns.md#antes-de-publicar-un-subdominio-nuevo).

**2. Subir el contenido** (si es estático):

```bash
npm run build   # genera out/
tar -czf - -C out . | ssh velo-vps 'mkdir -p /opt/proxy/sitios/<nombre> && tar -xzf - -C /opt/proxy/sitios/<nombre>'
```

**3. Preparar el `Caddyfile` sin aplicarlo.** Se sube como archivo aparte y se
valida contra un contenedor desechable, con el proxy de producción intacto:

```bash
cat infra/proxy/Caddyfile | ssh velo-vps 'cat > /opt/proxy/Caddyfile.nuevo'
ssh velo-vps 'docker run --rm --env-file /opt/proxy/.env \
  -v /opt/proxy/Caddyfile.nuevo:/etc/caddy/Caddyfile:ro \
  caddy:2-alpine caddy validate --config /etc/caddy/Caddyfile'
```

**4. Probar que el sitio se sirve bien**, también sin tocar producción: un Caddy
desechable en un puerto interno, con el mismo bloque, y `curl` contra
`127.0.0.1:8099`. Verificar la página, el CSS, un JS y el 404.

**5. Añadir la variable de dominio al `.env`** del proxy y aplicar:

```bash
ssh velo-vps 'cd /opt/proxy && cp Caddyfile Caddyfile.respaldo-$(date +%Y%m%d) && mv Caddyfile.nuevo Caddyfile && docker compose up -d'
```

> **`docker compose up -d`, no `restart`.** `restart` **no vuelve a leer el
> `.env`**: la variable del dominio nuevo quedaría vacía y el bloque no
> funcionaría. `up -d` recrea el contenedor con el entorno nuevo.

**6. Verificar desde fuera:**

```bash
curl -sSI https://nuevo.velasquezlopez.com | head -1
ssh velo-vps 'docker compose -f /opt/proxy/compose.yaml logs --tail 25 caddy | grep -i certificate'
```

## Actualizar un sitio estático ya publicado

No hace falta reiniciar Caddy: lee los archivos en cada petición.

```bash
npm run build
tar -czf - -C out . | ssh velo-vps 'tar -xzf - -C /opt/proxy/sitios/<nombre>'
```

Los assets de `/_next/static/` llevan hash en el nombre, así que un despliegue
nuevo no deja a nadie con una versión mezclada.

> ⏳ PENDIENTE: el despliegue no es atómico — durante la extracción del `tar`
> conviven archivos viejos y nuevos unos segundos. Para hacerlo atómico, subir a
> un directorio hermano y mover un enlace simbólico.

## Certificados

Viven en el volumen `proxy_caddy_data`. **Ese volumen no se borra**: perderlo
obliga a reemitir todos los certificados, y Let's Encrypt limita a 5 emisiones
por dominio por semana.

Si un sitio no carga tras apuntar el DNS:

1. Comprobar el DNS contra el autoritativo (`nslookup dominio hermes.dns-parking.com`), sin caché.
2. Si el DNS está bien y no hay certificado, lo más probable es que Caddy esté en
   espera larga por intentos fallidos anteriores. Se fuerza con
   `docker compose restart caddy`.

## Ver también

- [vps-velo.md](vps-velo.md) — el servidor
- [dominios-y-dns.md](dominios-y-dns.md) — los dominios y su DNS
- [`infra/README.md` en magiaRojaV3](https://github.com/UnMecaNiko/magiaRojaV3/blob/main/infra/README.md) — manual de operación completo
