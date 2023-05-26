const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controllers')

router.get('/', controller.index);
router.get('/formulario', controller.formulario);

module.exports = router;