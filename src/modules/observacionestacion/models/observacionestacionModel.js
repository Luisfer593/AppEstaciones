// /src/modules/observacionestacion/models/observacionestacionModel.js

const pool = require('../../../db/db');

// Agregar una nueva observación de estación
async function addObservacionEstacion(observacion) {
  const client = await pool.connect();
  try {
    const { esta_id, obseesta_descripcion, obseesta_fecha } = observacion;

    const result = await client.query(
      'INSERT INTO observacionestacion (esta_id, obseesta_descripcion, obseesta_fecha) VALUES ($1, $2, $3) RETURNING *',
      [esta_id, obseesta_descripcion, obseesta_fecha]
    );

    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todas las observaciones de estación
async function getAllObservacionesEstacion() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM observacionestacion');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener una observación de estación por su ID
async function getObservacionEstacionById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM observacionestacion WHERE obseesta_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar una observación de estación por su ID
async function updateObservacionEstacionById(id, newObservacionData) {
  const client = await pool.connect();
  try {
    const { esta_id, obseesta_descripcion, obseesta_fecha } = newObservacionData;

    const result = await client.query(
      'UPDATE observacionestacion SET esta_id = $1, obseesta_descripcion = $2, obseesta_fecha = $3 WHERE obseesta_id = $4 RETURNING *',
      [esta_id, obseesta_descripcion, obseesta_fecha, id]
    );

    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar una observación de estación por su ID
async function deleteObservacionEstacionById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM observacionestacion WHERE obseesta_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addObservacionEstacion,
  getAllObservacionesEstacion,
  getObservacionEstacionById,
  updateObservacionEstacionById,
  deleteObservacionEstacionById
  // Otras funciones CRUD...
};
