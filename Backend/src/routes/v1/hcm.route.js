const express = require('express');
const hCMController = require('../../controllers/hcm.controller');

const router = express.Router();

router.post('/all/enroll', hCMController.putEnrollDetails);

router.post('/updatetype/:emailAddress', hCMController.putEnrollType);

router.post('/enrollments', hCMController.getEnrollment);

router.post('/barchart', hCMController.barChart);

router.post('/hourschart', hCMController.hoursChart);

module.exports = router;
