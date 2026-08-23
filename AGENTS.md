# AGENTS.md — Contexto principal del repositorio

> **Este es el archivo de contexto principal.** Todo agente (Claude Code, Copilot, chatbot, generador de contenido) y todo humano que trabaje aquí debe leer este archivo primero. `CLAUDE.md` y `.github/copilot-instructions.md` solo apuntan a él.

## Qué es este repositorio

El **repositorio principal de Nicolas Velasquez Lopez (`unmecaniko`)**. Es la base de conocimiento central sobre su marca personal, su trayectoria profesional, sus proyectos personales y de negocio, y la infraestructura que los sostiene.

El objetivo de fondo: que este repositorio contenga **todo el conocimiento sobre Nicolas** — experiencia, capacidades, proyectos, historia, operación — con suficiente estructura y detalle para que un agente pueda, a partir de él:

- generar hojas de vida y perfiles adaptados a una vacante concreta,
- preparar entrevistas,
- armar cotizaciones y propuestas,
- arrancar proyectos nuevos con contexto real,
- alimentar la web pública y los chatbots.

> ⏳ PENDIENTE: hoy el repositorio está lejos de esa meta. La capa de identidad profesional es mínima y falta consolidar la trayectoria completa. Ver [planning/pendientes.md](planning/pendientes.md).

## Arquitectura de dos capas

Este repositorio tiene **dos capas con reglas distintas**. Confundirlas rompe la web pública o filtra información interna.

### Capa pública — la consume unmecaniko.com

| Carpeta | Qué es |
|---|---|
| `projects/` | Una carpeta por proyecto con un `index.md` canónico. **Esto es lo que renderiza la web.** |
| `context/` | Metadocumentación del portafolio: plantilla, taxonomía, perfil público, servidor MCP. |
| `README.md` | Índice público y carta de presentación. |

- **Idioma: inglés.** Es la regla histórica del portafolio y su audiencia es internacional.
- **Se toca con cuidado.** La web lee `projects/` en vivo por la API de GitHub: un cambio de estructura o de front-matter se ve en producción en menos de 5 minutos. Ver [knowledge/web/unmecaniko-com.md](knowledge/web/unmecaniko-com.md).
- Los `index.md` se crean copiando [context/project-template.md](context/project-template.md) y respetando la taxonomía fija.

### Capa interna — el conocimiento operativo

| Carpeta | Qué es |
|---|---|
| `knowledge/` | Fuente de la verdad interna sobre quién es Nicolas: identidad profesional, negocios, infraestructura, web, robótica (mapa ROS 2). Datos de referencia, no seguimiento operativo. |
| `code/` | Código que vive en este repositorio (sitios y aplicaciones desplegables). |
| `planning/` | Bitácora del repositorio ([changelog.md](planning/changelog.md), [pendientes.md](planning/pendientes.md)) y, en [career/](planning/career/), el seguimiento activo de postulaciones, CVs y estrategia de aplicación. |

- **Idioma del contenido: español.** Es la lengua de trabajo de Nicolas y de los agentes que operan con él.
- **Idioma de los nombres de carpeta y archivo: inglés**, en todo el repositorio (incluida esta capa interna). Es una convención de nomenclatura, no cambia el idioma del contenido.
- No la consume la web. Es para trabajar.

## Reglas para agentes

### 1. ⚠️ Este repositorio es público — cero secretos

`github.com/UnMecaNiko/unmecaniko-projects` tiene `visibility: public`, y además [context/main.py](context/main.py) expone por MCP **todos** los `.md` del repositorio. Cualquier cosa escrita aquí es, en la práctica, publicada.

- **Nunca** commitear llaves privadas, contraseñas, tokens, `.env` con valores reales, ni claves de cifrado.
- Los accesos se documentan **por referencia**: qué llave se usa, dónde vive en el equipo, cómo se configura. Nunca su contenido. El patrón está en [knowledge/infrastructure/accesos.md](knowledge/infrastructure/accesos.md).
- Los valores reales van en `knowledge/infrastructure/accesos.local.md`, **ignorado por git**. Su plantilla versionada es [accesos.local.example.md](knowledge/infrastructure/accesos.local.example.md).
- Si un secreto se cuela en un commit: rotarlo, no basta con borrarlo (queda en la historia y los bots de GitHub lo escanean en minutos).

> ⏳ PENDIENTE (importante): el repositorio debe volverse **privado**, dejando pública solo la información que la web necesita. Hoy no se puede hacer sin romper unmecaniko.com — el motivo técnico exacto y la solución están en [pendientes.md](planning/pendientes.md).

### 2. Idioma según la capa

