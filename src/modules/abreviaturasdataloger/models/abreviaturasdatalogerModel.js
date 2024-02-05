const pool = require('../../../db/db');

async function insertarAbreviatura(varidata_id, abredata_descripcion) {
  try {
    const result = await pool.query('SELECT administracion.fn_insertar_abreviaturasdataloger($1, $2) as success', [varidata_id, abredata_descripcion]);
    return result.rows[0].success;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function actualizarAbreviatura(abredata_id, varidata_id, abredata_descripcion) {
  try {
    const result = await pool.query('UPDATE administracion.abreviaturasdataloger SET varidata_id = $2, abredata_descripcion = $3 WHERE abredata_id = $1', [abredata_id, varidata_id, abredata_descripcion]);
    return result.rowCount > 0; // Retorna true si se realizó la actualización correctamente
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function eliminarAbreviatura(abredata_id) {
  try {
    const result = await pool.query('DELETE FROM administracion.abreviaturasdataloger WHERE abredata_id = $1', [abredata_id]);
    return result.rowCount > 0; // Retorna true si se realizó la eliminación correctamente
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function obtenerAbreviaturas() {
  try {
    const result = await pool.query('SELECT * FROM administracion.abreviaturasdataloger');
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
