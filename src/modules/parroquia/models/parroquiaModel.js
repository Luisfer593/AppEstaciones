const pool = require('../../../db/db');

// Agregar una nueva parroquia
async function addParroquia(parroquia) {
  const client = await pool.connect();
  try {
    const { cant_id, parr_nombre, parr_tipo } = parroquia;
    const result = await client.query('INSERT INTO parroquia (cant_id, parr_nombre, parr_tipo) VALUES ($1, $2, $3) RETURNING *', [cant_id, parr_nombre, parr_tipo]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todas las parroquias
async function getAllParroquias() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM parroquia');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener una parroquia por su ID
async function getParroquiaById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM parroquia WHERE parr_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar una parroquia por su ID
async function updateParroquiaById(id, newParroquiaData) {
  const client = await pool.connect();
  try {
    const { cant_id, parr_nombre, parr_tipo } = newParroquiaData;
    const result = await client.query('UPDATE parroquia SET cant_id = $1, parr_nombre = $2, parr_tipo = $3 WHERE parr_id = $4 RETURNING *', [cant_id, parr_nombre, parr_tipo, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar una parroquia por su ID
async function deleteParroquiaById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM parroquia WHERE parr_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addParroquia,
  getAllParroquias,
  getParroquiaById,
  updateParroquiaById,
  deleteParroquiaById,
  // Otras funciones CRUD...
};
