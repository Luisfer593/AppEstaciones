// /src/modules/observacionsensores/routes/observacionsensoresRoutes.js

const express = require('express');
const observacionsensoresController = require('../controllers/observacionsensoresController');

const router = express.Router();

router.post('/observacionsensores', observacionsensoresController.addObservacionSensor);
router.get('/observacionsensores', observacionsensoresController.getAllObservacionesSensores);
router.get('/observacionsensores/:id', observacionsensoresController.getObservacionSensorById);
router.put('/observacionsensores/:id', observacionsensoresController.updateObservacionSensorById);
router.delete('/observacionsensores/:id', observacionsensoresController.deleteObservacionSensorById);

// Otras rutas CRUD...

module.exports = router;
