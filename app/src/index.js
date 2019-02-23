require('rootpath')()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


// //Conexión con la base de datos, cuando se despliegue en servidor  se tendrá que cambiar la dirección
// mongoose.connect('mongodb://localhost/CosasDeClase')
//   .then(db => console.log('DB conectada')) //Imprimir DB conectada en caso de que todo vaya bien
//   .catch(err => console.error(err)); //Imprime error si no se puedo conectar

//Ajustes
  //Si el servidor tiene puerto lo coge sino pone el puerto 3000
  app.set('port', process.env.PORT || 3000  );

//Ficheros estáticos, coge el index.html dentro de public
app.use(express.static(__dirname + '/public'));

//Sever escucha en el puerto x te lo muestra por pantalla
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});
