// /src/modules/funciones/FDatoCrudoDatalogerM1.js

const AccesoDatos = require('../../db/db');
const DatoCrudoDatalogerM = require('../../modules/DatoCrudoDatalogerM/DatoCrudoDatalogerM.js');
const Parametro = require('../../modules/accesodatos/Parametro');
const logger = require('log4js').getLogger('FDatoCrudoDatalogerM1');

class FDatoCrudoDatalogerM1 {
    static InsertarDatosM1(objDatoCrudoDL) {
        let respuesta = false;
        const query = "INSERT INTO datosdataloger.datocrudodatalogerm1(datocruddatam1_id, esta_id, varidata_id, sens_id, datocruddatam1_fecha, datocruddatam1_hora, datocruddatam1_nombrearchivo, datocruddatam1_valor,datocruddatam1_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
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
        const sql = "SELECT * from datosdataloger.fndatocrudodatosdatalogerm1byid(?);";

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

module.exports = FDatoCrudoDatalogerM1;
