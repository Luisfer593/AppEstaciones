// /src/modules/unidadmedida/routes/unidadmedidaRoutes.js

const express = require('express');
const unidadmedidaController = require('../controllers/unidadmedidaController');

const router = express.Router();

router.post('/unidadmedida', unidadmedidaController.addUnidadMedida);
router.get('/unidadmedida', unidadmedidaController.getAllUnidadesMedida);
router.get('/unidadmedida/:id', unidadmedidaController.getUnidadMedidaById);
router.put('/unidadmedida/:id', unidadmedidaController.updateUnidadMedidaById);
router.delete('/unidadmedida/:id', unidadmedidaController.deleteUnidadMedidaById);

// Otras rutas CRUD...

module.exports = router;
