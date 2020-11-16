const express = require('express');
const router = express.Router();

const { index, create, getLink } = require('../../controllers/link/link');

router.get('', index);

router.post('/create', create);

router.get('/link', getLink)

module.exports = router;