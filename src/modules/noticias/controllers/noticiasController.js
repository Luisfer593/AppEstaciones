// /src/modules/noticias/controllers/noticiasController.js

const noticiasModel = require('../models/noticiasModel');

// Controlador para agregar una nueva noticia
async function addNoticia(req, res) {
  try {
    const { titulo, contenido, imagen } = req.body;

    // Validar que se proporcionaron titulo, contenido e imagen
    if (!titulo || !contenido || !imagen) {
      return res.status(400).json({ error: 'Título, contenido e imagen son obligatorios' });
    }

    // Llamar a la función del modelo para agregar una nueva noticia
    const nuevaNoticia = await noticiasModel.addNoticia({ titulo, contenido, imagen });

    // Devolver el resultado como respuesta
    res.status(201).json(nuevaNoticia);
  } catch (error) {
    console.error('Error al agregar noticia:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para obtener todas las noticias
async function getAllNoticias(req, res) {
  try {
    const noticias = await noticiasModel.getAllNoticias();
    res.json(noticias);
  } catch (error) {
    console.error('Error al obtener noticias:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para obtener una noticia por su ID
async function getNoticiaById(req, res) {
  try {
    const idNoticia = parseInt(req.params.id);
    const noticia = await noticiasModel.getNoticiaById(idNoticia);
    if (noticia) {
      res.json(noticia);
    } else {
      res.status(404).send('Noticia no encontrada');
    }
  } catch (error) {
    console.error('Error al obtener noticia por ID:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para actualizar una noticia por su ID
async function actualizarNoticia(req, res) {
  try {
    const idNoticia = parseInt(req.params.id);
    const newNoticiaData = req.body;
    const noticiaActualizada = await noticiasModel.updateNoticiaById(idNoticia, newNoticiaData);
    res.json(noticiaActualizada);
  } catch (error) {
    console.error('Error al actualizar noticia:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para eliminar una noticia por su ID
async function eliminarNoticia(req, res) {
  try {
    const idNoticia = parseInt(req.params.id);
    const noticiaEliminada = await noticiasModel.deleteNoticiaById(idNoticia);
    res.json(noticiaEliminada);
  } catch (error) {
    console.error('Error al eliminar noticia:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Exportar las funciones del controlador
module.exports = {
  addNoticia,
  getAllNoticias,
  getNoticiaById,
  actualizarNoticia,
  eliminarNoticia,
};
