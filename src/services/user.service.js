const jwt = require('../utilities/tokenGenerator');
const { User } = require('../models');

const userService = {
  createUser: async ({ displayName, email, password, image }) => {
    const user = await User.findOne({ where: { email } });

    if (user) {
      return {
        status: 409,
        message: {
          message: 'User already registered',
        },
      };
    }
    const NewUser = await User.create({ displayName, email, password, image });

    const { password: _, ...userWithoutPassword } = NewUser.dataValues;

    return {
      status: 201,
      message: {
        token: jwt.createToken(userWithoutPassword),
      },
    };
  },

  getAll: async () => {
    const response = await User.findAll({ attributes: { exclude: ['password'] } });

    if (!response) return { status: 404, message: { message: 'Users not found' } };

    const users = response.map(({ dataValues }) => dataValues);

    return { status: 200, message: users };
  },

  getById: async ({ id }) => {
    const user = await User.findByPk(id);

    if (!user) return { status: 404, message: { message: 'User does not exist' } };

    const { password: _, ...userWithoutPassword } = user.dataValues;

    return {
      status: 200,
      message: userWithoutPassword,
    };
  },
};

module.exports = userService;
