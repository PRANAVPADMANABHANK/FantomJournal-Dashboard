// routes/authRoutes.js
const express = require('express');
// const { signup } = require('../controllers/authController');
const hashPassword = require('../middleware/hashPassword');
const UserController = require('../controllers/authController');



const router = express.Router();

router.post('/signup',hashPassword, UserController.signup);

module.exports = router;
