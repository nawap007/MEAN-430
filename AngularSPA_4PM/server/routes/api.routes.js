const express = require('express');

const router = express.Router();

router.use('/user', require('../apis/user.api'));
module.exports = router;