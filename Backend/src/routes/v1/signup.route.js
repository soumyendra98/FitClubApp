const express = require('express');
const signupController = require('../../controllers/signup.controller');

const router = express.Router();

router.post('/all/signup', signupController.SignupInfo);

module.exports = router;
