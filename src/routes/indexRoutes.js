const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const autenticacaoController = require('../controllers/autenticacaoController');
const ccController = require('../controllers/ccController');

router.get('/', autenticacaoController.verificarAutenticacao, indexController.indexView);
router.get('/', ccController.autenticarContaCorrente, indexController.indexView);

module.exports = router;