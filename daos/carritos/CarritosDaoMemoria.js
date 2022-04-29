import ContenedorMemoria from '../../contenedores/ContenedorMemoria.js'

class CarritosDaoMemoria extends ContenedorMemoria{

    constructor(){
        super()        
    }

    async desconectar(){
        await mongoose.connection.close();
    }  
}

export default CarritosDaoMemoria