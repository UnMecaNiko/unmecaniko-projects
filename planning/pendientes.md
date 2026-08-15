# Pendientes

Lo que falta por hacer en este repositorio y en la operación que documenta.
Ordenado por prioridad. Cuando un pendiente se resuelve, **se borra de aquí** y
queda como entrada en [changelog.md](changelog.md) — no se duplica.

Formato: cada pendiente dice **qué falta**, **por qué importa** y **cómo se hace**.

---

## 🔴 Prioridad alta

### 1. Volver el repositorio privado sin romper la web pública

**Qué falta.** Este repositorio es público (`visibility: public`) y va a contener
conocimiento personal, operativo y comercial. Debe ser **privado**, dejando
accesible solo lo que la web necesita.

**Por qué importa.** Hoy todo lo que se escriba aquí queda publicado, y además
[context/main.py](../context/main.py) lo expone por MCP. Eso limita lo que se
puede documentar: tarifas, detalle de clientes, trayectoria completa, cualquier
cosa con cifras.

**Por qué no se puede hacer hoy, tal cual.** unmecaniko.com lee `projects/` con
la **API de GitHub sin autenticar**, y esa API **no puede leer repositorios
privados**. En el momento del cambio, la web se queda sin proyectos. El detalle
está en [knowledge/web/unmecaniko-com.md](../knowledge/web/unmecaniko-com.md).

**Cómo se hace.** Hay dos caminos y hay que elegir:

