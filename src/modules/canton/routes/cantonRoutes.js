const express = require('express');
const CantonController = require('../controllers/cantonController');

const router = express.Router();

router.post('/canton', CantonController.addCanton);
router.get('/canton', CantonController.getAllCantones);
router.put('/canton', CantonController.editCanton);
router.delete('/canton', CantonController.deleteCanton);

module.exports = router;

