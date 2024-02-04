// routes/abreviaturasRoutes.js
const express = require('express');
const AbreviaturasController = require('../controllers/abreviaturasController');

const router = express.Router();

router.post('/abreviaturas', AbreviaturasController.addAbreviatura);
router.get('/abreviaturas', AbreviaturasController.getAllAbreviaturas);

module.exports = router;
