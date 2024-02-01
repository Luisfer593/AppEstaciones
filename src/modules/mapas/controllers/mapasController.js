// /src/modules/mapas/controllers/mapasController.js

const mapasModel = require('../models/mapasModel');

// Controlador para agregar un nuevo mapa
async function addMapa(req, res) {
  try {
    const { anio, mes, num_mes, descripcion, imagen } = req.body;

    // Validar que se proporcionaron anio, mes, num_mes e imagen
    if (!anio || !mes || !num_mes || !imagen) {
      return res.status(400).json({ error: 'Año, mes, número de mes e imagen son obligatorios' });
    }

    // Llamar a la función del modelo para agregar un nuevo mapa
    const nuevoMapa = await mapasModel.addMapa({ anio, mes, num_mes, descripcion, imagen });

    // Devolver el resultado como respuesta
    res.status(201).json(nuevoMapa);
  } catch (error) {
    console.error('Error al agregar mapa:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para obtener todos los mapas
async function getAllMapas(req, res) {
  try {
    const mapas = await mapasModel.getAllMapas();
    res.json(mapas);
  } catch (error) {
    console.error('Error al obtener mapas:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para obtener un mapa por su ID
async function getMapaById(req, res) {
  try {
    const idMapa = parseInt(req.params.id);
    const mapa = await mapasModel.getMapaById(idMapa);
    if (mapa) {
      res.json(mapa);
    } else {
      res.status(404).send('Mapa no encontrado');
    }
  } catch (error) {
    console.error('Error al obtener mapa por ID:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para actualizar un mapa por su ID
async function actualizarMapa(req, res) {
  try {
    const idMapa = parseInt(req.params.id);
    const newMapaData = req.body;
    const mapaActualizado = await mapasModel.updateMapaById(idMapa, newMapaData);
    res.json(mapaActualizado);
  } catch (error) {
    console.error('Error al actualizar mapa:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para eliminar un mapa por su ID
async function eliminarMapa(req, res) {
  try {
    const idMapa = parseInt(req.params.id);
    const mapaEliminado = await mapasModel.deleteMapaById(idMapa);
    res.json(mapaEliminado);
  } catch (error) {
    console.error('Error al eliminar mapa:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Exportar las funciones del controlador
module.exports = {
  addMapa,
  getAllMapas,
  getMapaById,
  actualizarMapa,
  eliminarMapa,
};

