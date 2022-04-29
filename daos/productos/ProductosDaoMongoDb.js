import ContenedorMongoDB from '../../contenedores/ContenedorMongoDB.js'

//const uriMongoDb = 'mongodb://localhost:27017/ecommerce';
//import {connectionStringProductos} from '../../config.js';
//import {Producto as Model} from '../../models/producto.js'
import { ProductoEsquema } from '../../models/producto.js';

class ProductosDaoMongoDb extends ContenedorMongoDB{

    constructor(){
        super('productos', ProductoEsquema)
}
    async desconectar(){
        await mongoose.connection.close();
    }
}

export default ProductosDaoMongoDb