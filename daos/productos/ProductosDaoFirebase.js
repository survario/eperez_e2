import ContenedorFirebase from '../../contenedores/ContenedorFirebase.js'

//const uriMongoDb = 'mongodb://localhost:27017/ecommerce';
//import {connectionStringProductos} from '../../config.js';

class ProductosDaoFirebase extends ContenedorFirebase{

    constructor(){
        super('productos')
        
    }   
}

export default ProductosDaoFirebase