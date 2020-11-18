const express = require('express');
const router = express.Router();

const { register, login, loginToken } = require('../../controllers/user/user');

router.post('/register', register);

router.post('/login', login);

router.post('/login/token', loginToken)

module.exports = router;