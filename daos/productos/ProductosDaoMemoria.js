import ContenedorMemoria from '../../contenedores/ContenedorMemoria.js'

//const uriMongoDb = 'mongodb://localhost:27017/ecommerce';
//import {connectionStringProductos} from '../../config.js';

class ProductosDaoMemoria extends ContenedorMemoria{

    constructor(){
        super()       
    }

    async desconectar(){
        await mongoose.connection.close();
    }
}

export default ProductosDaoMemoria