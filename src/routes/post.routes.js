const express = require('express');
const postController = require('../controllers/post.controller');
const tokenValidation = require('../middlewares/tokenValidation');
const validateUpdate = require('../middlewares/updateValidation');

const routes = express.Router();

routes.use(tokenValidation);
routes.get('/', postController.getAll);
routes.get('/:id', postController.getById);
routes.put('/:id', validateUpdate, postController.updatePost);

module.exports = routes;
