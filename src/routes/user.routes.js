const express = require('express');
const userController = require('../controllers/user.controller');
const validateUser = require('../middlewares/userValidation');

const routes = express.Router();

routes.post('/', validateUser, userController.createUser);

module.exports = routes;
