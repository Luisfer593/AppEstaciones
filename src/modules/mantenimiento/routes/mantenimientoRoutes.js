// /src/modules/mantenimiento/routes/mantenimientoRoutes.js

const express = require('express');
const mantenimientoController = require('../controllers/mantenimientoController');

const router = express.Router();

// Ruta para agregar un nuevo registro de mantenimiento
router.post('/mantenimiento', mantenimientoController.addMantenimiento);

// Ruta para obtener todos los registros de mantenimiento
router.get('/mantenimiento', mantenimientoController.getAllMantenimientos);

// Ruta para obtener un registro de mantenimiento por su ID
router.get('/mantenimiento/:id', mantenimientoController.getMantenimientoById);

// Ruta para actualizar un registro de mantenimiento por su ID
router.put('/mantenimiento/:id', mantenimientoController.actualizarMantenimiento);

// Ruta para eliminar un registro de mantenimiento por su ID
router.delete('/mantenimiento/:id', mantenimientoController.eliminarMantenimiento);

// Exportar el router
module.exports = router;
