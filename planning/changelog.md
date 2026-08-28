# Changelog

Bitácora cronológica de cambios en este repositorio y en la operación que
documenta. Formato: fecha + qué + por qué. Lo más reciente va arriba.

Los pendientes vivos están en [pendientes.md](pendientes.md); cuando uno se
resuelve, se borra de allí y aparece aquí.

## 2026-08

### 2026-08-28 — Hoja de vida general predeterminada

- **[carrera]** Creados
  [general-resume.md](career/cvs/general-resume.md) y su
  [PDF](career/cvs/general-resume.pdf) como versión estándar del perfil, sin
  apuntar a una vacante o cargo específico.
  - **Por qué así:** el resumen equilibra ingeniería de soluciones, IA aplicada,
    nube, automatización y mecatrónica; conserva la trayectoria cronológica,
    proyectos, capacidades, formación y logros verificables sin forzar una
    narrativa de ventas, robótica o una empresa concreta.
  - El documento está en inglés, como los demás CV de
    [planning/career/](career/), y queda como base para adaptar antes de cada
    postulación.

### 2026-08-23 — Atajos de GNU Readline (modo Emacs)

- **[conocimiento]** Creado
  [readline.md](../knowledge/tools/readline.md): cheatsheet de edición de
  línea (`Ctrl-a/e/k/w/n/p`, `Alt-d/f/b`).
  - **Por qué así:** Nicolas pidió anotarlos. Son los bindings de Readline
    que aplican en bash, SSH y WSL; no los de PowerShell. `knowledge/tools/`
    queda como carpeta para cheatsheets de herramientas de trabajo.

### 2026-08-22 — Mapa de consulta de los tutoriales ROS 2 Jazzy

