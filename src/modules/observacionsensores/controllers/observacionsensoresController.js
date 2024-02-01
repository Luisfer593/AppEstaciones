// /src/modules/observacionsensores/controllers/observacionsensoresController.js

const observacionsensoresModel = require('../models/observacionsensoresModel');

// Agregar una nueva observación de sensor
async function addObservacionSensor(req, res) {
  try {
    const observacionSensor = await observacionsensoresModel.addObservacionSensor(req.body);
    res.json(observacionSensor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener todas las observaciones de sensores
async function getAllObservacionesSensores(req, res) {
  try {
    const observacionesSensores = await observacionsensoresModel.getAllObservacionesSensores();
    res.json(observacionesSensores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener una observación de sensor por su ID
async function getObservacionSensorById(req, res) {
  const id = req.params.id;
  try {
    const observacionSensor = await observacionsensoresModel.getObservacionSensorById(id);
    if (observacionSensor) {
      res.json(observacionSensor);
    } else {
      res.status(404).json({ message: 'Observación de sensor no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Actualizar una observación de sensor por su ID
async function updateObservacionSensorById(req, res) {
  const id = req.params.id;
  try {
    const updatedObservacionSensor = await observacionsensoresModel.updateObservacionSensorById(id, req.body);
    if (updatedObservacionSensor) {
      res.json(updatedObservacionSensor);
    } else {
      res.status(404).json({ message: 'Observación de sensor no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Eliminar una observación de sensor por su ID
async function deleteObservacionSensorById(req, res) {
  const id = req.params.id;
  try {
    const deletedObservacionSensor = await observacionsensoresModel.deleteObservacionSensorById(id);
    if (deletedObservacionSensor) {
      res.json(deletedObservacionSensor);
    } else {
      res.status(404).json({ message: 'Observación de sensor no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Otras funciones CRUD...

// Exportar los controladores
module.exports = {
  addObservacionSensor,
  getAllObservacionesSensores,
  getObservacionSensorById,
  updateObservacionSensorById,
  deleteObservacionSensorById,
  // Otras funciones CRUD...
};
