const express = require('express');
const categoryController = require('../controllers/category.controller');
const tokenValidation = require('../middlewares/tokenValidation');

const routes = express.Router();

routes.use(tokenValidation);
routes.post('/', categoryController.createCategory);
routes.get('/', categoryController.getAll);

module.exports = routes;
