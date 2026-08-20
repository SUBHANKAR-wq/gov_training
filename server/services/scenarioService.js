const mongoose = require('mongoose');
const Scenario = require('../models/Scenario');
const scenariosSeed = require('../seed/scenariosSeed');
const { defaultEvaluator } = require('./evaluationService');

let memoryScenarios = [...scenariosSeed];

class ScenarioService {
  async getAllScenarios() {
    if (mongoose.connection && mongoose.connection.readyState === 1) {
      try {
        const dbScenarios = await Scenario.find().sort({ scenario_number: 1 });
        if (dbScenarios && dbScenarios.length > 0) return dbScenarios;
      } catch (e) {}
    }
    return memoryScenarios;
  }

  async getScenarioById(id) {
    if (mongoose.connection && mongoose.connection.readyState === 1) {
      try {
        const dbScenario = await Scenario.findOne({ id });
        if (dbScenario) return dbScenario;
      } catch (e) {}
    }
    return memoryScenarios.find(s => s.id === id) || null;
  }

  async getScenariosByModule(moduleId) {
    try {
      const dbScenarios = await Scenario.find({ module_id: moduleId }).sort({ scenario_number: 1 });
      if (dbScenarios && dbScenarios.length > 0) return dbScenarios;
    } catch (e) {}
    return memoryScenarios.filter(s => s.module_id === moduleId);
  }

  async evaluateAnswer(scenarioId, selectedToolId) {
    const scenario = await this.getScenarioById(scenarioId);
    if (!scenario) throw new Error('Scenario not found');
    return defaultEvaluator.evaluateAnswer(scenario, selectedToolId);
  }

  async evaluatePrompt(scenarioId, userPrompt) {
    const scenario = await this.getScenarioById(scenarioId);
    if (!scenario) throw new Error('Scenario not found');
    return defaultEvaluator.evaluatePrompt(scenario, userPrompt);
  }

  async evaluateOutput(scenarioId, userOutput) {
    const scenario = await this.getScenarioById(scenarioId);
    if (!scenario) throw new Error('Scenario not found');
    return defaultEvaluator.evaluateOutput(scenario, userOutput);
  }

  async evaluateFull(scenarioId, selectedToolId, userPrompt, userOutput) {
    const scenario = await this.getScenarioById(scenarioId);
    if (!scenario) throw new Error('Scenario not found');
    return defaultEvaluator.evaluateFullSubmission(scenario, selectedToolId, userPrompt, userOutput);
  }
}

module.exports = new ScenarioService();
