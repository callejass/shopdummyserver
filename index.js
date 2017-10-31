
var faker = require('faker');
//var datos = require('./alimentadordatos');
var usuarios=require("./datos/usuarios");
var categorias=require("./datos/categorias");
var productos=require("./datos/productos");
var books=require("./datos/books");


//var datosinstance = new datos();
faker.locale = "es";

module.exports = function () {
  //var data = { hechosrelevantes: [], tiposof: [], subtiposof: [], usuarios: [], perfiles: [], smss: [], plantillas: [],mails:[] }

  var data={
    usuarios:usuarios.create(),
    categorias:categorias.create(),
    productos:productos.create(),
    books:books.createbooks(),
    authors:books.createautores()
  };
  
  return data;
}