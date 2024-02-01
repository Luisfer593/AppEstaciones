// /src/modules/mantenimiento/models/mantenimientoModel.js

const pool = require('../../../db/db');

// Agregar un nuevo registro de mantenimiento
async function addMantenimiento(registroMantenimiento) {
  const client = await pool.connect();
  try {
    const { nombre, descripcion, detalle, imagen } = registroMantenimiento;
    const result = await client.query('INSERT INTO mantenimiento (nombre, descripcion, detalle, imagen) VALUES ($1, $2, $3, $4) RETURNING *', [nombre, descripcion, detalle, imagen]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todos los registros de mantenimiento
async function getAllMantenimientos() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM mantenimiento');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener un registro de mantenimiento por su ID
async function getMantenimientoById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM mantenimiento WHERE id_mantenimiento = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar un registro de mantenimiento por su ID
async function updateMantenimientoById(id, newData) {
  const client = await pool.connect();
  try {
    const { nombre, descripcion, detalle, imagen } = newData;
    const result = await client.query('UPDATE mantenimiento SET nombre = $1, descripcion = $2, detalle = $3, imagen = $4 WHERE id_mantenimiento = $5 RETURNING *', [nombre, descripcion, detalle, imagen, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar un registro de mantenimiento por su ID
async function deleteMantenimientoById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM mantenimiento WHERE id_mantenimiento = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Exportar las funciones
module.exports = {
  addMantenimiento,
  getAllMantenimientos,
  getMantenimientoById,
  updateMantenimientoById,
  deleteMantenimientoById,
};
