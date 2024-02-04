// /src/modules/tipoestacion/controllers/tipoestacionController.js

const TipoestacionModel = require('../models/tipoestacionModel');

async function addTipoestacion(req, res) {
  try {
    const { tipoesta_id, tiposesta_nombre } = req.body;
    const result = await TipoestacionModel.addTipoestacion(tipoesta_id, tiposesta_nombre);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllTipoestacion(req, res) {
  try {
    const result = await TipoestacionModel.getAllTipoestacion();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getTipoestacionById(req, res) {
  try {
    const { tipoesta_id } = req.params;
    const result = await TipoestacionModel.getTipoestacionById(tipoesta_id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Tipoestacion not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateTipoestacionById(req, res) {
  try {
    const { tipoesta_id } = req.params;
    const { tiposesta_nombre } = req.body;
    const result = await TipoestacionModel.updateTipoestacionById(tipoesta_id, tiposesta_nombre);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Tipoestacion not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteTipoestacionById(req, res) {
  try {
    const { tipoesta_id } = req.params;
    const result = await TipoestacionModel.deleteTipoestacionById(tipoesta_id);
    if (result) {
      res.status(200).json({ message: 'Tipoestacion deleted successfully' });
    } else {
      res.status(404).json({ error: 'Tipoestacion not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  addTipoestacion,
  getAllTipoestacion,
  getTipoestacionById,
  updateTipoestacionById,
  deleteTipoestacionById,
};
