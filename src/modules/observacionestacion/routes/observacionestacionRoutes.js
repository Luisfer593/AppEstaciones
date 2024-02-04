// /src/modules/observacionestacion/routes/observacionestacionRoutes.js

const express = require('express');
const ObservacionEstacionController = require('../controllers/observacionestacionController');

const router = express.Router();

router.post('/observacionestacion', ObservacionEstacionController.addObservacionEstacion);
router.get('/observacionestacion', ObservacionEstacionController.getAllObservacionesEstacion);
router.put('/observacionestacion', ObservacionEstacionController.updateObservacionEstacion);
router.delete('/observacionestacion', ObservacionEstacionController.deleteObservacionEstacion);

module.exports = router;
