// /src/modules/sens_variserv/routes/sens_variservRoutes.js

const express = require('express');
const sens_variservController = require('../controllers/sens_variservController');

const router = express.Router();

router.post('/sens_variserv', sens_variservController.addSensVariserv);
router.get('/sens_variserv', sens_variservController.getAllSensVariserv);
router.get('/sens_variserv/:id', sens_variservController.getSensVariservById);
router.delete('/sens_variserv/:id', sens_variservController.deleteSensVariservById);

// Otras rutas CRUD...

module.exports = router;
