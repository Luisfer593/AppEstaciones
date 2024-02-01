const pool = require('../../../db/db');

// Agregar un nuevo cantón
async function addCanton(canton) {
  const client = await pool.connect();
  try {
    const { prov_id, cant_nombre } = canton;
    const result = await client.query('INSERT INTO canton (prov_id, cant_nombre) VALUES ($1, $2) RETURNING *', [prov_id, cant_nombre]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todos los cantones
async function getAllCantones() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM canton');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener un cantón por su ID
async function getCantonById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM canton WHERE cant_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar un cantón por su ID
async function updateCantonById(id, newCantonData) {
  const client = await pool.connect();
  try {
    const { prov_id, cant_nombre } = newCantonData;
    const result = await client.query('UPDATE canton SET prov_id = $1, cant_nombre = $2 WHERE cant_id = $3 RETURNING *', [prov_id, cant_nombre, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar un cantón por su ID
async function deleteCantonById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM canton WHERE cant_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addCanton,
  getAllCantones,
  getCantonById,
  updateCantonById,
  deleteCantonById,
  // Otras funciones CRUD...
};
