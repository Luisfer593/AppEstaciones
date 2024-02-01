// /src/modules/mapas/routes/mapasRoutes.js

const express = require('express');
const mapasController = require('../controllers/mapasController');

const router = express.Router();

// Ruta para agregar un nuevo mapa
router.post('/mapas', mapasController.addMapa);

// Ruta para obtener todos los mapas
router.get('/mapas', mapasController.getAllMapas);

// Ruta para obtener un mapa por su ID
router.get('/mapas/:id', mapasController.getMapaById);

// Ruta para actualizar un mapa por su ID
router.put('/mapas/:id', mapasController.actualizarMapa);

// Ruta para eliminar un mapa por su ID
router.delete('/mapas/:id', mapasController.eliminarMapa);

// Exportar el router
module.exports = router;
