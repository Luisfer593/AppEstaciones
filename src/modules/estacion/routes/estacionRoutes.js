// /src/modules/estacion/routes/estacionRoutes.js
const express = require('express');
const EstacionController = require('../controllers/estacionController');

const router = express.Router();

router.post('/estacion', EstacionController.insertarEstacion);
router.put('/estacion/:esta_id', EstacionController.actualizarEstacion);
router.delete('/estacion/:esta_id', EstacionController.eliminarEstacion);
router.get('/estacion', EstacionController.obtenerEstaciones);

// Otras rutas según sea necesario

module.exports = router;