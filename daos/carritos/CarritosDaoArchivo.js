import ContenedorArchivo from '../../contenedores/ContenedorArchivo.js'
import config from '../../config.js';

class CarritosDaoArchivo extends ContenedorArchivo{

    constructor(){
        super(config.archivo.carritosFilePath)       
    }

    async desconectar(){
        await mongoose.connection.close();
    }   
}

export default CarritosDaoArchivo