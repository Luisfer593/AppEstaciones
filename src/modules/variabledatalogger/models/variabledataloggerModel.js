const pool = require('../../../db/db');

async function insertarVariableDatalogger(unidmedi_id, varidata_nombre) {
  try {
    const result = await pool.query(`
      SELECT administracion.fn_insertar_variabledatalogger($1, $2) as success
    `, [unidmedi_id, varidata_nombre]);
    return result.rows[0].success;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function actualizarVariableDatalogger(varidata_id, unidmedi_id, varidata_nombre) {
  try {
    const result = await pool.query(`
      UPDATE administracion.variabledataloger
      SET unidmedi_id = $2,
          varidata_nombre = $3
      WHERE varidata_id = $1
    `, [varidata_id, unidmedi_id, varidata_nombre]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function eliminarVariableDatalogger(varidata_id) {
  try {
    const result = await pool.query('DELETE FROM administracion.variabledataloger WHERE varidata_id = $1', [varidata_id]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function obtenerVariablesDatalogger() {
  try {
    const result = await pool.query('SELECT * FROM administracion.variabledataloger');
    return result.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = {
  insertarVariableDatalogger,
  actualizarVariableDatalogger,
  eliminarVariableDatalogger,
  obtenerVariablesDatalogger,
};
