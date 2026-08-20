const express = require('express');
const router = express.Router();
const controller = require('../controllers/progressController');

router.get('/:userId?', controller.getProgress);
router.post('/reset/:userId?', controller.resetProgress);

module.exports = router;
