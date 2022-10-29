const { BlogPost, User, Category } = require('../models');

const postService = {
  getAll: async () => {
    const response = await BlogPost.findAll({
      attributes: { exclude: ['user_id'] },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    if (!response) return { status: 404, message: { message: 'Posts not found' } };

    const posts = response.map(({ dataValues }) => dataValues);

    return {
      status: 200,
      message: posts,
    };
  },
};

module.exports = postService;
