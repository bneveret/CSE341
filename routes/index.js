const express = require('express');
const router = express.Router();

//const indexController = require('../controllers');

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

module.exports = router;