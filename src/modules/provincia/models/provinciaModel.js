const pool = require('../../../db/db');

// Agregar una nueva provincia
async function addProvincia(provincia) {
  const client = await pool.connect();
  try {
    const { prov_nombre } = provincia;
    const result = await client.query('INSERT INTO provincia (prov_nombre) VALUES ($1) RETURNING *', [prov_nombre]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todas las provincias
async function getAllProvincias() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM provincia');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener una provincia por su ID
async function getProvinciaById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM provincia WHERE prov_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar una provincia por su ID
async function updateProvinciaById(id, newProvinciaData) {
  const client = await pool.connect();
  try {
    const { prov_nombre } = newProvinciaData;
    const result = await client.query('UPDATE provincia SET prov_nombre = $1 WHERE prov_id = $2 RETURNING *', [prov_nombre, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar una provincia por su ID
async function deleteProvinciaById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM provincia WHERE prov_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addProvincia,
  getAllProvincias,
  getProvinciaById,
  updateProvinciaById,
  deleteProvinciaById,
  // Otras funciones CRUD...
};
