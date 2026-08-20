const scenariosSeed = require('../seed/scenariosSeed');
const { defaultEvaluator } = require('./evaluationService');

class AssessmentService {
  async getAssessmentQuestions() {
    const selected = [
      scenariosSeed.find(s => s.module_id === 'module-1') || scenariosSeed[0],
      scenariosSeed.find(s => s.module_id === 'module-2') || scenariosSeed[5],
      scenariosSeed.find(s => s.module_id === 'module-3') || scenariosSeed[10],
      scenariosSeed.find(s => s.module_id === 'module-4') || scenariosSeed[15],
      scenariosSeed.find(s => s.module_id === 'module-5') || scenariosSeed[20]
    ];
    return selected;
  }

  async submitAssessment(submissions) {
    const results = [];
    let totalScore = 0;

    for (const sub of submissions) {
      const scenario = scenariosSeed.find(s => s.id === sub.scenario_id);
      if (!scenario) continue;
      const evaluation = defaultEvaluator.evaluateFullSubmission(
        scenario,
        sub.selected_tool,
        sub.prompt,
        sub.output
      );
      results.push({
        scenario_id: sub.scenario_id,
        scenario_title: scenario.title,
        evaluation
      });
      totalScore += evaluation.total_score;
    }

    const finalScore = results.length > 0 ? Math.round(totalScore / results.length) : 0;
    return {
      final_score: finalScore,
      passed: finalScore >= 60,
      grade: finalScore >= 85 ? 'Distinction' : finalScore >= 70 ? 'Merit' : finalScore >= 60 ? 'Pass' : 'Needs Review',
      results
    };
  }
}

module.exports = new AssessmentService();
