// /src/modules/marca/controllers/marcaController.js

// marcaController.js
const MarcaModel = require('../models/marcaModel');

async function addMarca(req, res) {
  try {
    const { marc_id, marc_nombre } = req.body;
    const result = await MarcaModel.addMarca(marc_id, marc_nombre);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllMarcas(req, res) {
  try {
    const result = await MarcaModel.getAllMarcas();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateMarca(req, res) {
  try {
    const { marc_id, newNombre } = req.body;
    const result = await MarcaModel.updateMarca(marc_id, newNombre);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteMarca(req, res) {
  try {
    const { marc_id } = req.body;
    const result = await MarcaModel.deleteMarca(marc_id);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Exportar las funciones
module.exports = {
  addMarca,
  getAllMarcas,
  updateMarca,
  deleteMarca,
  // Otras funciones CRUD...
};
