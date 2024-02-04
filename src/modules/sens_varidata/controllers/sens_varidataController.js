// sens_varidataController.js

// sens_varidataController.js
const SensVaridataModel = require('../models/sens_varidataModel');

async function addsens_varidata(req, res) {
  try {
    const { varidata_id, sens_id } = req.body;
    const result = await SensVaridataModel.addsens_varidata(varidata_id, sens_id);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllsens_varidata(req, res) {
  try {
    const result = await SensVaridataModel.getAllsens_varidata();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Otras funciones CRUD (update, delete) si es necesario...

module.exports = {
  addsens_varidata,
  getAllsens_varidata,  // Agregamos el método GET
  // Otras funciones CRUD...
};

