// /src/modules/tipoestacion/models/tipoestacionModel.js

const pool = require('../../../db/db');

async function addTipoestacion(tipoesta_id, tiposesta_nombre) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.tipoestacion (tipoesta_id, tiposesta_nombre) VALUES ($1, $2) RETURNING *',
      [tipoesta_id, tiposesta_nombre]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllTipoestacion() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.tipoestacion');
    return result.rows;
  } finally {
    client.release();
  }
}

async function getTipoestacionById(tipoesta_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.tipoestacion WHERE tipoesta_id = $1', [tipoesta_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function updateTipoestacionById(tipoesta_id, tiposesta_nombre) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'UPDATE administracion.tipoestacion SET tiposesta_nombre = $1 WHERE tipoesta_id = $2 RETURNING *',
      [tiposesta_nombre, tipoesta_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function deleteTipoestacionById(tipoesta_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM administracion.tipoestacion WHERE tipoesta_id = $1 RETURNING *', [tipoesta_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

module.exports = {
  addTipoestacion,
  getAllTipoestacion,
  getTipoestacionById,
  updateTipoestacionById,
  deleteTipoestacionById,
};

