// /src/modules/observacionestacion/models/observacionestacionModel.js

// observacionestacionModel.js
const pool = require('../../../db/db');

async function addObservacionEstacion(obseesta_id, esta_id, obseesta_descripcion, obseesta_fecha) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.observacionestacion (obseesta_id, esta_id, obseesta_descripcion, obseesta_fecha) VALUES ($1, $2, $3, $4) RETURNING *',
      [obseesta_id, esta_id, obseesta_descripcion, obseesta_fecha]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllObservacionesEstacion() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.observacionestacion');
    return result.rows;
  } finally {
    client.release();
  }
}

async function updateObservacionEstacion(obseesta_id, newDescripcion, newFecha) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'UPDATE administracion.observacionestacion SET obseesta_descripcion = $1, obseesta_fecha = $2 WHERE obseesta_id = $3 RETURNING *',
      [newDescripcion, newFecha, obseesta_id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function deleteObservacionEstacion(obseesta_id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM administracion.observacionestacion WHERE obseesta_id = $1 RETURNING *', [obseesta_id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

module.exports = {
  addObservacionEstacion,
  getAllObservacionesEstacion,
  updateObservacionEstacion,
  deleteObservacionEstacion,
};
