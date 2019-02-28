const express = require('express');
const router = express.Router();

//Impotamos esquema de Productos dentro de la direcciçon models/Productos
const Productos = require('../models/Productos');

//Se introducen Todas las fuciones para el proyecto, no es necesario poner /TodoJuegos sino directamente lo que le sigue

//Recoger lo que tenga la base de datos
router.get('/', async (req,res) => {
    const producto = await Productos.find()  //>Similar a Select * From x (SQL)
    res.json(producto);
    //console.log(producto); //Imprime por consola lo contenido en la variable productos
    //res.json(producto); //Imprime en el navegador lo contenido en la variable producto
});

router.get('/:id', async (req,res) => {
    const producto = await Productos.findById(req.params.id)  //>Similar a Select * From x (SQL)
    res.json(producto);
});


//Introducir datos
router.post('/',async (req,res) =>{

    const producto = new Productos(req.body);  //>Similar a Select * From x (SQL)
    //console.log(producto); //Imprime por consola lo contenido en la variable productos
    //res.json(producto); //Imprime en el navegador lo contenido en la variable producto
    await producto.save();
    res.json({
        status:'Producto guardado'
    });
});

//Actualizar datos
router.put('/:id', async (req,res) =>{
  await Productos.findByIdAndUpdate(req.params.id, req.body);
  res.json({
      status:'Producto actualizada'
  });
});

router.delete('/:id', async (req,res) =>{
  await Productos.findByIdAndRemove(req.params.id);
  res.json({
      status:'Producto eliminado '
  });
});

module.exports = router;
