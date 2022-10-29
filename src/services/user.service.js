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
    const response = await User.findAll();

    if (!response) return { status: 404, message: 'Users not found' };

    const users = response.map(({ dataValues }) => {
      const user = dataValues;
      delete user.password;

      return user;
    });

    return { status: 200, message: users };
  },
};

module.exports = userService;
