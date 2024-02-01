// src/modules/datocrudoservidorm1/models/datocrudoservidorm1Model.js
const pool = require('../../../db/db');

async function addDatoCrudoServidorM1(datoCrudoServidorM1) {
  const client = await pool.connect();
  try {
    const {
      datocrudservm1_id,
      esta_id,
      sens_id,
      variserv_id,
      datocrudservm1_fecha,
      datocrudservm1_hora,
      datocrudservm1_nombrearchivo,
      datocrudservm1_valor,
    } = datoCrudoServidorM1;

    const result = await client.query(
      'INSERT INTO datocrudoservidorm1 (datocrudservm1_id, esta_id, sens_id, variserv_id, datocrudservm1_fecha, datocrudservm1_hora, datocrudservm1_nombrearchivo, datocrudservm1_valor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [
        datocrudservm1_id,
        esta_id,
        sens_id,
        variserv_id,
        datocrudservm1_fecha,
        datocrudservm1_hora,
        datocrudservm1_nombrearchivo,
        datocrudservm1_valor,
      ]
    );

    return result.rows[0];
  } finally {
    client.release();
  }
}

async function getAllDatosCrudosServidorM1() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM datocrudoservidorm1');
    return result.rows;
  } finally {
    client.release();
  }
}

async function deleteDatoCrudoServidorM1(datocrudservm1_id) {
    const client = await pool.connect();
    try {
      const result = await client.query('DELETE FROM datocrudoservidorm1 WHERE datocrudservm1_id = $1 RETURNING *', [
        datocrudservm1_id,
      ]);
  
      if (result.rows.length === 0) {
        throw new Error('Dato crudo del servidor M1 no encontrado para eliminar.');
      }
  
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  async function cargarDatosDesdeCSV(datos) {
    const client = await pool.connect();
    try {
      const resultados = await Promise.all(datos.map(dato => {
        const {
          datocrudservm1_id,
          esta_id,
          sens_id,
          variserv_id,
          datocrudservm1_fecha,
          datocrudservm1_hora,
          datocrudservm1_nombrearchivo,
          datocrudservm1_valor,
        } = dato;
  
        return client.query(
          'INSERT INTO datocrudoservidorm1 (datocrudservm1_id, esta_id, sens_id, variserv_id, datocrudservm1_fecha, datocrudservm1_hora, datocrudservm1_nombrearchivo, datocrudservm1_valor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
          [
            datocrudservm1_id,
            esta_id,
            sens_id,
            variserv_id,
            datocrudservm1_fecha,
            datocrudservm1_hora,
            datocrudservm1_nombrearchivo,
            datocrudservm1_valor,
          ]
        );
      }));
  
      return resultados.map(result => result.rows[0]);
    } finally {
      client.release();
    }
  }

module.exports = {
  addDatoCrudoServidorM1,
  getAllDatosCrudosServidorM1,
  deleteDatoCrudoServidorM1,
  cargarDatosDesdeCSV,
};
