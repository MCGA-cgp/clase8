// Importo librerias
var express = require('express');

// Instacio la app
var app = express();

// Defino estension json
app.use(express.json()) 

// Importo las rutas
const products = require('./routes/products');
const clients = require('./routes/clients');
const sales = require('./routes/sales');

// Defino las rutas
app.use('/', products);
app.use('/', clients);
app.use('/', sales);

//exportar la app
module.exports = app;
