const express = require('express');
const loginController = require('../controllers/login.controller');
const validateBody = require('../middlewares/loginValidation');

const routes = express.Router();

routes.post('/', validateBody, loginController.login);

module.exports = routes;
