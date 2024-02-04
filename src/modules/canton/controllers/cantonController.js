const CantonModel = require('../models/cantonModel');

class CantonController {
  static async addCanton(req, res) {
    try {
      const { cant_id, prov_id, cant_nombre } = req.body;
      const result = await CantonModel.addCanton(cant_id, prov_id, cant_nombre);
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getAllCantones(req, res) {
    try {
      const result = await CantonModel.getAllCantones();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async editCanton(req, res) {
    try {
      const { cant_id, prov_id, cant_nombre } = req.body;
      const result = await CantonModel.editCanton(cant_id, prov_id, cant_nombre);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deleteCanton(req, res) {
    try {
      const { cant_id } = req.body;
      const result = await CantonModel.deleteCanton(cant_id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Resto de los métodos CRUD...

}

module.exports = CantonController;
