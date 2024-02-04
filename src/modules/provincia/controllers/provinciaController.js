// provinciaController.js
const ProvinciaModel = require('../models/provinciaModel');

async function addProvincia(req, res) {
  try {
    const { prov_id, prov_nombre } = req.body;
    const result = await ProvinciaModel.addProvincia(prov_id, prov_nombre);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllProvincias(req, res) {
  try {
    const result = await ProvinciaModel.getAllProvincias();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateProvincia(req, res) {
  try {
    const { prov_id, newNombre } = req.body;
    const result = await ProvinciaModel.updateProvincia(prov_id, newNombre);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteProvincia(req, res) {
  try {
    const { prov_id } = req.body;
    const result = await ProvinciaModel.deleteProvincia(prov_id);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  addProvincia,
  getAllProvincias,
  updateProvincia,
  deleteProvincia,
};
