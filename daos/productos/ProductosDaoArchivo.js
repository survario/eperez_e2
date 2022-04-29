import ContenedorArchivo from '../../contenedores/ContenedorArchivo.js'
import config from '../../config.js';
//const uriMongoDb = 'mongodb://localhost:27017/ecommerce';
//import {connectionStringProductos} from '../../config.js';

class ProductosDaoArchivo extends ContenedorArchivo{

    constructor(){
        super(config.archivo.productosFilePath)
        
    }

    async desconectar(){
        await mongoose.connection.close();
    }
}

export default ProductosDaoArchivo