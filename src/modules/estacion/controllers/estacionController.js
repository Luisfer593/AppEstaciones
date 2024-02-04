// /src/modules/estacion/controllers/estacionController.js
const EstacionModel = require('../models/estacionModel');

class EstacionController {
  static async addEstacion(req, res) {
    try {
      const {
        esta_id,
        tipoesta_id,
        parr_id,
        esta_nombre,
        esta_ubicacion,
        esta_latitud,
        esta_longitud,
        esta_alturaterreno,
        esta_promotorterreno,
        esta_propietarioinstitucion,
        esta_institucionacargo,
        esta_manualautomatica,
        esta_codigoinamhi,
        esta_path,
        esta_comunidad,
        esta_nombrearchivo,
        esta_path_leidos,
      } = req.body;
      const result = await EstacionModel.addEstacion(
        esta_id,
        tipoesta_id,
        parr_id,
        esta_nombre,
        esta_ubicacion,
        esta_latitud,
        esta_longitud,
        esta_alturaterreno,
        esta_promotorterreno,
        esta_propietarioinstitucion,
        esta_institucionacargo,
        esta_manualautomatica,
        esta_codigoinamhi,
        esta_path,
        esta_comunidad,
        esta_nombrearchivo,
        esta_path_leidos
      );
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getAllEstaciones(req, res) {
    try {
      const result = await EstacionModel.getAllEstaciones();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async editEstacion(req, res) {
    try {
      const {
        esta_id,
        tipoesta_id,
        parr_id,
        esta_nombre,
        esta_ubicacion,
        esta_latitud,
        esta_longitud,
        esta_alturaterreno,
        esta_promotorterreno,
        esta_propietarioinstitucion,
        esta_institucionacargo,
        esta_manualautomatica,
        esta_codigoinamhi,
        esta_path,
        esta_comunidad,
        esta_nombrearchivo,
        esta_path_leidos,
      } = req.body;
      const result = await EstacionModel.editEstacion(
        esta_id,
        tipoesta_id,
        parr_id,
        esta_nombre,
        esta_ubicacion,
        esta_latitud,
        esta_longitud,
        esta_alturaterreno,
        esta_promotorterreno,
        esta_propietarioinstitucion,
        esta_institucionacargo,
        esta_manualautomatica,
        esta_codigoinamhi,
        esta_path,
        esta_comunidad,
        esta_nombrearchivo,
        esta_path_leidos
      );
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async deleteEstacion(req, res) {
    try {
      const { esta_id } = req.body;
      const result = await EstacionModel.deleteEstacion(esta_id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Resto de los métodos CRUD...

}

module.exports = EstacionController;
