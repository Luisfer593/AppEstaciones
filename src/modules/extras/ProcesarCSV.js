// /src/modules/extras/ProcesarCSV.js
const csv = require('csv-parser');
const fs = require('fs');
const FuncionesExtras = require('./FuncionesExtras');

async function procesarArchivoCSV(estacion, pathfile) {
    const destination = 'D:/tmp/'; // Ruta de destino
    const abreviaturas = [];
    let resp = false;
    let regInsert = 0;
    let regNoInsert = 0;

    try {
        const ListaSensores = await FuncionesExtras.getListaSensores(estacion);

        fs.createReadStream(destination + pathfile)
            .pipe(csv())
            .on('headers', (headers) => {
                for (let i = 0; i < headers.length; i++) {
                    const abr = headers[i];
                    if (abr !== "") {
                        abreviaturas.push(abr + "_" + headers[i + 1]);
                    } else {
                        abreviaturas.push(abr + headers[i + 1]);
                    }
                    i++;
                }
            })
            .on('data', async (data) => {
                const fechaStr = FuncionesExtras.ConvertirFormatoFecha(data['Fecha']);
                const horaStr = FuncionesExtras.ConvertirFormatoHora24(data['Hora']);
                const fecha = new Date(fechaStr);
                const hora = new Date(horaStr);
                let j = 0;

                while (j < Object.keys(data).length) {
                    const status = data[Object.keys(data)[j]];
                    const valor = data[Object.keys(data)[j + 1]];
                    const abr = abreviaturas[j + 1];
                    const idVarviableDL = FuncionesExtras.ObtenerIdVariablesByAbreviatura(abr);
                    const idSensor = FuncionesExtras.ObtenerSensorId(idVarviableDL, ListaSensores);

                    if (idSensor !== 0) {
                        const objDatoCrudoDataloger = {
                            datocruddatam_id: FuncionesExtras.GeneraCodigoDL(FuncionesExtras.GetStringFecha(fechaStr), FuncionesExtras.GetStringHora(horaStr), idVarviableDL, estacion),
                            esta_id: estacion,
                            varidata_id: idVarviableDL,
                            sens_id: idSensor,
                            datocruddatam_fecha: fecha,
                            datocruddatam_hora: hora,
                            datocruddatam_nombrearchivo: pathfile,
                            datocruddatam_valor: valor,
                            datocruddatam_status: status
                        };

                        if (await FuncionesExtras.NoExisteCodigoDatoCrudoDL(objDatoCrudoDataloger)) {
                            if (await FuncionesExtras.InsertarDatoDL(objDatoCrudoDataloger)) {
                                console.log(`Registro insertado con código: ${objDatoCrudoDataloger.datocruddatam_id}`);
                                regInsert++;
                            } else {
                                console.error("Se produjo un error al insertar el registro en la base de datos.");
                            }
                        } else {
                            console.error(`El registro con código ${objDatoCrudoDataloger.datocruddatam_id} ya ha sido insertado.`);
                            regNoInsert++;
                        }
                    } else {
                        console.error("No existen relaciones entre sensores y variables.");
                    }
                    j += 2;
                }
            })
            .on('end', () => {
                if (regInsert > 0 || regNoInsert > 0) {
                    resp = true;
                }
                abreviaturas.length = 0;
            });

        return resp;
    } catch (error) {
        console.error("Error:", error);
        return resp;
    }
}

module.exports = procesarArchivoCSV;
