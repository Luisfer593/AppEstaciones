// /src/modules/sensores/models/sensoresModel.js
const pool = require('../../../db/db');

async function insertarSensores(esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion) {
  try {
    const result = await pool.query(`
      SELECT administracion.fn_insertar_sensores($1, $2, $3, $4, $5, $6, $7) as success
    `, [esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion]);
    return result.rows[0].success;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function actualizarSensores(sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion) {
  try {
    const result = await pool.query(`
      UPDATE administracion.sensores
      SET esta_id = $2,
          marc_id = $3,
          sens_nombre = $4,
          sens_modelo = $5,
          sens_numeroserie = $6,
          sens_estado = $7,
          sens_especificacion = $8
      WHERE sens_id = $1
    `, [sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function eliminarSensores(sens_id) {
  try {
    const result = await pool.query('DELETE FROM administracion.sensores WHERE sens_id = $1', [sens_id]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function obtenerSensores() {
  try {
    const result = await pool.query('SELECT * FROM administracion.sensores');
    return result.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}
async function obtenerSensoresById(idSensor) {
  try {
      const client = await pool.connect();
      const query = 'SELECT sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion FROM administracion.sensores WHERE sens_id = $1';
      const result = await client.query(query, [idSensor]);
      client.release();
      return result.rows;
  } catch (error) {
      console.error('Error en obtenerSensoresById:', error);
      throw error;
  }
}

async function obtenerSensoresByEstacionId(idEstacion) {
  try {
      const client = await pool.connect();
      const query = 'SELECT sens_id FROM administracion.sensores WHERE esta_id = $1 AND sens_estado = $2';
      const result = await client.query(query, [idEstacion, 'Operativo']);
      client.release();
      return result.rows;
  } catch (error) {
      console.error('Error en obtenerSensoresByEstacionId:', error);
      throw error;
  }
}

module.exports = {
  insertarSensores,
  actualizarSensores,
  eliminarSensores,
  obtenerSensores,
  obtenerSensoresById,
  obtenerSensoresByEstacionId,
};
