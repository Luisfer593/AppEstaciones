// routes/abreviaturasRoutes.js

const express = require('express');
const AbreviaturasController = require('../controllers/abreviaturasController');

const router = express.Router();

router.post('/abreviaturas', AbreviaturasController.insertarAbreviatura);
router.put('/abreviaturas/:abre_id', AbreviaturasController.actualizarAbreviatura);
router.delete('/abreviaturas/:abre_id', AbreviaturasController.eliminarAbreviatura);
router.get('/abreviaturas', AbreviaturasController.obtenerAbreviaturas);

// Otras rutas según sea necesario

module.exports = router;
