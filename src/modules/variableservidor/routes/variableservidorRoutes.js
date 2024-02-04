// /src/modules/variableservidor/routes/variableservidorRoutes.js

const express = require('express');
const VariableservidorController = require('../controllers/variableservidorController');

const router = express.Router();

router.post('/variableservidor', VariableservidorController.addVariableservidor);
router.get('/variableservidor', VariableservidorController.getAllVariableservidor);
router.get('/variableservidor/:variserv_id', VariableservidorController.getVariableservidorById);
router.put('/variableservidor/:variserv_id', VariableservidorController.updateVariableservidorById);
router.delete('/variableservidor/:variserv_id', VariableservidorController.deleteVariableservidorById);

module.exports = router;
