const mongoose = require('mongoose');
const optionSchema = new mongoose.Schema({
  tool_id: { type: String, required: true },
  tool_name: { type: String, required: true },
  classification: { type: String, enum: ['CORRECT', 'PARTIALLY_CORRECT', 'WRONG'], required: true },
  explanation: { type: String, required: true }
});
const scenarioSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  module_id: { type: String, required: true },
  scenario_number: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  administrative_context: { type: String },
  task: { type: String, required: true },
  options: [optionSchema],
  recommended_tool: { id: String, name: String, why_recommended: String },
  practice_input: { type: { type: String, default: 'document' }, title: String, content: String },
  ideal_prompt: { type: String, required: true },
  ideal_output: { type: String, required: true },
  evaluation_criteria: [String],
  improvement_suggestions: [String]
});
module.exports = mongoose.models.Scenario || mongoose.model('Scenario', scenarioSchema);
