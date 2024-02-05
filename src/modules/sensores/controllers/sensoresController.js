// /src/modules/sensores/controllers/sensoresController.js
const SensoresModel = require('../models/sensoresModel');

async function insertarSensores(req, res) {
  try {
    const { esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion } = req.body;
    const success = await SensoresModel.insertarSensores(esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function actualizarSensores(req, res) {
  try {
    const { sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion } = req.body;
    const success = await SensoresModel.actualizarSensores(sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function eliminarSensores(req, res) {
  try {
    const { sens_id } = req.params;
    const success = await SensoresModel.eliminarSensores(sens_id);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function obtenerSensores(req, res) {
  try {
    const sensores = await SensoresModel.obtenerSensores();
    res.status(200).json(sensores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  insertarSensores,
  actualizarSensores,
  eliminarSensores,
  obtenerSensores,
};
