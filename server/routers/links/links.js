const express = require('express');
const router = express.Router();

const { index, indexByUser, getNumberOfLinks } = require('../../controllers/links/links');

router.get('', index);

router.get('/user/:userId', indexByUser);

router.get('/length', getNumberOfLinks)

module.exports = router;