import express from 'express';

const {Router}= express;
const routerCarrito = new Router();

import {obtenerCarritos, crearCarrito, borrarCarrito, obtenerProductosCarrito, agregarProductoAlCarrito, borrarProductoDelCarrito} from '../daos/index.js';

//routerCarrito.use(express.json());
//routerCarrito.use(express.urlencoded({ extended: true }))

routerCarrito.get('/', async (req, res) => {
    let catalogo =[];
    catalogo = await obtenerCarritos();
    res.json(catalogo); 
})

routerCarrito.post('/', async (req, res) => {     
    let id_carrito;
    id_carrito = await crearCarrito();
    res.json({mensaje: `Nuevo carrito creado`});
})


routerCarrito.delete('/:id', async (req, res) => {     
    let id_carrito;
    id_carrito = await borrarCarrito(req.params.id);
    res.json({mensaje: ` Carrito con id ${req.params.id} eliminado`});
})


routerCarrito.get('/:id', async(req, res) => {
    let catalogo;
    catalogo = await obtenerProductosCarrito(req.params.id);
    
    if(catalogo){
        res.json(catalogo);
    } else {
        res.json({mensaje: `No existe el carrito ${req.params.id}`});
    }      
})

routerCarrito.post('/:id/productos/:id_prod', async (req, res) => {
        
    let carrito_modificado= await agregarProductoAlCarrito(req.params.id, req.params.id_prod);
    if(carrito_modificado){
       // res.json(carrito_modificado);
       res.json({mensaje: `Producto del tipo id: ${req.params.id_prod} agregado al carrito id: ${req.params.id}`})
    } else {
        res.json({mensaje: `No existe el carrito ${req.params.id} o el producto ${req.params.id_prod}`});
    }
})

routerCarrito.delete('/:id/productos/:id_prod', async (req, res) => {
    let carrito;  
    carrito = await borrarProductoDelCarrito(req.params.id, req.params.id_prod)
    if(carrito){
    res.json({mensaje: `Producto ${req.params.id_prod} del carrito ${req.params.id} eliminado`})
    } else { 
        res.json({mensaje: `Producto ${req.params.id_prod} en carrito ${req.params.id} no existe`});
    }
})

export default routerCarrito;