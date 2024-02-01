// /src/modules/sensores/models/sensoresModel.js

const pool = require('../../../db/db');

// Agregar un nuevo sensor
async function addSensor(sensor) {
  const client = await pool.connect();
  try {
    const { esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado } = sensor;
    const result = await client.query('INSERT INTO sensores (esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todos los sensores
async function getAllSensores() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM sensores');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener un sensor por su ID
async function getSensorById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM sensores WHERE sens_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar un sensor por su ID
async function updateSensorById(id, newSensorData) {
  const client = await pool.connect();
  try {
    const { esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado } = newSensorData;
    const result = await client.query('UPDATE sensores SET esta_id = $1, marc_id = $2, sens_nombre = $3, sens_modelo = $4, sens_numeroserie = $5, sens_estado = $6 WHERE sens_id = $7 RETURNING *',
      [esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar un sensor por su ID
async function deleteSensorById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM sensores WHERE sens_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addSensor,
  getAllSensores,
  getSensorById,
  updateSensorById,
  deleteSensorById,
  // Otras funciones CRUD...
};
