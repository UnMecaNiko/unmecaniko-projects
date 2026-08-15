# Sistema operativo de IA

Presentación web anonimizada sobre una arquitectura de operaciones de preventa
y pilotos asistida por agentes de inteligencia artificial.

**En línea:** <https://theker.velasquezlopez.com>

> El contenido es **anonimizado por diseño**: no menciona clientes, personas,
> cuentas, IDs ni proveedores concretos. Esa condición debe mantenerse en
> cualquier cambio. El código venía del repositorio de trabajo de Truora y se
> movió aquí el 2026-07-30.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Verificación y build

```bash
npm run lint
npm run build
```

Next.js 16 con App Router, TypeScript y CSS nativo. Una sola página, sin
componentes de cliente, sin datos en tiempo de ejecución y sin variables de
entorno.

## Despliegue

Está configurado con `output: "export"` en [next.config.ts](next.config.ts): el
`build` genera `out/` con HTML, CSS y JS estáticos. **En producción no corre
ningún proceso Node** — los archivos los sirve Caddy directamente en el VPS. En un
servidor de 1 vCPU eso importa.

Para publicar una versión nueva:

```bash
npm run build
tar -czf - -C out . | ssh velo-vps 'tar -xzf - -C /opt/proxy/sitios/theker'
```

No hace falta reiniciar Caddy: lee los archivos en cada petición. Los assets de
`/_next/static/` llevan hash en el nombre y se sirven con cache de un año, así que
un despliegue nuevo no deja a nadie con una versión mezclada.

El alias `velo-vps` y el bloque del dominio en el `Caddyfile` están documentados
en:

- [knowledge/infrastructure/vps-velo.md](../../knowledge/infrastructure/vps-velo.md) — el servidor y cómo se entra
- [knowledge/infrastructure/proxy-caddy.md](../../knowledge/infrastructure/proxy-caddy.md) — el bloque de Caddy y el procedimiento completo

> ⏳ PENDIENTE: el despliegue no es atómico. Durante la extracción del `tar`
> conviven archivos viejos y nuevos unos segundos.
