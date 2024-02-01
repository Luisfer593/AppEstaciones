// src/modules/datocrudoservidorm1/controllers/datocrudoservidorm1Controller.js
const datocrudoservidorm1Model = require('../models/datocrudoservidorm1Model');

async function addDatoCrudoServidorM1(req, res) {
  try {
    const datoCrudoServidorM1 = req.body;
    const newDatoCrudoServidorM1 = await datocrudoservidorm1Model.addDatoCrudoServidorM1(datoCrudoServidorM1);
    res.json(newDatoCrudoServidorM1);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar dato crudo del servidor M1.' });
  }
}

async function getAllDatosCrudosServidorM1(req, res) {
  try {
    const datosCrudosServidorM1 = await datocrudoservidorm1Model.getAllDatosCrudosServidorM1();
    res.json(datosCrudosServidorM1);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos crudos del servidor M1.' });
  }
}

async function deleteDatoCrudoServidorM1(req, res) {
    try {
      const { datocrudservm1_id } = req.params;
      const deletedDatoCrudoServidorM1 = await datocrudoservidorm1Model.deleteDatoCrudoServidorM1(datocrudservm1_id);
      res.json(deletedDatoCrudoServidorM1);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar dato crudo del servidor M1.' });
    }
  }

async function cargarDatosDesdeCSV(req, res) {
  try {
    const filePath = req.body.filePath; // Obtiene la ruta del archivo desde el cuerpo de la solicitud

    // Resto del código para leer el archivo y procesar los datos
    // ...

    res.json({ message: 'Datos cargados correctamente desde el archivo CSV.' });
  } catch (error) {
    console.error('Error al cargar datos desde el archivo CSV:', error);
    res.status(500).json({ error: 'Error al cargar datos desde el archivo CSV.' });
  }
}

  
  module.exports = {
    addDatoCrudoServidorM1,
    getAllDatosCrudosServidorM1,
    deleteDatoCrudoServidorM1,
    cargarDatosDesdeCSV,
  };
