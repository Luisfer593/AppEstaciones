// Definición de objetos simulando clases
const AbreviaturasDatalogerModel = require('../abreviaturasdataloger/models/abreviaturasdatalogerModel');
const SensoresModel = require('../sensores/models/SensoresModel');
const SensVaridata = require('../sens_varidata/models/sens_varidataModel');
const FDatoCrudoDatalogerM1 = require('../funciones/FDatoCrudoDatalogerM1');
const FDatoCrudoDatalogerM2 = require('../funciones/FDatoCrudoDatalogerM2');
const FDatoCrudoDatalogerM3 = require('../funciones/FDatoCrudoDatalogerM3');
const FDatoCrudoDatalogerM4 = require('../funciones/FDatoCrudoDatalogerM4');
const FDatoCrudoDatalogerM5 = require('../funciones/FDatoCrudoDatalogerM5');
const FDatoCrudoDatalogerM6 = require('../funciones/FDatoCrudoDatalogerM6');
const FDatoCrudoDatalogerM7 = require('../funciones/FDatoCrudoDatalogerM7');
const FDatoCrudoDatalogerM8 = require('../funciones/FDatoCrudoDatalogerM8');
const FDatoCrudoDatalogerM9 = require('../funciones/FDatoCrudoDatalogerM9');
const FDatoCrudoDatalogerM10 = require('../funciones/FDatoCrudoDatalogerM10');
const FDatoCrudoDatalogerM11 = require('../funciones/FDatoCrudoDatalogerM11');
const FDatoCrudoDatalogerM12 = require('../funciones/FDatoCrudoDatalogerM12');
const AbreviaturasDataloger = require('../DatoCrudoDatalogerM/DatoCrudoDatalogerM');

class FuncionesExtras {
    static GeneraCodigoDL(fecha, hora, id_var, id_esta) {
        let codigoDL = null;
        codigoDL = `DL${fecha}${hora}${id_var}${id_esta}`;
        return codigoDL;
    }

    static obtenerMes(date) {
        if (!date) {
            return 0;
        } else {
            const month = date.getMonth() + 1;
            return month;
        }
    }

    static async NoExisteCodigoDatoCrudoDL(objDCDL) {
        const mes = this.obtenerMes(objDCDL.datocruddatam_fecha);
        let status = false;
        let datos = [];

        switch (mes) {
            case 1:
                datos = await FDatoCrudoDatalogerM1.verificarDatoCrudoServidorByID(objDCDL.datocruddatam_id);
                if (datos.length === 0)
                    status = true;
                break;
            case 2:
                datos = await FDatoCrudoDatalogerM2.verificarDatoCrudoServidorByID(objDCDL.datocruddatam_id);
                if (datos.length === 0)
                    status = true;
                break;
            case 3:
                datos = await FDatoCrudoDatalogerM3.verificarDatoCrudoServidorByID(objDCDL.datocruddatam_id);
                if (datos.length === 0)
                    status = true;
                break;
            case 4:
                datos = await FDatoCrudoDatalogerM4.verificarDatoCrudoServidorByID(objDCDL.datocruddatam_id);
                if (datos.length === 0)
                    status = true;
                break;
            case 5:
                datos = await FDatoCrudoDatalogerM5.verificarDatoCrudoServidorByID(objDCDL.datocruddatam_id);
                if (datos.length === 0)
                    status = true;
                break;
            case 6:
                datos = await FDatoCrudoDatalogerM6.verificarDatoCrudoServidorByID(objDCDL.datocruddatam_id);
                if (datos.length === 0)
                    status = true;
                break;
            case 7:
                datos = await FDatoCrudoDatalogerM7.verificarDatoCrudoServidorByID(objDCDL.datocruddatam_id);
                if (datos.length === 0)
                    status = true;
                break;
            case 8:
                datos = await FDatoCrudoDatalogerM8.verificarDatoCrudoServidorByID(objDCDL.datocruddatam_id);
                if (datos.length === 0)
                    status = true;
                break;
            case 9:
                datos = await FDatoCrudoDatalogerM9.verificarDatoCrudoServidorByID(objDCDL.datocruddatam_id);
                if (datos.length === 0)
                    status = true;
                break;
            case 10:
                datos = await FDatoCrudoDatalogerM10.verificarDatoCrudoServidorByID(objDCDL.datocruddatam_id);
                if (datos.length === 0)
                    status = true;
                break;
            case 11:
                datos = await FDatoCrudoDatalogerM11.verificarDatoCrudoServidorByID(objDCDL.datocruddatam_id);
                if (datos.length === 0)
                    status = true;
                break;
            case 12:
                datos = await FDatoCrudoDatalogerM12.verificarDatoCrudoServidorByID(objDCDL.datocruddatam_id);
                if (datos.length === 0)
                    status = true;
                break;
            default:
                break;
        }

        return status;
    }

