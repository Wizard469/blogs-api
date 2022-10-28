const express = require('express');
const login = require('./login.routes');
const user = require('./user.routes');

const routes = express.Router();

routes.use('/login', login);
routes.use('/user', user);

module.exports = routes;
