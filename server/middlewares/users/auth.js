const jwt = require('jsonwebtoken');

const User = require('../../models/user/User');

module.exports = (req, res, next) => {
  try {
    if (req.headers.authorization === undefined || req.headers.authorization === null) {
      return res.status(401).json({
        error: ['Authorization token is required!']
      });
    }

    const authorization = req.headers.authorization.split(' ');

    if (authorization.length !== 2 && authorization[0] !== 'Bearer') {
      return res.status(401).json({
        error: ['Authorization token is invalid!']
      });
    }

    jwt.verify(authorization[1], process.env.ACCESS_TOKEN_SECRET, async (error, decoded) => {
      if (error) {
        console.error(error)
        return res.status(401).send({
          status_code: 401,
          results: {},
          errors: [error]
        });
      }

      const tokenizedUser = await User.findOne({
        _id: decoded.id
      });

      if (!tokenizedUser) {
        return res.status(401).send({
          status_code: 401,
          results: {},
          errors: ['Invalid user.']
        });
      }

      next();
    });
  } catch (err) {
    console.error(err)
    return res.status(401).send({
      status_code: 401,
      results: {},
      errors: [err.message]
    });
  }
};