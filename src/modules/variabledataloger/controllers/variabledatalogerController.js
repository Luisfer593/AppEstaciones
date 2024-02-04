// /src/modules/variabledataloger/controllers/variabledatalogerController.js

const VariabledatalogerModel = require('../models/variabledatalogerModel');

class VariabledatalogerController {
  static async addVariabledataloger(req, res) {
    try {
      const { unidmedi_id, varidata_nombre } = req.body;
      const result = await VariabledatalogerModel.addVariabledataloger(unidmedi_id, varidata_nombre);
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getAllVariabledataloger(req, res) {
    try {
      const result = await VariabledatalogerModel.getAllVariabledataloger();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getVariabledatalogerById(req, res) {
    try {
      const { varidata_id } = req.params;
      const result = await VariabledatalogerModel.getVariabledatalogerById(varidata_id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async updateVariabledatalogerById(req, res) {
    try {
      const { varidata_id } = req.params;
      const { unidmedi_id, varidata_nombre } = req.body;
      const result = await VariabledatalogerModel.updateVariabledatalogerById(varidata_id, unidmedi_id, varidata_nombre);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deleteVariabledatalogerById(req, res) {
    try {
      const { varidata_id } = req.params;
      const result = await VariabledatalogerModel.deleteVariabledatalogerById(varidata_id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = VariabledatalogerController;

