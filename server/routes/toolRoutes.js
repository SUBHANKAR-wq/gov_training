const express = require('express');
const router = express.Router();
const controller = require('../controllers/toolController');

router.get('/', controller.getAllTools);
router.get('/:id', controller.getToolById);

module.exports = router;
