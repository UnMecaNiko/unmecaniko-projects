# Magia Roja / VELO inc — el negocio de las CNC

Ficha de negocio. **El detalle técnico no se duplica aquí**: vive completo en el
repositorio [magiaRojaV3](https://github.com/UnMecaNiko/magiaRojaV3), que es su
base de conocimiento y su fuente de la verdad.

## Qué es

Una **CNC de escritorio** con láser de 30 W ópticos y **cabezal intercambiable**
para fresado. Se diseña, construye y vende como producto propio bajo la marca
comercial **VELO inc**.

Es un negocio familiar de dos personas:

| Persona | Rol |
|---|---|
| Saul Velasquez (papá) | Mecánica y diseño |
| Nicolas Velasquez | Electrónica, control, software, web y comercial |

Van tres generaciones de máquina. **v1 y v2 son historia congelada** — no se
trabaja más sobre ellas. La **v2 se vendió en 2026** y la **v3** es su sucesora,
más grande y más capaz.

## Estado (2026-07-30)

- **v3 en desarrollo.** Mecánica terminada; electrónica y control en curso.
- **Landing comercial en línea** en <https://velasquezlopez.com>, con captación
  por WhatsApp.
- **Modelo de venta:** máquina + plan de mantenimiento incluido por seis meses
  (tres servicios, uno cada dos meses).

Lo que cambió de la v2 a la v3:

- Área útil de **400 × 400 mm** (externas 500 × 500 mm).
- **Eje Z motorizado** con NEMA 17 — es nuevo en esta versión.
- **Cabezal intercambiable** láser ↔ motor de fresado.
- Láser **Laser Tree K30** (30 W ópticos, fuente propia de 24 V).
- Fuente de 12 V / 10 A para el control y mejor conexión eléctrica.
- Control: se mantiene **Arduino + CNC Shield + GRBL**, drivers DRV8825 a 1/8 de paso.

## Dónde está cada cosa

Todo en [github.com/UnMecaNiko/magiaRojaV3](https://github.com/UnMecaNiko/magiaRojaV3). Empezar siempre por su `AGENTS.md`.

| Quiero… | Ruta en ese repositorio |
|---|---|
| Entender la máquina | [`conocimiento/maquina/vision-general.md`](https://github.com/UnMecaNiko/magiaRojaV3/blob/main/conocimiento/maquina/vision-general.md) |
| Especificaciones | [`conocimiento/maquina/especificaciones.md`](https://github.com/UnMecaNiko/magiaRojaV3/blob/main/conocimiento/maquina/especificaciones.md) |
| Subsistemas (mecánica, electrónica, láser, eje Z, GRBL, software) | [`conocimiento/maquina/subsistemas/`](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/conocimiento/maquina/subsistemas) |
| Componentes y BOM | [`conocimiento/maquina/componentes/`](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/conocimiento/maquina/componentes) |
| Decisiones técnicas (ADR) | [`conocimiento/maquina/decisiones/`](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/conocimiento/maquina/decisiones) |
| Parámetros de corte y config GRBL | [`conocimiento/maquina/parametros/`](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/conocimiento/maquina/parametros) |
| Paso a paso del build | [`conocimiento/proceso-construccion/`](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/conocimiento/proceso-construccion) |
| Historia de v1 y v2 | [`conocimiento/historia/`](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/conocimiento/historia) |
| Propuesta de valor y mercado | [`comercial/`](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/comercial) (sin precios, por regla) |
| Código de la landing | [`salidas/web/`](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/salidas/web) |
| Infraestructura del VPS | [`infra/`](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/infra) — documentada en [../infrastructure/vps-velo.md](../infrastructure/vps-velo.md) |
| Qué falta y qué cambió | [`harness/planeacion/`](https://github.com/UnMecaNiko/magiaRojaV3/tree/main/harness/planeacion) |

## Reglas de ese repositorio que hay que respetar desde aquí

Son suyas, pero afectan lo que se puede traer a este repositorio:

- **`presupuesto/` es confidencial 🔒.** Contiene costos reales de materiales,
  horas y tarifas. **Nunca** se copia, cita ni resume en este repositorio, que es
  público, ni en ninguna salida de cara a clientes.
- **`comercial/` va sin precios**, por decisión explícita.
- **Todo en español** y con fuentes citadas ante cualquier dato técnico.
- Los datos desconocidos se marcan `⏳ PENDIENTE` y **no se inventan**. Esto
  aplica con más fuerza aquí: de este repositorio pueden salir cotizaciones.

## Relación con la marca personal

La CNC es el proyecto donde converge casi todo lo que Nicolas hace: mecatrónica,
electrónica, control, software, web, contenido y venta. Es material de portafolio
de primera calidad y ya tiene fichas públicas:

- [`projects/cnc-magiaRoja-v1/`](../../projects/cnc-magiaRoja-v1/index.md)
- [`projects/cnc-magiaRoja-v2/`](../../projects/cnc-magiaRoja-v2/index.md)

> ⏳ PENDIENTE: no existe ficha pública de la **v3**, que es la versión activa y
> la más impresionante. Crearla en `projects/cnc-magiaRoja-v3/index.md`, en
> inglés, con el front-matter de la plantilla, generándola desde el conocimiento
> de magiaRojaV3 — sin tocar `presupuesto/`.

> ⏳ PENDIENTE: hay un tema de **seguridad abierto** en la máquina: el acrílico
> rojo del domo no es protección ocular certificada para 30 W a 450 nm; se
> requiere acrílico naranja con OD 3+. Es un dato relevante si la máquina se
> vende o se muestra públicamente. Seguimiento en el repositorio de la CNC.

## Ver también

- [../infrastructure/vps-velo.md](../infrastructure/vps-velo.md) — el servidor donde corre la landing
- [../infrastructure/dominios-y-dns.md](../infrastructure/dominios-y-dns.md) — el dominio `velasquezlopez.com`
