const AbreviaturasDatalogerModel = require('../models/abreviaturasdatalogerModel');

async function insertarAbreviatura(req, res) {
  try {
    const { varidata_id, abredata_descripcion } = req.body;
    const success = await AbreviaturasDatalogerModel.insertarAbreviatura(varidata_id, abredata_descripcion);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function actualizarAbreviatura(req, res) {
  try {
    const { abredata_id, varidata_id, abredata_descripcion } = req.body;
    const success = await AbreviaturasDatalogerModel.actualizarAbreviatura(abredata_id, varidata_id, abredata_descripcion);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function eliminarAbreviatura(req, res) {
  try {
    const { abredata_id } = req.params;
    const success = await AbreviaturasDatalogerModel.eliminarAbreviatura(abredata_id);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function obtenerAbreviaturas(req, res) {
  try {
    const abreviaturas = await AbreviaturasDatalogerModel.obtenerAbreviaturas();
    res.status(200).json(abreviaturas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function obtenerVariablesDatalogerByAbreviatura(req, res) {
  try {
      const { abreviatura } = req.params;
      const variables = await AbreviaturasDatalogerModel.obtenerVariablesDatalogerByAbreviatura(abreviatura);
      res.status(200).json(variables);
  } catch (error) {
      console.error('Error en obtenerVariablesDatalogerByAbreviatura:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  insertarAbreviatura,
  actualizarAbreviatura,
  eliminarAbreviatura,
  obtenerAbreviaturas,
  obtenerVariablesDatalogerByAbreviatura,
};
