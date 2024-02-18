// /src/modules/funciones/FDatoCrudoDatalogerM12.js

const AccesoDatos = require('../../db/db');
const DatoCrudoDatalogerM = require('../../modules/DatoCrudoDatalogerM/DatoCrudoDatalogerM.js');
const Parametro = require('../../modules/accesodatos/Parametro');
const logger = require('log4js').getLogger('FDatoCrudoDatalogerM12');

class FDatoCrudoDatalogerM12 {
    static InsertarDatosM12(objDatoCrudoDL) {
        let respuesta = false;
        const query = "INSERT INTO datosdataloger.datocrudodatalogerm12(datocruddatam12_id, esta_id, varidata_id, sens_id, datocruddatam12_fecha, datocruddatam12_hora, datocruddatam12_nombrearchivo, datocruddatam12_valor,datocruddatam12_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
        const ListaParametros = [
            new Parametro(1, objDatoCrudoDL.datocruddatam_id),
            new Parametro(2, objDatoCrudoDL.esta_id),
            new Parametro(3, objDatoCrudoDL.varidata_id),
            new Parametro(4, objDatoCrudoDL.sens_id),
            new Parametro(5, objDatoCrudoDL.datocruddatam_fecha),
            new Parametro(6, objDatoCrudoDL.datocruddatam_hora),
            new Parametro(7, objDatoCrudoDL.datocruddatam_nombrearchivo),
            new Parametro(8, objDatoCrudoDL.datocruddatam_valor),
            new Parametro(9, objDatoCrudoDL.datocruddatam_status)
        ];

        try {
            respuesta = AccesoDatos.ejecutaComando1(query, ListaParametros);
        } catch (error) {
            logger.error(error.message);
        }

        return respuesta;
    }

    static verificarDatoCrudoServidorByID(cod) {
        const lista = [];
        const parametros = [new Parametro(1, cod)];
        const sql = "SELECT * FROM datosdataloger.fndatocrudodatosdatalogerm12byid(?);";

        try {
            const rst = AccesoDatos.ejecutaQuery(sql, parametros);
            while (rst.next()) {
                const objDCDL = new DatoCrudoDatalogerM();
                objDCDL.datocruddatam_id = rst.getString(0);
                lista.push(objDCDL);
            }
        } catch (error) {
            logger.error(error.message);
        }

        return lista;
    }
}

module.exports = FDatoCrudoDatalogerM12;
