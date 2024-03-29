const categoryService = require('../services/category.service');

const categoryController = {
  createCategory: async (req, res) => {
    const { status, message } = await categoryService.createCategory(req.body);

    res.status(status).json(message);
  },

  getAll: async (_req, res) => {
    const { status, message } = await categoryService.getAll();

    res.status(status).json(message);
  },
};

module.exports = categoryController;
