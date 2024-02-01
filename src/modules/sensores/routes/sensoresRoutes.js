// /src/modules/sensores/routes/sensoresRoutes.js

const express = require('express');
const sensoresController = require('../controllers/sensoresController');

const router = express.Router();

router.post('/sensores', sensoresController.addSensor);
router.get('/sensores', sensoresController.getAllSensores);
router.get('/sensores/:id', sensoresController.getSensorById);
router.put('/sensores/:id', sensoresController.updateSensorById);
router.delete('/sensores/:id', sensoresController.deleteSensorById);

// Otras rutas CRUD...

module.exports = router;
