// routes/abreviaturasRoutes.js

const express = require('express');
const AbreviaturasController = require('../controllers/abreviaturasController');

const router = express.Router();

router.post('/abreviaturas', AbreviaturasController.insertarAbreviatura);
router.get('/abreviaturas', AbreviaturasController.getAllAbreviaturas);
router.delete('/abreviaturas/:id', AbreviaturasController.eliminarAbreviatura);


module.exports = router;
