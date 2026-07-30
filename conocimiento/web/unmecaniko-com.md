# unmecaniko.com — cómo funciona la web pública

La web personal **no guarda su contenido**. Lo lee de este repositorio en vivo,
por la API de GitHub. Por eso `projects/` se toca con cuidado: un cambio aquí se
ve en producción en menos de cinco minutos, sin desplegar nada.

**Verificado el 2026-07-30** leyendo el código del repositorio de la web.

## Las piezas

| Pieza | Qué es |
|---|---|
| Dominio | `unmecaniko.com` (+ `www`), DNS en Huawei Cloud → Vercel. Ver [../infraestructura/dominios-y-dns.md](../infraestructura/dominios-y-dns.md) |
| Código | [professionalWebsite](https://github.com/UnMecaNiko/professionalWebsite) — Next.js + TypeScript + Tailwind, componentes shadcn/ui, gestor `pnpm` |
| Origen del diseño | Generado con [v0.app](https://v0.app); el repositorio se sincroniza automáticamente con los despliegues de v0 |
| Hosting | Vercel, proyecto `v0-web-site-2-0` (`https://v0-web-site-2-0.vercel.app`) |
| Contenido | **Este repositorio**, carpeta `projects/` |
| Media | Supabase Storage y YouTube, referenciados por URL desde el front-matter |

## El flujo de contenido

```
unmecaniko-projects (este repo, GitHub)
  projects/<slug>/index.md
          │
          │  API de GitHub, sin autenticar, revalidate: 300 s
          ▼
professionalWebsite  ──  lib/github.ts
          │                 ├─ getProjectSlugs()   lista /contents/projects
          │                 ├─ getProject(slug)    lee /contents/projects/<slug>/index.md
          │                 └─ getAllProjects()    junta todo
          │                    front-matter parseado con gray-matter
          ▼
  app/projects/[slug]/page.tsx   (página de cada proyecto)
  app/api/projects/route.ts      (JSON con todos los proyectos)
          ▼
      Vercel → unmecaniko.com
```

Detalles que importan:

- **Sin token.** Las peticiones usan solo `Accept: application/vnd.github.v3+json`.
  Funciona porque el repositorio es público.
- **`revalidate: 300`.** Next.js recachea cada 5 minutos. Un cambio en un
  `index.md` aparece solo, sin desplegar.
- **El front-matter es contrato.** `gray-matter` lo parsea y la web usa sus
  campos. Romper un nombre de campo o la taxonomía rompe la página del proyecto.
- **Los slugs son los nombres de carpeta.** Renombrar una carpeta cambia la URL
  pública del proyecto y rompe cualquier enlace externo que apunte allí.
- **La web es bilingüe, el contenido no.** `contexts/language-context.tsx` tiene
  traducciones ES/EN **de la interfaz**, escritas a mano en ese archivo. El
  contenido que viene de los `index.md` se muestra tal cual, en inglés. Esa es la
  razón de la regla "capa pública en inglés" de [AGENTS.md](../../AGENTS.md).

## Qué se puede tocar sin miedo y qué no

| Acción | Efecto en producción |
|---|---|
| Editar el cuerpo de un `index.md` | Se ve en ≤ 5 min. Seguro. |
| Añadir una carpeta nueva en `projects/` con su `index.md` | Aparece sola en el listado. Seguro. |
| Añadir carpetas de primer nivel (`conocimiento/`, `codigo/`, `planeacion/`) | Ninguno: la web solo mira `projects/`. Seguro. |
| Cambiar un nombre de campo del front-matter | Puede romper la página del proyecto. |
| Renombrar una carpeta de `projects/` | Cambia la URL pública. Rompe enlaces externos. |
| Borrar una carpeta de `projects/` | El proyecto desaparece de la web. |
| **Volver el repositorio privado** | **Rompe la web entera** — ver abajo. |

## Por qué volver el repositorio privado rompe la web

La API de GitHub **sin autenticar no puede leer repositorios privados**. En el
momento en que este repositorio pase a privado, `getProjectSlugs()` recibirá un
404 y la web se quedará sin proyectos.

La solución es conocida y pequeña, pero hay que hacerla **antes** del cambio de
visibilidad:

1. Crear un *fine-grained personal access token* en GitHub con permiso de
   **lectura de contenido** solo sobre `unmecaniko-projects`.
2. Guardarlo como variable de entorno en Vercel (p. ej. `GITHUB_TOKEN`).
3. Añadir `Authorization: Bearer ${process.env.GITHUB_TOKEN}` a las dos peticiones
   de `lib/github.ts`.
4. Desplegar y verificar **antes** de cambiar la visibilidad.

Está registrado en [../../planeacion/pendientes.md](../../planeacion/pendientes.md).

## Riesgos detectados

> ⏳ PENDIENTE (verificar): **límite de peticiones de la API de GitHub.** Sin
> token, GitHub permite **60 peticiones por hora y por IP**. Cada revalidación
> hace 1 petición para listar + 1 por proyecto: con 7 proyectos son 8 peticiones
> cada 5 minutos, hasta ~96 por hora. Eso está por encima del límite. Puede que
> hoy no se note porque el caché de Vercel deduplica y las IP salientes rotan,
> pero es frágil por diseño: al añadir proyectos empeora. Un token lo sube a
> 5.000/hora y resuelve el problema y el de la visibilidad de una vez.

> ⏳ PENDIENTE: el `README.md` de este repositorio enlaza a
> `projects/izy/index.md`, **y esa carpeta no existe**. El enlace está roto y la
> web nunca ha mostrado ese proyecto. Decidir: crear la ficha de IZY (hay código
> en [izy-reservas](https://github.com/UnMecaNiko/izy-reservas)) o quitar la fila
> de la tabla.

> ⏳ PENDIENTE: `app/api/projects/route.ts` no declara caché ni revalidación
> propia, así que ese endpoint se evalúa en cada petición. Revisar si hace falta.

> ⏳ PENDIENTE: el repositorio de la web tiene su propia copia de
> `context/repository-context.md`. Dos copias del mismo documento divergen.
> Decidir cuál es la fuente y borrar la otra.

## Ver también

- [../../AGENTS.md](../../AGENTS.md) — reglas de las dos capas
- [../../context/project-template.md](../../context/project-template.md) — el front-matter que consume la web
- [../infraestructura/dominios-y-dns.md](../infraestructura/dominios-y-dns.md) — DNS del dominio
