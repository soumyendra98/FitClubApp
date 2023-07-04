const express = require('express');
const infoController = require('../../controllers/info.controller');

const router = express.Router();

router.get('/all/genInfo', infoController.genIn);

module.exports = router;
