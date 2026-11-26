# Valle-de-Silicona
Proyecto grupal para Front-End.

## Integrantes y roles (Sprint actual)

| Nombre | Rol ágil |
|---|---|
| Javier E. Gutierrez | Scrum Master |
| Rallen I. Castro | Developer |
| Vicente J. Huilcaman | QA/Tester |
| Keisy D. Epul| QA/Tester |
| Josefa I. Duarte | Product Owner |
| Maria R. Henríquez | Developer |

## Descripción breve
EcoRuta es un sitio web en el que puedes planificar tus salidas hacia el sur de chile, con rutas guiadas y economicas.

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 con enfoque mobile-first
- Diseño responsivo y accesible (criterios base de WCAG AA)
- React + Vite (`HashRouter`) y `json-server` para API REST local

## Estructura del proyecto
```text
Valle-de-Silicona/
├── app/            # Aplicación React + Vite y API local (db.json)
├── aplicacion/     # Build de producción publicado en GitHub Pages
├── docs/           # Documentación y entregables del proyecto
├── css/            # Estilos del sitio estático (CSS)
├── js/             # Scripts y lógica del sitio estático (JavaScript)
├── img/            # Imágenes y recursos gráficos
├── pages/          # Páginas secundarias del sitio estático (HTML)
└── index.html      # Página principal del sitio estático
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

## API pública externa

- **Nombre:** Open-Meteo (Air Quality API)
- **URL base:** `https://air-quality-api.open-meteo.com/v1/air-quality`
- **Endpoint utilizado:** `?latitude=-38.74&longitude=-72.60&current=pm2_5,pm10,uv_index`
- **Autenticación:** No requiere clave (*API key*) ni registro.
- **Prueba CORS:** Aprobada. La API responde con cabeceras CORS abiertas (`Access-Control-Allow-Origin: *`), permitiendo peticiones `fetch` directas desde el navegador tanto en `localhost` como en GitHub Pages sin proxy.
- **Vista donde aparece:** Inicio (`app/src/paginas/Inicio.jsx`), mediante el componente `CalidadAire.jsx`.
- **Utilidad para el usuario:** Permite consultar en vivo los niveles de material particulado (PM 2,5 y PM 10) y el índice UV en Temuco antes de planificar una salida al aire libre.

## Verificación QA (Publicación y APIs)

- **Entorno publicado:** Comprobado el aviso de versión publicada, carga de recursos con rutas relativas, enlace de navegación hacia `aplicacion/` y enrutamiento mediante `HashRouter` sin errores `404`.
- **Resiliencia ante fallos:** Validado mediante bloqueo de URL en DevTools (*Network*) que tanto la indisponibilidad de la API propia (`json-server`) como de la API externa (`Open-Meteo`) muestran mensajes controlados dentro de su propia sección sin interrumpir el resto de la interfaz.
- **Diseño responsivo:** Revisada la visualización móvil (`414px`) sin desbordamiento horizontal ni errores en consola.

## Estado del proyecto

- Sprint actual: Sprint 4
- Última actualización: 26 de noviembre de 2026

## Tablero Kanban

Enlace al tablero: https://trello.com/invite/b/6a7dd26c5f91dc253e750160/ATTIc3e52326d5f21e7cf5f390e0e5718ad33A1C425B/valle-de-silicona-frontend

## Enlace de despliegue

- Sitio estático: https://vicenkks.github.io/Valle-de-Silicona/
- Aplicación React: https://vicenkks.github.io/Valle-de-Silicona/aplicacion/