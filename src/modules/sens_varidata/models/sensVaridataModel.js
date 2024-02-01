// /src/modules/sens_varidata/models/sensVaridataModel.js

const pool = require('../../../db/db');

// Agregar una nueva relación entre sensor y variable de datalogger
async function addSensVaridata(sensVaridata) {
  const client = await pool.connect();
  try {
    const { sens_id } = sensVaridata;
    const result = await client.query('INSERT INTO sens_varidata (sens_id) VALUES ($1) RETURNING *', [sens_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todas las relaciones entre sensor y variable de datalogger
async function getAllSensVaridata() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM sens_varidata');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener una relación entre sensor y variable de datalogger por su ID
async function getSensVaridataById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM sens_varidata WHERE varidata_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar una relación entre sensor y variable de datalogger por su ID
async function deleteSensVaridataById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM sens_varidata WHERE varidata_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addSensVaridata,
  getAllSensVaridata,
  getSensVaridataById,
  deleteSensVaridataById,
  // Otras funciones CRUD...
};
