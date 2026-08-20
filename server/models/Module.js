const mongoose = require('mongoose');
const moduleSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number, required: true },
  topics: [{ type: String }],
  icon: { type: String }
});
module.exports = mongoose.models.Module || mongoose.model('Module', moduleSchema);
