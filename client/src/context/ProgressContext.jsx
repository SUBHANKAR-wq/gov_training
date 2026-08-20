import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import { scenariosData } from '../data/scenariosData';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Officer (Administration Office)',
    department: 'Revenue & Public Administration',
    role: 'Administrative Officer'
  });

  const [completedScenarios, setCompletedScenarios] = useState(() => {
    try {
      const stored = localStorage.getItem('become_ai_smart_completed');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  const [attempts, setAttempts] = useState(() => {
    try {
      const stored = localStorage.getItem('become_ai_smart_attempts');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  // Calculate scores
  const totalScenarios = 25;
  const completedCount = completedScenarios.length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalScenarios) * 100));

  // Latest attempt per scenario
  const latestAttempts = {};
  attempts.forEach(att => {
    latestAttempts[att.scenario_id] = att;
  });

  const activeAttempts = Object.values(latestAttempts);
  let overallReadinessScore = 0;
  let toolScoreSum = 0, promptScoreSum = 0, outputScoreSum = 0, respScoreSum = 0;

  if (activeAttempts.length > 0) {
    overallReadinessScore = Math.round(
      activeAttempts.reduce((sum, a) => sum + (a.total_score || 0), 0) / activeAttempts.length
    );
    activeAttempts.forEach(a => {
      toolScoreSum += ((a.tool_score || 0) / 20) * 100;
      promptScoreSum += ((a.prompt_score || 0) / 30) * 100;
      outputScoreSum += ((a.output_score || 0) / 30) * 100;
      respScoreSum += ((a.responsible_ai_score || 0) / 20) * 100;
    });
  }

  const count = activeAttempts.length || 1;
  const skillScores = {
    tool_selection: Math.round(toolScoreSum / count) || (completedCount > 0 ? 80 : 0),
    prompt_engineering: Math.round(promptScoreSum / count) || (completedCount > 0 ? 75 : 0),
    output_evaluation: Math.round(outputScoreSum / count) || (completedCount > 0 ? 82 : 0),
    responsible_ai: Math.round(respScoreSum / count) || (completedCount > 0 ? 90 : 0)
  };

  const recordScenarioAttempt = (scenarioId, evaluationData) => {
    const existingForScenario = attempts.filter(a => a.scenario_id === scenarioId);
    const attemptNumber = existingForScenario.length + 1;
    
    // Calculate delta if previous attempt existed
    let previousScore = null;
    if (existingForScenario.length > 0) {
      previousScore = existingForScenario[existingForScenario.length - 1].total_score;
    }
    const scoreDelta = previousScore !== null ? (evaluationData.total_score - previousScore) : null;

    const newAttempt = {
      id: 'att-' + Date.now(),
      scenario_id: scenarioId,
      attempt_number: attemptNumber,
      timestamp: new Date().toISOString(),
      scoreDelta,
      ...evaluationData
    };

    const updatedAttempts = [...attempts, newAttempt];
    setAttempts(updatedAttempts);
    try {
      localStorage.setItem('become_ai_smart_attempts', JSON.stringify(updatedAttempts));
    } catch (e) {}

    if (!completedScenarios.includes(scenarioId)) {
      const updatedCompleted = [...completedScenarios, scenarioId];
      setCompletedScenarios(updatedCompleted);
      try {
        localStorage.setItem('become_ai_smart_completed', JSON.stringify(updatedCompleted));
      } catch (e) {}
    }

    return newAttempt;
  };

  const resetAllProgress = () => {
    setCompletedScenarios([]);
    setAttempts([]);
    try {
      localStorage.removeItem('become_ai_smart_completed');
      localStorage.removeItem('become_ai_smart_attempts');
    } catch (e) {}
  };

  const updateUserName = (name) => {
    setUser(prev => ({ ...prev, name }));
  };

  return (
    <ProgressContext.Provider value={{
      user,
      updateUserName,
      completedScenarios,
      attempts,
      totalScenarios,
      completedCount,
      progressPercent,
      overallReadinessScore,
      skillScores,
      recordScenarioAttempt,
      resetAllProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
