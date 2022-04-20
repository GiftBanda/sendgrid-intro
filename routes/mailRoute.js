const express = require('express');
const { sendEmail, getInTouch } = require('../controllers/mailController');
require('dotenv').config();

const router = express.Router();

router.post('/', sendEmail)
router.post('/inquire', getInTouch)

module.exports = router;