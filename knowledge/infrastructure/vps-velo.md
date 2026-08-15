# VPS de VELO inc — el servidor donde vive todo lo autoalojado

Un único servidor en Hostinger aloja la landing comercial de la CNC, la instancia
de n8n y la presentación de Theker. Todo detrás de un proxy inverso que reparte
por dominio.

**Verificado por SSH el 2026-07-30.** Si cambia algo en el servidor, se actualiza
este archivo en el mismo trabajo.

## Identificación

| Dato | Valor |
|---|---|
| Proveedor | Hostinger (VPS) |
| Hostname | `srv1860276.hstgr.cloud` |
| IP pública | `2.24.106.64` |
| Sistema | Ubuntu 24.04.4 LTS (kernel 6.8.0-134-generic) |
| Recursos | 1 vCPU · 3,8 GB RAM · 48 GB disco (18 % usado) |
| Swap | 2 GB en `/swapfile` |
| Zona horaria | UTC |
| Docker | 29.6.2 · Docker Compose v5.3.1 |
| Contratado | 2026-07-27 |

El nombre "VELO inc" es la marca comercial bajo la que se vende la CNC. El
servidor se llama así por eso, pero aloja cosas que no son de la CNC.

## Cómo se entra

Acceso por SSH con llave, como `root`. **La llave privada no está en este
repositorio ni puede estarlo** — ver [accesos.md](accesos.md).

Hay un alias configurado en `~/.ssh/config` del equipo de trabajo:

```
Host velo-vps
    HostName 2.24.106.64
    User root
    IdentityFile ~/.ssh/velo_vps
    IdentitiesOnly yes
    ServerAliveInterval 30
```

Con eso, entrar es:

```bash
ssh velo-vps
```

| Dato de la llave | Valor |
|---|---|
| Tipo | ed25519 |
| Comentario | `unmecaniko@gmail.com` |
| Llave pública | `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIP2kx60Y88xMjz0zJInfLLBGFqbO+ABSwzlSAnF4ch38 unmecaniko@gmail.com` |
| Ruta local de la privada | `~/.ssh/velo_vps` (fuera del repositorio, a propósito) |
| Autorizada en | `/root/.ssh/authorized_keys` del VPS |

La llave pública sí puede estar aquí: es pública por diseño y sirve para
reconstruir el acceso desde otra máquina (basta copiarla a
`authorized_keys` si aún se tiene otra vía de entrada).

> ⏳ PENDIENTE: no hay copia de respaldo de la llave privada fuera del equipo de
> trabajo. Si ese disco se pierde, se pierde el acceso SSH y hay que recuperarlo
> por la consola de recuperación de Hostinger. Guardar una copia en un gestor de
> contraseñas.

> ⏳ PENDIENTE: se entra como `root`. Lo correcto es un usuario sin privilegios
> con `sudo` y `PermitRootLogin no`.

## Qué corre adentro

Cada aplicación es un stack de Docker Compose independiente. **Solo el proxy
publica puertos**; todo lo demás se alcanza por la red Docker `edge`.

```
Internet ──▶ :80 / :443 ──▶ Caddy ──┬──▶ web-velo:3000   (landing de la CNC)
                                    ├──▶ n8n:5678        (automatizaciones)
                                    ├──▶ /srv/theker     (presentación estática)
                                    └──▶ /srv/sitio-dos  (marcador de posición)
```

| Stack | Ruta en el VPS | Contenedores | Publica puertos |
|---|---|---|---|
| Proxy | `/opt/proxy` | `caddy` | 80, 443, 443/udp |
| Landing de la CNC | `/opt/web-velo` | `web-velo` | no |
| n8n | `/opt/n8n` | `n8n`, `n8n-postgres` | no |

Un sitio estático **no necesita stack propio**: son archivos dentro de
`/opt/proxy/sitios/`, que Caddy sirve directamente. Así está publicada la
presentación de Theker.

### Redes Docker

| Red | Para qué |
|---|---|
| `edge` | Externa y compartida. El proxy alcanza las aplicaciones por aquí. |
| `n8n_interna` | Solo n8n y su PostgreSQL. La base de datos **no** es alcanzable desde el proxy ni desde fuera. |

### Volúmenes

| Volumen | Qué guarda | Criticidad |
|---|---|---|
| `proxy_caddy_data` | **Certificados TLS.** No borrar: perderlo obliga a reemitir todo y Let's Encrypt limita a 5 emisiones por dominio por semana. | Alta |
| `proxy_caddy_config` | Estado interno de Caddy | Baja |
| `n8n_n8n_db` | PostgreSQL de n8n: flujos y credenciales | **Máxima** |
| `n8n_n8n_data` | Datos de la aplicación n8n | Alta |
| `traefik-letsencrypt`, `traefik_traefik-letsencrypt` | Restos del Traefik que traía la plantilla | Ninguna |

