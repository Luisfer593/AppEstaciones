// parroquiaModel.js
const pool = require('../../../db/db');

async function addParroquia(parr_id, cant_id, parr_nombre, parr_tipo) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.parroquia (parr_id, cant_id, parr_nombre, parr_tipo) VALUES ($1, $2, $3, $4) RETURNING *',
      [parr_id, cant_id, parr_nombre, parr_tipo]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllParroquias() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.parroquia');
    return result.rows;
  } finally {
    client.release();
  }
}

async function updateParroquia(parr_id, newNombre, newTipo) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'UPDATE administracion.parroquia SET parr_nombre = $1, parr_tipo = $2 WHERE parr_id = $3 RETURNING *',
      [newNombre, newTipo, parr_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function deleteParroquia(parr_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM administracion.parroquia WHERE parr_id = $1 RETURNING *', [parr_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

module.exports = {
  addParroquia,
  getAllParroquias,
  updateParroquia,
  deleteParroquia,
};
