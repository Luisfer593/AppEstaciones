const pool = require('../../../db/db');

async function addCanton(cant_id, prov_id, cant_nombre) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.canton (cant_id, prov_id, cant_nombre) VALUES ($1, $2, $3) RETURNING *',
      [cant_id, prov_id, cant_nombre]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllCantones() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.canton');
    return result.rows;
  } finally {
    client.release();
  }
}

async function editCanton(cant_id, prov_id, cant_nombre) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'UPDATE administracion.canton SET prov_id = $2, cant_nombre = $3 WHERE cant_id = $1 RETURNING *',
      [cant_id, prov_id, cant_nombre]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function deleteCanton(cant_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM administracion.canton WHERE cant_id = $1 RETURNING *', [cant_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

module.exports = {
  addCanton,
  getAllCantones,
  editCanton,
  deleteCanton,
};
