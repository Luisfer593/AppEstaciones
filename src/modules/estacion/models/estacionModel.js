// /src/modules/estacion/models/estacionModel.js
const pool = require('../../../db/db');

async function insertarEstacion(
  tipoesta_id, parr_id, esta_nombre, esta_ubicacion, esta_latitud, esta_longitud,
  esta_alturaterreno, esta_promotorterreno, esta_propietarioinstitucion,
  esta_institucionacargo, esta_manualautomatica, esta_codigoinamhi, esta_path,
  esta_comunidad, esta_nombrearchivo, esta_path_leidos
) {
  try {
    const result = await pool.query(`
      SELECT administracion.fn_insertar_estacion(
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17
      ) as success
    `, [
      tipoesta_id, parr_id, esta_nombre, esta_ubicacion, esta_latitud, esta_longitud,
      esta_alturaterreno, esta_promotorterreno, esta_propietarioinstitucion,
      esta_institucionacargo, esta_manualautomatica, esta_codigoinamhi, esta_path,
      esta_comunidad, esta_nombrearchivo, esta_path_leidos
    ]);
    return result.rows[0].success;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function actualizarEstacion(
  esta_id, tipoesta_id, parr_id, esta_nombre, esta_ubicacion, esta_latitud, esta_longitud,
  esta_alturaterreno, esta_promotorterreno, esta_propietarioinstitucion,
  esta_institucionacargo, esta_manualautomatica, esta_codigoinamhi, esta_path,
  esta_comunidad, esta_nombrearchivo, esta_path_leidos
) {
  try {
    const result = await pool.query(`
      UPDATE administracion.estacion
      SET
        tipoesta_id = $2,
        parr_id = $3,
        esta_nombre = $4,
        esta_ubicacion = $5,
        esta_latitud = $6,
        esta_longitud = $7,
        esta_alturaterreno = $8,
        esta_promotorterreno = $9,
        esta_propietarioinstitucion = $10,
        esta_institucionacargo = $11,
        esta_manualautomatica = $12,
        esta_codigoinamhi = $13,
        esta_path = $14,
        esta_comunidad = $15,
        esta_nombrearchivo = $16,
        esta_path_leidos = $17
      WHERE esta_id = $1
    `, [
      esta_id, tipoesta_id, parr_id, esta_nombre, esta_ubicacion, esta_latitud, esta_longitud,
      esta_alturaterreno, esta_promotorterreno, esta_propietarioinstitucion,
      esta_institucionacargo, esta_manualautomatica, esta_codigoinamhi, esta_path,
      esta_comunidad, esta_nombrearchivo, esta_path_leidos
    ]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function eliminarEstacion(esta_id) {
  try {
    const result = await pool.query('DELETE FROM administracion.estacion WHERE esta_id = $1', [esta_id]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function obtenerEstaciones() {
  try {
    const result = await pool.query('SELECT * FROM administracion.estacion');
    return result.rows;
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = {
  insertarEstacion,
  actualizarEstacion,
  eliminarEstacion,
  obtenerEstaciones,
};
