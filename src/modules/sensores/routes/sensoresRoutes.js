// /src/modules/sensores/routes/sensoresRoutes.js

const express = require('express');
const SensoresController = require('../controllers/sensoresController');

const router = express.Router();

router.post('/sensores', SensoresController.addSensor);
router.get('/sensores', SensoresController.getAllSensores);
router.put('/sensores', SensoresController.editSensor);
router.delete('/sensores', SensoresController.deleteSensor);

module.exports = router;