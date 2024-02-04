// provinciaRoutes.js
const express = require('express');
const ProvinciaController = require('../controllers/provinciaController');

const router = express.Router();

router.post('/provincia', ProvinciaController.addProvincia);
router.get('/provincia', ProvinciaController.getAllProvincias);
router.put('/provincia', ProvinciaController.updateProvincia);
router.delete('/provincia', ProvinciaController.deleteProvincia);

module.exports = router;
