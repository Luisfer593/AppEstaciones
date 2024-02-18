// /src/modules/DatoCrudoDatalogerM/DatoCrudoDatalogerM.js

class DatoCrudoDatalogerM {
    constructor(datocruddatam_id, esta_id, varidata_id, sens_id, datocruddatam_fecha, datocruddatam_hora, datocruddatam_nombrearchivo, datocruddatam_valor, datocruddatam_status) {
        this.datocruddatam_id = datocruddatam_id;
        this.esta_id = esta_id;
        this.varidata_id = varidata_id;
        this.sens_id = sens_id;
        this.datocruddatam_fecha = datocruddatam_fecha;
        this.datocruddatam_hora = datocruddatam_hora;
        this.datocruddatam_nombrearchivo = datocruddatam_nombrearchivo;
        this.datocruddatam_valor = datocruddatam_valor;
        this.datocruddatam_status = datocruddatam_status;
    }
}

module.exports = DatoCrudoDatalogerM;
