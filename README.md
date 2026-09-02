ToolBox - Automatización 

Framework de automatización de pruebas End-to-End desarrollado con Cypress, JavaScript, Page Object Model (POM) y Gherkin/Cucumber

Instalación y configuración
1. Requisitos previos
Antes de comenzar, verificar que Node.js y npm estén instalados:

node --version
npm --version

2. Instalar Cypress
Instalar Cypress como dependencia de desarrollo:

npm install --save-dev cypress

Verificar la instalación:
npx cypress --version

Abrir Cypress:
npx cypress open

3. Instalar Cucumber
Para integrar Gherkin/Cucumber con Cypress se utiliza:

npm install --save-dev @badeball/cypress-cucumber-preprocessor

También se instala el preprocessor basado en esbuild:

npm install --save-dev @bahmutov/cypress-esbuild-preprocessor

Las dependencias principales del framework son:

{
  "devDependencies": {
    "@badeball/cypress-cucumber-preprocessor": "^28.0.0",
    "@bahmutov/cypress-esbuild-preprocessor": "^2.2.8",
    "cypress": "^16.0.0"
  }
}

El proyecto utiliza una arquitectura orientada a la separación de responsabilidades entre:

Casos de prueba en Gherkin
Step Definitions
Page Objects
Datos de prueba
Generación dinámica de usuarios
Hooks para gestión del ciclo de vida de los datos
Evidencias mediante screenshots y videos

La aplicación utilizada para las pruebas:

Cypress	Framework de automatización E2E
JavaScript	Lenguaje de programación
Cucumber	Definición de escenarios en Gherkin
@badeball/cypress-cucumber-preprocessor	Integración Cypress + Cucumber
POM	Patrón Page Object Model
Node.js	Runtime
npm	Gestión de dependencias
Aplicación bajo prueba

La suite actualmente automatiza funcionalidades relacionadas con:

Inicio de sesión
Registro de usuario
Eliminación de usuario
Gestión de datos dinámicos
Arquitectura del proyecto

ToolBox/
│
├── cypress/
│   │
│   ├── api/
│   ├─── test/
│   │    ├── login.cy.js
│   │    └── products.cy.js
│   ├── e2e/
│   │   │
│   │   ├── features/
│   │   │   │
│   │   │   ├── login/
│   │   │   │   └── login.feature
│   │   │   │
│   │   │   └── register/
│   │   │       └── register.feature
│   │   │
│   │   └── step_definitions/
│   │       ├── login.steps.js
│   │       └── register.steps.js
│   │
│   ├── fixtures/
│   │   ├─ users.json
│   │
│   ├── pages/
│   │   ├── LoginPage.js
│   │   └── RegisterPage.js
│   │
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   │
│   ├── utils/
│   │   ├─ dataGenerator.js
│   │
│   ├── screenshots/
│   │
│   └── videos/
│
├── cypress.config.js
├── .cypress-cucumber-preprocessorrc.json
├── package.json
├── package-lock.json
└── README.md

### Ejecutar toda la suite
npx cypress run --browser chrome

### Ejecutar Login
npx cypress run --browser chrome --spec "cypress/e2e/features/login/lo

### Ejecutar Register
npx cypress run --browser chrome --spec "cypress/e2e/features/registe

### Ejecutar un Feature específico
npx cypress run --browser chrome --spec "cypress/e2e/features/login/login.feature"

### Ejecuta prueba API
npx cypress run --browser chrome --spec "cypress/api/test/products.cy.js" 


### Hallazgos y mejoras

### Bug01 - Inconsistencia de HTPPS
****la exploracion de la pagina y ejecucion dela automatizacion se evidencia en la documentacion se indica que la pagina esta con HTTP, por lo cual se recomienda actualizar la documentacion 

### Mejora - Los códigos de negocio retornados en el payload
***Al momento de lanzar una peticion cuando no encuentre un usuario seria idela que sobre el response devuelva una respuesta de el usuario no existe o User not found y no solamente un responseCode: 404 ya que puede ser mas facil la lectura y no con solamente con el codigo de respuesta