const express = require('express');
const router = express.Router();

const { index, indexByUser, getNumberOfLinks } = require('../../controllers/links/links');
const auth = require('../../middlewares/users/auth');

router.get('', index);

router.get('/user/:userId', auth, indexByUser);

router.get('/length', auth, getNumberOfLinks)

module.exports = router;