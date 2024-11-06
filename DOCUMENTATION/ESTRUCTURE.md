DOCUMENTACIÓN DE STARTURWEB (SPANISH)
3) ESTRUCTURA

├── public/assets (img, fuentes, iconos)
├── src/
│   ├── components (componentes reutilizables del proyecto)
│   ├── pages (páginas que tiene el proyecto por las que navegar)
│   ├── config (archivos de configuración, así como urls,.)
│   ├── function (funciones reutilizables, y llamadas api)
│   ├── hooks (hooks de react)
│   ├── styles (estilos generales scss sobre imagenes)
│   └── utils (arrays de datos)
├── app.jsx (enrutado de la aplicación)
├── app.scss (algunos estilos que no tenían cabida en otro lugar del proyecto)
├── index.scss (estilos base del proyecto)
├── main.jsx (root del proyecto, que envuelve la app en browseRouter y  en un useContext)
├── index.html (html base del proyecto)
├── package.json (dependencias)
└── vite.config.js (configuración/importación de vite)


STARTURWEB DOCUMENTATION (ENGLISH)
3) STRUCTURE
scss
Copiar código
├── public/assets (images, fonts, icons)
├── src/
│   ├── components (reusable project components)
│   ├── pages (pages to navigate through the project)
│   ├── config (configuration files, such as URLs)
│   ├── function (reusable functions and API calls)
│   ├── hooks (React hooks)
│   ├── styles (general SCSS styles for images)
│   └── utils (data arrays)
├── app.jsx (application routing)
├── app.scss (styles that didn’t fit elsewhere in the project)
├── index.scss (base project styles)
├── main.jsx (project root, wrapping the app in BrowserRouter and useContext)
├── index.html (base project HTML)
├── package.json (dependencies)
└── vite.config.js (Vite configuration/imports)