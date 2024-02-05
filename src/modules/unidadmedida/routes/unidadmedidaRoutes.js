// /src/modules/unidadmedida/routes/unidadmedidaRoutes.js
const express = require('express');
const UnidadMedidaController = require('../controllers/unidadmedidaController');

const router = express.Router();

router.post('/unidadmedida', UnidadMedidaController.insertarUnidadMedida);
router.put('/unidadmedida/:unidmedi_id', UnidadMedidaController.actualizarUnidadMedida);
router.delete('/unidadmedida/:unidmedi_id', UnidadMedidaController.eliminarUnidadMedida);
router.get('/unidadmedida', UnidadMedidaController.obtenerUnidadesMedida);

// Otras rutas según sea necesario

module.exports = router;
