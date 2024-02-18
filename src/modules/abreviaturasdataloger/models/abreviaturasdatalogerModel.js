// /src/modules/abreviaturasdataloger/models/abreviaturasdatalogerModel.js

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
async function obtenerVariablesDatalogerByAbreviatura(abreviatura) {
  try {
      const client = await pool.connect();
      const query = 'SELECT * FROM administracion.fn_verifica_abreviatura_dataloger_by_abreviatura($1)';
      const result = await client.query(query, [abreviatura]);
      client.release();
      return result.rows;
  } catch (error) {
      console.error('Error en obtenerVariablesDatalogerByAbreviatura:', error);
      throw error;
  }
}

module.exports = {
  insertarAbreviatura,
  actualizarAbreviatura,
  eliminarAbreviatura,
  obtenerAbreviaturas,
  obtenerVariablesDatalogerByAbreviatura,
};
