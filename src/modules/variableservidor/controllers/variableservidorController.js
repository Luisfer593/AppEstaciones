// /src/modules/variableservidor/controllers/variableservidorController.js

const VariableservidorModel = require('../models/variableservidorModel');

class VariableservidorController {
  static async addVariableservidor(req, res) {
    try {
      const { unidmedi_id, variserv_nombre } = req.body;
      const result = await VariableservidorModel.addVariableservidor(unidmedi_id, variserv_nombre);
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getAllVariableservidor(req, res) {
    try {
      const result = await VariableservidorModel.getAllVariableservidor();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getVariableservidorById(req, res) {
    try {
      const { variserv_id } = req.params;
      const result = await VariableservidorModel.getVariableservidorById(variserv_id);
      res.status  (200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async updateVariableservidorById(req, res) {
    try {
      const { variserv_id } = req.params;
      const { unidmedi_id, variserv_nombre } = req.body;
      const result = await VariableservidorModel.updateVariableservidorById(variserv_id, unidmedi_id, variserv_nombre);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deleteVariableservidorById(req, res) {
    try {
      const { variserv_id } = req.params;
      const result = await VariableservidorModel.deleteVariableservidorById(variserv_id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = VariableservidorController;

