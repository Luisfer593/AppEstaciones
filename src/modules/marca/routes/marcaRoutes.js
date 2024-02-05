// /src/modules/marca/routes/marcaRoutes.js
const express = require('express');
const MarcaController = require('../controllers/marcaController');

const router = express.Router();

router.post('/marca', MarcaController.insertarMarca);
router.put('/marca/:marc_id', MarcaController.actualizarMarca);
router.delete('/marca/:marc_id', MarcaController.eliminarMarca);
router.get('/marca', MarcaController.listarMarcas);

module.exports = router;
