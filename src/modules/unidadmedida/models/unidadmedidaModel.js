// /src/modules/unidadmedida/models/unidadmedidaModel.js

const pool = require('../../../db/db');

async function addUnidadmedida(unidmedi_simbolo, unidmedi_descripcion) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.unidadmedida (unidmedi_simbolo, unidmedi_descripcion) VALUES ($1, $2) RETURNING *',
      [unidmedi_simbolo, unidmedi_descripcion]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllUnidadmedida() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.unidadmedida');
    return result.rows;
  } finally {
    client.release();
  }
}

async function getUnidadmedidaById(unidmedi_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.unidadmedida WHERE unidmedi_id = $1', [unidmedi_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function updateUnidadmedidaById(unidmedi_id, unidmedi_simbolo, unidmedi_descripcion) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'UPDATE administracion.unidadmedida SET unidmedi_simbolo = $1, unidmedi_descripcion = $2 WHERE unidmedi_id = $3 RETURNING *',
      [unidmedi_simbolo, unidmedi_descripcion, unidmedi_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function deleteUnidadmedidaById(unidmedi_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM administracion.unidadmedida WHERE unidmedi_id = $1 RETURNING *', [unidmedi_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

module.exports = {
  addUnidadmedida,
  getAllUnidadmedida,
  getUnidadmedidaById,
  updateUnidadmedidaById,
  deleteUnidadmedidaById,
};
