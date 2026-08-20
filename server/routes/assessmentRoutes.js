const express = require('express');
const router = express.Router();
const controller = require('../controllers/assessmentController');

router.get('/', controller.getAssessment);
router.post('/submit', controller.submitAssessment);

module.exports = router;
