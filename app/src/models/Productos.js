
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Esquema para Productos
const Productos = new Schema({
  id: Number,
  anunciante: String,
  fecha: String,
  titulo: String ,
  foto: String ,
  descripcion: String,
  tipo: String ,
  nivel: String ,
  provincia: String ,
  localidad: String ,
  precio: Number  ,

});

module.exports = mongoose.model('Productos', Productos);
