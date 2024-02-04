const express = require('express');
const AbreviaturasDatalogerController = require('../controllers/abreviaturasdatalogerController');

const router = express.Router();

router.post('/abreviaturasdataloger', AbreviaturasDatalogerController.addAbreviaturaDataloger);
router.get('/abreviaturasdataloger', AbreviaturasDatalogerController.getAllAbreviaturasDataloger);

module.exports = router;
