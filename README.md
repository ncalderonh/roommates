# Roommates App

## Descripción

La **Roommates App** es una aplicación diseñada para gestionar los gastos compartidos entre compañeros de habitación. La aplicación permite agregar roommates, registrar gastos y llevar un historial detallado de los mismos. Cada roommate puede ver cuánto debe o cuánto tiene a su favor.

## Características

- **Agregar Roommates**: Los usuarios pueden agregar nuevos roommates a la lista.
- **Registrar Gastos**: Los usuarios pueden registrar nuevos gastos asociados a un roommate específico.
- **Historial de Gastos**: La aplicación muestra un historial de todos los gastos registrados, permitiendo su edición y eliminación.
- **Resumen de Deudas y Créditos**: Cada roommate puede ver cuánto debe o cuánto ha recibido.

## Estructura del Proyecto

```lua
.
├── index.js
├── controllers/
│   ├── roommatesController.js
│   └── gastosController.js
├── utils/
│   ├── randomUser.js
│   └── emailSender.js
├── routes/
│   ├── gastosRouter.js
│   └── roommatesRouter.js
├── models/
│   ├── roommatesQueries.js
│   └── gastosQueries.js
├── views/
│   └── index.html
├── data/
│   ├── roommates.json
│   └── gastos.json
└── package.json
```

## Instalación

1. Clona este repositorio en tu máquina local:
    ```sh
    git clone https://github.com/tu-usuario/roommates-app.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd roommates-app
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

1. Inicia el servidor:
    ```sh
    npm start
    ```
2. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

## API Endpoints

### Roommates

- **GET /roommates**: Obtiene la lista de roommates.
- **POST /roommates**: Agrega un nuevo roommate.

### Gastos

- **GET /gastos**: Obtiene la lista de gastos.
- **POST /gastos**: Agrega un nuevo gasto.
- **PUT /gastos/:id**: Actualiza un gasto existente.
- **DELETE /gastos/:id**: Elimina un gasto existente.

## Estructura de Archivos

### `index.js`

Archivo principal que configura y arranca el servidor Express. Define las rutas principales y sirve el archivo `index.html`.

### `controllers/roommatesController.js`

Contiene la lógica para manejar las operaciones relacionadas con los roommates, como obtener la lista de roommates y agregar un nuevo roommate.

### `controllers/gastosController.js`

Contiene la lógica para manejar las operaciones relacionadas con los gastos, como obtener la lista de gastos, agregar un nuevo gasto, actualizar un gasto existente y eliminar un gasto.

### `utils/randomUser.js`

Utiliza la API de RandomUser para generar datos aleatorios de nuevos roommates.

### `utils/emailSender.js`

Configura y envía correos electrónicos (utilizado si decides implementar notificaciones por correo).

### `routes/roommatesRouter.js`

Define las rutas relacionadas con los roommates y asigna las funciones del controlador correspondiente.

### `routes/gastosRouter.js`

Define las rutas relacionadas con los gastos y asigna las funciones del controlador correspondiente.

### `models/roommatesQueries.js`

Contiene las funciones para interactuar con los datos de los roommates almacenados en el archivo JSON.

### `models/gastosQueries.js`

Contiene las funciones para interactuar con los datos de los gastos almacenados en el archivo JSON.

### `views/index.html`

Interfaz de usuario principal de la aplicación. Contiene el diseño y los scripts para interactuar con la API.

### `data/roommates.json`

Archivo JSON que almacena los datos de los roommates.

### `data/gastos.json`

Archivo JSON que almacena los datos de los gastos.

## Tecnologías Utilizadas

- **Node.js**
- **Express.js**
- **Bootstrap**
- **jQuery**
- **Fetch API**

## Contribuir

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y commitea (`git commit -am 'Agrega nueva funcionalidad'`).
4. Empuja los cambios a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
