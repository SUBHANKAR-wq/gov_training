const mongoose = require('mongoose');
const attemptSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  user_id: { type: String, required: true },
  scenario_id: { type: String, required: true },
  selected_tool: { type: String, required: true },
  tool_classification: { type: String, required: true },
  prompt: { type: String, default: '' },
  output: { type: String, default: '' },
  tool_score: { type: Number, default: 0 },
  prompt_score: { type: Number, default: 0 },
  output_score: { type: Number, default: 0 },
  responsible_ai_score: { type: Number, default: 0 },
  total_score: { type: Number, default: 0 },
  attempt_number: { type: Number, default: 1 },
  feedback: {
    strengths: [String],
    weaknesses: [String],
    suggestions: [String],
    prompt_breakdown: Object,
    output_breakdown: Object
  },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.models.Attempt || mongoose.model('Attempt', attemptSchema);
