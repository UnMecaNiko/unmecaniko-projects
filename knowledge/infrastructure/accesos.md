# Accesos y credenciales — inventario por referencia

> ⚠️ **Este repositorio es público.** Aquí se documenta **qué** credencial existe,
> **para qué** sirve y **dónde vive**. Nunca su contenido.

Los valores reales van en `accesos.local.md`, **ignorado por git**. Su plantilla
versionada es [accesos.local.example.md](accesos.local.example.md): cópiala,
renómbrala y llénala en el equipo de trabajo.

## Por qué se hace así

El repositorio tiene `visibility: public` y [context/main.py](../../context/main.py)
expone por MCP **todos** los `.md` que contiene. Un secreto escrito aquí queda
publicado y, además, servido a cualquier agente conectado a ese MCP.

Y aunque el repositorio se volviera privado, una llave privada en git seguiría
siendo mala idea: queda en la historia para siempre, sobrevive a los `git rm`, y
se filtra completa el día que se comparta el repositorio con alguien.

**Si un secreto se cuela en un commit, hay que rotarlo.** Borrarlo no basta: los
bots que escanean commits públicos de GitHub lo encuentran en minutos.

## Inventario

| Credencial | Para qué | Dónde vive | En el repositorio |
|---|---|---|---|
| Llave SSH `velo_vps` (ed25519) | Entrar al [VPS](vps-velo.md) como `root` | `~/.ssh/velo_vps` en el equipo de trabajo; autorizada en `/root/.ssh/authorized_keys` del VPS | Solo la **pública**, en [vps-velo.md](vps-velo.md#cómo-se-entra) |
| `ACME_EMAIL` | Avisos de expiración de Let's Encrypt | `/opt/proxy/.env` en el VPS | Es `unmecaniko@gmail.com`, no es secreto |
| `POSTGRES_PASSWORD` de n8n | Base de datos de n8n | `/opt/n8n/.env` en el VPS | No |
| `N8N_ENCRYPTION_KEY` | **Descifra las credenciales de n8n.** Sin ella, un respaldo de la base es inútil | `/opt/n8n/.env` en el VPS | No |
| Cuenta de propietario de n8n | Entrar a `n8n.velasquezlopez.com` | Gestor de contraseñas | No |
| Panel de Hostinger (hPanel) | VPS y DNS de `velasquezlopez.com` | Gestor de contraseñas | No |
| Consola de Huawei Cloud | DNS de `unmecaniko.com` | Gestor de contraseñas | No |
| Cuenta de Vercel | Despliegue de unmecaniko.com | Gestor de contraseñas | No |
| Supabase (proyecto `ykvgpcusdnzyzsqjmksr`) | Almacenamiento de media del portafolio | Gestor de contraseñas | La URL pública del bucket sí, las llaves no |
| Cuenta de GitHub `UnMecaNiko` | Todos los repositorios | Gestor de contraseñas + llave SSH | No |

## Cómo reconstruir el acceso desde otra máquina

1. **SSH al VPS.** Copiar `velo_vps` (privada y pública) a `~/.ssh/`, poner
   permisos `600` a la privada, y añadir el bloque `Host velo-vps` a
   `~/.ssh/config` — está transcrito en [vps-velo.md](vps-velo.md#cómo-se-entra).
2. **Si se perdió la llave privada** y no hay copia: entrar por la consola de
   recuperación de Hostinger (hPanel → VPS → Terminal del navegador), generar una
   llave nueva y añadirla a `authorized_keys`.
3. **Secretos de los stacks.** Los `.env` del VPS **no están versionados en
   ninguna parte**. Si se pierde el servidor, se pierden. Las plantillas
   (`.env.example`) sí están en
   [magiaRojaV3/infra/](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/infra),
   con instrucciones para regenerar cada valor.

> ⏳ PENDIENTE: no hay un gestor de contraseñas definido como fuente única, ni
> copia de la `N8N_ENCRYPTION_KEY` fuera del servidor. Es el punto más frágil de
> toda la operación: si el VPS muere hoy, los flujos de n8n se pueden restaurar
> pero sus credenciales no.

## Ver también

- [vps-velo.md](vps-velo.md) — el servidor y su acceso
- [accesos.local.example.md](accesos.local.example.md) — plantilla del archivo local
