// /src/modules/equipo/models/equipoModel.js

const pool = require('../../../db/db');

// Agregar un nuevo miembro de equipo
async function addMiembroEquipo(miembro) {
  const client = await pool.connect();
  try {
    const { nombre, cargo, correo, foto } = miembro;
    const result = await client.query('INSERT INTO equipo (nombre, cargo, correo, foto) VALUES ($1, $2, $3, $4) RETURNING *', [nombre, cargo, correo, foto]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todos los miembros de equipo
async function getAllMiembrosEquipo() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM equipo');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener un miembro de equipo por su ID
async function getMiembroEquipoById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM equipo WHERE id_miembro = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar un miembro de equipo por su ID
async function updateMiembroEquipoById(id, newData) {
  const client = await pool.connect();
  try {
    const { nombre, cargo, correo, foto } = newData;
    const result = await client.query('UPDATE equipo SET nombre = $1, cargo = $2, correo = $3, foto = $4 WHERE id_miembro = $5 RETURNING *', [nombre, cargo, correo, foto, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar un miembro de equipo por su ID
async function deleteMiembroEquipoById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM equipo WHERE id_miembro = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Exportar las funciones
module.exports = {
  addMiembroEquipo,
  getAllMiembrosEquipo,
  getMiembroEquipoById,
  updateMiembroEquipoById,
  deleteMiembroEquipoById,
};
