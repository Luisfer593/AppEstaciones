// /src/modules/variableservidor/models/variableservidorModel.js

const pool = require('../../../db/db');

// Agregar una nueva variable de servidor
async function addVariableServidor(variableServidor) {
  const client = await pool.connect();
  try {
    const { unidmedi_id, variserv_nombre, variserv_abreviatura } = variableServidor;
    const result = await client.query('INSERT INTO variableservidor (unidmedi_id, variserv_nombre, variserv_abreviatura) VALUES ($1, $2, $3) RETURNING *', [unidmedi_id, variserv_nombre, variserv_abreviatura]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todas las variables de servidor
async function getAllVariablesServidor() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM variableservidor');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener una variable de servidor por su ID
async function getVariableServidorById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM variableservidor WHERE variserv_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar una variable de servidor por su ID
async function updateVariableServidorById(id, newVariableServidorData) {
  const client = await pool.connect();
  try {
    const { unidmedi_id, variserv_nombre, variserv_abreviatura } = newVariableServidorData;
    const result = await client.query('UPDATE variableservidor SET unidmedi_id = $1, variserv_nombre = $2, variserv_abreviatura = $3 WHERE variserv_id = $4 RETURNING *', [unidmedi_id, variserv_nombre, variserv_abreviatura, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar una variable de servidor por su ID
async function deleteVariableServidorById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM variableservidor WHERE variserv_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addVariableServidor,
  getAllVariablesServidor,
  getVariableServidorById,
  updateVariableServidorById,
  deleteVariableServidorById,
  // Otras funciones CRUD...
};
