// /src/modules/variableservidor/models/variableservidorModel.js

const pool = require('../../../db/db');

async function addVariableservidor(unidmedi_id, variserv_nombre) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.variableservidor (unidmedi_id, variserv_nombre) VALUES ($1, $2) RETURNING *',
      [unidmedi_id, variserv_nombre]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllVariableservidor() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.variableservidor');
    return result.rows;
  } finally {
    client.release();
  }
}

async function getVariableservidorById(variserv_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.variableservidor WHERE variserv_id = $1', [variserv_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function updateVariableservidorById(variserv_id, unidmedi_id, variserv_nombre) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'UPDATE administracion.variableservidor SET unidmedi_id = $1, variserv_nombre = $2 WHERE variserv_id = $3 RETURNING *',
      [unidmedi_id, variserv_nombre, variserv_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function deleteVariableservidorById(variserv_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM administracion.variableservidor WHERE variserv_id = $1 RETURNING *', [variserv_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

module.exports = {
  addVariableservidor,
  getAllVariableservidor,
  getVariableservidorById,
  updateVariableservidorById,
  deleteVariableservidorById,
};
