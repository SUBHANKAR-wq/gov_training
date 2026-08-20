const mongoose = require('mongoose');
const Tool = require('../models/Tool');
const toolsSeed = require('../seed/toolsSeed');

let memoryTools = [...toolsSeed];

class ToolService {
  async getAllTools() {
    if (mongoose.connection && mongoose.connection.readyState === 1) {
      try {
        const dbTools = await Tool.find();
        if (dbTools && dbTools.length > 0) return dbTools;
      } catch (e) {}
    }
    return memoryTools;
  }

  async getToolById(id) {
    if (mongoose.connection && mongoose.connection.readyState === 1) {
      try {
        const dbTool = await Tool.findOne({ id });
        if (dbTool) return dbTool;
      } catch (e) {}
    }
    return memoryTools.find(t => t.id === id) || null;
  }
}

module.exports = new ToolService();
