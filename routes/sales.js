const express = require('express');

var router = express.Router();

//importar controladora de ventas
const controller = require('../sales/sales')

// Definir las rutas para ventas

router.get('/sales', controller.getSales);
router.get('/sales/:id', controller.getSalesById);


module.exports = router;