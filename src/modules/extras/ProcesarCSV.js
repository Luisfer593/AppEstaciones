// /src/modules/extras/ProcesarCSV.js
const fs = require('fs');
const { GetStringHora, GetStringFecha, getListaSensores, GeneraCodigoDL, ConvertirFormatoFecha, ConvertirFormatoHora24, ObtenerIdVariablesByAbreviatura, ObtenerSensorId, NoExisteCodigoDatoCrudoDL, InsertarDatoDL } = require('../extras/FuncionesExtras');
const DatoCrudoDatalogerM = require('../DatoCrudoDatalogerM/DatoCrudoDatalogerM');
const FuncionesExtras = require('../extras/FuncionesExtras');


async function procesarArchivoCSV(estacion, pathfile) {
    let resp = false;
    const esta_id = estacion;
    let idSensor = 0;
    let ListaSensores = [];
    let abreviaturas = [];
    let objDatoCrudoDataloger = null;
    let idVarviableDL;
    let fechaStr, horaStr;
    let fecha, hora;
    let status, valor;
    let regInsert = 0, regNoInsert = 0;

    try {
        const data = fs.readFileSync(pathfile, 'utf8');
        const lines = data.split('\n');

        const headerstr = lines[0].split(',');
        const headersdos = lines[1].split(',');
        // Registra las abreviaturas recibidas del archivo CSV
        //console.log('Abreviaturas recibidas del archivo CSV:', headersdos);
        if (headerstr.length === headersdos.length) {
            for (let i = 0; i < headersdos.length; i++) {
                if (headerstr[i] !== "") {
                    abreviaturas.push(headerstr[i] + "_" + headersdos[i]);
                } else {
                    abreviaturas.push(headerstr[i] + headersdos[i]);
                }
            }
        }

        ListaSensores = await getListaSensores(esta_id);
        //console.log("Nombre del archivo: " + pathfile);
        //console.log("Lista de sensores obtenida:", ListaSensores);
        if (ListaSensores.length > 0) {
            for (let k = 2; k < lines.length; k++) {
                const line = lines[k].split(',');
                // Agrega registros de consola para imprimir los valores de line[0] y line[1]
                console.log("Valor de line[0]:", line[0]);
                console.log("Valor de line[1]:", line[1]);
                fechaStr = line[0] ? ConvertirFormatoFecha(line[0]) : null;
                horaStr = ConvertirFormatoHora24(line[1]);
                fecha = new Date(fechaStr);
                hora = new Date(horaStr);
                for (let j = 2; j < headerstr.length - 1; j += 2) {
                    status = line[j];
                    valor = line[j + 1];
                    idVarviableDL = await ObtenerIdVariablesByAbreviatura(abreviaturas[j + 1]);
                    //console.log('ID de variable DL obtenido:', idVarviableDL); // Agregar esta línea
                    //console.log('Antes de obtener el ID del sensor. idVarviableDL:', idVarviableDL, 'ListaSensores:', ListaSensores);
                    idSensor = await ObtenerSensorId(idVarviableDL, ListaSensores);
                    //console.log('Después de obtener el ID del sensor. idSensor:', idSensor);
                    if (idSensor !== 0) {
                        objDatoCrudoDataloger = new DatoCrudoDatalogerM();
                        objDatoCrudoDataloger.setDatocruddatam_id(GeneraCodigoDL(GetStringFecha(fechaStr), GetStringHora(horaStr), idVarviableDL, esta_id));
                        
                        objDatoCrudoDataloger.setEsta_id(esta_id);
                        objDatoCrudoDataloger.setVaridata_id(idVarviableDL);
                        objDatoCrudoDataloger.setSens_id(idSensor);
                        objDatoCrudoDataloger.setDatocruddatam_fecha(fecha);
                        objDatoCrudoDataloger.setDatocruddatam_hora(hora);
                        objDatoCrudoDataloger.setDatocruddatam_nombrearchivo(pathfile);
                        objDatoCrudoDataloger.setDatocruddatam_valor(valor);
                        objDatoCrudoDataloger.setDatocruddatam_status(status);
                        if (await NoExisteCodigoDatoCrudoDL(objDatoCrudoDataloger)) {
                            if (await InsertarDatoDL(objDatoCrudoDataloger)) {
                                console.log("Registro insertado con codigo: " + objDatoCrudoDataloger.getDatocruddatam_id());
                                regInsert++;
                            } else {
                                console.error("Se produjo un error al insertar el registro en la DB.");
                            }
                        } else {
                            console.error("El registro con codigo " + objDatoCrudoDataloger.getDatocruddatam_id() + " ya se ha insertado");
                            regNoInsert++;
                        }
                    } else {
                        console.error("No existen relación entre sensores y variables...");
                    }
                }
            }
            if (regInsert > 0 || regNoInsert > 0) {
                resp = true;
            }
        } else {
            console.error("NO EXISTEN SENSORES VINCULADOS A ESTA ESTACION");
        }
        abreviaturas = [];
        ListaSensores = [];
    } catch (err) {
        console.error(err);
    }
    return resp;
}

module.exports = { procesarArchivoCSV };