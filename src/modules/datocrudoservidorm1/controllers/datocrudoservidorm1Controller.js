const fs = require('fs');
const csv = require('csv-parser');
const datocrudoservidorm1Model = require('../models/datocrudoservidorm1Model');

async function cargarDatosCSV(archivoCSV) {
  const datos = [];

  return new Promise((resolve, reject) => {
    archivoCSV
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

async function cargarDatosDesdeCSV(req, res) {
  try {
    const archivoCSV = req.body && req.body.archivoCSV;

    if (!archivoCSV) {
      return res.status(400).json({ error: 'No se proporcionó un archivo CSV.' });
    }

    const datos = await cargarDatosCSV(archivoCSV);

    // Procesa y guarda los datos en la base de datos
    for (const dato of datos) {
      await datocrudoservidorm1Model.addDatoCrudoServidorM1(dato);
    }

    res.status(200).json({ message: 'Datos del CSV procesados y guardados correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al cargar datos desde el archivo CSV.' });
  }
}

module.exports = {
  cargarDatosDesdeCSV,
};

