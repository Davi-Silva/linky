const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user/User');

const { validateUser, validateUsername } = require('../../utils/validators/registration/registration');
const { validateLoginUser } = require('../../utils/validators/login/login');
const { generateRandomUsername } = require('../../utils/generators/random/random');
const { generateAccessToken, generateRefreshToken, decodeToken } = require('../../utils/generators/jwt/jwt');

module.exports = {
  register: async (req, res) => {
    const {
      names,
      username,
      email,
      password,
      password2
    } = req.body;

    const validation = validateUser(names, username, email, password, password2);

    if (!validation.valid) {
      return res.status(400).send({
        status_code: 400,
        results: {},
        errors: validation.errors
      })
    }

    try {
      const existingUser = await User.findOne({
        email
      });

      if (existingUser) {
        return res.status(400).send({
          status_code: 400,
          results: {},
          errors: ['User already exists.']
        })
      }

      let newUsername = username;

      if (!validateUsername(newUsername)) {
        do {
          newUsername = generateRandomUsername(username);
        } while (!validateUsername(newUsername));
      }

      bcrypt.genSalt(10, (errGenSalt, salt) => {
        if (errGenSalt) throw errGenSalt;

        bcrypt.hash(password, salt, async (errHash, hash) => {
          if (errHash) throw errHash;

          const newUser = new User({
            names,
            email,
            username,
            password: hash
          });

          const createdUserObj = await newUser.save();

          return res.status(201).send({
            status_code: 201,
            results: createdUserObj,
          })
        });
      });

    } catch (err) {
      console.error(err.message)
      return res.status(500).send({
        status_code: 500,
        results: [],
        errors: [err.message]
      });
    }
  },

  login: async (req, res) => {
    const {
      email,
      password
    } = req.body;

    const validation = validateLoginUser(email, password);

    if (!validation.valid) {
      return res.status(400).send({
        status_code: 400,
        results: {},
        errors: validation.errors
      })
    }

    try {
      const userObj = await User.findOne({
        email,
      });

      if (!userObj) {
        return res.status(400).send({
          status_code: 400,
          results: {},
          errors: ['User does not exists.']
        })
      }

      bcrypt.compare(password, userObj.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          const accessToken = generateAccessToken(userObj._id);
          const refreshToken = generateRefreshToken(userObj._id);
          return res.status(200).send({
            status_code: 200,
            results: {
              accessToken,
              refreshToken
            }
          })
        } else {
          return res.status(400).send({
            status_code: 400,
            results: {},
            errors: ['Invalid password.']
          });
        }
      })


    } catch (err) {
      console.error(err.message)
      return res.status(500).send({
        status_code: 500,
        results: {},
        errors: [err.message]
      });
    }
  },

  loginToken: async (req, res) => {
    const { token } = req.body;

    try {
      if (!token) {
        return res.status(500).send({
          status_code: 400,
          results: {},
          errors: ['Invalid token']
        });
      } else {

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
          if (err) return {};

          const userObj = await User.findOne({
            _id: user.id,
          })

          if (!userObj) {
            return res.status(400).send({
              status_code: 400,
              results: {},
              errors: ['User does not exists.']
            });
          }

          return res.status(200).send({
            status_code: 200,
            results: {
              _id: userObj._id,
              names: userObj.names,
              createdAt: userObj.createdAt,
              email: userObj.email,
              username: userObj.username,
            },
          });
        });
      }
    } catch (err) {
      console.error(err.message)
      return res.status(500).send({
        status_code: 500,
        results: {},
        errors: [err.message]
      });
    }
  }
}