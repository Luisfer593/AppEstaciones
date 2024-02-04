// sens_varidataRoutes.js

const express = require('express');
const SensVaridataController = require('../controllers/sens_varidataController');

const router = express.Router();

router.post('/sens_varidata', SensVaridataController.addsens_varidata);
router.get('/sens_varidata', SensVaridataController.getAllsens_varidata);  // Agregamos el método GET
// Otras rutas CRUD (update, delete) si es necesario...

module.exports = router;
