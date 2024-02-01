// /src/modules/mantenimiento/controllers/mantenimientoController.js

const mantenimientoModel = require('../models/mantenimientoModel');

// Controlador para agregar un nuevo registro de mantenimiento
async function addMantenimiento(req, res) {
  try {
    const { nombre, descripcion, detalle, imagen } = req.body;

    // Validar que se proporcionaron nombre, descripcion, detalle e imagen
    if (!nombre || !descripcion || !detalle || !imagen) {
      return res.status(400).json({ error: 'Nombre, descripcion, detalle e imagen son obligatorios' });
    }

    // Llamar a la función del modelo para agregar un nuevo registro de mantenimiento
    const nuevoMantenimiento = await mantenimientoModel.addMantenimiento({ nombre, descripcion, detalle, imagen });

    // Devolver el resultado como respuesta
    res.status(201).json(nuevoMantenimiento);
  } catch (error) {
    console.error('Error al agregar registro de mantenimiento:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para obtener todos los registros de mantenimiento
async function getAllMantenimientos(req, res) {
  try {
    const mantenimientos = await mantenimientoModel.getAllMantenimientos();
    res.json(mantenimientos);
  } catch (error) {
    console.error('Error al obtener registros de mantenimiento:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para obtener un registro de mantenimiento por su ID
async function getMantenimientoById(req, res) {
  try {
    const idMantenimiento = parseInt(req.params.id);
    const mantenimiento = await mantenimientoModel.getMantenimientoById(idMantenimiento);
    if (mantenimiento) {
      res.json(mantenimiento);
    } else {
      res.status(404).send('Registro de mantenimiento no encontrado');
    }
  } catch (error) {
    console.error('Error al obtener registro de mantenimiento por ID:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para actualizar un registro de mantenimiento por su ID
async function actualizarMantenimiento(req, res) {
  try {
    const idMantenimiento = parseInt(req.params.id);
    const newMantenimientoData = req.body;
    const mantenimientoActualizado = await mantenimientoModel.updateMantenimientoById(idMantenimiento, newMantenimientoData);
    res.json(mantenimientoActualizado);
  } catch (error) {
    console.error('Error al actualizar registro de mantenimiento:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para eliminar un registro de mantenimiento por su ID
async function eliminarMantenimiento(req, res) {
  try {
    const idMantenimiento = parseInt(req.params.id);
    const mantenimientoEliminado = await mantenimientoModel.deleteMantenimientoById(idMantenimiento);
    res.json(mantenimientoEliminado);
  } catch (error) {
    console.error('Error al eliminar registro de mantenimiento:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Exportar las funciones del controlador
module.exports = {
  addMantenimiento,
  getAllMantenimientos,
  getMantenimientoById,
  actualizarMantenimiento,
  eliminarMantenimiento,
};
