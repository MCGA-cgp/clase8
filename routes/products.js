const express = require('express');

var router = express.Router();

//importar controladora de productos
const controller = require('../products/products')

// Definir las rutas para productos

router.get('/products', controller.getProducts);
router.get('/products/:id', controller.getProductById);

module.exports = router;