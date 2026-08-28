# Crecimiento profesional

Seguimiento operativo de la búsqueda laboral: a qué se aplica, con qué hoja de
vida, en qué estado y qué falta resolver antes de enviar.

**Esto no es identidad.** Los datos base sobre quién es Nicolas —trayectoria,
capacidades, formación, logros— viven en
[knowledge/identity/](../../knowledge/identity/) y son la fuente de la que se
generan los CV de aquí. Si un dato de un CV no está respaldado allí, no se
inventa: se marca `⏳ PENDIENTE`.

## Estrategia

| Documento | Qué contiene |
|---|---|
| [transition-plan.md](transition-plan.md) | Plan de 18 meses hacia robótica + IA: roles objetivo, brechas, portafolio, eventos. |
| [target-companies.md](target-companies.md) | Análisis de empresas objetivo y plan de posicionamiento. |
| [target-companies.yaml](target-companies.yaml) | Inventario procesable de 32 empresas: ajuste, barrera migratoria, portal. |
| [us-visa.md](us-visa.md) | Visa B-1/B-2 de Estados Unidos: categoría, encuadre de la entrevista, calendario real (9–13 meses) y eventos de robótica alcanzables. |

## Postulaciones

| Documento | Qué contiene |
|---|---|
| [applications.md](applications.md) | Primera ola: orden de ejecución, calendario y preguntas de elegibilidad. |
| [applications.yaml](applications.yaml) | Tracker procesable: cada vacante con estado, bloqueadores y CV asociado. |

Los estados posibles están definidos en `metadata.status_values` de
[applications.yaml](applications.yaml): `ready`, `contact_first`, `stretch` y
`skip`.

## Hojas de vida

La hoja de vida predeterminada presenta el perfil general. Las demás se escriben
para **una vacante concreta**. Todas están en inglés y viven en [cvs/](cvs/)
con el mismo nombre base en Markdown y PDF. El Markdown es la fuente editable e
incluye las notas internas de uso o envío; el PDF contiene **solo** la hoja de
vida.

| Vacante | Markdown | PDF | Estado |
|---|---|---|---|
| Perfil general — sin vacante objetivo | [general-resume.md](cvs/general-resume.md) | [PDF](cvs/general-resume.pdf) | CV predeterminado listo; usar como base y adaptar antes de una postulación concreta. |
| [AI Solution Engineer (Fixed-Term) — FieldAI](https://jobs.lever.co/field-ai/65561b5c-2348-4b88-9e73-ff9c6265dbf4) (Irvine, on-site) | [fieldai-ai-solution-engineer.md](cvs/fieldai-ai-solution-engineer.md) | [PDF](cvs/fieldai-ai-solution-engineer.pdf) | Correo de elegibilidad autorizado; falta enviar y registrar respuesta de sponsorship. |
| [Sales Representative — Robot.com](https://robot.na.teamtailor.com/jobs/391940-sales-representative) (San Francisco, híbrido) | [robot-com-sales-representative.md](cvs/robot-com-sales-representative.md) | ⏳ PENDIENTE | 🔴 **No enviar.** Falta confirmar por escrito sponsorship o remoto desde Colombia. |

### Cómo generar el PDF de un CV

No hay `pandoc` ni `wkhtmltopdf` en el equipo. El PDF se produce con Chrome en
modo headless a partir de un HTML intermedio que contiene solo la hoja de vida:

```bash
chrome --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="planning/career/cvs/<nombre>.pdf" "file:///<ruta>/<nombre>.html"
```

Los PDF de CV pesan ~85 KB, por debajo del límite de 1 MB de la regla 6 de
[AGENTS.md](../../AGENTS.md), así que sí se versionan aquí: son el archivo que
Nicolas adjunta y deben viajar con su Markdown.

## Antes de enviar cualquier candidatura

1. Verificar que la vacante sigue abierta en su portal oficial.
2. Resolver el bloqueador de elegibilidad si lo hay — nunca aplicar con la
   pregunta de visa sin responder cuando el estado es `contact_first`.
3. Confirmación final de Nicolas.
4. Registrar en [applications.yaml](applications.yaml) fecha, URL, CV exacto y
   respuesta recibida.
