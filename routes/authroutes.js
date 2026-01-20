const express = require('express');
const router = express.Router();
const controldtauth = require('../controllers/controldtauth');

router.post('/register', controldtauth.registerCustomer);
router.post('/login', controldtauth.login);

module.exports = router;