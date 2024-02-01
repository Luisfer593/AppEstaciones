// /src/modules/noticias/routes/noticiasRoutes.js

const express = require('express');
const noticiasController = require('../controllers/noticiasController');

const router = express.Router();

// Ruta para agregar una nueva noticia
router.post('/noticias', noticiasController.addNoticia);

// Ruta para obtener todas las noticias
router.get('/noticias', noticiasController.getAllNoticias);

// Ruta para obtener una noticia por su ID
router.get('/noticias/:id', noticiasController.getNoticiaById);

// Ruta para actualizar una noticia por su ID
router.put('/noticias/:id', noticiasController.actualizarNoticia);

// Ruta para eliminar una noticia por su ID
router.delete('/noticias/:id', noticiasController.eliminarNoticia);

// Exportar el router
module.exports = router;