- Capa pública (`projects/`, `context/`, `README.md`) → **inglés**, contenido y nombres.
- Capa interna (`knowledge/`, `code/`, `planning/`, este archivo) → **contenido en español**;
  **nombres de carpeta y archivo en inglés**, igual que en la capa pública.
- No traducir el contenido de la capa pública al español ni el de la interna al inglés "por consistencia": la división de idioma del *contenido* es deliberada. Lo único que se unificó es la convención de *nombres*.

### 3. Referenciar repositorios de GitHub, nunca carpetas locales

- Prohibido escribir rutas del equipo de trabajo (`C:\Users\...`, `~/Documents/...`) como forma de localizar información. Se rompen en cuanto cambia de máquina y no sirven a nadie más.
- Todo conocimiento que vive en otro repositorio se referencia por su **URL de GitHub**, con la ruta interna del archivo cuando aplique. Ver la tabla de [repositorios relacionados](#repositorios-relacionados).
- Excepción legítima: documentar *dónde vive un archivo que no puede estar en el repositorio* (una llave SSH, un `.env`). Ahí la ruta local es el dato útil.

### 4. Markdown para narrativa, YAML para datos

- Lo que un humano **lee** (historia, decisiones, explicaciones) → Markdown.
- Lo que una máquina **procesa** (front-matter, inventarios, parámetros) → YAML.
- Los `index.md` de `projects/` llevan front-matter YAML obligatorio: lo consume la web.

### 5. Datos pendientes, nunca inventados

- Lo que no se sabe se marca explícito: `> ⏳ PENDIENTE: <qué falta y cómo obtenerlo>`.
- Nunca inventar fechas, cifras, certificaciones, métricas ni especificaciones. Un pendiente marcado vale más que un dato inventado — y en un repositorio del que saldrán hojas de vida y cotizaciones, un dato inventado es un problema real.
- Ante cualquier dato técnico dudoso: **buscar en internet, validar y citar la fuente** (URL + fecha de consulta).

### 6. Archivos pesados fuera del repositorio

- Imágenes, video y PDF → almacenamiento externo. El portafolio ya usa Supabase Storage (`https://ykvgpcusdnzyzsqjmksr.supabase.co/storage/v1/object/public/unmecaniko-projects-media/<slug>/`) y YouTube para video.
- En el repositorio solo la **URL + descripción**. Media local por debajo de 1 MB, y solo si no hay alternativa.

### 7. Mantener la planeación viva

- Al terminar trabajo: anotarlo en [planning/changelog.md](planning/changelog.md) (fecha + qué + por qué) y actualizar [planning/pendientes.md](planning/pendientes.md).
- Un pendiente que se resuelve se borra de `pendientes.md` y queda como entrada del changelog. No se duplica.

### 8. Flujo de git

- **Los commits se hacen de forma automática, sin pedir autorización** — tanto sobre `main` como dentro de una rama.
- **`git pull` al iniciar cada sesión** y antes de empezar trabajo nuevo, para evitar divergencia.
- **`git push` a `origin` automático tras cada commit**, igual que el commit.
- **`main` es la rama de trabajo por defecto**, también para trabajos grandes. Crear una rama `tipo/proposito` solo cuando el contexto deba quedar realmente aislado: experimento descartable, cambio riesgoso, trabajo paralelo prolongado o colaboración/revisión externa. No crear ramas rutinarias por tamaño.
- Si una sesión arranca en una rama autogenerada (`claude/...`) sin una razón concreta para aislarla, integrar el trabajo en `main` y continuar allí.
- **Mergear a `main` requiere autorización explícita.** Una vez autorizado: fast-forward directo, **sin pull request** (trabaja una sola persona), y borrar la rama del remoto.
- Identidad de commits: `Nicolas Velasquez Lopez <unmecaniko@gmail.com>`.

### 9. Infraestructura: documentar lo que existe, no lo que se planeó

- Los documentos de [knowledge/infrastructure/](knowledge/infrastructure/) describen el **estado real** del servidor, verificado por SSH. Si se cambia algo en el VPS, se actualiza el documento en el mismo trabajo.
- Los archivos de despliegue (compose, Caddyfile) **viven en el repositorio de magiaRojaV3**, en `infra/`. Aquí se documenta y se referencia; no se duplica la configuración, porque dos copias divergen.

## Mapa del repositorio

```
AGENTS.md                        ← estás aquí (contexto principal)
CLAUDE.md                        ← referencia a este archivo
README.md                        ── CAPA PÚBLICA (inglés) ──
projects/                        una carpeta por proyecto, index.md canónico
│                                ⚠️ lo lee unmecaniko.com en vivo
context/                         plantilla, taxonomía, perfil público, servidor MCP
├── project-template.md
├── repository-context.md
├── about-unmecaniko.md
└── main.py                      servidor MCP que expone los .md
.github/copilot-instructions.md  instrucciones para Copilot

knowledge/                       ── CAPA INTERNA (contenido en español, nombres en inglés) ──
├── identity/                    perfil profesional, trayectoria, capacidades
├── business/                    magia-roja-cnc.md (CNC + VELO inc)
├── infrastructure/              vps-velo.md, dominios-y-dns.md, proxy-caddy.md, accesos.md
├── robotics/                    mapa de tutoriales ROS 2 Jazzy (consulta, no progreso)
└── web/                         unmecaniko-com.md (cómo funciona la web pública)
code/                            código desplegable que vive aquí
└── theker-sistema-operativo-ia/ presentación Next.js → theker.velasquezlopez.com
planning/                        changelog.md, pendientes.md
└── career/                      seguimiento de postulaciones: applications.md/.yaml,
                                  target-companies.md/.yaml, transition-plan.md, cvs/
```

## Repositorios relacionados

Todo lo que no vive aquí se consulta en GitHub, nunca en carpetas locales.

| Repositorio | Qué contiene | Relación con este repo |
|---|---|---|
| [magiaRojaV3](https://github.com/UnMecaNiko/magiaRojaV3) | Base de conocimiento completa de la CNC Magia Roja v3 **y la infraestructura del VPS** (`infra/`) | La ficha de negocio está en [knowledge/business/magia-roja-cnc.md](knowledge/business/magia-roja-cnc.md); el detalle técnico de la máquina se consulta allá |
| [professionalWebsite](https://github.com/UnMecaNiko/professionalWebsite) | Código de **unmecaniko.com** (Next.js en Vercel) | Consume `projects/` de este repositorio por la API de GitHub. Ver [knowledge/web/unmecaniko-com.md](knowledge/web/unmecaniko-com.md) |
| [redmagic-site](https://github.com/UnMecaNiko/redmagic-site) | Sitio web anterior de la CNC | Histórico |
| [AI-Knowledge-Base](https://github.com/UnMecaNiko/AI-Knowledge-Base) | Notas personales sobre IA | Insumo para la capa de identidad |
| [dify-unmecaniko](https://github.com/UnMecaNiko/dify-unmecaniko) | Plataforma de flujos agénticos | Proyecto |
| [izy-reservas](https://github.com/UnMecaNiko/izy-reservas) | IZY — reservas por WhatsApp | Proyecto, ficha en `projects/izy/` |
| [DomiChat_AI_Hackaton2025](https://github.com/UnMecaNiko/DomiChat_AI_Hackaton2025) | DomiChat | Proyecto, ficha en `projects/domichat/` |
| [aid-sdlc](https://github.com/UnMecaNiko/aid-sdlc) | AI-Driven Software Development LifeCycle | Metodología propia |

> ⏳ PENDIENTE: inventariar los ~30 repositorios restantes de la cuenta y decidir cuáles son portafolio, cuáles son histórico y cuáles se archivan.

## Flujos de trabajo frecuentes

| Quiero… | Entonces… |
|---|---|
| Publicar un proyecto en la web | Copiar `context/project-template.md` → `projects/<slug>/index.md`, en **inglés**, con front-matter completo, y actualizar la tabla del `README.md` |
| Entender cómo la web consume esto | [knowledge/web/unmecaniko-com.md](knowledge/web/unmecaniko-com.md) |
| Entrar al servidor o desplegar algo | [knowledge/infrastructure/vps-velo.md](knowledge/infrastructure/vps-velo.md) |
| Publicar un sitio nuevo en un dominio | [knowledge/infrastructure/proxy-caddy.md](knowledge/infrastructure/proxy-caddy.md) |
| Saber qué dominios hay y dónde apuntan | [knowledge/infrastructure/dominios-y-dns.md](knowledge/infrastructure/dominios-y-dns.md) |
| Consultar el detalle técnico de la CNC | Repositorio [magiaRojaV3](https://github.com/UnMecaNiko/magiaRojaV3), empezando por su `AGENTS.md` |
| Actualizar la presentación de Theker | [code/theker-sistema-operativo-ia/README.md](code/theker-sistema-operativo-ia/README.md) |
| Consultar un tema de ROS 2 Jazzy | [knowledge/robotics/ros2-jazzy-tutorials.md](knowledge/robotics/ros2-jazzy-tutorials.md) — abrir el enlace oficial, no reescribir el tutorial |
| Ver el estado de postulaciones activas o generar un CV nuevo | [planning/career/](planning/career/) |
| Saber qué falta por hacer | [planning/pendientes.md](planning/pendientes.md) |
| Saber qué cambió y por qué | [planning/changelog.md](planning/changelog.md) |
