// /src/modules/variabledataloger/models/variabledatalogerModel.js

const pool = require('../../../db/db');

async function addVariabledataloger(unidmedi_id, varidata_nombre) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.variabledataloger (unidmedi_id, varidata_nombre) VALUES ($1, $2) RETURNING *',
      [unidmedi_id, varidata_nombre]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllVariabledataloger() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.variabledataloger');
    return result.rows;
  } finally {
    client.release();
  }
}

async function getVariabledatalogerById(varidata_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.variabledataloger WHERE varidata_id = $1', [varidata_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function updateVariabledatalogerById(varidata_id, unidmedi_id, varidata_nombre) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'UPDATE administracion.variabledataloger SET unidmedi_id = $1, varidata_nombre = $2 WHERE varidata_id = $3 RETURNING *',
      [unidmedi_id, varidata_nombre, varidata_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function deleteVariabledatalogerById(varidata_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM administracion.variabledataloger WHERE varidata_id = $1 RETURNING *', [varidata_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

module.exports = {
  addVariabledataloger,
  getAllVariabledataloger,
  getVariabledatalogerById,
  updateVariabledatalogerById,
  deleteVariabledatalogerById,
};
