// sens_varidataModel.js

const pool = require('../../../db/db');

async function addsens_varidata(varidata_id, sens_id) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.sens_varidata (varidata_id, sens_id) VALUES ($1, $2) RETURNING *',
      [varidata_id, sens_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllsens_varidata() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.sens_varidata');
    return result.rows;
  } finally {
    client.release();
  }
}

// Otras funciones CRUD (update, delete) si es necesario...

module.exports = {
  addsens_varidata,
  getAllsens_varidata,  // Agregamos el método GET
  // Otras funciones CRUD...
};
