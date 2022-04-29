import ContenedorFirebase from '../../contenedores/ContenedorFirebase.js'

//const URL = 'mongodb://localhost:27017/ecommerce';

class ProductosDaoFirebase extends ContenedorFirebase{

    constructor(){
        super('productos')       
    }   
}

export default ProductosDaoFirebase