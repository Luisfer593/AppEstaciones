// /src/modules/admins/routes/adminsRoutes.js

const express = require('express');
const adminsController = require('../controllers/adminsController');

const router = express.Router();

// Ruta para agregar un nuevo admin
router.post('/admins', adminsController.addAdmin);

// Ruta para obtener todos los admins
router.get('/admins', adminsController.getAllAdmins);

// Ruta para obtener un admin por su ID
router.get('/admins/:id', adminsController.getAdminById);

// Ruta para actualizar un admin por su ID
router.put('/admins/:id', adminsController.actualizarAdmin);

// Ruta para eliminar un admin por su ID
router.delete('/admins/:id', adminsController.eliminarAdmin);

// Otras rutas CRUD...

// Exportar el router
module.exports = router;
