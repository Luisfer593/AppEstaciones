// /src/modules/equipo/controllers/equipoController.js

const equipoModel = require('../models/equipoModel');

// Controlador para agregar un nuevo miembro de equipo
async function addMiembroEquipo(req, res) {
  try {
    const { nombre, cargo, correo, foto } = req.body;

    // Validar que se proporcionaron nombre, cargo, correo y foto
    if (!nombre || !cargo || !correo || !foto) {
      return res.status(400).json({ error: 'Nombre, cargo, correo y foto son obligatorios' });
    }

    // Llamar a la función del modelo para agregar un nuevo miembro de equipo
    const nuevoMiembroEquipo = await equipoModel.addMiembroEquipo({ nombre, cargo, correo, foto });

    // Devolver el resultado como respuesta
    res.status(201).json(nuevoMiembroEquipo);
  } catch (error) {
    console.error('Error al agregar miembro de equipo:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para obtener todos los miembros de equipo
async function getAllMiembrosEquipo(req, res) {
  try {
    const miembrosEquipo = await equipoModel.getAllMiembrosEquipo();
    res.json(miembrosEquipo);
  } catch (error) {
    console.error('Error al obtener miembros de equipo:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para obtener un miembro de equipo por su ID
async function getMiembroEquipoById(req, res) {
  try {
    const idMiembroEquipo = parseInt(req.params.id);
    const miembroEquipo = await equipoModel.getMiembroEquipoById(idMiembroEquipo);
    if (miembroEquipo) {
      res.json(miembroEquipo);
    } else {
      res.status(404).send('Miembro de equipo no encontrado');
    }
  } catch (error) {
    console.error('Error al obtener miembro de equipo por ID:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para actualizar un miembro de equipo por su ID
async function actualizarMiembroEquipo(req, res) {
  try {
    const idMiembroEquipo = parseInt(req.params.id);
    const newMiembroEquipoData = req.body;
    const miembroEquipoActualizado = await equipoModel.updateMiembroEquipoById(idMiembroEquipo, newMiembroEquipoData);
    res.json(miembroEquipoActualizado);
  } catch (error) {
    console.error('Error al actualizar miembro de equipo:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Controlador para eliminar un miembro de equipo por su ID
async function eliminarMiembroEquipo(req, res) {
  try {
    const idMiembroEquipo = parseInt(req.params.id);
    const miembroEquipoEliminado = await equipoModel.deleteMiembroEquipoById(idMiembroEquipo);
    res.json(miembroEquipoEliminado);
  } catch (error) {
    console.error('Error al eliminar miembro de equipo:', error);
    res.status(500).send('Error interno del servidor');
  }
}

// Exportar las funciones del controlador
module.exports = {
  addMiembroEquipo,
  getAllMiembrosEquipo,
  getMiembroEquipoById,
  actualizarMiembroEquipo,
  eliminarMiembroEquipo,
};
