// /src/modules/observacionsensores/routes/observacionsensoresRoutes.js

const express = require('express');
const ObservacionSensoresController = require('../controllers/observacionsensoresController');

const router = express.Router();

router.post('/observacionsensores', ObservacionSensoresController.addObservacionSensores);
router.get('/observacionsensores', ObservacionSensoresController.getAllObservacionesSensores);
router.put('/observacionsensores', ObservacionSensoresController.updateObservacionSensores);
router.delete('/observacionsensores', ObservacionSensoresController.deleteObservacionSensores);

module.exports = router;

