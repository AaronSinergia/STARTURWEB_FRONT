DOCUMENTACIÓN DE STARTURWEB (SPANISH)

2) INSTRUCCIONES DE INSTALACIÓN:

2.1 CLONACIÓN:
Si aún no tienes el proyecto en tu máquina, clona el repositorio desde GitHub o cualquier otro sistema de control de versiones que estés utilizando:

git clone <URL-del-repositorio>
cd starturweb

2.2 INSTALACIÓN DE DEPENDENCIAS:

Instala Node.js y npm
Asegúrate de tener instalado Node.js (versión 16 o superior recomendada) y npm (que viene incluido con Node.js). Puedes verificar tu versión de Node.js ejecutando:

bash
Copiar código
node -v

Y para npm:

bash
Copiar código
npm -v


Instalar Dependencias
Una vez que estés en el directorio del proyecto, ejecuta el siguiente comando para instalar todas las dependencias listadas en el archivo package.json:

bash
Copiar código
npm install

Esto instalará tanto las dependencias de producción (en "dependencies") como las de desarrollo (en "devDependencies"), necesarias para compilar, ejecutar y desarrollar tu proyecto.


Descripción de las Dependencias
Aquí tienes una breve descripción de algunas de las dependencias más importantes en tu package.json:

Dependencias de Producción (para la funcionalidad principal de la aplicación):

"dotenv": Permite cargar variables de entorno desde un archivo .env.
"react" y "react-dom": Las bibliotecas principales para construir interfaces de usuario en React.
"react-router-dom": Proporciona herramientas para manejar rutas en una aplicación de React.
Dependencias de Desarrollo (para tareas de desarrollo y compilación):

"@eslint/js", "eslint", "eslint-plugin-react", "eslint-plugin-react-hooks", "eslint-plugin-react-refresh" y "globals": Paquetes de ESLint para el análisis estático de tu código, asegurando que sigue las mejores prácticas y estilos específicos de React.
"@types/react" y "@types/react-dom": Archivos de tipos para TypeScript que ayudan a verificar el tipo en proyectos que usan React y ReactDOM.
"@vitejs/plugin-react": Complemento de Vite para trabajar con React de forma óptima.
"sass-embedded": Motor de Sass utilizado para compilar SCSS a CSS.
"vite": Herramienta de construcción rápida para proyectos web modernos, que facilita el desarrollo en tiempo real.



STARTURWEB DOCUMENTATION (ENGLISH)
2) INSTALLATION INSTRUCTIONS
2.1 CLONING
If you don’t yet have the project on your machine, clone the repository from GitHub or any version control system you're using:

bash
Copiar código
git clone <repository-url>
cd starturweb
2.2 DEPENDENCY INSTALLATION
Install Node.js and npm
Make sure you have Node.js (version 16 or higher recommended) and npm installed (npm comes with Node.js). You can check your Node.js version by running:

bash
Copiar código
node -v
And for npm:

bash
Copiar código
npm -v
Install Dependencies
Once you're in the project directory, run the following command to install all dependencies listed in the package.json file:

bash
Copiar código
npm install
This will install both production dependencies (in "dependencies") and development dependencies (in "devDependencies"), necessary to compile, run, and develop your project.

Dependency Description
Here is a brief description of some of the most important dependencies in your package.json:

Production Dependencies (for the main functionality of the application):

"dotenv": Allows loading environment variables from a .env file.
"react" and "react-dom": Main libraries for building user interfaces in React.
"react-router-dom": Provides tools to handle routing in a React application.
Development Dependencies (for development and build tasks):

"@eslint/js", "eslint", "eslint-plugin-react", "eslint-plugin-react-hooks", "eslint-plugin-react-refresh", and "globals": ESLint packages for static code analysis, ensuring best practices and specific styles for React.
"@types/react" and "@types/react-dom": Type files for TypeScript that help with type-checking in projects using React and ReactDOM.
"@vitejs/plugin-react": Vite plugin to work optimally with React.
"sass-embedded": Sass engine used to compile SCSS to CSS.
"vite": A fast build tool for modern web projects, enabling real-time development.
