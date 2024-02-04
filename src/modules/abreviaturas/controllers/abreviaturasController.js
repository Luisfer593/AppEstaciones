// controllers/abreviaturasController.js
const AbreviaturasModel = require('../models/abreviaturasModel');

class AbreviaturasController {
  static async addAbreviatura(req, res) {
    try {
      const { abre_descripcion, variserv_id } = req.body;
      const result = await AbreviaturasModel.addAbreviatura(abre_descripcion, variserv_id);
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

  // Resto de los métodos CRUD...

}

module.exports = AbreviaturasController;
