// /src/modules/unidadmedida/models/unidadmedidaModel.js
const pool = require('../../../db/db');

async function insertarUnidadMedida(unidmedi_simbolo, unidmedi_descripcion) {
  try {
    const result = await pool.query(`
      SELECT administracion.fn_insertar_unidadmedida($1, $2) as success
    `, [unidmedi_simbolo, unidmedi_descripcion]);
    return result.rows[0].success;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function actualizarUnidadMedida(unidmedi_id, unidmedi_simbolo, unidmedi_descripcion) {
  try {
    const result = await pool.query(`
      UPDATE administracion.unidadmedida
      SET unidmedi_simbolo = $2,
          unidmedi_descripcion = $3
      WHERE unidmedi_id = $1
    `, [unidmedi_id, unidmedi_simbolo, unidmedi_descripcion]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function eliminarUnidadMedida(unidmedi_id) {
  try {
    const result = await pool.query('DELETE FROM administracion.unidadmedida WHERE unidmedi_id = $1', [unidmedi_id]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function obtenerUnidadesMedida() {
  try {
    const result = await pool.query('SELECT * FROM administracion.unidadmedida');
    return result.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = {
  insertarUnidadMedida,
  actualizarUnidadMedida,
  eliminarUnidadMedida,
  obtenerUnidadesMedida,
};
