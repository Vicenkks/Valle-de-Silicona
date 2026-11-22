# Valle-de-Silicona
Proyecto grupal para Front-End.

## Integrantes y roles (Sprint actual)

| Nombre | Rol ágil |
|---|---|
| Javier E. Gutierrez | QA/Tester |
| Rallen I. Castro | Developer |
| Vicente J. Huilcaman | Developer |
| Keisy D. Epul| QA/Tester |
| Josefa I. Duarte | Product Owner |
| Maria R. Henríquez | Scrum Master |

## Descripción breve
EcoRuta es un sitio web en el que puedes planificar tus salidas hacia el sur de chile, con rutas guiadas y economicas.

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 con enfoque mobile-first
- Diseño responsivo y accesible (criterios base de WCAG AA)


## Estructura del proyecto
```text
Valle-de-Silicona/
├── css/            # Estilos del sitio (CSS)
├── js/             # Scripts y lógica (JavaScript)
├── img/            # Imágenes y recursos gráficos
├── pages/          # Páginas secundarias (HTML)
└── index.html      # Página principal
```
## Cómo ejecutar el proyecto

```bash
# Abrir index.html en un navegador
```

## Cómo levantar la API en local

La aplicación React está en `app/`. El sitio HTML estático permanece en la raíz.
La API usa json-server **0.17.4**, con los datos de ejemplo de `app/db.json`.

Desde la raíz, instalar las dependencias:

```bash
cd app
npm install
```

Mantener dos terminales abiertas, ambas dentro de `app`:

| Terminal | Comando | Dirección |
|---|---|---|
| API | `npm run api` | http://localhost:3001 |
| React | `npm run dev` | http://localhost:5173 |

Abrir http://localhost:3001/rutas para comprobar que la API devuelve JSON.
También existen `/emprendimientos` y `/resenas`. La dirección base se define en
`app/src/api.js` mediante `API_URL`. Las imágenes están en `app/public/img`.

En el detalle de una ruta se pueden crear y borrar reseñas. Su campo de relación
es `actividadId`: `/resenas?actividadId=1` devuelve las reseñas de la ruta 1.
Al crear una reseña se envían `actividadId`, `nombre`, `comentario`, `fecha`
(formato DD-MM-YYYY) y `puntuacion` (número de 1 a 10); el servidor asigna el `id`.

json-server guarda las creaciones y eliminaciones en `app/db.json`. Si fueron
solo pruebas, revisar y restaurar el archivo antes de hacer commit, desde la raíz:

```bash
git diff -- app/db.json
git restore app/db.json
```

Para compilar React, ejecutar `npm run build` dentro de `app`.
GitHub Pages no ejecuta json-server: la demostración de la API propia se realiza
localmente con ambos servidores encendidos.

## Estado del proyecto

- Sprint actual: Sprint 3
- Última actualización: 13 de octubre de 2026

## Tablero Kanban

Enlace al tablero: https://trello.com/invite/b/6a7dd26c5f91dc253e750160/ATTIc3e52326d5f21e7cf5f390e0e5718ad33A1C425B/valle-de-silicona-frontend

## Enlace de despliegue
https://vicenkks.github.io/Valle-de-Silicona/

