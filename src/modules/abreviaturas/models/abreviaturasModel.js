// models/abreviaturasModel.js
const pool = require('../../../db/db');

async function addAbreviatura(abre_descripcion, variserv_id) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.abreviaturas (abre_descripcion, variserv_id) VALUES ($1, $2) RETURNING *',
      [abre_descripcion, variserv_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllAbreviaturas() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.abreviaturas');
    return result.rows;
  } finally {
    client.release();
  }
}

// Resto de las funciones CRUD adaptadas a esquemas...

module.exports = {
  addAbreviatura,
  getAllAbreviaturas,
  // Resto de las funciones CRUD...
};
