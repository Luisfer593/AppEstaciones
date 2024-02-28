// /src/modules/accesodatos/AccesoDatos.js

const { Pool } = require('pg');
const pool = require('../../db/db'); // Ruta correcta al archivo db.js

async function ejecutaComando1(comando, parametros) {
    let respuesta = false;
    let client = null;

    try {
        client = await pool.connect();
        await client.query('BEGIN');
        const result = await client.query(comando, parametros.map(param => param.valor));
        if (result.rowCount > 0) {
            respuesta = true;
        }
        await client.query('COMMIT');
    } catch (error) {
        if (client) {
            await client.query('ROLLBACK');
        }
        console.error('Error in ejecutaComando1:', error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }

    return respuesta;
}

async function ejecutaComando(comando, parametros) {
    let respuesta = false;
    let client = null;

    try {
        client = await pool.connect();
        const result = await client.query(comando, parametros.map(param => param.valor));
        respuesta = result.rows[0].result === 't';
    } catch (error) {
        console.error('Error in ejecutaComando:', error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }

    return respuesta;
}

async function ejecutaQuery(query, parametros = []) {
    let conj = null;
    let client = null;

    try {
        client = await pool.connect();
        const result = await client.query(query, parametros.map(param => param.valor));
        conj = new ConjuntoResultado(result.rows);
    } catch (error) {
        console.error('Error in ejecutaQuery:', error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }

    return conj;
}

async function ejecutaFuncion(comando, parametros) {
    let respuesta = false;
    let client = null;

    try {
        client = await pool.connect();
        const result = await client.query(comando, parametros.map(param => param.valor));
        respuesta = result.rows.length > 0;
    } catch (error) {
        console.error('Error in ejecutaFuncion:', error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }

    return respuesta;
}

class ConjuntoResultado {
    constructor(rows) {
        this.rows = rows;
    }

    Fill(resultSet) {
        this.rows = resultSet.rows;
    }
}

module.exports = { ejecutaComando1, ejecutaComando, ejecutaQuery, ejecutaFuncion };
