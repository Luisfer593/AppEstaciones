// /src/modules/tipoestacion/routes/tipoestacionRoutes.js

const express = require('express');
const TipoestacionController = require('../controllers/tipoestacionController');

const router = express.Router();

router.post('/tipoestacion', TipoestacionController.addTipoestacion);
router.get('/tipoestacion', TipoestacionController.getAllTipoestacion);
router.get('/tipoestacion/:tipoesta_id', TipoestacionController.getTipoestacionById);
router.put('/tipoestacion/:tipoesta_id', TipoestacionController.updateTipoestacionById);
router.delete('/tipoestacion/:tipoesta_id', TipoestacionController.deleteTipoestacionById);

module.exports = router;
