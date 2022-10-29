const userService = require('../services/user.service');

const userController = {
  createUser: async (req, res) => {
    const { status, message } = await userService.createUser(req.body);

    res.status(status).json(message);
  },

  getAll: async (_req, res) => {
    const { status, message } = await userService.getAll();

    res.status(status).json(message);
  },
};

module.exports = userController;
