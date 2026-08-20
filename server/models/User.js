const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, default: 'Officer (Administration Office)' },
  department: { type: String, default: 'Revenue & Public Administration' },
  role: { type: String, default: 'Administrative Officer' },
  progress: { type: Number, default: 0 },
  overall_score: { type: Number, default: 0 },
  completedScenarios: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
