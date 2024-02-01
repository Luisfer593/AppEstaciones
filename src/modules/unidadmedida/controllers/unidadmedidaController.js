// /src/modules/unidadmedida/controllers/unidadmedidaController.js

const unidadmedidaModel = require('../models/unidadmedidaModel');

// Agregar una nueva unidad de medida
async function addUnidadMedida(req, res) {
  try {
    const unidadMedida = await unidadmedidaModel.addUnidadMedida(req.body);
    res.json(unidadMedida);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener todas las unidades de medida
async function getAllUnidadesMedida(req, res) {
  try {
    const unidadMedidaList = await unidadmedidaModel.getAllUnidadesMedida();
    res.json(unidadMedidaList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener una unidad de medida por su ID
async function getUnidadMedidaById(req, res) {
  const id = req.params.id;
  try {
    const unidadMedida = await unidadmedidaModel.getUnidadMedidaById(id);
    if (unidadMedida) {
      res.json(unidadMedida);
    } else {
      res.status(404).json({ message: 'Unidad de medida no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Actualizar una unidad de medida por su ID
async function updateUnidadMedidaById(req, res) {
  const id = req.params.id;
  try {
    const updatedUnidadMedida = await unidadmedidaModel.updateUnidadMedidaById(id, req.body);
    if (updatedUnidadMedida) {
      res.json(updatedUnidadMedida);
    } else {
      res.status(404).json({ message: 'Unidad de medida no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Eliminar una unidad de medida por su ID
async function deleteUnidadMedidaById(req, res) {
  const id = req.params.id;
  try {
    const deletedUnidadMedida = await unidadmedidaModel.deleteUnidadMedidaById(id);
    if (deletedUnidadMedida) {
      res.json(deletedUnidadMedida);
    } else {
      res.status(404).json({ message: 'Unidad de medida no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Otras funciones CRUD...

// Exportar los controladores
module.exports = {
  addUnidadMedida,
  getAllUnidadesMedida,
  getUnidadMedidaById,
  updateUnidadMedidaById,
  deleteUnidadMedidaById,
  // Otras funciones CRUD...
};
