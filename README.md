Emmanuel Perez - Entrega 2 - Avance Proyecto - Firebase / MongoDB

Para ejecutar la aplicación, es necesario: 

1. Configurar Firebase según se explica en este documento.

2. levantar un servidor local mongodb en una carpeta a elección.

Este proyecto incluye la carpeta \bMongo para Pruebas

Ejecute desde cmd CLI:

mongod --dbpath C:\<RUTA de la App>\bMongo

Para utilizar otra carpeta, ejecute desde cmd CLI:

mongod --dbpath C:\<RUTA de la Carpeta>

Usar base de datos de nombre "ecommerce"

Desde mongo, ejecutar: use ecommerce


La aplicación se conecta a Firebase y a MongoDB, 

la colección "productos" está conectada a MongoDB,

la colección "carritos" está conectada a Firebase, 

el método post producto by id en carrito by id busca los productos en mongodb y los guarda en "carritos" (firebase)


Archivo productos.txt incluye algunos ejemplos para pruebas.


1. Para configurar Firebase Database:

a- Agregar el archivo .json con las credenciales correspondientes en la carpeta bd/

b- En el archivo config.js cambiar la URL en firebase: { pathCnxCredentials: "URL de la base de datos Firebase" }


2. Para correr todas las colecciones desde MongoDB:

- En el archivo \daos\carritosIndex.js comentar línea 5 ( //const db= 'firebase'; ) y descomentar línea 6 ( const db= 'mongodb'; )


2. Para correr todas las colecciones desde MongoDB:

a- En el archivo \daos\productosIndex.js descomentar línea 5 ( const db= 'firebase'; ) y comentar línea 6 ( //const db= 'mongodb'; )

b- En el archivo \daos\index.js descomentar el método "agregarProductoAlCarrito" entre las líneas 62 a 82 y comentar el método del mismo nombre entre las líneas 84 a 104


Dependencias utilizadas: express, mongoose, firebase-admin


Rutas:

GET localhost:8080/api/productos

GET localhost:8080/api/productos/:id

POST localhost:8080/api/productos

PUT localhost:8080/api/productos/:id

DELETE localhost:8080/api/productos/:id

GET localhost:8080/api/carrito

GET localhost:8080/api/carrito/:id

POST localhost:8080/api/carrito

POST localhost:8080/api/carrito/:id/productos/:id_prod

DELETE localhost:8080/api/carrito/:id

DELETE localhost:8080/api/carrito/:id/productos/:id_prod