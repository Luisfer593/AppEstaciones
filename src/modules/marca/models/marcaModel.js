// /src/modules/marca/models/marcaModel.js

// marcaModel.js
const pool = require('../../../db/db');

async function addMarca(marc_id, marc_nombre) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.marca (marc_id, marc_nombre) VALUES ($1, $2) RETURNING *',
      [marc_id, marc_nombre]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllMarcas() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.marca');
    return result.rows;
  } finally {
    client.release();
  }
}

async function updateMarca(marc_id, newNombre) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'UPDATE administracion.marca SET marc_nombre = $1 WHERE marc_id = $2 RETURNING *',
      [newNombre, marc_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function deleteMarca(marc_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM administracion.marca WHERE marc_id = $1 RETURNING *', [marc_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

module.exports = {
  addMarca,
  getAllMarcas,
  updateMarca,
  deleteMarca,
};
