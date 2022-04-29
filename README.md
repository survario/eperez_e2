Emmanuel Perez - Entrega 2 - Avance Proyecto

Para ejecutar la aplicación, es necesario levantar un servidor local mongodb en una carpeta a elección.

Este proyecto incluye la carpeta \miBaseMongo para Pruebas

Ejecute desde cmd CLI:

mongod --dbpath C:\<RUTA de la App>\eperez_e2\miBaseMongo

Para utilizar otra carpeta, ejecute desde cmd CLI:

mongod --dbpath C:\<RUTA de la Carpeta>

Usar base de datos de nombre "ecommerce"

Desde mongo, ejecutar: use ecommerce


Dependencias utilizadas: express, mongoose, firebase-admin


Rutas implementadas:

GET localhost:8080/api/productos

GET localhost:8080/api/productos/:id

POST localhost:8080/api/productos

PUT localhost:8080/productos/:id ****

DELETE localhost:8080/productos/:id ****

GET localhost:8080/api/carrito

GET localhost:8080/api/carrito/:id

POST localhost:8080/api/carrito

POST localhost:8080/api/carrito/:id/productos/:id_prod

DELETE localhost:8080/carrito/:id ****

DELETE localhost:8080/carrito/:id/productos/:id_prod ****