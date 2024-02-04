// /src/modules/sensores/controllers/sensoresController.js


const SensoresModel = require('../models/sensoresModel');

class SensoresController {
  static async addSensor(req, res) {
    try {
      const { sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion } = req.body;
      const result = await SensoresModel.addSensor(sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion);
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getAllSensores(req, res) {
    try {
      const result = await SensoresModel.getAllSensores();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async editSensor(req, res) {
    try {
      const { sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion } = req.body;
      const result = await SensoresModel.editSensor(sens_id, esta_id, marc_id, sens_nombre, sens_modelo, sens_numeroserie, sens_estado, sens_especificacion);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deleteSensor(req, res) {
    try {
      const { sens_id } = req.body;
      const result = await SensoresModel.deleteSensor(sens_id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Resto de los métodos CRUD...

}

module.exports = SensoresController;
