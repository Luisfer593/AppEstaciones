// /src/modules/abreviaturasdataloger/AbreviaturasDataloger.js

const pool = require('../../db/db'); // Asegúrate de importar tu conexión a la base de datos aquí

class AbreviaturasDataloger {
    constructor(abredata_id, varidata_id, abredata_descripcion) {
        this.abredata_id = abredata_id;
        this.varidata_id = varidata_id;
        this.abredata_descripcion = abredata_descripcion;
    }

    static async obtenerPorAbreviatura(abreviatura) {
        try {    
            const query = 'SELECT * FROM administracion.abreviaturasdataloger WHERE abredata_descripcion = $1';
            const result = await pool.query(query, [abreviatura]);
            const rows = result.rows; // Extrae las filas del resultado
            return rows;
        } catch (error) {
            console.error('Error en obtenerPorAbreviatura:', error); // Registro para mostrar cualquier error que ocurra durante la ejecución de la función
            return [];
        }
    }   
}

module.exports = AbreviaturasDataloger;