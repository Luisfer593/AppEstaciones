// src/modules/datocrudoservidorm1/models/datocrudoservidorm1Model.js
const pool = require('../../../db/db');

async function addDatoCrudoServidorM1(datoCrudoServidorM1) {
  const client = await pool.connect();
  try {
    // Tu lógica de inserción aquí
  } finally {
    client.release();
  }
}

// Otras funciones

module.exports = {
  addDatoCrudoServidorM1,
  // Otras funciones
};
