const toolService = require('../services/toolService');
exports.getAllTools = async (req, res) => {
  try {
    const tools = await toolService.getAllTools();
    res.json({ success: true, count: tools.length, data: tools });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.getToolById = async (req, res) => {
  try {
    const tool = await toolService.getToolById(req.params.id);
    if (!tool) return res.status(404).json({ success: false, message: 'Tool not found' });
    res.json({ success: true, data: tool });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
