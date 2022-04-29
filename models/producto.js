import mongoose from 'mongoose';
const productosCollection = 'productos';

const ProductoEsquema = mongoose.Schema({
    name: {type: String, required: true, minLength: 1, maxLenghth: 30},
    price: {type: Number, required: true},
    url: {type: String, required: false},
    id: {type: Number, required: true},
    timestamp: {type: Date, required: true, unique: true},
    description: {type: String, required: false},
    code: {type: String, required: true},
    stock: {type: Number, required: true}
});

const Producto = mongoose.model(productosCollection, ProductoEsquema);
export {Producto, ProductoEsquema}