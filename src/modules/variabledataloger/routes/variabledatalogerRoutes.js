// /src/modules/variabledataloger/routes/variabledatalogerRoutes.js

const express = require('express');
const variabledatalogerController = require('../controllers/variabledatalogerController');

const router = express.Router();

router.post('/variabledataloger', variabledatalogerController.addVariableDataloger);
router.get('/variabledataloger', variabledatalogerController.getAllVariablesDataloger);
router.get('/variabledataloger/:id', variabledatalogerController.getVariableDatalogerById);
router.put('/variabledataloger/:id', variabledatalogerController.updateVariableDatalogerById);
router.delete('/variabledataloger/:id', variabledatalogerController.deleteVariableDatalogerById);

// Otras rutas CRUD...

module.exports = router;
