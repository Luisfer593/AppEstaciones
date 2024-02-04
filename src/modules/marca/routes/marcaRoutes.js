// /src/modules/marca/routes/marcaRoutes.js

const express = require('express');
const MarcaController = require('../controllers/marcaController');

const router = express.Router();

router.post('/marca', MarcaController.addMarca);
router.get('/marca', MarcaController.getAllMarcas);
router.put('/marca', MarcaController.updateMarca);
router.delete('/marca', MarcaController.deleteMarca);

module.exports = router;
