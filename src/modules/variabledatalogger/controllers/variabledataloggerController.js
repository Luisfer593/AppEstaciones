const VariableDataloggerModel = require('../models/variabledataloggerModel');

async function insertarVariableDatalogger(req, res) {
  try {
    const { unidmedi_id, varidata_nombre } = req.body;
    const success = await VariableDataloggerModel.insertarVariableDatalogger(unidmedi_id, varidata_nombre);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function actualizarVariableDatalogger(req, res) {
  try {
    const { varidata_id, unidmedi_id, varidata_nombre } = req.body;
    const success = await VariableDataloggerModel.actualizarVariableDatalogger(varidata_id, unidmedi_id, varidata_nombre);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function eliminarVariableDatalogger(req, res) {
  try {
    const { varidata_id } = req.params;
    const success = await VariableDataloggerModel.eliminarVariableDatalogger(varidata_id);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function obtenerVariablesDatalogger(req, res) {
  try {
    const variablesDatalogger = await VariableDataloggerModel.obtenerVariablesDatalogger();
    res.status(200).json(variablesDatalogger);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  insertarVariableDatalogger,
  actualizarVariableDatalogger,
  eliminarVariableDatalogger,
  obtenerVariablesDatalogger,
};
