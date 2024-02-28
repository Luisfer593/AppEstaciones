// Importar el módulo ProcesarCSV.js
const procesarCSV = require('./ProcesarCSV');

// Parámetros necesarios
const estacion = 1; // Aquí debes colocar el ID de la estación adecuado
const pathfile = 'L2240101 - L2240502.csv'; // Ruta del archivo CSV que deseas procesar

// Llamar a la función procesarArchivoCSV
procesarCSV(estacion, pathfile)
  .then(resultado => {
    console.log('Resultado:', resultado);
  })
  .catch(error => {
    console.error('Error al procesar el archivo CSV:', error);
  });