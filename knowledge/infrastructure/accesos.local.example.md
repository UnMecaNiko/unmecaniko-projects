# Plantilla de `accesos.local.md`

Copiar este archivo como `accesos.local.md` en la misma carpeta y llenarlo en el
equipo de trabajo. **`accesos.local.md` está ignorado por git** — verificar con
`git check-ignore -v knowledge/infrastructure/accesos.local.md` antes de
escribir nada sensible.

No commitear este archivo con valores reales. No pegarlo en un chat, un issue ni
un mensaje. El inventario público de qué credencial existe y para qué está en
[accesos.md](accesos.md).

---

## VPS de VELO inc

- **IP / host:** 2.24.106.64 · srv1860276.hstgr.cloud
- **Usuario:** root
- **Llave privada:** ruta en este equipo → `~/.ssh/velo_vps`
- **Frase de paso de la llave:** ⏳
- **Copia de respaldo de la llave:** ⏳ (¿en qué gestor de contraseñas?)

## Hostinger (hPanel)

- **Correo de la cuenta:** ⏳
- **Contraseña:** ⏳ (gestor de contraseñas)
- **2FA:** ⏳
- **Fecha de renovación del VPS:** ⏳
- **Fecha de renovación de `velasquezlopez.com`:** ⏳

## Huawei Cloud

- **Cuenta:** ⏳
- **DNS que administra:** `unmecaniko.com`
- **Fecha de renovación del dominio:** ⏳

## n8n (`n8n.velasquezlopez.com`)

- **Usuario propietario:** ⏳
- **Contraseña:** ⏳
- **`N8N_ENCRYPTION_KEY`:** ⏳ ← **crítica.** Sin ella un respaldo de la base de
  datos restaura los flujos pero no las credenciales.
- **`POSTGRES_PASSWORD`:** ⏳

## Vercel

- **Cuenta:** ⏳
- **Proyecto:** `v0-web-site-2-0` (unmecaniko.com)
- **Token de API (si se crea para CI):** ⏳

## Supabase

- **Proyecto:** `ykvgpcusdnzyzsqjmksr`
- **Cuenta:** ⏳
- **`service_role` key:** ⏳ (nunca en el navegador ni en código de cliente)

## GitHub

- **Cuenta:** `UnMecaNiko`
- **Llave SSH para git:** ⏳
- **Personal access token** (para que la web lea el repositorio si se vuelve
  privado — ver [pendientes.md](../../planning/pendientes.md)): ⏳
