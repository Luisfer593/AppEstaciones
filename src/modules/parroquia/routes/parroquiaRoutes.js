// parroquiaRoutes.js
const express = require('express');
const ParroquiaController = require('../controllers/parroquiaController');

const router = express.Router();

router.post('/parroquia', ParroquiaController.addParroquia);
router.get('/parroquia', ParroquiaController.getAllParroquias);
router.put('/parroquia', ParroquiaController.updateParroquia);
router.delete('/parroquia', ParroquiaController.deleteParroquia);

module.exports = router;
