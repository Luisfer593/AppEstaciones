// /src/modules/variableservidor/controllers/variableservidorController.js
const VariableServidorModel = require('../models/variableServidorModel');

async function obtenerVariableServidorLista(req, res) {
  try {
    const variableServidores = await VariableServidorModel.obtenerVariableServidorLista();
    res.status(200).json(variableServidores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function obtenerVariableServidorById(req, res) {
  try {
    const { id_variserv } = req.params;
    const variableServidores = await VariableServidorModel.obtenerVariableServidorById(id_variserv);
    res.status(200).json(variableServidores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function obtenerVariableServidorByAbreviatura(req, res) {
  try {
    const { strabreviatura } = req.params;
    const variableServidores = await VariableServidorModel.obtenerVariableServidorByAbreviatura(strabreviatura);
    res.status(200).json(variableServidores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function obtenerVariableServidorByIdUnidMedi(req, res) {
  try {
    const { id_unidmedi } = req.params;
    const variableServidores = await VariableServidorModel.obtenerVariableServidorByIdUnidMedi(id_unidmedi);
    res.status(200).json(variableServidores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function comprobarAbreviatura(req, res) {
  try {
    const { strabreviatura } = req.params;
    const result = await VariableServidorModel.comprobarAbreviatura(strabreviatura);
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function insertarVariableServidor(req, res) {
  try {
    const { unidmedi_id, variserv_nombre, variserv_abreviatura, variserv_abreviaturados } = req.body;
    const success = await VariableServidorModel.insertarVariableServidor({ unidmedi_id, variserv_nombre, variserv_abreviatura, variserv_abreviaturados });
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function actualizarVariableServidor(req, res) {
  try {
    const { variserv_id, unidmedi_id, variserv_nombre, variserv_abreviatura, variserv_abreviaturados } = req.body;
    const success = await VariableServidorModel.actualizarVariableServidor({ variserv_id, unidmedi_id, variserv_nombre, variserv_abreviatura, variserv_abreviaturados });
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function eliminarVariableServidor(req, res) {
  try {
    const { id_variserv } = req.params;
    const success = await VariableServidorModel.eliminarVariableServidor(id_variserv);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  obtenerVariableServidorLista,
  obtenerVariableServidorById,
  obtenerVariableServidorByAbreviatura,
  obtenerVariableServidorByIdUnidMedi,
  comprobarAbreviatura,
  insertarVariableServidor,
  actualizarVariableServidor,
  eliminarVariableServidor,
};
