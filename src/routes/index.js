const express = require('express');
const login = require('./login.routes');
const user = require('./user.routes');
const category = require('./category.routes');

const routes = express.Router();

routes.use('/login', login);
routes.use('/user', user);
routes.use('/categories', category);

module.exports = routes;
