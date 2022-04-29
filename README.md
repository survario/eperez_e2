Emmanuel Perez - Entrega 2 - Avance Proyecto - Firebase / MongoDB

Para ejecutar la aplicación, es necesario levantar un servidor local mongodb en una carpeta a elección.

Este proyecto incluye la carpeta \DBMongo para Pruebas

Ejecute desde cmd CLI:

mongod --dbpath C:\<RUTA de la App>\eperez_e2\DBMongo

Para utilizar otra carpeta, ejecute desde cmd CLI:

mongod --dbpath C:\<RUTA de la Carpeta>

Usar base de datos de nombre "ecommerce"

Desde mongo, ejecutar: use ecommerce


La aplicación se conecta a Firebase y a mongodb, 

la colección "productos" está conectada a mongodb,

la colección "carritos" está conectada a firebase, 

el método post producto by id en carrito by id busca los productos en mongodb y los guarda en "carritos" (firebase)


Archivo productos.txt incluye algunos ejemplos para pruebas.


Para conectar a otra Firebase Database:

1- Cambiar el archivo de credenciales ubicado en la carpeta bd/ por el archivo correspondiente-
2- En el archivo config.js cambiar la URL en firebase: { pathCnxCredentials: <URL de la base de datos Firebase> }


Dependencias utilizadas: express, mongoose, firebase-admin


Rutas:

GET localhost:8080/api/productos

GET localhost:8080/api/productos/:id

POST localhost:8080/api/productos

PUT localhost:8080/productos/:id **** NO IMPLEMENTADA

DELETE localhost:8080/productos/:id **** NO IMPLEMENTADA

GET localhost:8080/api/carrito

GET localhost:8080/api/carrito/:id

POST localhost:8080/api/carrito

POST localhost:8080/api/carrito/:id/productos/:id_prod

DELETE localhost:8080/carrito/:id **** NO IMPLEMENTADA

DELETE localhost:8080/carrito/:id/productos/:id_prod **** NO IMPLEMENTADA