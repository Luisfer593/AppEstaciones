const express = require('express');
const datocrudoservidorm1Controller = require('../controllers/datocrudoservidorm1Controller');

const router = express.Router();

router.post('/datocrudoservidorm1/cargarDesdeCSV', datocrudoservidorm1Controller.cargarDatosDesdeCSV);

module.exports = router;
