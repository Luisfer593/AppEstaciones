// /src/modules/estacion/routes/estacionRoutes.js
const express = require('express');
const EstacionController = require('../controllers/estacionController');

const router = express.Router();

router.post('/estacion', EstacionController.addEstacion);
router.get('/estacion', EstacionController.getAllEstaciones);
// Agrega rutas adicionales si es necesario...

module.exports = router;
