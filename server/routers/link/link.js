const express = require('express');
const router = express.Router();

const { create, getLink } = require('../../controllers/link/link');

router.post('/create', create);

router.get('/link', getLink)

module.exports = router;