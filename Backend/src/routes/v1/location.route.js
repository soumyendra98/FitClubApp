const express = require('express');
const locationController = require('../../controllers/location.controller');

const router = express.Router();

router.get('/locations', locationController.getAll);

router.post('/location', locationController.createNew);
module.exports = router;
