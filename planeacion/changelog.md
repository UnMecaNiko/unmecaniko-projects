# Changelog

Bitácora cronológica de cambios en este repositorio y en la operación que
documenta. Formato: fecha + qué + por qué. Lo más reciente va arriba.

Los pendientes vivos están en [pendientes.md](pendientes.md); cuando uno se
resuelve, se borra de allí y aparece aquí.

## 2026-08

### 2026-08-14 — Borrador de CV para Sales Representative en Robot.com

- **[carrera]** Creado
  [cv-robot-com-sales-representative.md](../conocimiento/identidad/cv-robot-com-sales-representative.md)
  a partir de la vacante de
  [Sales Representative en Robot.com](https://robot.na.teamtailor.com/jobs/391940-sales-representative)
  (San Francisco, híbrido), reusando solo datos verificados en
  `conocimiento/identidad/`. Quedan pendientes de resolver antes de enviar:
  confirmación de ubicación/sponsorship, uso real de HubSpot y el correo de
  contacto a usar.

### 2026-08-05 — Primera ola de postulaciones a startups de robótica

- **[carrera]** Verificadas vacantes activas en startups y fabricantes de
  robótica de Europa, Colombia/LATAM y Estados Unidos. Se priorizaron ocho
  procesos que pueden defenderse con la experiencia actual y cinco candidaturas
  condicionales; se descartaron roles que exigirían inventar profundidad en C++,
  ROS 2, alemán o despliegue industrial.
- **[carrera]** Creados
  [primera-ola-postulaciones.md](../conocimiento/identidad/primera-ola-postulaciones.md)
  y
  [primera-ola-postulaciones.yaml](../conocimiento/identidad/primera-ola-postulaciones.yaml)
  con URLs oficiales, puntuación de ajuste, bloqueadores, orden de aplicación,
  preguntas migratorias y variantes de CV.
- **[carrera]** La primera línea queda formada por Trener Applications,
  THEKER GTM, NEURA Pre-Sales, Simbe Enterprise Solutions, Nomagic TPM, Robotic
  Crew Delivery, Robot.com Service Desk y PAL Project Manager. Sponsorship,
  ubicación contractual y seniority se verificarán antes de invertir en pruebas
  extensas.

### 2026-08-05 — `main` pasa a ser la rama de trabajo por defecto

- **[git]** Unificado en `main` el trabajo del repositorio principal. Las ramas
  dejan de crearse por el tamaño de una tarea: se reservan para contextos que
  necesiten aislamiento real, como experimentos descartables, cambios riesgosos,
  trabajo paralelo prolongado o colaboración externa.
- **[git]** Actualizado [AGENTS.md](../AGENTS.md) para que los agentes continúen
  trabajando normalmente sobre `main` y no fragmenten el contexto en ramas
  rutinarias.

### 2026-08-01 — Plan integral para entrar a robótica + IA

- **[carrera]** Investigadas las 32 empresas seleccionadas por Nicolas, con
  portales oficiales, vacantes compatibles, sedes, requisitos, ajuste actual y
  a 18 meses, barreras lingüísticas y evidencia —o ausencia— de patrocinio
  migratorio.
- **[carrera]** Creado
  [empresas-robotica-ia.yaml](../conocimiento/identidad/empresas-robotica-ia.yaml)
  como inventario procesable. La primera ola queda formada por Universal
  Robots/Teradyne, NEURA, Agile Robots, Idealworks, ABB, Linde/KION y BYD Europe.
  Estados Unidos se mantiene como pista condicionada a patrocinio confirmado.
- **[carrera]** Creado
  [plan-transicion-robotica-ia.md](../conocimiento/identidad/plan-transicion-robotica-ia.md)
  con horizonte de 18 meses: roles puente, estrategia geográfica y migratoria,
  tres CV, mejora de la web, proyecto ROS 2 + IA + nube, integración industrial,
  eventos, aplicaciones por olas, preparación de entrevistas y métricas.
- **[carrera]** Registrada la oportunidad urgente de **LARS/LARC 2026 en Bogotá**:
  decidir antes del cierre del 2026-08-05 si el proyecto TurtleBot tiene una
  contribución defendible para póster, caso aplicado o tutorial. No se publicará
  novedad o evidencia que no exista.
- **[carrera]** Creado un canvas interactivo complementario para filtrar las
  empresas por prioridad y categoría, comparar ajuste actual/futuro y llevar
  control de los primeros hitos.

### 2026-08-01 — Primera investigación de identidad y objetivo robótica + IA

- **[identidad]** Investigado el LinkedIn público de Nicolas, su portafolio,
  publicaciones, proyectos y repositorios destacados. Creados
  [trayectoria.md](../conocimiento/identidad/trayectoria.md),
  [capacidades.md](../conocimiento/identidad/capacidades.md),
  [formacion.md](../conocimiento/identidad/formacion.md),
  [logros.md](../conocimiento/identidad/logros.md) y
  [publicaciones-y-charlas.md](../conocimiento/identidad/publicaciones-y-charlas.md),
  con URLs, fecha de consulta y pendientes explícitos para todo dato que no pudo
  validarse.
- **[carrera]** Definido el posicionamiento de entrada a robótica con IA:
  **Robotics Solutions, Deployment, Integration o Systems Engineer**. La
  experiencia en preventa, nube, POCs y mecatrónica tiene mejor ajuste inmediato
  en esos roles que en puestos senior de percepción, autonomía o aprendizaje
  por refuerzo.
- **[carrera]** Creado
  [empresas-objetivo-robotica-ia.md](../conocimiento/identidad/empresas-objetivo-robotica-ia.md)
  con empresas de Colombia, LATAM remota y reubicación internacional, vacantes
  de referencia, ajuste real, bloqueadores y un plan de 30/90 días.
- **[calidad]** Detectadas dos inconsistencias del perfil público: LinkedIn
  respalda inglés C1, no el C2 que decía el repositorio; y no apareció evidencia
  del supuesto primer lugar en “Huawei Solutions Architect Competition”. Se
  corrigió [context/about-unmecaniko.md](../context/about-unmecaniko.md) para no
  publicar esas afirmaciones como hechos.
- **[planeación]** El pendiente de investigación de identidad se redujo a
  fuentes y soportes concretos: YouTube, inventario completo de GitHub,
  credenciales Huawei, formaciones, reconocimientos y datos que debe confirmar
  Nicolas.
- **[identidad]** Incorporadas dos corroboraciones de terceros:
  [Radio Bolivariana/El Hilo Noticias](https://www.elhilonoticias.com/2025/07/17/nicolas-velasquez-inteligencia-artificial-y-mecatronica/)
  para la etapa en Huawei, mecatrónica y docencia, y la
  [Asociación Astronáutica Colombiana](https://www.linkedin.com/posts/asociaci%C3%B3n-astron%C3%A1utica-colombiana_spacecallproject-activity-7341257999606259712-zDrK)
  para el rol de instructor en Space Call.
- **[calidad]** Aclarado que `dify-unmecaniko` y `aid-sdlc` figuran como forks y
  no deben presentarse como autoría original. El inventario pendiente de GitHub
  se actualizó a 47 repositorios y ahora exige separar originales, contribuciones,
  forks y cursos.
- **[proyectos]** Corregidos dos datos públicos inconsistentes: Space Call
  involucró siete países, no seis, y CNC Magia Roja v2 pasó a estado terminado
  porque fue vendida en 2026; la fecha exacta sigue pendiente.

### 2026-08-01 — Segunda pasada: material local, Europa y el rol FDE

Complemento de la investigación anterior, hecho sobre el **material que Nicolas
ya tiene en su equipo** —export de LinkedIn de junio de 2026 y tres hojas de vida
de abril, mayo y junio de 2026— porque LinkedIn devuelve HTTP 999 a cualquier
herramienta automática y el perfil no se puede leer en vivo.

- **[identidad]** Precisadas las fechas de las certificaciones Huawei (HCIP marzo
  de 2025, HCIA AI mayo de 2024, HCIA Cloud Service abril de 2024) y calculada su
  **vigencia**: la HCIA AI, única credencial formal de IA del perfil, vencería
  hacia mayo de 2027. Añadidos a [formacion.md](../conocimiento/identidad/formacion.md)
  los cursos de **MCP** y **Professional Scrum**, que sí sirven al
  posicionamiento y no estaban registrados.
- **[carrera]** Resueltos dos pendientes de la lista de empresas objetivo: la
  hoja de vida de junio declara por escrito **«Open to relocation (Barcelona) or
  fully remote»**, y los idiomas de trabajo quedan fijados. Barcelona pasa a ser
  mercado primario, no plan B.
- **[carrera]** Documentado que **la búsqueda ya empezó**: existen hojas de vida
  dirigidas a **THEKER Robotics** (Barcelona) y **NEURA Robotics** (Alemania), y
  la presentación [theker.velasquezlopez.com](https://theker.velasquezlopez.com)
  parece ser una pieza de la primera postulación. Falta confirmar el estado de
  ambos procesos.
- **[carrera]** Añadidas a
  [empresas-objetivo-robotica-ia.md](../conocimiento/identidad/empresas-objetivo-robotica-ia.md)
  dos empresas ausentes y de ajuste alto: **NEURA Robotics** —Serie C de hasta
  1.400 M USD en junio de 2026, con vacante de Senior Solutions Engineer— y
  **PAL Robotics**, en el 22@ de Barcelona. Añadido el contexto de financiación
  del sector (Skild AI, Figure, Apptronik, Physical Intelligence, 1X) y el papel
  transversal de NVIDIA Isaac.
- **[carrera]** Identificado el título que conviene cazar: **Forward Deployed
  Engineer**. Es la descripción literal del trabajo actual en Truora aplicada a
  IA, y muchas vacantes de robótica lo publican con ese nombre sin usar la
  palabra «robotics». AWS destinó 1.000 M USD a crear esa organización en junio
  de 2026 y Microsoft lanzó Frontier con el mismo modelo.
- **[calidad]** Detectado que el **perfil de GitHub está desactualizado**: la
  biografía y el campo *company* siguen diciendo «Huawei Cloud», un empleo que
  terminó en julio de 2025, y el enlace apunta a LinkedIn en vez del portafolio.
  Es lo primero que ve un reclutador. Arreglos concretos anotados en el mismo
  documento.

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
