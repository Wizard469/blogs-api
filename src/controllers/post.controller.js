const postService = require('../services/post.service');

const postController = {
  getAll: async (_req, res) => {
    const { status, message } = await postService.getAll();

    res.status(status).json(message);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const { status, message } = await postService.getById(id);

    res.status(status).json(message);
  },

  updatePost: async (req, res) => {
    const { status, message } = await postService.updatePost(req.params, req.body);

    res.status(status).json(message);
  },
};

module.exports = postController;
