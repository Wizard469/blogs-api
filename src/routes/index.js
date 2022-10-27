const express = require('express');
const login = require('./login.routes');

const route = express.Router();

route.use('/login', login);

module.exports = route;
