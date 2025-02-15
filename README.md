# eCommerce Project

Este es un proyecto de eCommerce con un backend en Node.js con Express y TypeORM y un frontend en Next.js.

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión recomendada: 18+)
- [PostgreSQL](https://www.postgresql.org/) (para la base de datos)

## Configuración del Backend

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tlapro/ecommerce.git
   cd ecommerce/back
   ```
2. Instalar las dependencias:
   ```sh
   npm install
   ```
3. Crear un archivo `.env` basado en `.env.example` y completar los valores:
   ```sh
   cp .env.example .env
   ```
4. Ejecutar las migraciones de la base de datos:
   ```sh
   npm run typeorm migration:run
   ```
5. Iniciar el servidor:
   ```sh
   npm start
   ```

## Configuración del Frontend

1. Navegar a la carpeta `front`:
   ```sh
   cd ../front
   ```
2. Instalar las dependencias:
   ```sh
   npm install
   ```
3. Crear un archivo `.env` basado en `.env.example` y completar los valores:
   ```sh
   cp .env.example .env
   ```
4. Iniciar el servidor de desarrollo:
   ```sh
   npm run dev
   ```

## Tecnologías Utilizadas

### Backend
- Node.js
- Express
- TypeORM
- PostgreSQL
- JWT para autenticación
- Swagger para documentación de la API

### Frontend
- Next.js
- React
- Tailwind CSS
- Axios
- Bootstrap
- SweetAlert2

## Notas Adicionales
- El backend se ejecuta por defecto en el puerto `3001`
- El frontend se ejecuta por defecto en el puerto `3000`
- Asegúrate de configurar correctamente los valores en el archivo `.env` antes de iniciar el proyecto.


