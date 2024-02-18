// /src/modules/accesodatos/AccesoDatos.js
const pool = require('../../db/db');

async function ejecutaComando1(comando, parametros) {
  try {
    const client = await pool.connect();
    const result = await client.query(comando, parametros);
    client.release();
    return result.rowCount > 0;
  } catch (error) {
    throw error;
  }
}

async function ejecutaComando(comando, parametros) {
  try {
    const client = await pool.connect();
    const result = await client.query(comando, parametros);
    const respuesta = result.rows[0]?.columna === 't';
    client.release();
    return respuesta;
  } catch (error) {
    throw error;
  }
}

async function ejecutaQuery(query, parametros) {
  try {
    const client = await pool.connect();
    const result = await client.query(query, parametros);
    client.release();
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function ejecutaFuncion(comando, parametros) {
  try {
    const client = await pool.connect();
    const result = await client.query(comando, parametros);
    const respuesta = result.rows.length > 0;
    client.release();
    return respuesta;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  ejecutaComando1,
  ejecutaComando,
  ejecutaQuery,
  ejecutaFuncion,
};
