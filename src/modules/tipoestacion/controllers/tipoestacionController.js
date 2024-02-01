// /src/modules/tipoestacion/controllers/tipoestacionController.js

const tipoEstacionModel = require('../models/tipoestacionModel');

// Controlador para agregar un nuevo tipo de estación
async function addTipoEstacion(req, res) {
  try {
    const { tipoesta_nombre } = req.body;

    // Validar que se proporcionó el nombre del tipo de estación
    if (!tipoesta_nombre) {
      return res.status(400).json({ error: 'El nombre del tipo de estación es obligatorio' });
    }

    // Llamar a la función del modelo para agregar un nuevo tipo de estación
    const nuevoTipoEstacion = await tipoEstacionModel.addTipoEstacion({ tipoesta_nombre });

    // Devolver el resultado como respuesta
    res.status(201).json(nuevoTipoEstacion);
  } catch (error) {
    console.error('Error al agregar tipo de estación:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para obtener todos los tipos de estación
async function getAllTipoEstaciones(req, res) {
  try {
    const tiposEstacion = await tipoEstacionModel.getAllTipoEstaciones();
    res.json(tiposEstacion);
  } catch (error) {
    console.error('Error al obtener tipos de estación:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para obtener un tipo de estación por su ID
async function getTipoEstacionById(req, res) {
  try {
    const idTipoEstacion = parseInt(req.params.id);
    const tipoEstacion = await tipoEstacionModel.getTipoEstacionById(idTipoEstacion);
    if (tipoEstacion) {
      res.json(tipoEstacion);
    } else {
      res.status(404).send('Tipo de estación no encontrado');
    }
  } catch (error) {
    console.error('Error al obtener tipo de estación por ID:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para actualizar un tipo de estación por su ID
async function updateTipoEstacion(req, res) {
  try {
    const idTipoEstacion = parseInt(req.params.id);
    const newTipoEstacionData = req.body;
    const tipoEstacionActualizado = await tipoEstacionModel.updateTipoEstacionById(idTipoEstacion, newTipoEstacionData);
    res.json(tipoEstacionActualizado);
  } catch (error) {
    console.error('Error al actualizar tipo de estación:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para eliminar un tipo de estación por su ID
async function deleteTipoEstacion(req, res) {
  try {
    const idTipoEstacion = parseInt(req.params.id);
    const tipoEstacionEliminado = await tipoEstacionModel.deleteTipoEstacionById(idTipoEstacion);
    res.json(tipoEstacionEliminado);
  } catch (error) {
    console.error('Error al eliminar tipo de estación:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Otras funciones CRUD...

// Exportar las funciones del controlador
module.exports = {
  addTipoEstacion,
  getAllTipoEstaciones,
  getTipoEstacionById,
  updateTipoEstacion,
  deleteTipoEstacion,
  // Otras funciones CRUD...
};
