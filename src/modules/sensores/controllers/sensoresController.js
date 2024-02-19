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

async function obtenerSensoresById(req, res) {
  try {
      const { id } = req.params;
      const sensores = await SensoresModel.obtenerSensoresById(id);
      res.status(200).json(sensores);
  } catch (error) {
      console.error('Error en obtenerSensoresById:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function obtenerSensoresByEstacionId(req, res) {
  try {
      const { idEstacion } = req.params;
      const sensores = await SensoresModel.obtenerSensoresByEstacionId(idEstacion);
      res.status(200).json(sensores);
  } catch (error) {
      console.error('Error en obtenerSensoresByEstacionId:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  insertarSensores,
  actualizarSensores,
  eliminarSensores,
  obtenerSensores,
  obtenerSensoresById,
  obtenerSensoresByEstacionId,
};
