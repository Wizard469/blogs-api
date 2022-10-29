const JWT = require('jsonwebtoken');

const jwt = {
  createToken: (data) => {
    const token = JWT.sign({ data }, process.env.JWT_SECRET, {
      expiresIn: '15d',
      algorithm: 'HS256',
    });
    return token;
  },

  validateToken: (token) => {
    try {
      const { data } = JWT.verify(token, process.env.JWT_SECRET);
      return data;
    } catch (_e) {
      return false;
    }
  },
};

module.exports = jwt;
