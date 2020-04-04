const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getUser, getTransactions} = require('../controllers/userController');
const auth = require('../midleware/auth');

router.route('/register')
    .post(registerUser);

router.route('/login')
    .post(loginUser);

router.route('/user')
.get(auth, getUser);

router.route('/:id/transactions')
.get(auth, getTransactions);

module.exports = router;