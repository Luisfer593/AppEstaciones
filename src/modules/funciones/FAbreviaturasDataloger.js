// /modules/funciones/FAbreviaturasDataloger.js

const AccesoDatos = require('../accesodatos/AccesoDatos');

async function obtenerVariablesDatalogerByAbreviatura(abrev) {
    const listaDatos = [];
    const query = 'select * from administracion.fn_verifica_abreviatura_dataloger_by_abreviatura($1);';
    const listParam = [abrev];

    try {
        const rst = await AccesoDatos.ejecutaQuery(query, listParam);
        rst.rows.forEach(row => {
            const objAbreviatura = {
                abredata_id: row.abredata_id,
                varidata_id: row.varidata_id,
                abredata_descripcion: row.abredata_descripcion
            };
            listaDatos.push(objAbreviatura);
        });
    } catch (error) {
        console.error('Error in FAbreviaturasDataloger:', error);
    }

    return listaDatos;
}

module.exports = { obtenerVariablesDatalogerByAbreviatura };
