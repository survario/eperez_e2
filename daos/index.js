import firebase from 'firebase-admin';
import { productosDao } from './productos/productosIndex.js'
import { carritosDao } from './carritos/carritosIndex.js'

async function obtenerProductos() {
    let catalogo=[];
    catalogo = await productosDao.getAll();
    return catalogo;
}

async function obtenerCarritos() {
    let catalogo=[]
    catalogo = await carritosDao.getAll();
    return catalogo
}

async function obtenerProductoPorId(id) {
    let producto;
    producto = await productosDao.getById(id);
    return producto;
}

async function agregarProducto(prod) {
    let id;
    
    id = await productosDao.save(prod);
    return id;
}

async function actualizarProducto(id, nuevo) {
    let anterior;
    anterior = await productosDao.changeById(id, nuevo);
    return anterior;
}

async function borrarProducto(id) {
    await productosDao.deleteById(id);
}

async function crearCarrito() {
    let id;
    id = await carritosDao.save({productos: []});
    
    return id;
}

async function borrarCarrito(id) {
    carritosDao.deleteById(id);   
}

async function obtenerProductosCarrito(id) {
    let carrito;
    carrito= await carritosDao.getById(id)
    
    if(carrito){
    return carrito.productos;
    } else {
        return null
    }  
}

/*
async function agregarProductoAlCarrito(id_carrito, producto){
    let carrito;
    carrito= await carritosDao.getById(id_carrito);
    let prod
    prod = await productosDao.getById(producto)

    if(carrito){
    
    prod.id = carrito.productos.length > 0 ? carrito.productos[carrito.productos.length-1].id + 1 : 1;
    
    prod.timestamp = Date.now();
    carrito.productos.push(prod);
       
    carritosDao.changeById(id_carrito, carrito);
    return carrito;
    } else {
        return null;
    }
}
*/

async function agregarProductoAlCarrito(id_carrito, producto){
    try {
        let produ = await productosDao.getById(producto)
        const carrito= await carritosDao.getById(id_carrito);
        //const carrito= await this.getById(id_carrito);
        
        produ.id = Number(produ.id) + 6
        produ.timestamp = Date.now();

        const db = firebase.firestore()
        const query = db.collection('carritos')
        const doc = query.doc(id_carrito)

        const item = await doc.update({
            productos: firebase.firestore.FieldValue.arrayUnion(String(produ))
        })
        return true
    } catch (error) {
        return false
    }
}

async function borrarProductoDelCarrito(id_carrito, id_prod){
    let carrito;
    carrito= await carritosDao.getById(id_carrito);
     
    if(carrito.productos.some( elem => elem.id ==id_prod )){

        const index = carrito.productos.findIndex( elem => elem.id == id_prod);
        carrito.productos.splice(index,1);
        carritosDao.changeById(id_carrito, carrito);
        return carrito
        
    } else {
        return null;
    }
}

export {obtenerCarritos, obtenerProductos, obtenerProductoPorId, agregarProducto, actualizarProducto, borrarProducto, crearCarrito, borrarCarrito, obtenerProductosCarrito, agregarProductoAlCarrito, borrarProductoDelCarrito };