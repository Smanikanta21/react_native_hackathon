const express = require('express');
const router = express.Router();
const { signup, login } = require('../Auth/authConfig');

// POST /auth/signin
router.post('/signup', signup);

// POST /auth/login
router.post('/login', login);

module.exports = router;