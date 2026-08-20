const progressService = require('../services/progressService');
exports.getProgress = async (req, res) => {
  try {
    const userId = req.params.userId || 'default-user';
    const progress = await progressService.getUserProgress(userId);
    res.json({ success: true, data: progress });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.resetProgress = async (req, res) => {
  try {
    const userId = req.params.userId || 'default-user';
    const progress = await progressService.resetProgress(userId);
    res.json({ success: true, message: 'Progress reset successfully', data: progress });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
