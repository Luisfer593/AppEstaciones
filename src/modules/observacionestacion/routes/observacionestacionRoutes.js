// /src/modules/observacionestacion/routes/observacionestacionRoutes.js

const express = require('express');
const observacionestacionController = require('../controllers/observacionestacionController');

const router = express.Router();

router.post('/observacionesestacion', observacionestacionController.addObservacionEstacion);
router.get('/observacionesestacion', observacionestacionController.getAllObservacionesEstacion);
router.get('/observacionesestacion/:id', observacionestacionController.getObservacionEstacionById);
router.put('/observacionesestacion/:id', observacionestacionController.updateObservacionEstacionById);
router.delete('/observacionesestacion/:id', observacionestacionController.deleteObservacionEstacionById);

// Otras rutas CRUD...

module.exports = router;
