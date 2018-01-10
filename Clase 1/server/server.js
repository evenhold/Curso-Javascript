"use-strict";
//Llamamos al módulo express
//const app = require('express');
//En Angular se ve el import.
var express = require("express");
//var router = express.Router();
//llamamos a mongoose
var mongoose = require("mongoose");

var app = express();

//var server = http.createServer(app);
var puerto = 3000;
var server = app.listen(puerto, function(){
    console.log("Servidor escuchando en el puerto:" + puerto);
});

//conexion con la base de datos MongoDB
var conection = mongoose.connect("mongodb://data1:123456@ds147167.mlab.com:47167/dbcrud", function(error){
    if(error){
      console.log("Error al conectarse a la base de datos");
    }else{
      console.log("Conectado a la base de datos");
    }
});

var rutas = require("./rutas");
app.use("/rutas", rutas);
