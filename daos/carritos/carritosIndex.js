import config from '../../config.js'

let carritosDao

const db= 'firebase';
//const db= 'mongodb';

switch (db) {
    case 'archivo':
        const { default: CarritosDaoArchivo } = await import('./CarritosDaoArchivo.js')
        carritosDao = new CarritosDaoArchivo(config.fileSystem.path)
        break
    case 'firebase':
        
        const { default: CarritosDaoFirebase } = await import('./CarritosDaoFirebase.js')
        
        carritosDao = new CarritosDaoFirebase()
        
        break
    case 'mongodb':
        const { default: CarritosDaoMongoDb } = await import('./CarritosDaoMongoDb.js')
        carritosDao = new CarritosDaoMongoDb()
        break
    default:
        const { default: CarritosDaoMem } = await import('./CarritosDaoMemoria.js')
        carritosDao = new CarritosDaoMem()
        break
}

export { carritosDao }