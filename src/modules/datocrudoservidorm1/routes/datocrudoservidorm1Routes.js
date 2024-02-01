// src/modules/datocrudoservidorm1/routes/datocrudoservidorm1Routes.js
const express = require('express');
const datocrudoservidorm1Controller = require('../controllers/datocrudoservidorm1Controller');

const router = express.Router();

router.post('/datocrudoservidorm1', datocrudoservidorm1Controller.addDatoCrudoServidorM1);
router.get('/datocrudoservidorm1', datocrudoservidorm1Controller.getAllDatosCrudosServidorM1);
router.delete('/datocrudoservidorm1/:datocrudservm1_id', datocrudoservidorm1Controller.deleteDatoCrudoServidorM1);
router.post('/datocrudoservidorm1/cargarDesdeCSV', datocrudoservidorm1Controller.cargarDatosDesdeCSV);


module.exports = router;
