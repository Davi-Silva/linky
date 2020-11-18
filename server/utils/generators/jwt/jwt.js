const jwt = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (userId) => jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 86400,
  }),
  generateRefreshToken: (userId) => jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRET),
  decodeToken: (token) => {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return {};
      return user;
    });
  },
};
