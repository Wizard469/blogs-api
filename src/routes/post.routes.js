const express = require('express');
const postController = require('../controllers/post.controller');
const tokenValidation = require('../middlewares/tokenValidation');

const routes = express.Router();

routes.use(tokenValidation);
routes.get('/', postController.getAll);

module.exports = routes;
