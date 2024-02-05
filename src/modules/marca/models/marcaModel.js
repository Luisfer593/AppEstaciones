// /src/modules/marca/models/marcaModel.js
const pool = require('../../../db/db');

async function insertarMarca(marc_nombre) {
  try {
    const result = await pool.query(`
      SELECT administracion.fn_insertar_marca($1) as success
    `, [marc_nombre]);
    return result.rows[0].success;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function actualizarMarca(marc_id, marc_nombre) {
  try {
    const result = await pool.query(`
      UPDATE administracion.marca
      SET marc_nombre = $2
      WHERE marc_id = $1
    `, [marc_id, marc_nombre]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function eliminarMarca(marc_id) {
  try {
    const result = await pool.query('DELETE FROM administracion.marca WHERE marc_id = $1', [marc_id]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function listarMarcas() {
  try {
    const result = await pool.query('SELECT marc_id, marc_nombre FROM administracion.marca');
    return result.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = {
  insertarMarca,
  actualizarMarca,
  eliminarMarca,
  listarMarcas,
};
