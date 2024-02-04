// parroquiaController.js
const ParroquiaModel = require('../models/parroquiaModel');

async function addParroquia(req, res) {
  try {
    const { parr_id, cant_id, parr_nombre, parr_tipo } = req.body;
    const result = await ParroquiaModel.addParroquia(parr_id, cant_id, parr_nombre, parr_tipo);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllParroquias(req, res) {
  try {
    const result = await ParroquiaModel.getAllParroquias();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateParroquia(req, res) {
  try {
    const { parr_id, newNombre, newTipo } = req.body;
    const result = await ParroquiaModel.updateParroquia(parr_id, newNombre, newTipo);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteParroquia(req, res) {
  try {
    const { parr_id } = req.body;
    const result = await ParroquiaModel.deleteParroquia(parr_id);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  addParroquia,
  getAllParroquias,
  updateParroquia,
  deleteParroquia,
};
