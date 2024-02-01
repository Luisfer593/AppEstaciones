// /src/modules/variabledataloger/models/variabledatalogerModel.js

const pool = require('../../../db/db');

// Agregar una nueva variable de datalogger
async function addVariableDataloger(variableDataloger) {
  const client = await pool.connect();
  try {
    const { unidmedi_id, varidata_id_nombre, varidata_id_abreviatura } = variableDataloger;
    const result = await client.query('INSERT INTO variabledataloger (unidmedi_id, varidata_id_nombre, varidata_id_abreviatura) VALUES ($1, $2, $3) RETURNING *', [unidmedi_id, varidata_id_nombre, varidata_id_abreviatura]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todas las variables de datalogger
async function getAllVariablesDataloger() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM variabledataloger');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener una variable de datalogger por su ID
async function getVariableDatalogerById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM variabledataloger WHERE varidata_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar una variable de datalogger por su ID
async function updateVariableDatalogerById(id, newVariableDatalogerData) {
  const client = await pool.connect();
  try {
    const { unidmedi_id, varidata_id_nombre, varidata_id_abreviatura } = newVariableDatalogerData;
    const result = await client.query('UPDATE variabledataloger SET unidmedi_id = $1, varidata_id_nombre = $2, varidata_id_abreviatura = $3 WHERE varidata_id = $4 RETURNING *', [unidmedi_id, varidata_id_nombre, varidata_id_abreviatura, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar una variable de datalogger por su ID
async function deleteVariableDatalogerById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM variabledataloger WHERE varidata_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addVariableDataloger,
  getAllVariablesDataloger,
  getVariableDatalogerById,
  updateVariableDatalogerById,
  deleteVariableDatalogerById,
  // Otras funciones CRUD...
};
