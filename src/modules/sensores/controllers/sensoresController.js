// /src/modules/sensores/controllers/sensoresController.js

const sensoresModel = require('../models/sensoresModel');

// Agregar un nuevo sensor
async function addSensor(req, res) {
  try {
    const sensor = await sensoresModel.addSensor(req.body);
    res.json(sensor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener todos los sensores
async function getAllSensores(req, res) {
  try {
    const sensores = await sensoresModel.getAllSensores();
    res.json(sensores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener un sensor por su ID
async function getSensorById(req, res) {
  const id = req.params.id;
  try {
    const sensor = await sensoresModel.getSensorById(id);
    if (sensor) {
      res.json(sensor);
    } else {
      res.status(404).json({ message: 'Sensor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Actualizar un sensor por su ID
async function updateSensorById(req, res) {
  const id = req.params.id;
  try {
    const updatedSensor = await sensoresModel.updateSensorById(id, req.body);
    if (updatedSensor) {
      res.json(updatedSensor);
    } else {
      res.status(404).json({ message: 'Sensor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Eliminar un sensor por su ID
async function deleteSensorById(req, res) {
  const id = req.params.id;
  try {
    const deletedSensor = await sensoresModel.deleteSensorById(id);
    if (deletedSensor) {
      res.json(deletedSensor);
    } else {
      res.status(404).json({ message: 'Sensor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Otras funciones CRUD...

// Exportar los controladores
module.exports = {
  addSensor,
  getAllSensores,
  getSensorById,
  updateSensorById,
  deleteSensorById,
  // Otras funciones CRUD...
};
