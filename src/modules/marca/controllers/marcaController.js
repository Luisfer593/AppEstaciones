// /src/modules/marca/controllers/marcaController.js

const marcaModel = require('../models/marcaModel');

// Agregar una nueva marca
async function addMarca(req, res) {
  try {
    const marca = await marcaModel.addMarca(req.body);
    res.status(201).json(marca);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Obtener todas las marcas
async function getAllMarcas(req, res) {
  try {
    const marcas = await marcaModel.getAllMarcas();
    res.json(marcas);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Obtener una marca por su ID
async function getMarcaById(req, res) {
  const { id } = req.params;
  try {
    const marca = await marcaModel.getMarcaById(id);
    if (marca) {
      res.json(marca);
    } else {
      res.status(404).send('Marca no encontrada');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Actualizar una marca por su ID
async function updateMarcaById(req, res) {
  const { id } = req.params;
  try {
    const marcaData = req.body;
    const updatedMarca = await marcaModel.updateMarcaById(id, marcaData);
    if (updatedMarca) {
      res.json(updatedMarca);
    } else {
      res.status(404).send('Marca no encontrada');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Eliminar una marca por su ID
async function deleteMarcaById(req, res) {
  const { id } = req.params;
  try {
    const deletedMarca = await marcaModel.deleteMarcaById(id);
    if (deletedMarca) {
      res.json(deletedMarca);
    } else {
      res.status(404).send('Marca no encontrada');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addMarca,
  getAllMarcas,
  getMarcaById,
  updateMarcaById,
  deleteMarcaById
  // Otras funciones CRUD...
};
