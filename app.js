// Importo librerias
var express = require('express');

// Instacio la app
var app = express();

// Defino estension json
app.use(express.json()) 

// Importo las rutas
const products = require('./routes/products');

// Defino las rutas
app.use('/', products);


//exportar la app
module.exports = app;
