// /src/modules/observacionsensores/models/observacionsensoresModel.js

const pool = require('../../../db/db');

// Agregar una nueva observación de sensor
async function addObservacionSensor(observacionSensor) {
  const client = await pool.connect();
  try {
    const { sens_id, obsesens_descripcion, obsesens_fecha } = observacionSensor;
    const result = await client.query('INSERT INTO observacionsensores (sens_id, obsesens_descripcion, obsesens_fecha) VALUES ($1, $2, $3) RETURNING *',
      [sens_id, obsesens_descripcion, obsesens_fecha]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todas las observaciones de sensores
async function getAllObservacionesSensores() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM observacionsensores');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener una observación de sensor por su ID
async function getObservacionSensorById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM observacionsensores WHERE obsesens_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar una observación de sensor por su ID
async function updateObservacionSensorById(id, newObservacionSensorData) {
  const client = await pool.connect();
  try {
    const { sens_id, obsesens_descripcion, obsesens_fecha } = newObservacionSensorData;
    const result = await client.query('UPDATE observacionsensores SET sens_id = $1, obsesens_descripcion = $2, obsesens_fecha = $3 WHERE obsesens_id = $4 RETURNING *',
      [sens_id, obsesens_descripcion, obsesens_fecha, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar una observación de sensor por su ID
async function deleteObservacionSensorById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM observacionsensores WHERE obsesens_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addObservacionSensor,
  getAllObservacionesSensores,
  getObservacionSensorById,
  updateObservacionSensorById,
  deleteObservacionSensorById,
  // Otras funciones CRUD...
};
