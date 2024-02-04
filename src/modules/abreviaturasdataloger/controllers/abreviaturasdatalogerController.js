const AbreviaturasDatalogerModel = require('../models/abreviaturasdatalogerModel');

class AbreviaturasDatalogerController {
  static async addAbreviaturaDataloger(req, res) {
    try {
      const { abredata_id, varidata_id, abredata_descripcion } = req.body;
      const result = await AbreviaturasDatalogerModel.addAbreviaturaDataloger(abredata_id, varidata_id, abredata_descripcion);
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getAllAbreviaturasDataloger(req, res) {
    try {
      const result = await AbreviaturasDatalogerModel.getAllAbreviaturasDataloger();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Resto de los métodos CRUD...

}

module.exports = AbreviaturasDatalogerController;