- **A — Token de lectura (el más rápido).** Crear un *fine-grained PAT* con
  lectura de contenido solo sobre este repositorio, guardarlo en Vercel como
  `GITHUB_TOKEN`, añadir `Authorization: Bearer …` a las dos peticiones de
  `lib/github.ts` del repositorio
  [professionalWebsite](https://github.com/UnMecaNiko/professionalWebsite),
  desplegar, **verificar**, y solo entonces cambiar la visibilidad. Resuelve de
  paso el pendiente #2. Contra: un token que hay que rotar.
- **B — Separar los repositorios.** Dejar `projects/` + `context/` en un
  repositorio público de solo contenido, y mover la capa interna
  (`knowledge/`, `code/`, `planning/`) a uno privado. Más limpio
  conceptualmente y sin tokens; a cambio, dos repositorios que mantener y la web
  apuntando a otro nombre.

**Antes de cambiar la visibilidad**, en cualquiera de los dos casos: revisar que
no haya quedado ningún secreto en la historia de git (`git log -p` sobre los
archivos de infraestructura) y verificar la web en un despliegue de vista previa.

### 2. Revisar la arquitectura de la web y su consumo de este repositorio

**Qué falta.** Una revisión completa de cómo unmecaniko.com consume este
repositorio, y decidir si el diseño actual se mantiene.

**Por qué importa.** Hay al menos cuatro cosas frágiles, todas documentadas en
[knowledge/web/unmecaniko-com.md](../knowledge/web/unmecaniko-com.md):

- **Límite de la API de GitHub.** Sin token son 60 peticiones/hora por IP. Cada
  revalidación gasta 1 + 1 por proyecto: con 7 proyectos, hasta ~96/hora. Está por
  encima del límite. Al añadir proyectos, empeora.
- **Acoplamiento por nombre de carpeta.** El slug de la URL pública es el nombre
  de carpeta: renombrar una carpeta rompe enlaces externos.
- **El front-matter es un contrato sin validación.** Un campo mal escrito rompe
  la página en producción y nadie se entera hasta que alguien la visita.
- **`app/api/projects/route.ts` no declara caché**, así que se evalúa en cada
  petición.

**Cómo se hace.** Leer `lib/github.ts`, `app/api/projects/route.ts` y
`app/projects/[slug]/page.tsx` del repositorio de la web; decidir entre seguir
leyendo por API (con token y caché más largo), pasar a *webhook* de GitHub que
dispare revalidación bajo demanda, o generar un `index.json` en este repositorio
y que la web lea un solo archivo. Añadir además una validación del front-matter
que falle en CI, no en producción.

### 3. Respaldos: la operación no tiene ninguno

**Qué falta.** Respaldo automático de n8n (base de datos + clave de cifrado) y
copia de la llave SSH del VPS fuera del equipo de trabajo.

**Por qué importa.** Es el punto más frágil de todo. Si el VPS muere hoy se
pierden los flujos y las credenciales de n8n. Si se pierde el disco del equipo, se
pierde el acceso SSH al servidor. Y un respaldo de PostgreSQL **sin** la
`N8N_ENCRYPTION_KEY` es inútil: restaura los flujos con las credenciales
ilegibles.

**Cómo se hace.** El propio n8n puede programar el respaldo a almacenamiento
externo (Supabase, S3). La clave de cifrado y la llave SSH, a un gestor de
contraseñas. Detalle en
[knowledge/infrastructure/vps-velo.md](../knowledge/infrastructure/vps-velo.md#respaldos)
y [accesos.md](../knowledge/infrastructure/accesos.md).

---

## 🟠 Prioridad media

### 4. Completar la validación de identidad profesional

**Qué falta.** La investigación pública inicial ya consolidó LinkedIn, proyectos,
repositorios destacados, publicaciones, reconocimientos y empresas objetivo en
[knowledge/identity/](../knowledge/identity/). Quedan fuentes que no
pudieron cerrarse:

- inventariar video por video el canal de YouTube;
- revisar y clasificar los 47 repositorios públicos de GitHub;
- verificar folios y vigencia de certificaciones Huawei;
- reconstruir las "50+" formaciones con fecha, tema y audiencia;
- obtener soportes del Rally Latinoamericano de Innovación y aclarar su nivel;
- confirmar o retirar definitivamente el supuesto primer lugar en una
  "Huawei Solutions Architect Competition", para el cual no apareció evidencia;
- validar con Nicolas los datos pendientes de trayectoria, reubicación y
  autorización laboral.

**Por qué importa.** La base actual ya permite perfilar cargos y empresas, pero
una hoja de vida formal requiere soportes y resultados medibles.

**Cómo se hace.** Resolver los bloques `⏳ PENDIENTE` de los documentos de
identidad. No copiar información confidencial de empleadores ni publicar
tarifas mientras el repositorio siga siendo público.

### 5. Ficha pública de la CNC v3

**Qué falta.** `projects/cnc-magiaRoja-v3/index.md`.

**Por qué importa.** La v3 es la versión activa y la más impresionante, y no está
en el portafolio. Están la v1 y la v2, que ya son historia.

**Cómo se hace.** Copiar [context/project-template.md](../context/project-template.md),
escribir en **inglés**, front-matter completo, generando el contenido desde
[magiaRojaV3](https://github.com/UnMecaNiko/magiaRojaV3) — **sin tocar su
carpeta `presupuesto/`, que es confidencial**. Subir media a Supabase (ya existen
renders en `media/ia/` de ese repositorio) y actualizar la tabla del `README.md`.

### 6. El enlace roto de IZY

**Qué falta.** El `README.md` enlaza a `projects/izy/index.md` y esa carpeta no
existe.

**Por qué importa.** Enlace roto en la carta de presentación del repositorio, y
un proyecto que la web nunca ha mostrado.

**Cómo se hace.** O crear la ficha (hay código en
[izy-reservas](https://github.com/UnMecaNiko/izy-reservas)) o quitar la fila de la
tabla. También aparecen en la tabla "Makers Tech Inventory Assistant",
"CNC Laser Machine" y "Trajectory Generator" marcados como *(coming soon)*
mientras `projects/control-turtlebot/` y las fichas de CNC **sí existen**: la
tabla está desactualizada.

### 7. Inventariar los repositorios de GitHub

**Qué falta.** Decidir, de los 47 repositorios públicos observados el 2026-08-01,
cuáles son trabajo original, contribuciones, forks, cursos, portafolio,
histórico y cuáles se archivan.

**Por qué importa.** Un perfil de GitHub con 30 repositorios de cursos diluye los
5 que valen. Y hay conocimiento útil enterrado ahí (`AI-Knowledge-Base`,
`aid-sdlc`, `notasNegociosYEmprendimiento`).

**Cómo se hace.** Listar con la API, revisar autoría y contribuciones, clasificar
en la tabla de repositorios relacionados de
[AGENTS.md](../AGENTS.md#repositorios-relacionados) y archivar los que sean
ruido. `dify-unmecaniko` es un fork de `langgenius/dify` y `aid-sdlc` también
figura como fork: pueden demostrar experimentación o contribución, pero no deben
atribuirse como productos o metodologías propias sin evidencia adicional.

### 8. Ejecutar el plan de transición a robótica + IA

**Qué falta.** Ejecutar
[planning/career/transition-plan.md](career/transition-plan.md):
unificar el perfil, crear tres CV, mejorar la web, construir dos demostradores,
cerrar brechas de integración industrial y aplicar por olas a las 32 empresas de
[planning/career/target-companies.yaml](career/target-companies.yaml).

**Primera ola preparada.** Las vacantes activas, el orden de aplicación y los
bloqueadores están en
[planning/career/applications.md](career/applications.md)
y su tracker en
[planning/career/applications.yaml](career/applications.yaml).
Falta congelar el CV maestro, producir las tres variantes y enviar cada
candidatura con confirmación final de Nicolas.

**Vacantes nuevas fuera de la ola.**

- [Sales Representative en Robot.com](https://robot.na.teamtailor.com/jobs/391940-sales-representative)
  (San Francisco, híbrido): CV en
  [cvs/robot-com-sales-representative.md](career/cvs/robot-com-sales-representative.md).
  Uso de HubSpot y correo de contacto ya confirmados. Único bloqueador:
  confirmar por escrito sponsorship o remoto desde Colombia — no enviar
  hasta tener respuesta.
- [AI Solution Engineer (Fixed-Term) en FieldAI](https://jobs.lever.co/field-ai/65561b5c-2348-4b88-9e73-ff9c6265dbf4)
  (Irvine, on-site): CV y correo listos en
  [cvs/fieldai-ai-solution-engineer.md](career/cvs/fieldai-ai-solution-engineer.md),
  con [PDF ya exportado](career/cvs/fieldai-ai-solution-engineer.pdf).
  Nicolas autorizó enviar el correo de elegibilidad y declarar
  reubicación inmediata a Irvine. Falta: pegar el
  cover letter en Lever o LinkedIn, y registrar la respuesta de
  sponsorship.

**Primer hito urgente.** Antes del 2026-08-05, decidir si el proyecto TurtleBot
puede presentarse responsablemente como póster, caso aplicado o tutorial en
LARS/LARC 2026. Si no hay contribución publicable, participar como asistente,
voluntario, mentor o jurado.

**Cómo se mide.** Revisar mensualmente proyectos terminados, contenido,
contribuciones, conversaciones, aplicaciones personalizadas, entrevistas,
razones de rechazo y empresas que confirmen patrocinio.

---

## 🟡 Prioridad baja / higiene

### 9. Endurecer el VPS

- Entrar como usuario sin privilegios con `sudo`, y `PermitRootLogin no`.
- Configurar `unattended-upgrades` para parches de seguridad.
- Detalle en [vps-velo.md](../knowledge/infrastructure/vps-velo.md#seguridad-del-servidor).

### 10. Dónde debe vivir `infra/`

La infraestructura del VPS está en el repositorio de la CNC
([magiaRojaV3/infra/](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/infra)),
herencia de cuando el servidor era solo para su landing. Hoy aloja n8n y la
presentación de Theker, que no son de la CNC. Evaluar moverla aquí o a un
repositorio propio de infraestructura.

### 11. Dominios: inventario y correo

- Fechas de expiración y renovación automática de `unmecaniko.com` y
  `velasquezlopez.com`: no están documentadas.
- No hay registros MX/SPF/DKIM/DMARC documentados. Si no se envía correo desde
  esos dominios, conviene un SPF nulo y `DMARC p=reject` para que nadie los
  suplante.
- Decidir qué dominio es la cara de qué: la presentación de Theker quedó bajo
  `velasquezlopez.com` por comodidad, aunque conceptualmente encaja bajo
  `unmecaniko.com`.
- Detalle en [dominios-y-dns.md](../knowledge/infrastructure/dominios-y-dns.md).

### 12. Despliegue atómico de sitios estáticos

Hoy la extracción del `tar` deja unos segundos con archivos viejos y nuevos
conviviendo. Subir a un directorio hermano y mover un enlace simbólico.

### 13. Duplicados de documentación

- `context/repository-context.md` existe **también** en el repositorio de la web.
  Dos copias divergen: decidir cuál es la fuente y borrar la otra.
- `.github/copilot-instructions.md` repite parte de lo que ahora está en
  [AGENTS.md](../AGENTS.md). Reducirlo a un puntero, como se hizo con `CLAUDE.md`.

### 14. El servidor MCP de `context/main.py`

- Indexa los archivos **por nombre de base**, así que los siete `index.md` de
  `projects/` se pisan entre sí en el diccionario: solo uno queda accesible.
- Ahora que existen `knowledge/`, `code/` y `planning/`, el servidor
  también expone la capa interna. Revisar si es lo que se quiere y, si no,
  filtrar por carpeta.
