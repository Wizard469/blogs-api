const postService = require('../services/post.service');

const postController = {
  getAll: async (_req, res) => {
    const { status, message } = await postService.getAll();

    res.status(status).json(message);
  },

  getById: async (req, res) => {
    const { status, message } = await postService.getById(req.params);

    res.status(status).json(message);
  },
};

module.exports = postController;
