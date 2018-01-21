var express = require('express');
var mongoose = require("mongoose");
var router = express.Router();
require("../schemas/User");
var User = mongoose.model("users")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// GET contacto
router.get("/contacto", (req, res, next)=>{
  res.render("contacto", {
      title:"Contáctanos"
  });
});
// POST contacto
router.post("/contacto", (req, res, next)=>{
  var user = new User({
    title:req.body.title,
    author: req.body.author,
    year: req.body.year
  });

  user.save();
  //res.send("Tu dato fue guardado");
  res.redirect("/usuarios");
});

//GET Plantilla usuarios
router.get('/usuarios', (req, res, next) => {
  User.find()
      .limit()
      .exec((err, data) =>{
        //res.send(data);//send o json
        res.render("usuarios",{
            title:"Usuarios",
            data: data
        });
      });
});
router.delete("/borrar/:id", (req, res, next)=>{
  var id = req.params.id;
  User.findByIdAndRemove( id,(err, data)=>{
    res.redirect('/usuarios');
  });
});

//Práctica. Ecma Script 6. Typpescript OPP y Javascript es a Programación Funcional
router.get("/nueva-ruta", (req, res, next)=>{
  res.redirect("/contacto");
})
//get conseguir informacion
//post enviar informacion
//delete borrar
//put editar
module.exports = router;
