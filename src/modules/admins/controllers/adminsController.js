// /src/modules/admins/controllers/adminsController.js

const adminsModel = require('../models/adminsModel');

// Controlador para agregar un nuevo admin
async function addAdmin(req, res) {
  try {
    const { nombre, contrasena } = req.body;

    // Validar que se proporcionaron nombre y contraseña
    if (!nombre || !contrasena) {
      return res.status(400).json({ error: 'Nombre y contraseña son obligatorios' });
    }

    // Llamar a la función del modelo para agregar un nuevo admin
    const nuevoAdmin = await adminsModel.addAdmin({ nombre, contrasena });

    // Devolver el resultado como respuesta
    res.status(201).json(nuevoAdmin);
  } catch (error) {
    console.error('Error al agregar admin:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para obtener todos los admins
async function getAllAdmins(req, res) {
  try {
    const admins = await adminsModel.getAllAdmins();
    res.json(admins);
  } catch (error) {
    console.error('Error al obtener admins:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para obtener un admin por su ID
async function getAdminById(req, res) {
  try {
    const idAdmin = parseInt(req.params.id);
    const admin = await adminsModel.getAdminById(idAdmin);
    if (admin) {
      res.json(admin);
    } else {
      res.status(404).send('Admin no encontrado');
    }
  } catch (error) {
    console.error('Error al obtener admin por ID:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para actualizar un admin por su ID
async function actualizarAdmin(req, res) {
  try {
    const idAdmin = parseInt(req.params.id);
    const newAdminData = req.body;
    const adminActualizado = await adminsModel.updateAdminById(idAdmin, newAdminData);
    res.json(adminActualizado);
  } catch (error) {
    console.error('Error al actualizar admin:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para eliminar un admin por su ID
async function eliminarAdmin(req, res) {
  try {
    const idAdmin = parseInt(req.params.id);
    const adminEliminado = await adminsModel.deleteAdminById(idAdmin);
    res.json(adminEliminado);
  } catch (error) {
    console.error('Error al eliminar admin:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Otras funciones CRUD...

// Exportar las funciones del controlador
module.exports = {
  addAdmin,
  getAllAdmins,
  getAdminById,
  actualizarAdmin,
  eliminarAdmin,
  // Otras funciones CRUD...
};
