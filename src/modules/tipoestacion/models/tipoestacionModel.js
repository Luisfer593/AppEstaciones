// /src/modules/tipoestacion/models/tipoestacionModel.js

const pool = require('../../../db/db');

// Agregar un nuevo tipo de estación
async function addTipoEstacion(tipoEstacion) {
  const client = await pool.connect();
  try {
    const { tipoesta_nombre } = tipoEstacion;
    const result = await client.query('INSERT INTO tipoestacion (tipoesta_nombre) VALUES ($1) RETURNING *', [tipoesta_nombre]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todos los tipos de estación
async function getAllTipoEstaciones() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM tipoestacion');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener un tipo de estación por su ID
async function getTipoEstacionById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM tipoestacion WHERE tipoesta_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar un tipo de estación por su ID
async function updateTipoEstacionById(id, newTipoEstacionData) {
  const client = await pool.connect();
  try {
    const { tipoesta_nombre } = newTipoEstacionData;
    const result = await client.query('UPDATE tipoestacion SET tipoesta_nombre = $1 WHERE tipoesta_id = $2 RETURNING *', [tipoesta_nombre, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar un tipo de estación por su ID
async function deleteTipoEstacionById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM tipoestacion WHERE tipoesta_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addTipoEstacion,
  getAllTipoEstaciones,
  getTipoEstacionById,
  updateTipoEstacionById,
  deleteTipoEstacionById,
  // Otras funciones CRUD...
};
