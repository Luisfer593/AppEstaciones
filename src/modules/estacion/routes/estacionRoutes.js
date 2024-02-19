// /src/modules/estacion/routes/estacionRoutes.js
const express = require('express');
const EstacionController = require('../controllers/estacionController');
const router = express.Router();


// Otras rutas para manejar las operaciones CRUD de estaciones
router.post('/estacion', EstacionController.insertarEstacion); 
router.put('/estacion/:esta_id', EstacionController.actualizarEstacion);
router.delete('/estacion/:esta_id', EstacionController.eliminarEstacion);
router.get('/estacion', EstacionController.obtenerEstaciones);
router.get('/estacion/chimborazo', EstacionController.obtenerEstacionesChimborazo);

// Otras rutas según sea necesario...

module.exports = router;

