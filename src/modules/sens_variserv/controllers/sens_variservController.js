// /src/modules/sens_variserv/controllers/sens_variservController.js

const SensVariservModel = require('../models/sens_variservModel');

async function addsens_variserv(req, res) {
  try {
    const { variserv_id, sens_id } = req.body;
    const result = await SensVariservModel.addsens_variserv(variserv_id, sens_id);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllsens_variserv(req, res) {
  try {
    const result = await SensVariservModel.getAllsens_variserv();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Otras funciones CRUD (update, delete) si es necesario...

module.exports = {
  addsens_variserv,
  getAllsens_variserv,  // Agregamos el método GET
  // Otras funciones CRUD...
};
