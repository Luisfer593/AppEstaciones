// /src/modules/sensores/models/sensoresModel.js

const pool = require('../../../db/db');

async function addSensor(sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.sensores (sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllSensores() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.sensores');
    return result.rows;
  } finally {
    client.release();
  }
}

async function editSensor(sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'UPDATE administracion.sensores SET esta_id = $2, marc_id = $3, sens_nombre = $4, sens_modelo = $5, sens_numeroserie = $6, sens_estado = $7, sens_especificacion = $8 WHERE sens_id = $1 RETURNING *',
      [sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function deleteSensor(sens_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM administracion.sensores WHERE sens_id = $1 RETURNING *', [sens_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

module.exports = {
  addSensor,
  getAllSensores,
  editSensor,
  deleteSensor,
};
