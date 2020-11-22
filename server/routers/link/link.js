const express = require('express');
const router = express.Router();

const { create, getLink } = require('../../controllers/link/link');
const auth = require('../../middlewares/users/auth');

router.post('/create', auth, create);

router.get('/link', getLink)

module.exports = router;