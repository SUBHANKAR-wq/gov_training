const mongoose = require('mongoose');
const toolSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  tagline: { type: String },
  description: { type: String, required: true },
  official_url: { type: String, required: true },
  category: { type: String },
  difficulty: { type: String, default: 'Beginner' },
  setup_guide: [{ step: Number, title: String, instruction: String }],
  capabilities: [String],
  best_use_cases: [String],
  government_examples: [String],
  limitations: [String]
});
module.exports = mongoose.models.Tool || mongoose.model('Tool', toolSchema);
