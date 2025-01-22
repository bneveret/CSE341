const express = require('express');
const router = express.Router();

const indexController = require('../controllers');
router.get('/', indexController.getData);

router.use('/contacts', require('./contacts'));

module.exports = router;