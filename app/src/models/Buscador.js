var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Esquema para Buscador
const Buscador = new Schema({
  id: Number,
  busqueda: String,
  tipo: String,
  ciudad: String ,

});

module.exports = mongoose.model('Buscador', Buscador);
