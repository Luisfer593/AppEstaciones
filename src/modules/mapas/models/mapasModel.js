// /src/modules/mapas/models/mapasModel.js

const pool = require('../../../db/db');

// Agregar un nuevo mapa
async function addMapa(mapaData) {
  const client = await pool.connect();
  try {
    const { anio, mes, num_mes, descripcion, imagen } = mapaData;
    const result = await client.query('INSERT INTO mapas (anio, mes, num_mes, descripcion, imagen) VALUES ($1, $2, $3, $4, $5) RETURNING *', [anio, mes, num_mes, descripcion, imagen]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todos los mapas
async function getAllMapas() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM mapas');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener un mapa por su ID
async function getMapaById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM mapas WHERE id_mapa = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar un mapa por su ID
async function updateMapaById(id, newData) {
  const client = await pool.connect();
  try {
    const { anio, mes, num_mes, descripcion, imagen } = newData;
    const result = await client.query('UPDATE mapas SET anio = $1, mes = $2, num_mes = $3, descripcion = $4, imagen = $5 WHERE id_mapa = $6 RETURNING *', [anio, mes, num_mes, descripcion, imagen, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar un mapa por su ID
async function deleteMapaById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM mapas WHERE id_mapa = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Exportar las funciones
module.exports = {
  addMapa,
  getAllMapas,
  getMapaById,
  updateMapaById,
  deleteMapaById,
};
