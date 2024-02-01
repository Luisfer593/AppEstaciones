// /src/modules/sens_variserv/controllers/sens_variservController.js

const sens_variservModel = require('../models/sens_variservModel');

// Agregar una nueva relación entre sensor y variable de servidor
async function addSensVariserv(req, res) {
  try {
    const sensVariserv = await sens_variservModel.addSensVariserv(req.body);
    res.json(sensVariserv);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener todas las relaciones entre sensor y variable de servidor
async function getAllSensVariserv(req, res) {
  try {
    const sensVariservList = await sens_variservModel.getAllSensVariserv();
    res.json(sensVariservList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener una relación entre sensor y variable de servidor por su ID
async function getSensVariservById(req, res) {
  const id = req.params.id;
  try {
    const sensVariserv = await sens_variservModel.getSensVariservById(id);
    if (sensVariserv) {
      res.json(sensVariserv);
    } else {
      res.status(404).json({ message: 'Relación sensor-variable de servidor no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Eliminar una relación entre sensor y variable de servidor por su ID
async function deleteSensVariservById(req, res) {
  const id = req.params.id;
  try {
    const deletedSensVariserv = await sens_variservModel.deleteSensVariservById(id);
    if (deletedSensVariserv) {
      res.json(deletedSensVariserv);
    } else {
      res.status(404).json({ message: 'Relación sensor-variable de servidor no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addSensVariserv,
  getAllSensVariserv,
  getSensVariservById,
  deleteSensVariservById,
  // Otras funciones CRUD...
};
