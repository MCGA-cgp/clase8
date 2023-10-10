const express = require('express');

var router = express.Router();

//importar controladora de Clientes

const controller = require('../clients/clients')

// Definir las rutas para Clientes

router.get('/clients', controller.getClients);
router.post('/clients', controller.addClients);
router.put('/clients/:id', controller.updateClients);
router.delete('/clients/:id', controller.deleteClients);

module.exports = router;