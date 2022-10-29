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
};

module.exports = categoryService;
