const express = require('express');
const { sendEmail, getInTouch } = require('../controllers/mailController');

const router = express.Router();

router.post('/', sendEmail)
router.post('/inquire', getInTouch)

module.exports = router;