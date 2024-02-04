// controllers/abreviaturasController.js

const AbreviaturasModel = require('../models/abreviaturasModel');

class AbreviaturasController {
  static async insertarAbreviatura(req, res) {
    try {
      const { variserv_id, abre_descripcion } = req.body;
      const result = await AbreviaturasModel.insertarAbreviatura(variserv_id, abre_descripcion);
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getAllAbreviaturas(req, res) {
    try {
      const result = await AbreviaturasModel.getAllAbreviaturas();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  static async eliminarAbreviatura(req, res) {
    try {
      const { id } = req.params; // Suponiendo que el ID se pasa como un parámetro en la URL
      const result = await AbreviaturasModel.eliminarAbreviatura(id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  // Resto de los métodos CRUD...

}

module.exports = AbreviaturasController;
