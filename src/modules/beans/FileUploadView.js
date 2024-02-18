// /src/modules/beans/FileUploadView.js

const fs = require('fs');
const path = require('path');
const dateFormat = require('dateformat');
const { ProcesarCSV } = require('../extras/ProcesarCSV');
const { obtenerEstacionesChimborazo } = require('../funciones/FEstacion');

class FileUploadView {
    constructor(destination = 'D:/tmp/') {
        this.destination = destination;
        this.listaestaciones = null;
        this.cargarEstaciones();
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

    upload(event) {
        try {
            const fileName = event.file.name;
            const filePath = path.join(this.destination, fileName);
            event.file.mv(filePath, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('El archivo se ha subido con éxito!');

                const currentDate = dateFormat(new Date(), 'yyyy-mm-dd HH_MM_ss');
                const newFileName = `${currentDate}-${fileName}`;
                const newFilePath = path.join(this.destination, newFileName);
                fs.renameSync(filePath, newFilePath);
                console.log(`Archivo: ${filePath} renombrado a: ${newFilePath}`);

                if (ProcesarCSV.procesarArchivoCSV(7, newFileName)) {
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

module.exports = { FileUploadView };
