const express = require('express');
const router = express.Router();

const ccController = require('../controllers/ccController');

router.post('/abrir-conta-corrente', ccController.autenticarContaCorrente);

module.exports = router;