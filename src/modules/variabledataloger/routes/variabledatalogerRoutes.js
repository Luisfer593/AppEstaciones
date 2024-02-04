// /src/modules/variabledataloger/routes/variabledatalogerRoutes.js

const express = require('express');
const VariabledatalogerController = require('../controllers/variabledatalogerController');

const router = express.Router();

router.post('/variabledataloger', VariabledatalogerController.addVariabledataloger);
router.get('/variabledataloger', VariabledatalogerController.getAllVariabledataloger);
router.get('/variabledataloger/:varidata_id', VariabledatalogerController.getVariabledatalogerById);
router.put('/variabledataloger/:varidata_id', VariabledatalogerController.updateVariabledatalogerById);
router.delete('/variabledataloger/:varidata_id', VariabledatalogerController.deleteVariabledatalogerById);

module.exports = router;
