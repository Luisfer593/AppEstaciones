const parroquiaModel = require('../models/parroquiaModel');

// Agregar una nueva parroquia
async function addParroquia(req, res) {
  try {
    const { cant_id, parr_nombre, parr_tipo } = req.body;
    const nuevaParroquia = await parroquiaModel.addParroquia({ cant_id, parr_nombre, parr_tipo });
    res.status(201).json(nuevaParroquia);
  } catch (error) {
    console.error('Error al agregar parroquia:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Obtener todas las parroquias
async function getAllParroquias(req, res) {
  try {
    const parroquias = await parroquiaModel.getAllParroquias();
    res.json(parroquias);
  } catch (error) {
    console.error('Error al obtener parroquias:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Obtener una parroquia por su ID
async function getParroquiaById(req, res) {
  try {
    const idParroquia = parseInt(req.params.id);
    const parroquia = await parroquiaModel.getParroquiaById(idParroquia);
    if (parroquia) {
      res.json(parroquia);
    } else {
      res.status(404).send('Parroquia no encontrada');
    }
  } catch (error) {
    console.error('Error al obtener parroquia por ID:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Actualizar una parroquia por su ID
async function updateParroquiaById(req, res) {
  try {
    const idParroquia = parseInt(req.params.id);
    const newParroquiaData = req.body;
    const parroquiaActualizada = await parroquiaModel.updateParroquiaById(idParroquia, newParroquiaData);
    res.json(parroquiaActualizada);
  } catch (error) {
    console.error('Error al actualizar parroquia:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Eliminar una parroquia por su ID
async function deleteParroquiaById(req, res) {
  try {
    const idParroquia = parseInt(req.params.id);
    const parroquiaEliminada = await parroquiaModel.deleteParroquiaById(idParroquia);
    res.json(parroquiaEliminada);
  } catch (error) {
    console.error('Error al eliminar parroquia:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Otras funciones CRUD...

// Exportar las funciones del controlador
module.exports = {
  addParroquia,
  getAllParroquias,
  getParroquiaById,
  updateParroquiaById,
  deleteParroquiaById,
  // Otras funciones CRUD...
};
