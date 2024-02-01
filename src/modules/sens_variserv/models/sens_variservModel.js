// /src/modules/sens_variserv/models/sens_variservModel.js

const pool = require('../../../db/db');

// Agregar una nueva relación entre sensor y variable de servidor
async function addSensVariserv(sensVariserv) {
  const client = await pool.connect();
  try {
    const { sens_id } = sensVariserv;
    const result = await client.query('INSERT INTO sens_variserv (sens_id) VALUES ($1) RETURNING *', [sens_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todas las relaciones entre sensor y variable de servidor
async function getAllSensVariserv() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM sens_variserv');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener una relación entre sensor y variable de servidor por su ID
async function getSensVariservById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM sens_variserv WHERE variserv_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar una relación entre sensor y variable de servidor por su ID
async function deleteSensVariservById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM sens_variserv WHERE variserv_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addSensVariserv,
  getAllSensVariserv,
  getSensVariservById,
  deleteSensVariservById,
  // Otras funciones CRUD...
};
