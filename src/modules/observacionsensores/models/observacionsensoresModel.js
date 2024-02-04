// /src/modules/observacionsensores/models/observacionsensoresModel.js

const pool = require('../../../db/db');

async function addObservacionSensores(obsesens_id, sens_id, obsesens_descripcion, obsesens_fecha) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.observacionsensores (obsesens_id, sens_id, obsesens_descripcion, obsesens_fecha) VALUES ($1, $2, $3, $4) RETURNING *',
      [obsesens_id, sens_id, obsesens_descripcion, obsesens_fecha]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllObservacionesSensores() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.observacionsensores');
    return result.rows;
  } finally {
    client.release();
  }
}

async function updateObservacionSensores(obsesens_id, newDescripcion, newFecha) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'UPDATE administracion.observacionsensores SET obsesens_descripcion = $1, obsesens_fecha = $2 WHERE obsesens_id = $3 RETURNING *',
      [newDescripcion, newFecha, obsesens_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function deleteObservacionSensores(obsesens_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM administracion.observacionsensores WHERE obsesens_id = $1 RETURNING *', [obsesens_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

module.exports = {
  addObservacionSensores,
  getAllObservacionesSensores,
  updateObservacionSensores,
  deleteObservacionSensores,
};
