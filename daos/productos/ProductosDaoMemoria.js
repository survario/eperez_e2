import ContenedorMemoria from '../../contenedores/ContenedorMemoria.js'

//const URL = 'mongodb://localhost:27017/ecommerce';

class ProductosDaoMemoria extends ContenedorMemoria{

    constructor(){
        super()       
    }

    async desconectar(){
        await mongoose.connection.close();
    }
}

export default ProductosDaoMemoria