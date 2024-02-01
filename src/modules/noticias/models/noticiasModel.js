// /src/modules/noticias/models/noticiasModel.js

const pool = require('../../../db/db');

// Agregar una nueva noticia
async function addNoticia(noticiaData) {
  const client = await pool.connect();
  try {
    const { titulo, contenido, imagen } = noticiaData;
    const result = await client.query('INSERT INTO noticias (titulo, contenido, imagen) VALUES ($1, $2, $3) RETURNING *', [titulo, contenido, imagen]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todas las noticias
async function getAllNoticias() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM noticias');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener una noticia por su ID
async function getNoticiaById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM noticias WHERE id_noticia = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar una noticia por su ID
async function updateNoticiaById(id, newData) {
  const client = await pool.connect();
  try {
    const { titulo, contenido, imagen } = newData;
    const result = await client.query('UPDATE noticias SET titulo = $1, contenido = $2, imagen = $3 WHERE id_noticia = $4 RETURNING *', [titulo, contenido, imagen, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar una noticia por su ID
async function deleteNoticiaById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM noticias WHERE id_noticia = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Exportar las funciones
module.exports = {
  addNoticia,
  getAllNoticias,
  getNoticiaById,
  updateNoticiaById,
  deleteNoticiaById,
};
