const comunidadModel = require('../models/comunidadModel');

// Agregar una nueva comunidad
async function addComunidad(req, res) {
  try {
    const { parr_id, comu_nombre } = req.body;
    const nuevaComunidad = await comunidadModel.addComunidad({ parr_id, comu_nombre });
    res.status(201).json(nuevaComunidad);
  } catch (error) {
    console.error('Error al agregar comunidad:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Obtener todas las comunidades
async function getAllComunidades(req, res) {
  try {
    const comunidades = await comunidadModel.getAllComunidades();
    res.json(comunidades);
  } catch (error) {
    console.error('Error al obtener comunidades:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Obtener una comunidad por su ID
async function getComunidadById(req, res) {
  try {
    const idComunidad = parseInt(req.params.id);
    const comunidad = await comunidadModel.getComunidadById(idComunidad);
    if (comunidad) {
      res.json(comunidad);
    } else {
      res.status(404).send('Comunidad no encontrada');
    }
  } catch (error) {
    console.error('Error al obtener comunidad por ID:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Actualizar una comunidad por su ID
async function updateComunidadById(req, res) {
  try {
    const idComunidad = parseInt(req.params.id);
    const newComunidadData = req.body;
    const comunidadActualizada = await comunidadModel.updateComunidadById(idComunidad, newComunidadData);
    res.json(comunidadActualizada);
  } catch (error) {
    console.error('Error al actualizar comunidad:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Eliminar una comunidad por su ID
async function deleteComunidadById(req, res) {
  try {
    const idComunidad = parseInt(req.params.id);
    const comunidadEliminada = await comunidadModel.deleteComunidadById(idComunidad);
    res.json(comunidadEliminada);
  } catch (error) {
    console.error('Error al eliminar comunidad:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Otras funciones CRUD...

// Exportar las funciones del controlador
module.exports = {
  addComunidad,
  getAllComunidades,
  getComunidadById,
  updateComunidadById,
  deleteComunidadById,
  // Otras funciones CRUD...
};
