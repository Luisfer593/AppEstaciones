// /src/modules/observacionestacion/controllers/observacionestacionController.js

const ObservacionEstacionModel = require('../models/observacionestacionModel');

async function addObservacionEstacion(req, res) {
  try {
    const { obseesta_id, esta_id, obseesta_descripcion, obseesta_fecha } = req.body;
    const result = await ObservacionEstacionModel.addObservacionEstacion(obseesta_id, esta_id, obseesta_descripcion, obseesta_fecha);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllObservacionesEstacion(req, res) {
  try {
    const result = await ObservacionEstacionModel.getAllObservacionesEstacion();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateObservacionEstacion(req, res) {
  try {
    const { obseesta_id, newDescripcion, newFecha } = req.body;
    const result = await ObservacionEstacionModel.updateObservacionEstacion(obseesta_id, newDescripcion, newFecha);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteObservacionEstacion(req, res) {
  try {
    const { obseesta_id } = req.body;
    const result = await ObservacionEstacionModel.deleteObservacionEstacion(obseesta_id);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  addObservacionEstacion,
  getAllObservacionesEstacion,
  updateObservacionEstacion,
  deleteObservacionEstacion,
};
