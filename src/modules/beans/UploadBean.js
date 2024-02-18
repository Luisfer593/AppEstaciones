// /src/modules/beans/UploadBean.js

const fs = require('fs');
const path = require('path');
const { obtenerEstacionesChimborazo } = require('../funciones/FEstacion');

class UploadBean {
    constructor(uploadDir = 'D:/tmp/') {
        this.file = null;
        this.codestacion = null;
        this.listaestaciones = null;
        this.uploadDir = uploadDir;
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

    getFile() {
        return this.file;
    }

    setFile(file) {
        this.file = file;
    }

    subirArchivo() {
        const codesta = this.codestacion;
        const filePath = path.join(this.uploadDir, this.file.name);
        try {
            fs.writeFileSync(filePath, this.file.data);
            console.log(`Estacion: ${codesta}\n${this.file.name} fue subido`);
            // Clear the uploaded file data
            this.file = null;
        } catch (error) {
            console.error(error);
        }
    }

    handleFileUpload(event) {
        const fileName = event.file.name;
        console.log(`${fileName} is uploaded.`);
    }
}

module.exports = { UploadBean };
