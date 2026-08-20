let memoryUsers = {
  'default-user': {
    id: 'default-user',
    name: 'Officer (Administration Office)',
    department: 'Revenue & Public Administration',
    role: 'Administrative Officer',
    progress: 0,
    overall_score: 0,
    completedScenarios: []
  }
};
let memoryAttempts = [];

class ProgressService {
  async getUserProgress(userId = 'default-user') {
    let user = memoryUsers[userId];
    if (!user) {
      user = {
        id: userId,
        name: 'Officer (Administration Office)',
        department: 'Revenue & Public Administration',
        role: 'Administrative Officer',
        progress: 0,
        overall_score: 0,
        completedScenarios: []
      };
      memoryUsers[userId] = user;
    }

    const userAttempts = memoryAttempts.filter(a => a.user_id === userId);
    const completedCount = user.completedScenarios.length;
    const progressPercent = Math.min(100, Math.round((completedCount / 25) * 100));

    let toolTotal = 0, promptTotal = 0, outputTotal = 0, respTotal = 0;
    const latestAttemptsByScenario = {};
    userAttempts.forEach(att => {
      latestAttemptsByScenario[att.scenario_id] = att;
    });

    const activeAttempts = Object.values(latestAttemptsByScenario);
    if (activeAttempts.length > 0) {
      activeAttempts.forEach(a => {
        toolTotal += (a.tool_score / 20) * 100;
        promptTotal += (a.prompt_score / 30) * 100;
        outputTotal += (a.output_score / 30) * 100;
        respTotal += (a.responsible_ai_score / 20) * 100;
      });
      user.overall_score = Math.round(
        activeAttempts.reduce((sum, a) => sum + a.total_score, 0) / activeAttempts.length
      );
    } else {
      user.overall_score = 0;
    }

    const count = activeAttempts.length || 1;
    const skillScores = {
      tool_selection: Math.round(toolTotal / count) || 0,
      prompt_engineering: Math.round(promptTotal / count) || 0,
      output_evaluation: Math.round(outputTotal / count) || 0,
      responsible_ai: Math.round(respTotal / count) || 0
    };

    return {
      user,
      completed_count: completedCount,
      total_scenarios: 25,
      progress_percent: progressPercent,
      overall_readiness_score: user.overall_score,
      skill_scores: skillScores,
      recent_attempts: userAttempts.slice(-10).reverse()
    };
  }

  async recordAttempt(userId = 'default-user', scenarioId, attemptData) {
    const previousAttempts = memoryAttempts.filter(
      a => a.user_id === userId && a.scenario_id === scenarioId
    );
    const attemptNumber = previousAttempts.length + 1;

    const newAttempt = {
      id: 'att-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
      user_id: userId,
      scenario_id: scenarioId,
      selected_tool: attemptData.selected_tool,
      tool_classification: attemptData.tool_classification,
      prompt: attemptData.prompt || '',
      output: attemptData.output || '',
      tool_score: attemptData.tool_score || 0,
      prompt_score: attemptData.prompt_score || 0,
      output_score: attemptData.output_score || 0,
      responsible_ai_score: attemptData.responsible_ai_score || 0,
      total_score: attemptData.total_score || 0,
      attempt_number: attemptNumber,
      feedback: {
        strengths: attemptData.strengths || [],
        weaknesses: attemptData.weaknesses || [],
        suggestions: attemptData.suggestions || [],
        prompt_breakdown: attemptData.prompt_breakdown || {},
        output_breakdown: attemptData.output_breakdown || {}
      },
      createdAt: new Date().toISOString()
    };

    memoryAttempts.push(newAttempt);

    let user = memoryUsers[userId];
    if (!user) {
      user = {
        id: userId,
        name: 'Officer (Administration Office)',
        department: 'Revenue & Public Administration',
        role: 'Administrative Officer',
        progress: 0,
        overall_score: 0,
        completedScenarios: []
      };
      memoryUsers[userId] = user;
    }

    if (!user.completedScenarios.includes(scenarioId)) {
      user.completedScenarios.push(scenarioId);
    }
    user.progress = Math.min(100, Math.round((user.completedScenarios.length / 25) * 100));

    return newAttempt;
  }

  async resetProgress(userId = 'default-user') {
    if (memoryUsers[userId]) {
      memoryUsers[userId].completedScenarios = [];
      memoryUsers[userId].progress = 0;
      memoryUsers[userId].overall_score = 0;
    }
    memoryAttempts = memoryAttempts.filter(a => a.user_id !== userId);
    return this.getUserProgress(userId);
  }
}

module.exports = new ProgressService();