    static async InsertarDatoDL(objDCDL) {
        let resp = false;
        const mes = this.obtenerMes(objDCDL.datocruddatam_fecha);

        switch (mes) {
            case 1:
                resp = await FDatoCrudoDatalogerM1.InsertarDatosM1(objDCDL);
                break;
            case 2:
                resp = await FDatoCrudoDatalogerM2.InsertarDatosM2(objDCDL);
                break;
            case 3:
                resp = await FDatoCrudoDatalogerM3.InsertarDatosM3(objDCDL);
                break;
            case 4:
                resp = await FDatoCrudoDatalogerM4.InsertarDatosM4(objDCDL);
                break;
            case 5:
                resp = await FDatoCrudoDatalogerM5.InsertarDatosM5(objDCDL);
                break;
            case 6:
                resp = await FDatoCrudoDatalogerM6.InsertarDatosM6(objDCDL);
                break;
            case 7:
                resp = await FDatoCrudoDatalogerM7.InsertarDatosM7(objDCDL);
                break;
            case 8:
                resp = await FDatoCrudoDatalogerM8.InsertarDatosM8(objDCDL);
                break;
            case 9:
                resp = await FDatoCrudoDatalogerM9.InsertarDatosM9(objDCDL);
                break;
            case 10:
                resp = await FDatoCrudoDatalogerM10.InsertarDatosM10(objDCDL);
                break;
            case 11:
                resp = await FDatoCrudoDatalogerM11.InsertarDatosM11(objDCDL);
                break;
            case 12:
                resp = await FDatoCrudoDatalogerM12.InsertarDatosM12(objDCDL);
                break;
            default:
                break;
        }

        return resp;
    }

    static GetStringFecha(fechaStr) {
        let fechaOut = null;
        const arrayFecha = fechaStr.split("-");
        if (arrayFecha.length > 0) {
            fechaOut = arrayFecha[0] + arrayFecha[1] + arrayFecha[2];
        }
        return fechaOut;
    }

    static GetStringHora(horaStr) {
        let horaOut = null;
        const arrayHora = horaStr.split(":");
        if (arrayHora.length > 0) {
            horaOut = arrayHora[0] + arrayHora[1] + arrayHora[2];
        }
        return horaOut;
    }

    static ConvertirFormatoFecha(fechaIn) {
        let FechaOut = null;
        let m = null,
            d = null,
            a = null;
        const vector = fechaIn.split("/");
        a = "20" + vector[2];
        m = vector[0];
        d = vector[1];
        if (m.length == 1) m = "0" + m;
        if (d.length == 1) d = "0" + d;
        FechaOut = a + "-" + m + "-" + d;
        return FechaOut;
    }

    static ConvertirFormatoHora24(horaIn) {
        let horaOut = null;
        let h,
            m,
            s,
            ampm;
        //   11:00:09 PM     3:00:09 PM
        const arraySeparador = horaIn.split(":");
        h = arraySeparador[0];
        m = arraySeparador[1];
        s = this.ObtenerSegundos(arraySeparador[2]);
        ampm = this.ObtenerAMPM(arraySeparador[2]);
        if (ampm === "AM") {
            if (h.length == 1) h = "0" + h;
            if (h.length == 2) {
                const horaInt = parseInt(h);
                if (horaInt == 12) h = "00";
            }
        }
        if (ampm === "PM") {
            const horaInt = parseInt(h);
            if (horaInt == 12) {
                h = horaInt.toString();
            } else {
                h = (horaInt + 12).toString();
            }
        }
        horaOut = h + ":" + m + ":" + s;
        return horaOut;
    }

    static ObtenerAMPM(horaIn) {
        let ampm = null;
        const arraySeparador = horaIn.split(":");
        const hora = parseInt(arraySeparador[0]);
        if (hora >= 12) {
            ampm = "PM";
        } else {
            ampm = "AM";
        }
        return ampm;
    }

    static ObtenerSegundos(segundos) {
        let seg = null;
        const vector = segundos.split(" ");
        seg = vector[0];
        return seg;
    }

    static async getListaSensores(esta_id) {
        let sensores = [];
        try {
            sensores = await obtenerSensoresByEstacionId(esta_id);
        } catch (error) {
            console.error('Error al obtener la lista de sensores:', error);
        }
        return sensores;
    }
}

module.exports = FuncionesExtras;