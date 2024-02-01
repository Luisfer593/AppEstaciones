const express = require('express');
const cantonController = require('../controllers/cantonController');

const router = express.Router();

// Rutas para los cantones
router.post('/cantones', cantonController.addCanton);
router.get('/cantones', cantonController.getAllCantones);
router.get('/cantones/:id', cantonController.getCantonById);
router.put('/cantones/:id', cantonController.updateCantonById);
router.delete('/cantones/:id', cantonController.deleteCantonById);

// Otras rutas CRUD...

module.exports = router;
