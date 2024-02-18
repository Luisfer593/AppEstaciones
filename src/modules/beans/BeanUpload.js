// /src/modules/beans/BeanUpload.js
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const { ProcesarCSV } = require('../extras/ProcesarCSV');
const EstacionModel = require('../../modules/estacion/models/estacionModel');


class BeanUpload {
    constructor(destination = 'D:/tmp/') {
        this.destination = destination;
        this.listaestaciones = null;
        this.cargarEstaciones();
    }

    getFile() {
        return this.file;
    }

    setFile(file) {
        this.file = file;
    }

    getListaestaciones() {
        return this.listaestaciones;
    }

    setListaestaciones(listaestaciones) {
        this.listaestaciones = listaestaciones;
    }

    cargarEstaciones() {
        this.listaestaciones = obtenerEstacionesChimborazo();
    }

    getCodestacion() {
        return this.codestacion;
    }

    setCodestacion(codestacion) {
        this.codestacion = codestacion;
    }

    subir() {
        if (this.file) {
            try {
                const fileName = this.file.name;
                const filePath = path.join(this.destination, fileName);
                this.file.mv(filePath, (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log('El archivo se ha subido con éxito!');

                    const currentDate = moment().format('YYYY-MM-DD HH_mm_ss');
                    const newFileName = `${currentDate}-${fileName}`;
                    const newFilePath = path.join(this.destination, newFileName);
                    fs.renameSync(filePath, newFilePath);
                    console.log(`Archivo: ${filePath} renombrado a: ${newFilePath}`);

                    if (ProcesarCSV.procesarArchivoCSV(this.codestacion, newFileName)) {
                        console.log('El archivo fue procesado con éxito!');
                    } else {
                        console.log('No se procesó el archivo');
                    }
                });
            } catch (error) {
                console.error(error);
            }
        }
    }
}

module.exports = BeanUpload;