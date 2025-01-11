const routes = require('express').Router();

const myController = require('../controllers')

routes.get('/', myController.printName);

module.exports = routes;