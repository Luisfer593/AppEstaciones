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

    // Método getter y setter para datocruddatam_id
    setDatocruddatam_id(datocruddatam_id) {
        this.datocruddatam_id = datocruddatam_id;
    }

    getDatocruddatam_id() {
        return this.datocruddatam_id;
    }

    // Método getter y setter para esta_id
    setEsta_id(esta_id) {
        this.esta_id = esta_id;
    }

    getEsta_id() {
        return this.esta_id;
    }

    // Método getter y setter para varidata_id
    setVaridata_id(varidata_id) {
        this.varidata_id = varidata_id;
    }

    getVaridata_id() {
        return this.varidata_id;
    }

    // Método getter y setter para sens_id
    setSens_id(sens_id) {
        this.sens_id = sens_id;
    }

    getSens_id() {
        return this.sens_id;
    }

    // Método getter y setter para datocruddatam_fecha
    setDatocruddatam_fecha(datocruddatam_fecha) {
        this.datocruddatam_fecha = datocruddatam_fecha;
    }

    getDatocruddatam_fecha() {
        return this.datocruddatam_fecha;
    }

    // Método getter y setter para datocruddatam_hora
    setDatocruddatam_hora(datocruddatam_hora) {
        this.datocruddatam_hora = datocruddatam_hora;
    }

    getDatocruddatam_hora() {
        return this.datocruddatam_hora;
    }

    // Método getter y setter para datocruddatam_nombrearchivo
    setDatocruddatam_nombrearchivo(datocruddatam_nombrearchivo) {
        this.datocruddatam_nombrearchivo = datocruddatam_nombrearchivo;
    }

    getDatocruddatam_nombrearchivo() {
        return this.datocruddatam_nombrearchivo;
    }

    // Método getter y setter para datocruddatam_valor
    setDatocruddatam_valor(datocruddatam_valor) {
        this.datocruddatam_valor = datocruddatam_valor;
    }

    getDatocruddatam_valor() {
        return this.datocruddatam_valor;
    }

    // Método getter y setter para datocruddatam_status
    setDatocruddatam_status(datocruddatam_status) {
        this.datocruddatam_status = datocruddatam_status;
    }

    getDatocruddatam_status() {
        return this.datocruddatam_status;
    }
}

module.exports = DatoCrudoDatalogerM;
