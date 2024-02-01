// /src/modules/estacion/routes/estacionRoutes.js

const express = require('express');
const estacionController = require('../controllers/estacionController');

const router = express.Router();

router.post('/estaciones', estacionController.addEstacion);
router.get('/estaciones', estacionController.getAllEstaciones);
router.get('/estaciones/:id', estacionController.getEstacionById);
router.put('/estaciones/:id', estacionController.updateEstacionById);
router.delete('/estaciones/:id', estacionController.deleteEstacionById);

// Otras rutas CRUD...

module.exports = router;
