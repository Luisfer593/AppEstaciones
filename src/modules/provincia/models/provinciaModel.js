// provinciaModel.js
const pool = require('../../../db/db');

async function addProvincia(prov_id, prov_nombre) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.provincia (prov_id, prov_nombre) VALUES ($1, $2) RETURNING *',
      [prov_id, prov_nombre]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllProvincias() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.provincia');
    return result.rows;
  } finally {
    client.release();
  }
}

async function updateProvincia(prov_id, newNombre) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'UPDATE administracion.provincia SET prov_nombre = $1 WHERE prov_id = $2 RETURNING *',
      [newNombre, prov_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function deleteProvincia(prov_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM administracion.provincia WHERE prov_id = $1 RETURNING *', [prov_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

module.exports = {
  addProvincia,
  getAllProvincias,
  updateProvincia,
  deleteProvincia,
};

