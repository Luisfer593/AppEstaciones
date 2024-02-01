// /src/modules/variabledataloger/controllers/variabledatalogerController.js

const variabledatalogerModel = require('../models/variabledatalogerModel');

// Agregar una nueva variable de datalogger
async function addVariableDataloger(req, res) {
  try {
    const variableDataloger = await variabledatalogerModel.addVariableDataloger(req.body);
    res.json(variableDataloger);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener todas las variables de datalogger
async function getAllVariablesDataloger(req, res) {
  try {
    const variableDatalogerList = await variabledatalogerModel.getAllVariablesDataloger();
    res.json(variableDatalogerList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener una variable de datalogger por su ID
async function getVariableDatalogerById(req, res) {
  const id = req.params.id;
  try {
    const variableDataloger = await variabledatalogerModel.getVariableDatalogerById(id);
    if (variableDataloger) {
      res.json(variableDataloger);
    } else {
      res.status(404).json({ message: 'Variable de datalogger no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Actualizar una variable de datalogger por su ID
async function updateVariableDatalogerById(req, res) {
  const id = req.params.id;
  try {
    const updatedVariableDataloger = await variabledatalogerModel.updateVariableDatalogerById(id, req.body);
    if (updatedVariableDataloger) {
      res.json(updatedVariableDataloger);
    } else {
      res.status(404).json({ message: 'Variable de datalogger no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Eliminar una variable de datalogger por su ID
async function deleteVariableDatalogerById(req, res) {
  const id = req.params.id;
  try {
    const deletedVariableDataloger = await variabledatalogerModel.deleteVariableDatalogerById(id);
    if (deletedVariableDataloger) {
      res.json(deletedVariableDataloger);
    } else {
      res.status(404).json({ message: 'Variable de datalogger no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addVariableDataloger,
  getAllVariablesDataloger,
  getVariableDatalogerById,
  updateVariableDatalogerById,
  deleteVariableDatalogerById,
  // Otras funciones CRUD...
};
