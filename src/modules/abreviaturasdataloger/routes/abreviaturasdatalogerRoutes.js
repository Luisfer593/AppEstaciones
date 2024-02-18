const express = require('express');
const AbreviaturasDatalogerController = require('../controllers/abreviaturasdatalogerController');

const router = express.Router();

router.post('/abreviaturasdataloger', AbreviaturasDatalogerController.insertarAbreviatura);
router.put('/abreviaturasdataloger/:abredata_id', AbreviaturasDatalogerController.actualizarAbreviatura);
router.delete('/abreviaturasdataloger/:abredata_id', AbreviaturasDatalogerController.eliminarAbreviatura);
router.get('/abreviaturasdataloger', AbreviaturasDatalogerController.obtenerAbreviaturas);

// Otras rutas según sea necesario
router.get('/abreviaturas/:abreviatura', AbreviaturasDatalogerController.obtenerVariablesDatalogerByAbreviatura);

module.exports = router;
