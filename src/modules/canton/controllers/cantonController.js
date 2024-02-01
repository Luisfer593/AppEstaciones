const cantonModel = require('../models/cantonModel');

// Agregar un nuevo cantón
async function addCanton(req, res) {
  try {
    const { prov_id, cant_nombre } = req.body;
    const nuevoCanton = await cantonModel.addCanton({ prov_id, cant_nombre });
    res.status(201).json(nuevoCanton);
  } catch (error) {
    console.error('Error al agregar cantón:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Obtener todos los cantones
async function getAllCantones(req, res) {
  try {
    const cantones = await cantonModel.getAllCantones();
    res.json(cantones);
  } catch (error) {
    console.error('Error al obtener cantones:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Obtener un cantón por su ID
async function getCantonById(req, res) {
  try {
    const idCanton = parseInt(req.params.id);
    const canton = await cantonModel.getCantonById(idCanton);
    if (canton) {
      res.json(canton);
    } else {
      res.status(404).send('Cantón no encontrado');
    }
  } catch (error) {
    console.error('Error al obtener cantón por ID:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Actualizar un cantón por su ID
async function updateCantonById(req, res) {
  try {
    const idCanton = parseInt(req.params.id);
    const newCantonData = req.body;
    const cantonActualizado = await cantonModel.updateCantonById(idCanton, newCantonData);
    res.json(cantonActualizado);
  } catch (error) {
    console.error('Error al actualizar cantón:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Eliminar un cantón por su ID
async function deleteCantonById(req, res) {
  try {
    const idCanton = parseInt(req.params.id);
    const cantonEliminado = await cantonModel.deleteCantonById(idCanton);
    res.json(cantonEliminado);
  } catch (error) {
    console.error('Error al eliminar cantón:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Otras funciones CRUD...

// Exportar las funciones del controlador
module.exports = {
  addCanton,
  getAllCantones,
  getCantonById,
  updateCantonById,
  deleteCantonById,
  // Otras funciones CRUD...
};
