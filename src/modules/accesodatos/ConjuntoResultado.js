// /src/modules/accesodatos/ConjuntoResultado.js
class ConjuntoResultado {
    constructor() {
        this.cabecera = [];
        this.datos = [];
        this.indCol = -1;
        this.indFil = -1;
        this.tamCol = 0;
        this.tamFil = 0;
    }

    fill(rows) {
        this.tamFil = 0;
        this.tamCol = rows.metaData.length;
        this.cabecera = rows.metaData.map(column => column.name);

        for (const row of rows.rows) {
            const fila = [];
            for (let i = 0; i < this.tamCol; i++) {
                fila.push(row[i]);
            }
            this.datos.push(fila);
            this.tamFil++;
        }
    }

    next() {
        this.indFil++;
        return this.indFil < this.tamFil;
    }

    get(nCol) {
        return this.datos[this.indFil][nCol];
    }

    getByColumnName(nomCol) {
        const index = this.cabecera.findIndex(colName => colName.toLowerCase() === nomCol.toLowerCase());
        if (index === -1) {
            throw new Error(`No existe la columna ${nomCol}`);
        }
        return this.datos[this.indFil][index];
    }

    getObject(nCol) {
        return this.get(nCol);
    }

    getObjectByColumnName(nomCol) {
        return this.getByColumnName(nomCol);
    }

    // Agrega otros métodos como getInt, getString, etc. según sea necesario
}

module.exports = ConjuntoResultado;
