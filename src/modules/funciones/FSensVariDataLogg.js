// /src/modules/funciones/FSensVariDataLogg.js
const pool = require('../../db/db');

async function GetSenroIDBySensorIDVarID(sens_id, varidata_id) {
    const query = 'SELECT sens_id FROM administracion.sens_varidata WHERE sens_id = $1 AND varidata_id = $2';
    const values = [sens_id, varidata_id];

    try {
        //console.log('Ejecutando consulta para obtener sensor con ID y variable ID...');
        const result = await pool.query(query, values);
        //console.log('Consulta ejecutada con éxito. Resultado:', result.rows);
        return result.rows;
    } catch (error) {
        console.error('Error al obtener sensor:', error);
        throw error;
    }
}

module.exports = { GetSenroIDBySensorIDVarID };