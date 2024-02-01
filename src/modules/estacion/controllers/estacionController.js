// /src/modules/estacion/controllers/estacionController.js

const estacionModel = require('../models/estacionModel');

// Agregar una nueva estación
async function addEstacion(req, res) {
  try {
    const estacion = await estacionModel.addEstacion(req.body);
    res.status(201).json(estacion);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Obtener todas las estaciones
async function getAllEstaciones(req, res) {
  try {
    const estaciones = await estacionModel.getAllEstaciones();
    res.json(estaciones);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Obtener una estación por su ID
async function getEstacionById(req, res) {
  const { id } = req.params;
  try {
    const estacion = await estacionModel.getEstacionById(id);
    if (estacion) {
      res.json(estacion);
    } else {
      res.status(404).send('Estación no encontrada');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Actualizar una estación por su ID
async function updateEstacionById(req, res) {
  const { id } = req.params;
  try {
    const estacionData = req.body;
    const updatedEstacion = await estacionModel.updateEstacionById(id, estacionData);
    if (updatedEstacion) {
      res.json(updatedEstacion);
    } else {
      res.status(404).send('Estación no encontrada');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Eliminar una estación por su ID
async function deleteEstacionById(req, res) {
  const { id } = req.params;
  try {
    const deletedEstacion = await estacionModel.deleteEstacionById(id);
    if (deletedEstacion) {
      res.json(deletedEstacion);
    } else {
      res.status(404).send('Estación no encontrada');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addEstacion,
  getAllEstaciones,
  getEstacionById,
  updateEstacionById,
  deleteEstacionById
  // Otras funciones CRUD...
};
