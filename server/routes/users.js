const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getUser} = require('../controllers/userController');
const auth = require('../midleware/auth');

router.route('/register')
    .post(registerUser);

router.route('/login')
    .post(loginUser);

router.route('/user')
.get(auth, getUser);

module.exports = router;