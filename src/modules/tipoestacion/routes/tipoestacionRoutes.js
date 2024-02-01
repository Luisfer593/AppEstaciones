// /src/modules/tipoestacion/routes/tipoestacionRoutes.js

const express = require('express');
const tipoEstacionController = require('../controllers/tipoestacionController');

const router = express.Router();

router.post('/tipoestacion', tipoEstacionController.addTipoEstacion);
router.get('/tipoestacion', tipoEstacionController.getAllTipoEstaciones);
router.get('/tipoestacion/:id', tipoEstacionController.getTipoEstacionById);
router.put('/tipoestacion/:id', tipoEstacionController.updateTipoEstacion);
router.delete('/tipoestacion/:id', tipoEstacionController.deleteTipoEstacion);

module.exports = router;
