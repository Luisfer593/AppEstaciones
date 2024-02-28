// /modules/funciones/FSensores.js
// /modules/funciones/FSensores.js
const pool = require('../../db/db');

async function obtenerSensoresById(id_sens) {
    const listsensores = [];
    const sql = 'SELECT sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion ' +
                'FROM administracion.sensores WHERE sens_id=$1';
    const listparam = [id_sens];

    try {
        const result = await pool.query(sql, listparam);
        result.rows.forEach(row => {
            const sensores = {
                sens_id: row.sens_id,
                esta_id: row.esta_id,
                marc_id: row.marc_id,
                sens_nombre: row.sens_nombre,
                sens_modelo: row.sens_modelo,
                sens_numeroserie: row.sens_numeroserie,
                sens_estado: row.sens_estado,
                sens_especificacion: row.sens_especificacion
            };
            listsensores.push(sensores);
        });
    } catch (error) {
        console.error('Error in FSensores - obtenerSensoresById:', error);
    }

    return listsensores;
}

async function obtenerSensoresByEstacionId(esta_id) {
    const listsensores = [];
    const sql = 'SELECT sens_id FROM administracion.sensores WHERE esta_id=$1 AND sens_estado=\'Operativo\'';
    const listparam = [esta_id];

    try {
        const result = await pool.query(sql, listparam);
        result.rows.forEach(row => {
            const sensores = {
                sens_id: row.sens_id
            };
            listsensores.push(sensores);
        });
    } catch (error) {
        console.error('Error in FSensores - obtenerSensoresByEstacionId:', error);
    }

    return listsensores;
}

module.exports = { obtenerSensoresById, obtenerSensoresByEstacionId };
