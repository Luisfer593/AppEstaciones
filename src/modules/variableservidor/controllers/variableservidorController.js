// /src/modules/variableservidor/controllers/variableservidorController.js

const variableservidorModel = require('../models/variableservidorModel');

// Agregar una nueva variable de servidor
async function addVariableServidor(req, res) {
  try {
    const variableServidor = await variableservidorModel.addVariableServidor(req.body);
    res.json(variableServidor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener todas las variables de servidor
async function getAllVariablesServidor(req, res) {
  try {
    const variableServidorList = await variableservidorModel.getAllVariablesServidor();
    res.json(variableServidorList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener una variable de servidor por su ID
async function getVariableServidorById(req, res) {
  const id = req.params.id;
  try {
    const variableServidor = await variableservidorModel.getVariableServidorById(id);
    if (variableServidor) {
      res.json(variableServidor);
    } else {
      res.status(404).json({ message: 'Variable de servidor no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Actualizar una variable de servidor por su ID
async function updateVariableServidorById(req, res) {
  const id = req.params.id;
  try {
    const updatedVariableServidor = await variableservidorModel.updateVariableServidorById(id, req.body);
    if (updatedVariableServidor) {
      res.json(updatedVariableServidor);
    } else {
      res.status(404).json({ message: 'Variable de servidor no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Eliminar una variable de servidor por su ID
async function deleteVariableServidorById(req, res) {
  const id = req.params.id;
  try {
    const deletedVariableServidor = await variableservidorModel.deleteVariableServidorById(id);
    if (deletedVariableServidor) {
      res.json(deletedVariableServidor);
    } else {
      res.status(404).json({ message: 'Variable de servidor no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addVariableServidor,
  getAllVariablesServidor,
  getVariableServidorById,
  updateVariableServidorById,
  deleteVariableServidorById,
  // Otras funciones CRUD...
};
