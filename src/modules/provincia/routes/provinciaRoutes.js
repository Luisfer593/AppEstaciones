const express = require('express');
const provinciaController = require('../controllers/provinciaController');

const router = express.Router();

// Rutas para las provincias
router.post('/provincias', provinciaController.addProvincia);
router.get('/provincias', provinciaController.getAllProvincias);
router.get('/provincias/:id', provinciaController.getProvinciaById);
router.put('/provincias/:id', provinciaController.updateProvinciaById);
router.delete('/provincias/:id', provinciaController.deleteProvinciaById);

// Otras rutas CRUD...

module.exports = router;
