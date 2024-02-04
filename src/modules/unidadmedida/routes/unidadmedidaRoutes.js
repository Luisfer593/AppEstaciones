// /src/modules/unidadmedida/routes/unidadmedidaRoutes.js

const express = require('express');
const UnidadmedidaController = require('../controllers/unidadmedidaController');

const router = express.Router();

router.post('/unidadmedida', UnidadmedidaController.addUnidadmedida);
router.get('/unidadmedida', UnidadmedidaController.getAllUnidadmedida);
router.get('/unidadmedida/:unidmedi_id', UnidadmedidaController.getUnidadmedidaById);
router.put('/unidadmedida/:unidmedi_id', UnidadmedidaController.updateUnidadmedidaById);
router.delete('/unidadmedida/:unidmedi_id', UnidadmedidaController.deleteUnidadmedidaById);

module.exports = router;
