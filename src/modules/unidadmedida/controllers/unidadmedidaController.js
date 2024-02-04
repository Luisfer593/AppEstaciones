// /src/modules/unidadmedida/controllers/unidadmedidaController.js
 // unidadmedidaController.js
const UnidadmedidaModel = require('../models/unidadmedidaModel');

class UnidadmedidaController {
  static async addUnidadmedida(req, res) {
    try {
      const { unidmedi_simbolo, unidmedi_descripcion } = req.body;
      const result = await UnidadmedidaModel.addUnidadmedida(unidmedi_simbolo, unidmedi_descripcion);
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getAllUnidadmedida(req, res) {
    try {
      const result = await UnidadmedidaModel.getAllUnidadmedida();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getUnidadmedidaById(req, res) {
    try {
      const { unidmedi_id } = req.params;
      const result = await UnidadmedidaModel.getUnidadmedidaById(unidmedi_id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async updateUnidadmedidaById(req, res) {
    try {
      const { unidmedi_id } = req.params;
      const { unidmedi_simbolo, unidmedi_descripcion } = req.body;
      const result = await UnidadmedidaModel.updateUnidadmedidaById(unidmedi_id, unidmedi_simbolo, unidmedi_descripcion);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deleteUnidadmedidaById(req, res) {
    try {
      const { unidmedi_id } = req.params;
      const result = await UnidadmedidaModel.deleteUnidadmedidaById(unidmedi_id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = UnidadmedidaController;

