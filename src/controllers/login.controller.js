const loginService = require('../services/login.service');

const loginController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    const { status, message } = await loginService.validateLogin({ email, password });

    res.status(status).json(message);
  },
};

module.exports = loginController;