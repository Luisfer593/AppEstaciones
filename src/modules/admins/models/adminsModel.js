// /src/modules/admins/models/adminsModel.js

const pool = require('../../../db/db');

// Agregar un nuevo admin
async function addAdmin(admin) {
  const client = await pool.connect();
  try {
    const { nombre, contrasena } = admin;
    const result = await client.query('INSERT INTO admins (nombre, contrasena) VALUES ($1, $2) RETURNING *', [nombre, contrasena]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todos los admins
async function getAllAdmins() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM admins');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener un admin por su ID
async function getAdminById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM admins WHERE id_admin = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}
// Actualizar un admin por su ID
async function updateAdminById(id, newAdminData) {
  const client = await pool.connect();
  try {
    const { nombre, contrasena } = newAdminData;
    const result = await client.query('UPDATE admins SET nombre = $1, contrasena = $2 WHERE id_admin = $3 RETURNING *', [nombre, contrasena, id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar un admin por su ID
async function deleteAdminById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM admins WHERE id_admin = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}
// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addAdmin,
  getAllAdmins,
  getAdminById,
  updateAdminById,
  deleteAdminById,
  // Otras funciones CRUD...
};
