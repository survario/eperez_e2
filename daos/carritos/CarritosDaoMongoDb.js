import ContenedorMongoDB from '../../contenedores/ContenedorMongoDB.js';

import { CarritoEsquema } from '../../models/carrito.js';

class CarritosDaoMongoDb extends ContenedorMongoDB{

    constructor(){
        super('carritos', CarritoEsquema)       
    }

    async desconectar(){
        await mongoose.connection.close();
    }  
}

export default CarritosDaoMongoDb