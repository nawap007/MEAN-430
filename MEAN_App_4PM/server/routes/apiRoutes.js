const express = require('express');

const router = express.Router();

router.use('/role', require('../apis/role.api'));
router.use('/user', require('../apis/user.api'));

module.exports = router;