// /src/modules/sens_variserv/routes/sens_variservRoutes.js

const express = require('express');
const SensVariservController = require('../controllers/sens_variservController');

const router = express.Router();

router.post('/sens_variserv', SensVariservController.addsens_variserv);
router.get('/sens_variserv', SensVariservController.getAllsens_variserv);  // Agregamos el método GET
// Otras rutas CRUD (update, delete) si es necesario...

module.exports = router;
