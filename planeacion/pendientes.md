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
está en [conocimiento/web/unmecaniko-com.md](../conocimiento/web/unmecaniko-com.md).

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
  (`conocimiento/`, `codigo/`, `planeacion/`) a uno privado. Más limpio
  conceptualmente y sin tokens; a cambio, dos repositorios que mantener y la web
  apuntando a otro nombre.

**Antes de cambiar la visibilidad**, en cualquiera de los dos casos: revisar que
no haya quedado ningún secreto en la historia de git (`git log -p` sobre los
archivos de infraestructura) y verificar la web en un despliegue de vista previa.

### 2. Revisar la arquitectura de la web y su consumo de este repositorio

**Qué falta.** Una revisión completa de cómo unmecaniko.com consume este
repositorio, y decidir si el diseño actual se mantiene.

**Por qué importa.** Hay al menos cuatro cosas frágiles, todas documentadas en
[conocimiento/web/unmecaniko-com.md](../conocimiento/web/unmecaniko-com.md):

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
[conocimiento/infraestructura/vps-velo.md](../conocimiento/infraestructura/vps-velo.md#respaldos)
y [accesos.md](../conocimiento/infraestructura/accesos.md).

---

## 🟠 Prioridad media

### 4. Búsqueda completa de la identidad profesional en internet

**Qué falta.** Un barrido exhaustivo de todo lo que existe públicamente sobre
Nicolas Velasquez Lopez / `unmecaniko`, para volcarlo en
[conocimiento/identidad/](../conocimiento/identidad/).

**Por qué importa.** Es la condición para que este repositorio cumpla su
propósito: generar hojas de vida adaptadas a una vacante, preparar entrevistas,
armar cotizaciones y arrancar proyectos con contexto real. Hoy la capa de
identidad es un resumen de una página.

**Dónde buscar** (lista para ejecutar, no exhaustiva):

- LinkedIn: cargos, fechas, descripciones, recomendaciones, publicaciones.
- GitHub `UnMecaNiko`: los ~30 repositorios, sus fechas y su contenido real.
- YouTube `@unmecaniko`: videos, fechas, temas, métricas.
- Certificaciones Huawei: verificar folios y vigencia.
- Menciones en prensa, universidades, competencias (Huawei Solutions Architect
  Competition, robótica), Space Call Project, Lápiz Labs.
- Hackathons y eventos (DomiChat AI Hackathon 2025, etc.).
- Cualquier charla, taller o formación de las "50+" dictadas.

**Cómo se hace.** Buscar, **citar la fuente con URL y fecha de consulta**, y
escribir en los documentos que mapea
[perfil-profesional.md](../conocimiento/identidad/perfil-profesional.md):
`trayectoria.md`, `capacidades.md`, `formacion.md`, `logros.md`,
`publicaciones-y-charlas.md`. **No inventar fechas, cargos ni cifras** — de aquí
saldrán hojas de vida y cotizaciones. Lo que no se encuentre, queda `⏳ PENDIENTE`
para preguntarle a Nicolas.

**Ojo con la privacidad:** parte de esto (tarifas, detalle de clientes) no puede
vivir en un repositorio público. Depende del pendiente #1.

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

**Qué falta.** Decidir, de los ~30 repositorios de la cuenta, cuáles son
portafolio, cuáles histórico y cuáles se archivan.

**Por qué importa.** Un perfil de GitHub con 30 repositorios de cursos diluye los
5 que valen. Y hay conocimiento útil enterrado ahí (`AI-Knowledge-Base`,
`aid-sdlc`, `notasNegociosYEmprendimiento`).

**Cómo se hace.** Listar con la API, clasificar en la tabla de repositorios
relacionados de [AGENTS.md](../AGENTS.md#repositorios-relacionados), archivar los
que sean ruido.

---

## 🟡 Prioridad baja / higiene

### 8. Endurecer el VPS

- Entrar como usuario sin privilegios con `sudo`, y `PermitRootLogin no`.
- Configurar `unattended-upgrades` para parches de seguridad.
- Detalle en [vps-velo.md](../conocimiento/infraestructura/vps-velo.md#seguridad-del-servidor).

### 9. Dónde debe vivir `infra/`

La infraestructura del VPS está en el repositorio de la CNC
([magiaRojaV3/infra/](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/infra)),
herencia de cuando el servidor era solo para su landing. Hoy aloja n8n y la
presentación de Theker, que no son de la CNC. Evaluar moverla aquí o a un
repositorio propio de infraestructura.

### 10. Dominios: inventario y correo

- Fechas de expiración y renovación automática de `unmecaniko.com` y
  `velasquezlopez.com`: no están documentadas.
- No hay registros MX/SPF/DKIM/DMARC documentados. Si no se envía correo desde
  esos dominios, conviene un SPF nulo y `DMARC p=reject` para que nadie los
  suplante.
- Decidir qué dominio es la cara de qué: la presentación de Theker quedó bajo
  `velasquezlopez.com` por comodidad, aunque conceptualmente encaja bajo
  `unmecaniko.com`.
- Detalle en [dominios-y-dns.md](../conocimiento/infraestructura/dominios-y-dns.md).

### 11. Despliegue atómico de sitios estáticos

Hoy la extracción del `tar` deja unos segundos con archivos viejos y nuevos
conviviendo. Subir a un directorio hermano y mover un enlace simbólico.

### 12. Duplicados de documentación

- `context/repository-context.md` existe **también** en el repositorio de la web.
  Dos copias divergen: decidir cuál es la fuente y borrar la otra.
- `.github/copilot-instructions.md` repite parte de lo que ahora está en
  [AGENTS.md](../AGENTS.md). Reducirlo a un puntero, como se hizo con `CLAUDE.md`.

### 13. El servidor MCP de `context/main.py`

- Indexa los archivos **por nombre de base**, así que los siete `index.md` de
  `projects/` se pisan entre sí en el diccionario: solo uno queda accesible.
- Ahora que existen `conocimiento/`, `codigo/` y `planeacion/`, el servidor
  también expone la capa interna. Revisar si es lo que se quiere y, si no,
  filtrar por carpeta.
