const express = require('express');
const VariableDataloggerController = require('../controllers/variabledataloggerController');

const router = express.Router();

router.post('/variabledatalogger', VariableDataloggerController.insertarVariableDatalogger);
router.put('/variabledatalogger/:varidata_id', VariableDataloggerController.actualizarVariableDatalogger);
router.delete('/variabledatalogger/:varidata_id', VariableDataloggerController.eliminarVariableDatalogger);
router.get('/variabledatalogger', VariableDataloggerController.obtenerVariablesDatalogger);

// Otras rutas según sea necesario

module.exports = router;
