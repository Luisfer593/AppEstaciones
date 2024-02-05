// /src/modules/unidadmedida/controllers/unidadmedidaController.js
const UnidadMedidaModel = require('../models/unidadmedidaModel');

async function insertarUnidadMedida(req, res) {
  try {
    const { unidmedi_simbolo, unidmedi_descripcion } = req.body;
    const success = await UnidadMedidaModel.insertarUnidadMedida(unidmedi_simbolo, unidmedi_descripcion);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function actualizarUnidadMedida(req, res) {
  try {
    const { unidmedi_id, unidmedi_simbolo, unidmedi_descripcion } = req.body;
    const success = await UnidadMedidaModel.actualizarUnidadMedida(unidmedi_id, unidmedi_simbolo, unidmedi_descripcion);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function eliminarUnidadMedida(req, res) {
  try {
    const { unidmedi_id } = req.params;
    const success = await UnidadMedidaModel.eliminarUnidadMedida(unidmedi_id);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function obtenerUnidadesMedida(req, res) {
  try {
    const unidadesMedida = await UnidadMedidaModel.obtenerUnidadesMedida();
    res.status(200).json(unidadesMedida);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  insertarUnidadMedida,
  actualizarUnidadMedida,
  eliminarUnidadMedida,
  obtenerUnidadesMedida,
};

