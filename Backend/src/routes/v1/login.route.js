const express = require('express');
const loginController = require('../../controllers/login.controller');

const router = express.Router();

router.post('/all/login', loginController.logIn);

router.post('/forgot-password', loginController.forgotPassword);

router.post('/reset-password/:token', loginController.resetPassword);

module.exports = router;
