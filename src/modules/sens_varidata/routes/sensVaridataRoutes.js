// /src/modules/sens_varidata/routes/sensVaridataRoutes.js

const express = require('express');
const sensVaridataController = require('../controllers/sensVaridataController');

const router = express.Router();

router.post('/sens_varidata', sensVaridataController.addSensVaridata);
router.get('/sens_varidata', sensVaridataController.getAllSensVaridata);
router.get('/sens_varidata/:id', sensVaridataController.getSensVaridataById);
router.delete('/sens_varidata/:id', sensVaridataController.deleteSensVaridataById);

// Otras rutas CRUD...

module.exports = router;
