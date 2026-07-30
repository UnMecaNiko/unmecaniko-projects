# Dominios y DNS

Inventario de los dominios propios, dónde se administra su DNS y a dónde apunta
cada uno. **Verificado el 2026-07-30** consultando los servidores autoritativos.

## Dominios propios

| Dominio | Registrador / DNS | Para qué |
|---|---|---|
| `unmecaniko.com` | DNS en **Huawei Cloud DNS** (`ns1.huaweicloud-dns.{net,org,cn,com}`) | Marca personal. Web pública en Vercel. |
| `velasquezlopez.com` | DNS en **Hostinger** (`artemis.dns-parking.com`, `hermes.dns-parking.com`) | Apellido familiar. Landing de la CNC y todo lo autoalojado en el VPS. |

Son dos proveedores de DNS distintos: cambiar un registro de `unmecaniko.com` se
hace en la consola de Huawei Cloud; uno de `velasquezlopez.com`, en hPanel de
Hostinger.

## Registros activos

### unmecaniko.com → Vercel

| Nombre | Tipo | Apunta a | Sirve |
|---|---|---|---|
| `unmecaniko.com` | A | `216.198.79.1` (anycast de Vercel) | Web personal |
| `www.unmecaniko.com` | CNAME | `8e4dd9a59059d05d.vercel-dns-017.com` → `216.198.79.1`, `64.29.17.1` | Web personal |

El código de esa web es el repositorio
[professionalWebsite](https://github.com/UnMecaNiko/professionalWebsite) y el
despliegue lo maneja Vercel. Ver [../web/unmecaniko-com.md](../web/unmecaniko-com.md).

### velasquezlopez.com → VPS `2.24.106.64`

| Nombre | Tipo | Apunta a | Sirve | Certificado |
|---|---|---|---|---|
| `velasquezlopez.com` | A | `2.24.106.64` | Landing comercial de la CNC (VELO inc) | Let's Encrypt |
| `www.velasquezlopez.com` | A | `2.24.106.64` | Redirige 301 al apex | Let's Encrypt |
| `n8n.velasquezlopez.com` | A | `2.24.106.64` | Instancia de n8n | Let's Encrypt |
| `theker.velasquezlopez.com` | A | `2.24.106.64` | Presentación «Sistema operativo de IA» | Let's Encrypt, emitido el 2026-07-30 |

`www` redirige al apex para no dividir el SEO entre dos direcciones.

Los certificados los pide y renueva **Caddy** solo, sin certbot ni cron. Ver
[proxy-caddy.md](proxy-caddy.md).

## Antes de publicar un subdominio nuevo

El orden importa y no es negociable:

1. **Primero el registro A** apuntando a `2.24.106.64`, en hPanel de Hostinger.
2. **Comprobar que resuelve** antes de tocar el servidor:

```bash
nslookup nuevo.velasquezlopez.com hermes.dns-parking.com   # autoritativo, sin caché
nslookup nuevo.velasquezlopez.com 8.8.8.8                  # propagación pública
```

3. Solo entonces añadir el bloque en el `Caddyfile` y levantar el proxy.

**Por qué el orden importa:** si Caddy intenta emitir un certificado para un
dominio que todavía no resuelve, Let's Encrypt falla y Caddy entra en reintentos
con retroceso exponencial — puede tardar **horas** en volver a intentarlo, aunque
el DNS ya esté correcto. Pasó el 2026-07-27 con la landing: el DNS estaba bien y
el sitio seguía caído. Se resolvió con `docker compose restart caddy`.

Además, Let's Encrypt limita a **5 emisiones por dominio por semana**: los
intentos fallidos gastan cupo.

## Ideas y pendientes

> ⏳ PENDIENTE: decidir qué dominio es la cara de qué. Hoy `unmecaniko.com` es la
> marca personal y `velasquezlopez.com` alberga lo comercial de la CNC más
> servicios internos. La presentación de Theker quedó bajo `velasquezlopez.com`
> por comodidad, aunque conceptualmente es trabajo profesional de Nicolas y
> encajaría mejor bajo `unmecaniko.com`.

> ⏳ PENDIENTE: no hay inventario de fechas de expiración ni renovación
> automática confirmada de ninguno de los dos dominios. Verificar en Hostinger y
> Huawei Cloud, y anotar las fechas aquí.

> ⏳ PENDIENTE: no hay registros de correo (MX/SPF/DKIM/DMARC) documentados. Si
> algún dominio envía correo, falta configurarlos; si no envía, conviene un
> registro SPF nulo y `DMARC p=reject` para que nadie lo suplante.

## Ver también

- [vps-velo.md](vps-velo.md) — el servidor al que apunta `velasquezlopez.com`
- [proxy-caddy.md](proxy-caddy.md) — cómo se publica un sitio en un dominio
