// /src/modules/sensores/routes/sensoresRoutes.js
const express = require('express');
const SensoresController = require('../controllers/sensoresController');

const router = express.Router();

router.post('/sensores', SensoresController.insertarSensores);
router.put('/sensores/:sens_id', SensoresController.actualizarSensores);
router.delete('/sensores/:sens_id', SensoresController.eliminarSensores);
router.get('/sensores', SensoresController.obtenerSensores);

// Otras rutas según sea necesario
router.get('/sensores/:id', SensoresController.obtenerSensoresById);
router.get('/sensores/estacion/:idEstacion', SensoresController.obtenerSensoresByEstacionId);

module.exports = router;
