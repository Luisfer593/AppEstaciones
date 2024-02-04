const pool = require('../../../db/db');

async function addAbreviaturaDataloger(abredata_id, varidata_id, abredata_descripcion) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO administracion.abreviaturasdataloger (abredata_id, varidata_id, abredata_descripcion) VALUES ($1, $2, $3) RETURNING *',
      [abredata_id, varidata_id, abredata_descripcion]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllAbreviaturasDataloger() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM administracion.abreviaturasdataloger');
    return result.rows;
  } finally {
    client.release();
  }
}

// Puedes agregar más funciones CRUD según sea necesario

module.exports = {
  addAbreviaturaDataloger,
  getAllAbreviaturasDataloger,
  // Resto de las funciones CRUD...
};
