// models/abreviaturasModel.js
const pool = require('../../../db/db');

async function insertarAbreviatura(variserv_id, abre_descripcion) {
  try {
    const result = await pool.query('SELECT administracion.fn_insertar_abreviaturas($1, $2) as success', [variserv_id, abre_descripcion]);
    return result.rows[0].success;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function actualizarAbreviatura(abre_id, variserv_id, abre_descripcion) {
  try {
    const result = await pool.query('UPDATE administracion.abreviaturas SET variserv_id = $2, abre_descripcion = $3 WHERE abre_id = $1', [abre_id, variserv_id, abre_descripcion]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function eliminarAbreviatura(abre_id) {
  try {
    const result = await pool.query('DELETE FROM administracion.abreviaturas WHERE abre_id = $1', [abre_id]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function obtenerAbreviaturas() {
  try {
    const result = await pool.query('SELECT * FROM administracion.abreviaturas');
    return result.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = {
  insertarAbreviatura,
  actualizarAbreviatura,
  eliminarAbreviatura,
  obtenerAbreviaturas,
};
