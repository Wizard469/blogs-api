const jwt = require('../utilities/tokenGenerator');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const response = jwt.validateToken(authorization);

  if (response === false) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = tokenValidation;
