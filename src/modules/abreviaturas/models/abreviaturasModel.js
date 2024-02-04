// models/abreviaturasModel.js

const pool = require('../../../db/db');

async function insertarAbreviatura(variserv_id, abre_descripcion) {
  const client = await pool.connect();
  try {
    let nuevocodigo = 1;

    // Obtener el máximo valor de abre_id
    const result = await client.query('SELECT MAX(abre_id) FROM administracion.abreviaturas');
    if (result.rows.length > 0) {
      nuevocodigo = result.rows[0].max + 1;
    }

    // Insertar la nueva abreviatura
    const insertQuery = 'INSERT INTO administracion.abreviaturas(abre_id, variserv_id, abre_descripcion) VALUES ($1, $2, $3) RETURNING *';
    const resultInsert = await client.query(insertQuery, [nuevocodigo, variserv_id, abre_descripcion]);

    return resultInsert.rows[0];
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
async function eliminarAbreviatura(id) {
  const client = await pool.connect();
  try {
    const deleteQuery = 'DELETE FROM administracion.abreviaturas WHERE abre_id = $1';
    await client.query(deleteQuery, [id]);
    return { message: 'Registro eliminado correctamente' };
  } finally {
    client.release();
  }
}

// Resto de las funciones CRUD adaptadas a esquemas...

module.exports = {
  insertarAbreviatura,
  getAllAbreviaturas,
  eliminarAbreviatura,
  // Resto de las funciones CRUD...
};
