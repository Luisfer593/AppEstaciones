const provinciaModel = require('../models/provinciaModel');

// Agregar una nueva provincia
async function addProvincia(req, res) {
  try {
    const { prov_nombre } = req.body;
    const nuevaProvincia = await provinciaModel.addProvincia({ prov_nombre });
    res.status(201).json(nuevaProvincia);
  } catch (error) {
    console.error('Error al agregar provincia:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Obtener todas las provincias
async function getAllProvincias(req, res) {
  try {
    const provincias = await provinciaModel.getAllProvincias();
    res.json(provincias);
  } catch (error) {
    console.error('Error al obtener provincias:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Obtener una provincia por su ID
async function getProvinciaById(req, res) {
  try {
    const idProvincia = parseInt(req.params.id);
    const provincia = await provinciaModel.getProvinciaById(idProvincia);
    if (provincia) {
      res.json(provincia);
    } else {
      res.status(404).send('Provincia no encontrada');
    }
  } catch (error) {
    console.error('Error al obtener provincia por ID:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Actualizar una provincia por su ID
async function updateProvinciaById(req, res) {
  try {
    const idProvincia = parseInt(req.params.id);
    const newProvinciaData = req.body;
    const provinciaActualizada = await provinciaModel.updateProvinciaById(idProvincia, newProvinciaData);
    res.json(provinciaActualizada);
  } catch (error) {
    console.error('Error al actualizar provincia:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Eliminar una provincia por su ID
async function deleteProvinciaById(req, res) {
  try {
    const idProvincia = parseInt(req.params.id);
    const provinciaEliminada = await provinciaModel.deleteProvinciaById(idProvincia);
    res.json(provinciaEliminada);
  } catch (error) {
    console.error('Error al eliminar provincia:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Otras funciones CRUD...

// Exportar las funciones del controlador
module.exports = {
  addProvincia,
  getAllProvincias,
  getProvinciaById,
  updateProvinciaById,
  deleteProvinciaById,
  // Otras funciones CRUD...
};
