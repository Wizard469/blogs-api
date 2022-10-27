const express = require('express');
const loginController = require('../controllers/login.controller');
const validateBody = require('../middlewares/loginValidation');

const route = express.Router();

route.post('/', validateBody, loginController.login);

module.exports = route;
