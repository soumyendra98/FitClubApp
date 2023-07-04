const express = require('express');
const memberController = require('../../controllers/member.controller');

const router = express.Router();

router.get('/all/member', memberController.getMemberSchedule);

router.get('/all/details', memberController.allDetails);

router.get('/users', memberController.allMembers);

router.get('/nonusers', memberController.allNonMembers);

router.post('/checkin', memberController.checkIn);

router.post('/checkout', memberController.checkOut);

router.get('/records', memberController.getMemberdata);

module.exports = router;
