// /src/modules/marca/routes/marcaRoutes.js

const express = require('express');
const marcaController = require('../controllers/marcaController');

const router = express.Router();

router.post('/marcas', marcaController.addMarca);
router.get('/marcas', marcaController.getAllMarcas);
router.get('/marcas/:id', marcaController.getMarcaById);
router.put('/marcas/:id', marcaController.updateMarcaById);
router.delete('/marcas/:id', marcaController.deleteMarcaById);

// Otras rutas CRUD...

module.exports = router;
