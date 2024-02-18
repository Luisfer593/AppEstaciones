
// /src/modules/estacion/controllers/estacionController.js

const EstacionModel = require('../models/estacionModel');

async function insertarEstacion(req, res) {
  try {
    const {
      tipoesta_id, parr_id, esta_nombre, esta_ubicacion, esta_latitud, esta_longitud,
      esta_alturaterreno, esta_promotorterreno, esta_propietarioinstitucion,
      esta_institucionacargo, esta_manualautomatica, esta_codigoinamhi, esta_path,
      esta_comunidad, esta_nombrearchivo, esta_path_leidos
    } = req.body;

    const success = await EstacionModel.insertarEstacion(
      tipoesta_id, parr_id, esta_nombre, esta_ubicacion, esta_latitud, esta_longitud,
      esta_alturaterreno, esta_promotorterreno, esta_propietarioinstitucion,
      esta_institucionacargo, esta_manualautomatica, esta_codigoinamhi, esta_path,
      esta_comunidad, esta_nombrearchivo, esta_path_leidos
    );

    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function actualizarEstacion(req, res) {
  try {
    const { esta_id, tipoesta_id, parr_id, esta_nombre, esta_ubicacion, esta_latitud, esta_longitud,
      esta_alturaterreno, esta_promotorterreno, esta_propietarioinstitucion,
      esta_institucionacargo, esta_manualautomatica, esta_codigoinamhi, esta_path,
      esta_comunidad, esta_nombrearchivo, esta_path_leidos
    } = req.body;

    const success = await EstacionModel.actualizarEstacion(
      esta_id, tipoesta_id, parr_id, esta_nombre, esta_ubicacion, esta_latitud, esta_longitud,
      esta_alturaterreno, esta_promotorterreno, esta_propietarioinstitucion,
      esta_institucionacargo, esta_manualautomatica, esta_codigoinamhi, esta_path,
      esta_comunidad, esta_nombrearchivo, esta_path_leidos
    );

    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function eliminarEstacion(req, res) {
  try {
    const { esta_id } = req.params;
    const success = await EstacionModel.eliminarEstacion(esta_id);
    res.status(200).json({ success });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function obtenerEstaciones(req, res) {
  try {
    const estaciones = await EstacionModel.obtenerEstaciones();
    res.status(200).json(estaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function obtenerEstacionesChimborazo(req, res) {
  try {
      const estaciones = await EstacionModel.obtenerEstacionesChimborazo();
      res.status(200).json(estaciones);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  insertarEstacion,
  actualizarEstacion,
  eliminarEstacion,
  obtenerEstaciones,
  obtenerEstacionesChimborazo,
};
