// /src/modules/marca/models/marcaModel.js

const pool = require('../../../db/db');

// Agregar una nueva marca
async function addMarca(marca) {
  const client = await pool.connect();
  try {
    const { marc_nombre } = marca;
    const result = await client.query('INSERT INTO marca (marc_nombre) VALUES ($1) RETURNING *', [marc_nombre]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todas las marcas
async function getAllMarcas() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM marca');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener una marca por su ID
async function getMarcaById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM marca WHERE marc_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar una marca por su ID
async function updateMarcaById(id, newMarcaData) {
  const client = await pool.connect();
  try {
    const { marc_nombre } = newMarcaData;
    const result = await client.query('UPDATE marca SET marc_nombre = $1 WHERE marc_id = $2 RETURNING *', [marc_nombre, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar una marca por su ID
async function deleteMarcaById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM marca WHERE marc_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addMarca,
  getAllMarcas,
  getMarcaById,
  updateMarcaById,
  deleteMarcaById
  // Otras funciones CRUD...
};
