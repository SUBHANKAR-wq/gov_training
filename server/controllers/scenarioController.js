const scenarioService = require('../services/scenarioService');
const progressService = require('../services/progressService');

exports.getAllScenarios = async (req, res) => {
  try {
    const scenarios = await scenarioService.getAllScenarios();
    res.json({ success: true, count: scenarios.length, data: scenarios });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getScenarioById = async (req, res) => {
  try {
    const scenario = await scenarioService.getScenarioById(req.params.id);
    if (!scenario) return res.status(404).json({ success: false, message: 'Scenario not found' });
    res.json({ success: true, data: scenario });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getScenariosByModule = async (req, res) => {
  try {
    const scenarios = await scenarioService.getScenariosByModule(req.params.moduleId);
    res.json({ success: true, count: scenarios.length, data: scenarios });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.evaluateAnswer = async (req, res) => {
  try {
    const { tool_id } = req.body;
    if (!tool_id) return res.status(400).json({ success: false, message: 'tool_id is required' });
    const result = await scenarioService.evaluateAnswer(req.params.id, tool_id);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.evaluatePrompt = async (req, res) => {
  try {
    const { prompt } = req.body;
    const result = await scenarioService.evaluatePrompt(req.params.id, prompt || '');
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.evaluateOutput = async (req, res) => {
  try {
    const { output } = req.body;
    const result = await scenarioService.evaluateOutput(req.params.id, output || '');
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.evaluateFull = async (req, res) => {
  try {
    const { tool_id, prompt, output, user_id } = req.body;
    const evaluation = await scenarioService.evaluateFull(req.params.id, tool_id, prompt, output);
    const userId = user_id || 'default-user';
    const attempt = await progressService.recordAttempt(userId, req.params.id, {
      selected_tool: tool_id,
      ...evaluation,
      prompt,
      output
    });
    res.json({ success: true, data: evaluation, attempt });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
