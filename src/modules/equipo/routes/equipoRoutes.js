// /src/modules/equipo/routes/equipoRoutes.js

const express = require('express');
const equipoController = require('../controllers/equipoController');

const router = express.Router();

// Ruta para agregar un nuevo miembro de equipo
router.post('/equipo', equipoController.addMiembroEquipo);

// Ruta para obtener todos los miembros de equipo
router.get('/equipo', equipoController.getAllMiembrosEquipo);

// Ruta para obtener un miembro de equipo por su ID
router.get('/equipo/:id', equipoController.getMiembroEquipoById);

// Ruta para actualizar un miembro de equipo por su ID
router.put('/equipo/:id', equipoController.actualizarMiembroEquipo);

// Ruta para eliminar un miembro de equipo por su ID
router.delete('/equipo/:id', equipoController.eliminarMiembroEquipo);

// Exportar el router
module.exports = router;
