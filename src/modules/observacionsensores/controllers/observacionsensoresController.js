// /src/modules/observacionsensores/controllers/observacionsensoresController.js

const ObservacionSensoresModel = require('../models/observacionsensoresModel');

async function addObservacionSensores(req, res) {
  try {
    const { obsesens_id, sens_id, obsesens_descripcion, obsesens_fecha } = req.body;
    const result = await ObservacionSensoresModel.addObservacionSensores(obsesens_id, sens_id, obsesens_descripcion, obsesens_fecha);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllObservacionesSensores(req, res) {
  try {
    const result = await ObservacionSensoresModel.getAllObservacionesSensores();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateObservacionSensores(req, res) {
  try {
    const { obsesens_id, newDescripcion, newFecha } = req.body;
    const result = await ObservacionSensoresModel.updateObservacionSensores(obsesens_id, newDescripcion, newFecha);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteObservacionSensores(req, res) {
  try {
    const { obsesens_id } = req.body;
    const result = await ObservacionSensoresModel.deleteObservacionSensores(obsesens_id);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  addObservacionSensores,
  getAllObservacionesSensores,
  updateObservacionSensores,
  deleteObservacionSensores,
};
