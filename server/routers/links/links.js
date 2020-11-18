const express = require('express');
const router = express.Router();

const { index, indexByUser } = require('../../controllers/links/links');

router.get('', index);

router.get('', indexByUser);

module.exports = router;