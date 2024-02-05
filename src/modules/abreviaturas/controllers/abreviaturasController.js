// controllers/abreviaturasController.js
const AbreviaturasModel = require('../models/abreviaturasModel');

async function insertarAbreviatura(req, res) {
  try {
    const { variserv_id, abre_descripcion } = req.body;
    const success = await AbreviaturasModel.insertarAbreviatura(variserv_id, abre_descripcion);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function actualizarAbreviatura(req, res) {
  try {
    const { abre_id, variserv_id, abre_descripcion } = req.body;
    const success = await AbreviaturasModel.actualizarAbreviatura(abre_id, variserv_id, abre_descripcion);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function eliminarAbreviatura(req, res) {
  try {
    const { abre_id } = req.params;
    const success = await AbreviaturasModel.eliminarAbreviatura(abre_id);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function obtenerAbreviaturas(req, res) {
  try {
    const abreviaturas = await AbreviaturasModel.obtenerAbreviaturas();
    res.status(200).json(abreviaturas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  insertarAbreviatura,
  actualizarAbreviatura,
  eliminarAbreviatura,
  obtenerAbreviaturas,
};
