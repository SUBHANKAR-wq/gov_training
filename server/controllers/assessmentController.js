const assessmentService = require('../services/assessmentService');
exports.getAssessment = async (req, res) => {
  try {
    const questions = await assessmentService.getAssessmentQuestions();
    res.json({ success: true, count: questions.length, data: questions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.submitAssessment = async (req, res) => {
  try {
    const { submissions } = req.body;
    if (!submissions || !Array.isArray(submissions)) {
      return res.status(400).json({ success: false, message: 'submissions array is required' });
    }
    const result = await assessmentService.submitAssessment(submissions);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
