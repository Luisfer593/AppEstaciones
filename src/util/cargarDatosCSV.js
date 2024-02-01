// src/util/cargarDatosCSV.js
const fs = require('fs');
const csv = require('csv-parser');

async function cargarDatosCSV(rutaArchivo) {
  const datos = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(rutaArchivo)
      .pipe(csv())
      .on('data', (row) => {
        datos.push(row);
      })
      .on('end', () => {
        resolve(datos);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

module.exports = cargarDatosCSV;
