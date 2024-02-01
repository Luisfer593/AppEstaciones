// /src/modules/unidadmedida/models/unidadmedidaModel.js

const pool = require('../../../db/db');

// Agregar una nueva unidad de medida
async function addUnidadMedida(unidadMedida) {
  const client = await pool.connect();
  try {
    const { unidmed_simbolo, unidmed_descripcion } = unidadMedida;
    const result = await client.query('INSERT INTO unidadmedida (unidmed_simbolo, unidmed_descripcion) VALUES ($1, $2) RETURNING *', [unidmed_simbolo, unidmed_descripcion]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todas las unidades de medida
async function getAllUnidadesMedida() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM unidadmedida');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener una unidad de medida por su ID
async function getUnidadMedidaById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM unidadmedida WHERE unidmedi_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar una unidad de medida por su ID
async function updateUnidadMedidaById(id, newUnidadMedidaData) {
  const client = await pool.connect();
  try {
    const { unidmed_simbolo, unidmed_descripcion } = newUnidadMedidaData;
    const result = await client.query('UPDATE unidadmedida SET unidmed_simbolo = $1, unidmed_descripcion = $2 WHERE unidmedi_id = $3 RETURNING *', [unidmed_simbolo, unidmed_descripcion, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar una unidad de medida por su ID
async function deleteUnidadMedidaById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM unidadmedida WHERE unidmedi_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addUnidadMedida,
  getAllUnidadesMedida,
  getUnidadMedidaById,
  updateUnidadMedidaById,
  deleteUnidadMedidaById,
  // Otras funciones CRUD...
};
