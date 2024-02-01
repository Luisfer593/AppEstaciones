// /src/modules/variableservidor/routes/variableservidorRoutes.js

const express = require('express');
const variableservidorController = require('../controllers/variableservidorController');

const router = express.Router();

router.post('/variableservidor', variableservidorController.addVariableServidor);
router.get('/variableservidor', variableservidorController.getAllVariablesServidor);
router.get('/variableservidor/:id', variableservidorController.getVariableServidorById);
router.put('/variableservidor/:id', variableservidorController.updateVariableServidorById);
router.delete('/variableservidor/:id', variableservidorController.deleteVariableServidorById);

// Otras rutas CRUD...

module.exports = router;
