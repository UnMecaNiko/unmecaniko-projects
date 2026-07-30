# Changelog

Bitácora cronológica de cambios en este repositorio y en la operación que
documenta. Formato: fecha + qué + por qué. Lo más reciente va arriba.

Los pendientes vivos están en [pendientes.md](pendientes.md); cuando uno se
resuelve, se borra de allí y aparece aquí.

## 2026-07

### 2026-07-30 — El repositorio pasa a ser el principal

- **[repo]** Este repositorio se establece como el **repositorio principal** de
  Nicolas Velasquez Lopez: marca personal, trayectoria, proyectos e
  infraestructura. Creado [AGENTS.md](../AGENTS.md) como **contexto principal** y
  [CLAUDE.md](../CLAUDE.md) como puntero a él, siguiendo el mismo patrón que
  [magiaRojaV3](https://github.com/UnMecaNiko/magiaRojaV3).
- **[repo]** Definida una **arquitectura de dos capas**, porque el repositorio
  pasa a tener dos audiencias con reglas incompatibles:
  - **Capa pública** (`projects/`, `context/`, `README.md`): en inglés, la lee
    unmecaniko.com en vivo. **No se tocó nada de ella** — un cambio ahí sale a
    producción en menos de 5 minutos.
  - **Capa interna** (`conocimiento/`, `codigo/`, `planeacion/`): en español,
    nueva, no la consume la web.
- **[repo]** Regla explícita: **referenciar repositorios de GitHub, nunca carpetas
  locales**. Las rutas del equipo de trabajo se rompen al cambiar de máquina y no
  le sirven a nadie más.

### 2026-07-30 — Contexto de la infraestructura

- **[infra]** Documentado el **VPS de VELO inc** en
  [conocimiento/infraestructura/vps-velo.md](../conocimiento/infraestructura/vps-velo.md):
  Hostinger, `2.24.106.64`, Ubuntu 24.04.4, 1 vCPU / 3,8 GB, los tres stacks de
  Docker (`/opt/proxy`, `/opt/web-velo`, `/opt/n8n`), las redes `edge` y
  `n8n_interna`, los volúmenes y su criticidad, `ufw` + `fail2ban`, el Traefik
  dormido de la plantilla de Hostinger, y el procedimiento de respaldo. Todo
  **verificado por SSH**, no de memoria.
- **[infra]** Documentados los **dominios y su DNS** en
  [dominios-y-dns.md](../conocimiento/infraestructura/dominios-y-dns.md):
  `unmecaniko.com` con DNS en Huawei Cloud apuntando a Vercel, y
  `velasquezlopez.com` con DNS en Hostinger apuntando al VPS, con sus cuatro
  registros activos. Verificado contra los servidores autoritativos.
- **[infra]** Documentado el **proxy Caddy** en
  [proxy-caddy.md](../conocimiento/infraestructura/proxy-caddy.md): las dos formas
  de publicar un sitio (archivos estáticos vs. proxy inverso a un contenedor) y el
  procedimiento completo para publicar un dominio nuevo — validar y probar contra
  contenedores desechables **antes** de tocar producción, y usar
  `docker compose up -d` en vez de `restart` porque `restart` no vuelve a leer el
  `.env`.
- **[infra]** Creado el inventario de **accesos por referencia** en
  [accesos.md](../conocimiento/infraestructura/accesos.md): qué credencial existe,
  para qué sirve y dónde vive, **sin su contenido**. Los valores reales van en
  `accesos.local.md`, ignorado por git, con plantilla versionada.
  - **Por qué así:** el repositorio es público y `context/main.py` expone todos sus
    `.md` por MCP. Una llave privada aquí queda publicada y servida a cualquier
    agente. Se documentó la llave **pública** de SSH y la ruta local de la privada,
    que es lo que de verdad hace falta para reconstruir el acceso.
- **[infra]** La configuración de despliegue **no se duplicó**: sigue viviendo en
  [magiaRojaV3/infra/](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/infra) y
  desde aquí se referencia. Dos copias de un `Caddyfile` divergen, y la del
  servidor gana siempre. Queda como pendiente decidir dónde debe vivir.

### 2026-07-30 — La presentación de Theker entra al repositorio

- **[codigo]** Movido el código de la presentación **«Sistema operativo de IA»** a
  [codigo/theker-sistema-operativo-ia/](../codigo/theker-sistema-operativo-ia/), y
  borrado del repositorio de trabajo de Truora
  (`presales-customers-context`, Bitbucket), donde nunca estuvo commiteado.
  Actualizados el `AGENTS.md`, el `README.md` y el `CHANGELOG.md` de ese
  repositorio para que apunten a la URL pública en vez de a la carpeta borrada.
- **[codigo]** Verificado que **compila desde su nueva ubicación** (`npm ci` +
  `npm run build`, Next.js 16.2.12, 3 rutas estáticas) antes de borrar el
  original. Se excluyeron `node_modules/`, `.next/` y `out/`.
- **[codigo]** El contenido de la página **sigue siendo anonimizado**: no menciona
  clientes, personas, cuentas, IDs ni proveedores. Esa condición se mantiene como
  regla, ahora desde este repositorio.

### 2026-07-30 — Publicada la presentación en theker.velasquezlopez.com

- **[infra]** ✅ **En línea <https://theker.velasquezlopez.com>** con certificado
  de Let's Encrypt (válido hasta el 2026-10-28).
- **[infra]** Resuelto como **sitio estático**, no como un cuarto contenedor: la
  página no tiene componentes de cliente, ni datos en tiempo de ejecución, ni
  variables de entorno, así que se configuró con `output: "export"` de Next y se
  subieron los 26 archivos (1,1 MB) a `/opt/proxy/sitios/theker`, que Caddy sirve
  directamente. Un proceso Node menos en un VPS de 1 vCPU.
- **[infra]** Verificados HTTP 200, título, redirección HTTP→HTTPS (308), 404
  propio, HSTS, `nosniff`, `Referrer-Policy`, `Permissions-Policy` y HTTP/3. La
  landing de la CNC, `www` y n8n siguieron respondiendo igual.

### 2026-07-30 — Contexto de la web pública

- **[web]** Documentado en
  [conocimiento/web/unmecaniko-com.md](../conocimiento/web/unmecaniko-com.md) cómo
  funciona unmecaniko.com, leyendo el código de
  [professionalWebsite](https://github.com/UnMecaNiko/professionalWebsite): Next.js
  en Vercel (proyecto `v0-web-site-2-0`, generado con v0.app), que lee `projects/`
  de **este** repositorio por la API de GitHub **sin autenticar**, con
  `revalidate: 300`, y parsea el front-matter con `gray-matter`.
- **[web]** Consecuencia importante encontrada al leer ese código: **volver este
  repositorio privado rompe la web**, porque la API de GitHub sin autenticar no
  puede leer repositorios privados. La solución (un token de lectura en Vercel) y
  la alternativa (separar los repositorios) quedaron en
  [pendientes.md](pendientes.md#1-volver-el-repositorio-privado-sin-romper-la-web-pública).
- **[web]** Detectado un riesgo de **límite de peticiones**: sin token, la API de
  GitHub permite 60 por hora y por IP, y cada revalidación gasta 1 + 1 por
  proyecto (~96/hora con 7 proyectos). Un token lo sube a 5.000/hora y resuelve
  las dos cosas de una vez.
- **[web]** Detectado que la web es **bilingüe solo en la interfaz**
  (`contexts/language-context.tsx`, traducciones escritas a mano): el contenido de
  los `index.md` se muestra tal cual. Eso confirma la regla de mantener la capa
  pública en inglés.
- **[web]** Detectado que el `README.md` enlaza a `projects/izy/index.md`, **que no
  existe**, y que su tabla de proyectos está desactualizada. Registrado como
  pendiente; no se tocó el `README.md` para no arriesgar la web en el mismo
  trabajo.

### 2026-07-30 — Planeación e identidad

- **[repo]** Creados [changelog.md](changelog.md) y [pendientes.md](pendientes.md)
  como bitácora y plan del repositorio.
- **[repo]** Creado
  [conocimiento/identidad/perfil-profesional.md](../conocimiento/identidad/perfil-profesional.md)
  como punto de entrada a la trayectoria, con el mapa de los seis documentos que
  faltan (`trayectoria.md`, `capacidades.md`, `formacion.md`, `logros.md`,
  `publicaciones-y-charlas.md`, `tarifas-y-servicios.md`) y el pendiente grande de
  la búsqueda completa en internet.
- **[repo]** Creada
  [conocimiento/negocios/magia-roja-cnc.md](../conocimiento/negocios/magia-roja-cnc.md)
  como ficha de negocio de la CNC, **referenciando** el repositorio magiaRojaV3
  para todo el detalle técnico en vez de duplicarlo, y dejando explícito que su
  carpeta `presupuesto/` es confidencial y no se cita desde aquí.