- **[conocimiento]** Creado
  [ros2-jazzy-tutorials.md](../knowledge/robotics/ros2-jazzy-tutorials.md):
  índice de [Tutorials.html](https://docs.ros.org/en/jazzy/Tutorials.html)
  con tabla “cuando necesite X → este enlace”, el árbol oficial y las
  páginas hermanas (How-to, Concepts, migración desde ROS 1).
  - **Por qué así:** Nicolas va a aprender ROS 2 sobre Jazzy en WSL y
    pidió esa página como fuente de consulta. El archivo no copia los
    tutoriales: apunta a docs.ros.org para no divergir. Nav2 y MoveIt 2
    quedan marcados como fuera de esa página.

### 2026-08-14 — Investigación de la visa B-1/B-2 de Estados Unidos

- **[carrera]** Creado [us-visa.md](career/us-visa.md): categoría que aplica
  (B-1/B-2, única ruta realista hoy), por qué no hace falta un viaje comprado
  pero sí un propósito declarado, y el encuadre de la entrevista frente a la
  sección 214(b).
  - **Por qué así:** el hallazgo que cambia el plan no es jurídico sino de
    calendario — la espera de cita en Bogotá es de **9 a 13 meses** y una
    conferencia anual **no** califica para cita expedita. Eso descarta Actuate
    26, Humanoids 2026 y HRI 2027, y convierte AUTONOMOUS 2027 en el primer
    evento alcanzable. La conclusión operativa es iniciar el trámite **ya**,
    sin atarlo a un evento con fecha.
  - Confirmado que **buscar empleo no debe mencionarse** en el trámite: asistir
    a entrevistas con visa B es legal, pero declarar intención de reubicarse
    activa la presunción de inmigrante y produce negación.

### 2026-08-14 — Contacto directo con reclutamiento de FieldAI

- **[carrera]** Redactada la **versión corta de LinkedIn** del mensaje a FieldAI
  —tres frases: quién es, qué quiere y la única cosa que reclutamiento puede
  resolver rápido— y guardada en
  [fieldai-ai-solution-engineer.md](career/cvs/fieldai-ai-solution-engineer.md)
  junto al cover letter largo de Lever, que se mantiene sin cambios.
  - **Por qué así:** la pregunta de sponsorship va **al final** del mensaje. Si
    va primero es lo único que el reclutador recuerda; al final llega como un
    trámite práctico y no como un bloqueador de entrada. Se omite el enlace a
    theker.velasquezlopez.com porque en tres frases compite con la pregunta, y
    el destinatario es reclutamiento, no quien evalúa la arquitectura.
- **[carrera]** Registrado en
  [applications.yaml](career/applications.yaml) el contacto con **Brandon
  Nguyen (Talent Acquisition @ FieldAI)** por mensaje libre de LinkedIn el
  2026-08-14, con el PDF del CV adjunto. La respuesta sobre sponsorship queda
  como `⏳ PENDIENTE`.

### 2026-08-14 — El CV de FieldAI declara la motivación de robótica y el repositorio de contexto

- **[identidad]** Registrado en
  [capacidades.md](../knowledge/identity/capacidades.md) que Nicolas está
  **aprendiendo ROS 2 activamente** (confirmado el 2026-08-14), y aclarado que
  el ROS con el que ya trabajó en el TurtleBot es **ROS 1**.
  - **Por qué así:** la brecha #1 del perfil era justamente ROS 2. Ahora dice
    "en aprendizaje activo" en vez de solo "falta", pero **sigue marcada como
    brecha abierta** hasta que exista un artefacto público que la demuestre.
    Escribir "experiencia en ROS 2" hoy sería un dato inventado.
- **[carrera]** Añadida al CV de FieldAI la sección **«Why robotics, and why
  now»**: el cambio de industria es deliberado, la base mecatrónica y de ROS 1
  es real, ROS 2 está en curso y declarado como tal, y la mitad de IA es el
  trabajo diario.
- **[carrera]** Añadido al CV que **el propio CV es la salida de un sistema
  agéntico**: un repositorio de contexto construido con harness engineering y
  gestión de contexto, capaz de conocer la trayectoria, puntuar el ajuste con
  un rol desde varios puntos de vista y redactar hojas de vida personalizadas
  sin inventar credenciales.
  - **Por qué así:** para un rol de solutions / forward-deployed engineering es
    la evidencia más directa que existe — el documento que están leyendo *es* el
    artefacto. Se describe el sistema **sin enlazar el repositorio**: es público
    y expone el tracker completo de postulaciones, con las otras empresas, los
    bloqueadores y las notas de "no enviar". Decidir si se enlaza es una
    conversación aparte.
- **[carrera]** Regenerado el PDF (103 KB, sigue en 2 páginas).

### 2026-08-14 — Reorganización: nombres en inglés y carpeta de crecimiento profesional

- **[repo]** Renombradas las tres carpetas de la capa interna a inglés:
  `conocimiento/` → `knowledge/`, `codigo/` → `code/`, `planeacion/` →
  `planning/`, junto con sus subcarpetas (`identidad/` → `identity/`,
  `negocios/` → `business/`, `infraestructura/` → `infrastructure/`).
  - **Por qué así:** los nombres de carpeta ahora son **inglés en todo el
    repositorio**, mientras el **contenido** de la capa interna sigue en
    español. La regla 2 de [AGENTS.md](../AGENTS.md) se reescribió para
    separar explícitamente idioma de *nombres* e idioma de *contenido*, que
    antes estaban acoplados.
- **[repo]** Creada [planning/career/](career/) y movido allí todo el
  seguimiento de la búsqueda laboral, que estaba mezclado dentro de
  `conocimiento/identidad/`:
  `plan-transicion-robotica-ia.md` → `transition-plan.md`,
  `empresas-objetivo-robotica-ia.md/.yaml` → `target-companies.md/.yaml`,
  `primera-ola-postulaciones.md/.yaml` → `applications.md/.yaml`, y las hojas
  de vida a `career/cvs/`.
  - **Por qué así:** `knowledge/identity/` responde *quién es Nicolas* — datos
    de referencia estables. A qué vacante se aplica y en qué estado va es
    **seguimiento operativo que cambia cada semana**, y mezclarlo con la
    identidad hacía que la carpeta de identidad creciera con archivos que no
    son identidad. Ahora los CV se generan *desde* `knowledge/identity/` y
    viven en `planning/career/`.
- **[repo]** Creado [planning/career/README.md](career/README.md) como índice
  de la carpeta: estrategia, tracker de postulaciones, tabla de hojas de vida
  con su Markdown y su PDF, y el procedimiento para generar un PDF nuevo.
- **[carrera]** Exportado el **PDF del CV de FieldAI**
  ([fieldai-ai-solution-engineer.pdf](career/cvs/fieldai-ai-solution-engineer.pdf),
  84 KB, 2 páginas), listo para adjuntar en Lever. Se generó con Chrome
  headless desde un HTML intermedio porque el equipo no tiene `pandoc` ni
  `wkhtmltopdf`. El PDF contiene solo la hoja de vida: las notas internas de
  envío se quedan en el Markdown.
- **[repo]** Actualizadas todas las referencias cruzadas del repositorio
  (`AGENTS.md`, `pendientes.md`, `changelog.md`, documentos de identidad,
  infraestructura, web y el README de Theker) y verificadas con un chequeo de
  enlaces: los únicos enlaces rotos que quedan son el de `projects/izy/`, ya
  registrado como pendiente #6.

### 2026-08-14 — CV y correo para AI Solution Engineer en FieldAI

- **[carrera]** Creados CV y cover letter en
  [cv-fieldai-ai-solution-engineer.md](../planning/career/cvs/fieldai-ai-solution-engineer.md)
  para
  [AI Solution Engineer (Fixed-Term) en FieldAI](https://jobs.lever.co/field-ai/65561b5c-2348-4b88-9e73-ff9c6265dbf4)
  (Irvine, on-site). Nicolas decidió tantear el terreno ahora: el correo
  pregunta sponsorship con claridad y declara disponibilidad total para
  reubicarse en Irvine. FieldAI se añadió al inventario y al tracker de
  postulaciones.

### 2026-08-14 — Borrador de CV para Sales Representative en Robot.com

- **[carrera]** Creado
  [cv-robot-com-sales-representative.md](../planning/career/cvs/robot-com-sales-representative.md)
  a partir de la vacante de
  [Sales Representative en Robot.com](https://robot.na.teamtailor.com/jobs/391940-sales-representative)
  (San Francisco, híbrido), reusando solo datos verificados en
  `knowledge/identity/`. Quedan pendientes de resolver antes de enviar:
  confirmación de ubicación/sponsorship, uso real de HubSpot y el correo de
  contacto a usar.

### 2026-08-05 — Primera ola de postulaciones a startups de robótica

- **[carrera]** Verificadas vacantes activas en startups y fabricantes de
  robótica de Europa, Colombia/LATAM y Estados Unidos. Se priorizaron ocho
  procesos que pueden defenderse con la experiencia actual y cinco candidaturas
  condicionales; se descartaron roles que exigirían inventar profundidad en C++,
  ROS 2, alemán o despliegue industrial.
- **[carrera]** Creados
  [primera-ola-postulaciones.md](../planning/career/applications.md)
  y
  [primera-ola-postulaciones.yaml](../planning/career/applications.yaml)
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
  [empresas-robotica-ia.yaml](../planning/career/target-companies.yaml)
  como inventario procesable. La primera ola queda formada por Universal
  Robots/Teradyne, NEURA, Agile Robots, Idealworks, ABB, Linde/KION y BYD Europe.
  Estados Unidos se mantiene como pista condicionada a patrocinio confirmado.
- **[carrera]** Creado
  [plan-transicion-robotica-ia.md](../planning/career/transition-plan.md)
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
  [trayectoria.md](../knowledge/identity/trayectoria.md),
  [capacidades.md](../knowledge/identity/capacidades.md),
  [formacion.md](../knowledge/identity/formacion.md),
  [logros.md](../knowledge/identity/logros.md) y
  [publicaciones-y-charlas.md](../knowledge/identity/publicaciones-y-charlas.md),
  con URLs, fecha de consulta y pendientes explícitos para todo dato que no pudo
  validarse.
- **[carrera]** Definido el posicionamiento de entrada a robótica con IA:
  **Robotics Solutions, Deployment, Integration o Systems Engineer**. La
  experiencia en preventa, nube, POCs y mecatrónica tiene mejor ajuste inmediato
  en esos roles que en puestos senior de percepción, autonomía o aprendizaje
  por refuerzo.
- **[carrera]** Creado
  [empresas-objetivo-robotica-ia.md](../planning/career/target-companies.md)
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
  hacia mayo de 2027. Añadidos a [formacion.md](../knowledge/identity/formacion.md)
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
  [empresas-objetivo-robotica-ia.md](../planning/career/target-companies.md)
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
  - **Capa interna** (`knowledge/`, `code/`, `planning/`): en español,
    nueva, no la consume la web.
- **[repo]** Regla explícita: **referenciar repositorios de GitHub, nunca carpetas
  locales**. Las rutas del equipo de trabajo se rompen al cambiar de máquina y no
  le sirven a nadie más.

### 2026-07-30 — Contexto de la infraestructura

- **[infra]** Documentado el **VPS de VELO inc** en
  [knowledge/infrastructure/vps-velo.md](../knowledge/infrastructure/vps-velo.md):
  Hostinger, `2.24.106.64`, Ubuntu 24.04.4, 1 vCPU / 3,8 GB, los tres stacks de
  Docker (`/opt/proxy`, `/opt/web-velo`, `/opt/n8n`), las redes `edge` y
  `n8n_interna`, los volúmenes y su criticidad, `ufw` + `fail2ban`, el Traefik
  dormido de la plantilla de Hostinger, y el procedimiento de respaldo. Todo
  **verificado por SSH**, no de memoria.
- **[infra]** Documentados los **dominios y su DNS** en
  [dominios-y-dns.md](../knowledge/infrastructure/dominios-y-dns.md):
  `unmecaniko.com` con DNS en Huawei Cloud apuntando a Vercel, y
  `velasquezlopez.com` con DNS en Hostinger apuntando al VPS, con sus cuatro
  registros activos. Verificado contra los servidores autoritativos.
- **[infra]** Documentado el **proxy Caddy** en
  [proxy-caddy.md](../knowledge/infrastructure/proxy-caddy.md): las dos formas
  de publicar un sitio (archivos estáticos vs. proxy inverso a un contenedor) y el
  procedimiento completo para publicar un dominio nuevo — validar y probar contra
  contenedores desechables **antes** de tocar producción, y usar
  `docker compose up -d` en vez de `restart` porque `restart` no vuelve a leer el
  `.env`.
- **[infra]** Creado el inventario de **accesos por referencia** en
  [accesos.md](../knowledge/infrastructure/accesos.md): qué credencial existe,
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
  [code/theker-sistema-operativo-ia/](../code/theker-sistema-operativo-ia/), y
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
  [knowledge/web/unmecaniko-com.md](../knowledge/web/unmecaniko-com.md) cómo
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
  [knowledge/identity/perfil-profesional.md](../knowledge/identity/perfil-profesional.md)
  como punto de entrada a la trayectoria, con el mapa de los seis documentos que
  faltan (`trayectoria.md`, `capacidades.md`, `formacion.md`, `logros.md`,
  `publicaciones-y-charlas.md`, `tarifas-y-servicios.md`) y el pendiente grande de
  la búsqueda completa en internet.
- **[repo]** Creada
  [knowledge/business/magia-roja-cnc.md](../knowledge/business/magia-roja-cnc.md)
  como ficha de negocio de la CNC, **referenciando** el repositorio magiaRojaV3
  para todo el detalle técnico en vez de duplicarlo, y dejando explícito que su
  carpeta `presupuesto/` es confidencial y no se cita desde aquí.
