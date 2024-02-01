const pool = require('../../../db/db');

// Agregar una nueva comunidad
async function addComunidad(comunidad) {
  const client = await pool.connect();
  try {
    const { parr_id, comu_nombre } = comunidad;
    const result = await client.query('INSERT INTO comunidad (parr_id, comu_nombre) VALUES ($1, $2) RETURNING *', [parr_id, comu_nombre]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todas las comunidades
async function getAllComunidades() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM comunidad');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener una comunidad por su ID
async function getComunidadById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM comunidad WHERE comu_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar una comunidad por su ID
async function updateComunidadById(id, newComunidadData) {
  const client = await pool.connect();
  try {
    const { parr_id, comu_nombre } = newComunidadData;
    const result = await client.query('UPDATE comunidad SET parr_id = $1, comu_nombre = $2 WHERE comu_id = $3 RETURNING *', [parr_id, comu_nombre, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar una comunidad por su ID
async function deleteComunidadById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM comunidad WHERE comu_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addComunidad,
  getAllComunidades,
  getComunidadById,
  updateComunidadById,
  deleteComunidadById,
  // Otras funciones CRUD...
};
