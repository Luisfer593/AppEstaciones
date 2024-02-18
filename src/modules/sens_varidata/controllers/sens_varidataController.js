// sens_varidataController.js

const SensVaridataModel = require('../models/sens_varidataModel');

async function getSensVaridataBySensorIDVarID(req, res) {
  try {
    const { sens_id, varidata_id } = req.params; // Assuming you're passing these as URL parameters
    const result = await SensVaridataModel.getSensVaridataBySensorIDVarID(sens_id, varidata_id);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

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
  getSensVaridataBySensorIDVarID,
  addsens_varidata,
  getAllsens_varidata,  // Agregamos el método GET
  // Otras funciones CRUD...
};

