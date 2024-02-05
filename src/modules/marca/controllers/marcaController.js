// /src/modules/marca/controllers/marcaController.js
const MarcaModel = require('../models/marcaModel');

async function insertarMarca(req, res) {
  try {
    const { marc_nombre } = req.body;
    const success = await MarcaModel.insertarMarca(marc_nombre);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function actualizarMarca(req, res) {
  try {
    const { marc_id, marc_nombre } = req.body;
    const success = await MarcaModel.actualizarMarca(marc_id, marc_nombre);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function eliminarMarca(req, res) {
  try {
    const { marc_id } = req.params;
    const success = await MarcaModel.eliminarMarca(marc_id);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function listarMarcas(req, res) {
  try {
    const marcas = await MarcaModel.listarMarcas();
    res.status(200).json(marcas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  insertarMarca,
  actualizarMarca,
  eliminarMarca,
  listarMarcas,
};
