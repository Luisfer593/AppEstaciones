// /src/modules/sens_varidata/controllers/sensVaridataController.js

const sensVaridataModel = require('../models/sensVaridataModel');

// Agregar una nueva relación entre sensor y variable de datalogger
async function addSensVaridata(req, res) {
  try {
    const sensVaridata = await sensVaridataModel.addSensVaridata(req.body);
    res.json(sensVaridata);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener todas las relaciones entre sensor y variable de datalogger
async function getAllSensVaridata(req, res) {
  try {
    const sensVaridataList = await sensVaridataModel.getAllSensVaridata();
    res.json(sensVaridataList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener una relación entre sensor y variable de datalogger por su ID
async function getSensVaridataById(req, res) {
  const id = req.params.id;
  try {
    const sensVaridata = await sensVaridataModel.getSensVaridataById(id);
    if (sensVaridata) {
      res.json(sensVaridata);
    } else {
      res.status(404).json({ message: 'Relación sensor-variable de datalogger no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Eliminar una relación entre sensor y variable de datalogger por su ID
async function deleteSensVaridataById(req, res) {
  const id = req.params.id;
  try {
    const deletedSensVaridata = await sensVaridataModel.deleteSensVaridataById(id);
    if (deletedSensVaridata) {
      res.json(deletedSensVaridata);
    } else {
      res.status(404).json({ message: 'Relación sensor-variable de datalogger no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Otras funciones CRUD...

// Exportar los controladores
module.exports = {
  addSensVaridata,
  getAllSensVaridata,
  getSensVaridataById,
  deleteSensVaridataById,
  // Otras funciones CRUD...
};
