// /src/modules/observacionestacion/controllers/observacionestacionController.js

const observacionestacionModel = require('../models/observacionestacionModel');

// Agregar una nueva observación de estación
async function addObservacionEstacion(req, res) {
  try {
    const observacion = await observacionestacionModel.addObservacionEstacion(req.body);
    res.status(201).json(observacion);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Obtener todas las observaciones de estación
async function getAllObservacionesEstacion(req, res) {
  try {
    const observaciones = await observacionestacionModel.getAllObservacionesEstacion();
    res.json(observaciones);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Obtener una observación de estación por su ID
async function getObservacionEstacionById(req, res) {
  const { id } = req.params;
  try {
    const observacion = await observacionestacionModel.getObservacionEstacionById(id);
    if (observacion) {
      res.json(observacion);
    } else {
      res.status(404).send('Observación de estación no encontrada');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Actualizar una observación de estación por su ID
async function updateObservacionEstacionById(req, res) {
  const { id } = req.params;
  try {
    const observacionData = req.body;
    const updatedObservacion = await observacionestacionModel.updateObservacionEstacionById(id, observacionData);
    if (updatedObservacion) {
      res.json(updatedObservacion);
    } else {
      res.status(404).send('Observación de estación no encontrada');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Eliminar una observación de estación por su ID
async function deleteObservacionEstacionById(req, res) {
  const { id } = req.params;
  try {
    const deletedObservacion = await observacionestacionModel.deleteObservacionEstacionById(id);
    if (deletedObservacion) {
      res.json(deletedObservacion);
    } else {
      res.status(404).send('Observación de estación no encontrada');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addObservacionEstacion,
  getAllObservacionesEstacion,
  getObservacionEstacionById,
  updateObservacionEstacionById,
  deleteObservacionEstacionById
  // Otras funciones CRUD...
};
