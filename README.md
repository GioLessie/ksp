# Employees App

Aplicación de gestión de Empleados

## Frontend
Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

## API

La api que consume está construida con [AWS Lambdas](https://aws.amazon.com/es/lambda/) y [Api Gateway](https://aws.amazon.com/es/api-gateway/).
Para agilizar la autenticación al sitio, se realizó mediante Firebase Autenticathor

## Base de datos

La persistencia está almacenada en [DynamoDB](https://aws.amazon.com/es/dynamodb/) para los datos y en [S3](https://aws.amazon.com/es/s3/) para las imágenes.

## Versión desplegada

Se puede encontrar una versión desplegada de la aplicación en [Github Pages](https://giolessie.github.io/ksp/)

## Áreas de mejora identificadas

- Validaciones de formularios
- Manejo del estado en arquitectura Redux a través de NGRX
- Creación de método en el servicio EmployeesService para obtener los diferentes departamentos
- Implementar la posibilidad de actualizar la imagen de cada empleado
- Implementar un loader que se ejecute según un interceptor de peticiones http