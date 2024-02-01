const express = require('express');
const comunidadController = require('../controllers/comunidadController');

const router = express.Router();

// Rutas para las comunidades
router.post('/comunidades', comunidadController.addComunidad);
router.get('/comunidades', comunidadController.getAllComunidades);
router.get('/comunidades/:id', comunidadController.getComunidadById);
router.put('/comunidades/:id', comunidadController.updateComunidadById);
router.delete('/comunidades/:id', comunidadController.deleteComunidadById);

// Otras rutas CRUD...

module.exports = router;
