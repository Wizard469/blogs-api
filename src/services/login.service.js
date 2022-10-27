const jwt = require('../utilities/tokenGenerator');

const { User } = require('../models');

const loginService = {
  validateLogin: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return {
        status: 400,
        message: {
          message: 'Invalid fields',
        },
      };
    }
    const { password: _, ...userWithoutPassword } = user.dataValues;

    return {
      status: 200,
      message: {
        token: jwt.createToken(userWithoutPassword),
      },
    };
  },
};

module.exports = loginService;
