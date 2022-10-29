const { Category } = require('../models');

const categoryService = {
  createCategory: async ({ name }) => {
    if (!name) return { status: 400, message: { message: '"name" is required' } };

    const { dataValues } = await Category.create({ name });

    return {
      status: 201,
      message: dataValues,
    };
  },

  getAll: async () => {
    const response = await Category.findAll();

    if (!response) return { status: 404, message: { message: 'Categories not found' } };

    const categories = response.map(({ dataValues }) => dataValues);

    return { status: 200, message: categories };
  },
};

module.exports = categoryService;
