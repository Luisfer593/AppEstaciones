// /src/modules/variableservidor/routes/variableservidorRoutes.js
const express = require('express');
const VariableServidorController = require('../controllers/variableservidorController');

const router = express.Router();

router.get('/variableservidor/lista', VariableServidorController.obtenerVariableServidorLista);
router.get('/variableservidor/:id_variserv', VariableServidorController.obtenerVariableServidorById);
router.get('/variableservidor/abreviatura/:strabreviatura', VariableServidorController.obtenerVariableServidorByAbreviatura);
router.get('/variableservidor/unidmedi/:id_unidmedi', VariableServidorController.obtenerVariableServidorByIdUnidMedi);
router.get('/variableservidor/comprobarabreviatura/:strabreviatura', VariableServidorController.comprobarAbreviatura);
router.post('/variableservidor', VariableServidorController.insertarVariableServidor);
router.put('/variableservidor', VariableServidorController.actualizarVariableServidor);
router.delete('/variableservidor/:id_variserv', VariableServidorController.eliminarVariableServidor);

module.exports = router;