### Traefik dormido

La plantilla de Hostinger llegó con **Traefik v3.7.9** preinstalado en
`/docker/traefik`, ocupando los puertos 80 y 443. Se detuvo con
`docker compose down` **dejando el directorio intacto**. Restaurarlo es
`cd /docker/traefik && docker compose up -d`, previo apagado de Caddy.

Se eligió Caddy porque el enrutamiento en un archivo legible y el HTTPS
automático pesan más que ahorrarse una instalación. El detalle de esa decisión
está en el ADR **D-0014** del repositorio
[magiaRojaV3](https://github.com/UnMecaNiko/magiaRojaV3/blob/main/conocimiento/maquina/decisiones/D-0014-infraestructura-vps-compartida.md).

## Seguridad del servidor

| Medida | Estado |
|---|---|
| `ufw` | Activo. Solo 22/tcp, 80/tcp, 443/tcp y 443/udp, en IPv4 e IPv6. |
| `fail2ban` | Activo, vigilando SSH. |
| Acceso SSH | Solo por llave. |
| Cabeceras HTTP | HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` en todos los sitios (definidas una vez en el `Caddyfile`). |

> ⏳ PENDIENTE: no hay actualizaciones automáticas de seguridad configuradas
> (`unattended-upgrades`).

## Dónde vive la configuración

**Los archivos de despliegue no están en este repositorio.** Viven en
[magiaRojaV3/infra/](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/infra):

| Archivo en GitHub | Qué es |
|---|---|
| [`infra/README.md`](https://github.com/UnMecaNiko/magiaRojaV3/blob/main/infra/README.md) | Manual de operación del servidor |
| [`infra/proxy/Caddyfile`](https://github.com/UnMecaNiko/magiaRojaV3/blob/main/infra/proxy/Caddyfile) | Enrutamiento por dominio |
| [`infra/proxy/compose.yaml`](https://github.com/UnMecaNiko/magiaRojaV3/blob/main/infra/proxy/compose.yaml) | Stack del proxy |
| [`infra/n8n/compose.yaml`](https://github.com/UnMecaNiko/magiaRojaV3/blob/main/infra/n8n/compose.yaml) | Stack de n8n + PostgreSQL |

Se documenta aquí y se referencia allá, sin duplicar: dos copias de un
`Caddyfile` divergen y la que está en el servidor gana siempre.

> ⏳ PENDIENTE: que la infraestructura viva en el repositorio de la CNC es una
> herencia de cuando el VPS era solo para la landing. Hoy aloja cosas que no son
> de la CNC. Evaluar mover `infra/` a este repositorio o a uno propio.

## Operación

| Tarea | Comando |
|---|---|
| Ver qué corre | `ssh velo-vps 'docker ps'` |
| Logs de un servicio | `ssh velo-vps 'docker compose -f /opt/<stack>/compose.yaml logs -f --tail 100'` |
| Reiniciar el proxy | `ssh velo-vps 'cd /opt/proxy && docker compose restart caddy'` |
| Publicar un dominio nuevo | `docker compose up -d` (**no** `restart`: no vuelve a leer el `.env`) |
| Actualizar la landing | `ssh velo-vps 'cd /opt/web-velo && docker compose up -d --build'` |
| Actualizar n8n | `ssh velo-vps 'cd /opt/n8n && docker compose pull && docker compose up -d'` |
| Liberar espacio | `ssh velo-vps 'docker image prune -f'` |

## Respaldos

Lo que duele perder:

| Qué | Dónde | Cómo |
|---|---|---|
| Flujos y credenciales de n8n | volumen `n8n_n8n_db` | `docker exec n8n-postgres pg_dump -U n8n n8n > n8n.sql` |
| Clave de cifrado de n8n | `/opt/n8n/.env` (`N8N_ENCRYPTION_KEY`) | copia manual fuera del servidor |
| Certificados | volumen `proxy_caddy_data` | se reemiten solos, no es crítico |

El respaldo de PostgreSQL **sin** la `N8N_ENCRYPTION_KEY` es inútil: los flujos
se restauran pero las credenciales quedan ilegibles. Guardar ambas cosas juntas.

> ⏳ PENDIENTE: el respaldo de n8n es manual y **hoy no se está haciendo**.
> Automatizarlo hacia almacenamiento externo — el propio n8n puede hacerlo.

## Ver también

- [dominios-y-dns.md](dominios-y-dns.md) — qué dominios hay y a dónde apuntan
- [proxy-caddy.md](proxy-caddy.md) — cómo publicar un sitio nuevo
- [accesos.md](accesos.md) — inventario de credenciales y dónde viven
