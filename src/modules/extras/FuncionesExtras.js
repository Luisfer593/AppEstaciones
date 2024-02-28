// /src/modules/extras/FuncionesExtras.js

const SensVaridata = require('../SensVaridata/SensVaridata');
const moment = require('moment');
const AbreviaturasDataloger = require('../abreviaturasdataloger/AbreviaturasDataloger');
const FSensVariDataLogg = require('../funciones/FSensVariDataLogg');
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

// Importa el módulo completo FSensores.js
const FSensores = require('../funciones/FSensores');
//const { obtenerSensoresByEstacionId } = require('../funciones/FSensores');
// Importa el módulo completo FAbreviaturasDataloger.js
const FAbreviaturasDataloger = require('../funciones/FAbreviaturasDataloger');
// Extrae la función específica que necesitas
const obtenerVariablesDatalogerByAbreviatura = FAbreviaturasDataloger.obtenerVariablesDatalogerByAbreviatura;
// Extrae la función específica que necesitas
const obtenerSensoresByEstacionId = FSensores.obtenerSensoresByEstacionId;
// Extrae la función específica que necesitas
const GetSenroIDBySensorIDVarID = FSensVariDataLogg.GetSenroIDBySensorIDVarID;

class FuncionesExtras {

    static async NoExisteCodigoDatoCrudoDL(objDCDL) {
        console.log("Objeto:", objDCDL); // Cambia "objeto" a "objDCDL"
        console.log("Propiedad obtenerMes:", objDCDL.obtenerMes); // Cambia "objeto" a "objDCDL"
        try {
            if (!objDCDL || !objDCDL.datocruddatam_fecha) {
                console.error('El objeto objDCDL no es válido o falta la propiedad datocruddatam_fecha.');
                return false;
            }
            
            
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
           
        } catch (error) {
            console.error('Error en NoExisteCodigoDatoCrudoDL:', error);
            return false;
        }
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
/*
    static GeneraCodigoDL(fecha, hora, id_var, id_esta) {
        let codigoDL = null;
        codigoDL = "DL" + fecha + hora + id_var + id_esta;
        return codigoDL;
    }

    static GetStringFecha(fechaStr) {
        if (!fechaStr) {
            console.log("La fecha es nula o indefinida.");
            return null;
        }
        
        const arrayFecha = fechaStr.split("-");
        if (arrayFecha.length !== 3) {
            console.log("La fecha no tiene el formato esperado.");
            return null;
        }
    
        return arrayFecha.join('');
    }
    
    static GetStringHora(horaStr) {
        if (!horaStr) {
            console.log("La hora es nula o indefinida.");
            return null;
        }
    
        const arrayHora = horaStr.split(":");
        if (arrayHora.length !== 3) {
            console.log("La hora no tiene el formato esperado.");
            return null;
        }
    
        return arrayHora.join('');
    }
*/
    static GeneraCodigoDL(fecha, hora, id_var, id_esta) {
        let codigoDL = null;
        if (!fecha || !hora) {
            console.log("La fecha o la hora son nulas o indefinidas.");
            return null;
        }
        fecha = FuncionesExtras.ConvertirFormatoFecha(fecha);
        hora = FuncionesExtras.ConvertirFormatoHora24(hora);
        if (!fecha || !hora) {
            console.log("Error al convertir la fecha o la hora.");
            return null;
        }
        codigoDL = "DL" + fecha + hora + id_var + id_esta;
        return codigoDL;
    }

    static GetStringFecha(fechaStr) {
        if (!fechaStr) {
            console.log("La fecha es nula o indefinida.");
            return null;
        }
        return FuncionesExtras.ConvertirFormatoFecha(fechaStr);
    }

    static GetStringHora(horaStr) {
        if (!horaStr) {
            console.log("La hora es nula o indefinida.");
            return null;
        }
        return FuncionesExtras.ConvertirFormatoHora24(horaStr);
    }

    static ConvertirFormatoFecha(fechaIn) {
        if (!fechaIn) {
            console.log("La fecha es nula o indefinida.");
            return null;
        }
        console.log("Valor de fechaIn en ConvertirFormatoFecha:", fechaIn);
        // Dividir la fecha utilizando el delimitador "/"
        const fechaHora = fechaIn.split('/');
        const fecha = fechaHora[0];
        console.log("Fecha extraída:", fecha);
        // Formatear la fecha correctamente
        const fechaFormateada = moment(fecha, 'M/D/YY').format('YYYYMMDD');
        console.log("Fecha formateada:", fechaFormateada);
        return fechaFormateada;
    }
    static ConvertirFormatoHora24(horaIn) {
        console.log("Valor de horaIn recibido en ConvertirFormatoHora24:", horaIn); // Agregar este console.log
        
        if (!horaIn) {
            console.log("La hora es nula o indefinida.");
            return null;
        }
        
        // Separar la hora, minutos y segundos del AM/PM
        const horaMinSegAMPM = horaIn.split(':');
        const hora = parseInt(horaMinSegAMPM[0], 10);
        const ampm = horaMinSegAMPM[1].split(' ')[1]; // Obtener el AM/PM
        
        // Convertir la hora a formato 24h
        let horaFormato24;
        if (ampm === 'AM' && hora === 12) {
            horaFormato24 = '00' + horaMinSegAMPM[1].split(' ')[0];
        } else if (ampm === 'PM' && hora !== 12) {
            horaFormato24 = (hora + 12).toString().padStart(2, '0') + horaMinSegAMPM[1].split(' ')[0];
        } else {
            horaFormato24 = hora.toString().padStart(2, '0') + horaMinSegAMPM[1].split(' ')[0];
        }
        
        console.log("Hora en formato 24h:", horaFormato24);
        return horaFormato24;
    }
    
    static ObtenerSegundos(segundos) {
        if (!segundos) {
            console.log("El valor de segundos es undefined o null.");
            return null;
        }
        console.log('Valor de segundos:', segundos); // Agregar este console.log
        const array = segundos.split(" ");
        return array[0];
    }
    
    static ObtenerAMPM(segundos) {
        if (!segundos) {
            console.log("El valor de segundos es undefined o null.");
            return null;
        }
        console.log("Valor de segundos en ObtenerAMPM:", segundos);
        const array = segundos.split(" ");
        if (!array || array.length < 2) {
            console.log("El formato del valor de segundos no es el esperado.");
            return null;
        }
        return array[1];
    }
    
    static obtenerMes(date) {
        if (!date) {
            console.log("La fecha es nula o indefinida.");
            return 0;
        } else {
            return date.getMonth() + 1; // Agrega 1 porque los meses en JavaScript van de 0 a 11
        }
    }
    
  
    static async ObtenerIdVariablesByAbreviatura(abreviatura) {
        try {
            //console.log('Abreviatura recibida:', abreviatura);
            const ListaDatos = await AbreviaturasDataloger.obtenerPorAbreviatura(abreviatura);
            //console.log('Datos obtenidos por abreviatura:', ListaDatos);
            
            if (ListaDatos.length > 0) {
                const primerDato = ListaDatos[0]; // Tomamos solo el primer dato
                console.log('ID de variable obtenido:', primerDato.varidata_id);
                return primerDato.varidata_id; // Devolvemos solo el identificador del primer dato
            } else {
                console.log('No se encontraron variables con esa abreviatura');
                return -1; // Devolvemos -1 si no se encuentra ninguna coincidencia
            }
        } catch (error) {
            console.error('Error en ObtenerIdVariablesByAbreviatura:', error);
            return -1; // Manejo de error devolviendo -1
        }
    }
    
    static async ObtenerSensorId(idVarDataLoger, Lista) {
        try {
            console.log('Buscando sensores asociados a la variable con ID:', idVarDataLoger); // Registro para mostrar el ID de la variable que se está buscando
            let idSensor = 0;
            let ListaSensVarDL = [];
            for (let i = 0; i < Lista.length; i++) {
                //console.log('Buscando sensor con ID:', Lista[i].sens_id); // Registro para mostrar el ID del sensor actual que se está buscando
                ListaSensVarDL = await GetSenroIDBySensorIDVarID(Lista[i].sens_id, idVarDataLoger);
                //console.log('Resultado de la búsqueda de sensor:', ListaSensVarDL); // Registro para mostrar el resultado de la búsqueda del sensor
                if (ListaSensVarDL.length === 1) {
                    idSensor = ListaSensVarDL[0].sens_id;
                    console.log('ID de sensor encontrado:', idSensor); // Registro para mostrar el ID de sensor encontrado
                    break; // Se encontró el sensor, se sale del bucle
                }
            }
            if (idSensor === 0) {
                console.error('No se encontró ningún sensor asociado a la variable.'); // Registro para mostrar si no se encontró ningún sensor asociado a la variable
                // Puedes lanzar un error o devolver un valor predeterminado, según tus necesidades
                // throw new Error('No se encontró ningún sensor asociado a la variable.');
                // return valor_predeterminado;
            }
            return idSensor;
        } catch (error) {
            console.error('Error en ObtenerSensorId:', error); // Registro para mostrar cualquier error que ocurra durante la ejecución de la función
            return 0;
        }
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