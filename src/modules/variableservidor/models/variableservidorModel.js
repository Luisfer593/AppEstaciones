// /src/modules/variableservidor/models/variableservidorModel.js
const pool = require('../../../db/db');

async function obtenerVariableServidorLista() {
  try {
    const result = await pool.query('SELECT variserv_id, unidmedi_id, variserv_nombre, variserv_abreviatura FROM administracion.variableservidor');
    return result.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function obtenerVariableServidorById(id_variserv) {
  try {
    const result = await pool.query('SELECT variserv_id, unidmedi_id, variserv_nombre, variserv_abreviatura FROM administracion.variableservidor WHERE variserv_id = $1', [id_variserv]);
    return result.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function obtenerVariableServidorByAbreviatura(strabreviatura) {
  try {
    const result = await pool.query('SELECT * FROM administracion.varibles_by_abrebiatura($1)', [strabreviatura]);
    return result.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function obtenerVariableServidorByIdUnidMedi(id_unidmedi) {
  try {
    const result = await pool.query('SELECT variserv_id, unidmedi_id, variserv_nombre, variserv_abreviatura FROM administracion.variableservidor WHERE unidmedi_id = $1', [id_unidmedi]);
    return result.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function comprobarAbreviatura(strabreviatura) {
  try {
    const result = await pool.query('SELECT * FROM administracion.variableservidor WHERE variserv_abreviatura ILIKE $1 OR variserv_abreviaturados ILIKE $1', [strabreviatura]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function insertarVariableServidor(variableservidor) {
  try {
    const result = await pool.query(`
      INSERT INTO administracion.variableservidor(unidmedi_id, variserv_nombre, variserv_abreviatura, variserv_abreviaturados)
      VALUES ($1, $2, $3, $4)
    `, [variableservidor.unidmedi_id, variableservidor.variserv_nombre, variableservidor.variserv_abreviatura, variableservidor.variserv_abreviaturados]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function actualizarVariableServidor(variableservidor) {
  try {
    const result = await pool.query(`
      UPDATE administracion.variableservidor
      SET unidmedi_id = $1, variserv_nombre = $2, variserv_abreviatura = $3, variserv_abreviaturados = $4
      WHERE variserv_id = $5
    `, [variableservidor.unidmedi_id, variableservidor.variserv_nombre, variableservidor.variserv_abreviatura, variableservidor.variserv_abreviaturados, variableservidor.variserv_id]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function eliminarVariableServidor(id_variserv) {
  try {
    const result = await pool.query('DELETE FROM administracion.variableservidor WHERE variserv_id = $1', [id_variserv]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = {
  obtenerVariableServidorLista,
  obtenerVariableServidorById,
  obtenerVariableServidorByAbreviatura,
  obtenerVariableServidorByIdUnidMedi,
  comprobarAbreviatura,
  insertarVariableServidor,
  actualizarVariableServidor,
  eliminarVariableServidor,
};
