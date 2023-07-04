const express = require('express');
const infoRoute = require('./info.route');
const loginRoute = require('./login.route');
const signupRoute = require('./signup.route');
const hcmRoute = require('./hcm.route');
const memberRoute = require('./member.route');
const loginHoursRoute = require('./loginHours.route');
const locationRoute = require('./location.route');

const router = express.Router();

router.get('/', function (req, res) {
  return res.status(200).json('Successfully Loaded');
});

router.use('/', infoRoute);
router.use('/', loginRoute);
router.use('/', signupRoute);
router.use('/', hcmRoute);
router.use('/', memberRoute);
router.use('/', loginHoursRoute);
router.use('/', locationRoute);

module.exports = router;
