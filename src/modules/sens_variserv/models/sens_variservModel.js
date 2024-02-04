// /src/modules/sens_variserv/models/sens_variservModel.js

const pool = require('../../../db/db');

async function addsens_variserv(variserv_id, sens_id) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.sens_variserv (variserv_id, sens_id) VALUES ($1, $2) RETURNING *',
      [variserv_id, sens_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllsens_variserv() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.sens_variserv');
    return result.rows;
  } finally {
    client.release();
  }
}

// Otras funciones CRUD (update, delete) si es necesario...

module.exports = {
  addsens_variserv,
  getAllsens_variserv,  // Agregamos el método GET
  // Otras funciones CRUD...
};
