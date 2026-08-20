const express = require('express');
const router = express.Router();
const controller = require('../controllers/scenarioController');

router.get('/', controller.getAllScenarios);
router.get('/module/:moduleId', controller.getScenariosByModule);
router.get('/:id', controller.getScenarioById);
router.post('/:id/answer', controller.evaluateAnswer);
router.post('/:id/prompt', controller.evaluatePrompt);
router.post('/:id/output', controller.evaluateOutput);
router.post('/:id/evaluate', controller.evaluateFull);

module.exports = router;
