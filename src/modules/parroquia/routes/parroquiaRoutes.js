const express = require('express');
const parroquiaController = require('../controllers/parroquiaController');

const router = express.Router();

// Rutas para las parroquias
router.post('/parroquias', parroquiaController.addParroquia);
router.get('/parroquias', parroquiaController.getAllParroquias);
router.get('/parroquias/:id', parroquiaController.getParroquiaById);
router.put('/parroquias/:id', parroquiaController.updateParroquiaById);
router.delete('/parroquias/:id', parroquiaController.deleteParroquiaById);

// Otras rutas CRUD...

module.exports = router;
