const uriMongoDb= 'mongodb://localhost:27017/ecommerce';

//const connectionStringProductos = uriMongoDb;
//const connectionStringCarritos = uriMongoDb;

export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb://localhost:27017/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        pathCnxCredentials: './bd/clase20-61ac3-firebase-adminsdk-o8bpb-0b8b961381.json'
    },
    archivo: {
        productosFilePath: './productos.txt',
        carritosFilePath: './carritos.txt'
    }

}