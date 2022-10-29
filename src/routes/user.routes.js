const express = require('express');
const userController = require('../controllers/user.controller');
const tokenValidation = require('../middlewares/tokenValidation');
const validateUser = require('../middlewares/userValidation');

const routes = express.Router();

routes.post('/', validateUser, userController.createUser);
routes.use(tokenValidation);
routes.get('/', userController.getAll);

module.exports = routes;
