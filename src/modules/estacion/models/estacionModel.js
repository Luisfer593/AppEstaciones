// /src/modules/estacion/models/estacionModel.js

const pool = require('../../../db/db');

// Agregar una nueva estación
async function addEstacion(estacion) {
  const client = await pool.connect();
  try {
    const {
      comu_id,
      tipoesta_id,
      esta_nombre,
      esta_ubicacion,
      esta_latitud,
      esta_longitud,
      esta_alturaterreno,
      esta_propietarioterreno,
      esta_propietarioinstitucion,
      esta_institucionacargo,
      esta_manualautomatica
    } = estacion;

    const result = await client.query(
      'INSERT INTO estacion (comu_id, tipoesta_id, esta_nombre, esta_ubicacion, esta_latitud, esta_longitud, esta_alturaterreno, esta_propietarioterreno, esta_propietarioinstitucion, esta_institucionacargo, esta_manualautomatica) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
      [
        comu_id,
        tipoesta_id,
        esta_nombre,
        esta_ubicacion,
        esta_latitud,
        esta_longitud,
        esta_alturaterreno,
        esta_propietarioterreno,
        esta_propietarioinstitucion,
        esta_institucionacargo,
        esta_manualautomatica
      ]
    );

    return result.rows[0];
  } finally {
    client.release();
  }
}

// Obtener todas las estaciones
async function getAllEstaciones() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM estacion');
    return result.rows;
  } finally {
    client.release();
  }
}

// Obtener una estación por su ID
async function getEstacionById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM estacion WHERE esta_id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Actualizar una estación por su ID
async function updateEstacionById(id, newEstacionData) {
  const client = await pool.connect();
  try {
    const {
      comu_id,
      tipoesta_id,
      esta_nombre,
      esta_ubicacion,
      esta_latitud,
      esta_longitud,
      esta_alturaterreno,
      esta_propietarioterreno,
      esta_propietarioinstitucion,
      esta_institucionacargo,
      esta_manualautomatica
    } = newEstacionData;

    const result = await client.query(
      'UPDATE estacion SET comu_id = $1, tipoesta_id = $2, esta_nombre = $3, esta_ubicacion = $4, esta_latitud = $5, esta_longitud = $6, esta_alturaterreno = $7, esta_propietarioterreno = $8, esta_propietarioinstitucion = $9, esta_institucionacargo = $10, esta_manualautomatica = $11 WHERE esta_id = $12 RETURNING *',
      [
        comu_id,
        tipoesta_id,
        esta_nombre,
        esta_ubicacion,
        esta_latitud,
        esta_longitud,
        esta_alturaterreno,
        esta_propietarioterreno,
        esta_propietarioinstitucion,
        esta_institucionacargo,
        esta_manualautomatica,
        id
      ]
    );

    return result.rows[0];
  } finally {
    client.release();
  }
}

// Eliminar una estación por su ID
async function deleteEstacionById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('DELETE FROM estacion WHERE esta_id = $1 RETURNING *', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Otras funciones CRUD...

// Exportar las funciones
module.exports = {
  addEstacion,
  getAllEstaciones,
  getEstacionById,
  updateEstacionById,
  deleteEstacionById
  // Otras funciones CRUD...
};
