const express = require('express');
const logHoursController = require('../../controllers/logHours.controller');

const router = express.Router();

router.post('/all/logInHours', logHoursController.logInHoursMember);

router.post('/detailschart', logHoursController.detailsChart);

router.post('/bookings', logHoursController.storeLogHours);

router.get('/api/activities', logHoursController.getBookings);

router.post('/bookings/:emailAddress', logHoursController.logOutHoursMember);

router.get('/memberbookings/:emailAddress', logHoursController.getMemberRecords);

module.exports = router;
