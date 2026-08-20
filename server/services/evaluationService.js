class EvaluationService {
  evaluateAnswer(scenario, selectedToolId) { throw new Error('Not implemented'); }
  evaluatePrompt(scenario, userPrompt) { throw new Error('Not implemented'); }
  evaluateOutput(scenario, userOutput) { throw new Error('Not implemented'); }
  evaluateFullSubmission(scenario, selectedToolId, userPrompt, userOutput) { throw new Error('Not implemented'); }
}

class MockEvaluationService extends EvaluationService {
  evaluateAnswer(scenario, selectedToolId) {
    const option = scenario.options.find(o => o.tool_id === selectedToolId);
    if (!option) {
      return {
        tool_id: selectedToolId,
        classification: 'WRONG',
        score: 0,
        explanation: 'Invalid tool selected.',
        recommendedTool: scenario.recommended_tool
      };
    }
    let score = 0;
    if (option.classification === 'CORRECT') score = 20;
    else if (option.classification === 'PARTIALLY_CORRECT') score = 12;
    else score = 0;

    return {
      tool_id: option.tool_id,
      tool_name: option.tool_name,
      classification: option.classification,
      score,
      explanation: option.explanation,
      recommendedTool: scenario.recommended_tool
    };
  }

  evaluatePrompt(scenario, userPrompt = '') {
    const p = (userPrompt || '').toLowerCase().trim();
    const words = p.split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    const breakdown = {
      context: { name: 'Context & Background', max: 10, score: 0, present: false },
      role: { name: 'Role & Persona', max: 10, score: 0, present: false },
      task: { name: 'Specific Task Definition', max: 15, score: 0, present: false },
      specifics: { name: 'Specific Requirements & Data', max: 20, score: 0, present: false },
      format: { name: 'Output Structure & Format', max: 15, score: 0, present: false },
      constraints: { name: 'Constraints & Boundaries', max: 15, score: 0, present: false },
      verification: { name: 'Verification & Human Review', max: 15, score: 0, present: false }
    };

    if (wordCount < 4) {
      return {
        score: 15,
        wordCount,
        breakdown,
        feedback: 'Prompt is too short. Please specify the role, task, context, and expected format.'
      };
    }

    // 1. Role & Persona (10 pts) - Requires explicit personification directive
    const hasRoleDirective = /(act as|you are|assume the role|as an? (administrative|revenue|executive|public|government|ai|expert|consultant|officer|analyst|assistant)|role\s*:|persona\s*:)/i.test(p);
    const hasAdminPersona = /(administrative officer|executive magistrate|sdm|sub-divisional magistrate|tahsildar|public admin|revenue officer|data analyst|policy analyst)/i.test(p);

    if (hasRoleDirective && hasAdminPersona) {
      breakdown.role.score = 10;
      breakdown.role.present = true;
    } else if (hasRoleDirective) {
      breakdown.role.score = 5;
      breakdown.role.present = true;
    } else {
      breakdown.role.score = 0;
      breakdown.role.present = false;
    }

    // 2. Context & Background (10 pts)
    const hasContext = /(context\s*:|background\s*:|regarding|concerning|in the matter of|pertaining to|attached (order|file|document|table|data|circular|report)|revenue circle|sub-division|district|tehsil|block|panchayat|grievance)/i.test(p);
    if (hasContext) {
      breakdown.context.score = 10;
      breakdown.context.present = true;
    } else {
      breakdown.context.score = 0;
      breakdown.context.present = false;
    }

    // 3. Specific Task Definition (15 pts)
    const hasTask = /(draft|summarize|extract|analyze|prepare|create|compare|audit|calculate|synthesize|generate|identify|itemise|itemize|review)/i.test(p);
    if (hasTask) {
      breakdown.task.score = 15;
      breakdown.task.present = true;
    } else {
      breakdown.task.score = 0;
      breakdown.task.present = false;
    }

    // 4. Specific Requirements & Data (20 pts)
    const hasNumbersOrDates = /\d{1,4}|date|section|plot|rupees|rs\.?|lakh|crore|deadline|schedule|october|november|december|may|target|metric|kpi/i.test(p);
    if (hasNumbersOrDates && wordCount > 15) {
      breakdown.specifics.score = 20;
      breakdown.specifics.present = true;
    } else if (hasNumbersOrDates) {
      breakdown.specifics.score = 10;
      breakdown.specifics.present = true;
    } else {
      breakdown.specifics.score = 0;
      breakdown.specifics.present = false;
    }

    // 5. Output Structure & Format (15 pts)
    const hasFormat = /(table|markdown|bullet points?|numbered list|headings?|columns?|matrix|template|briefing note|executive summary|slide outline|1\.|2\.)/i.test(p);
    if (hasFormat) {
      breakdown.format.score = 15;
      breakdown.format.present = true;
    } else {
      breakdown.format.score = 0;
      breakdown.format.present = false;
    }

    // 6. Constraints & Guardrails (15 pts)
    const hasConstraints = /(only (include|use)|do not (hallucinate|assume|extrapolate|invent|add)|strict|without (adding|assuming)|confidential|preserve tone|no assumptions|boundaries)/i.test(p);
    if (hasConstraints) {
      breakdown.constraints.score = 15;
      breakdown.constraints.present = true;
    } else {
      breakdown.constraints.score = 0;
      breakdown.constraints.present = false;
    }

    // 7. Verification & Citations (15 pts)
    const hasVerification = /(verify|cite sources?|reference sections?|ground in (the )?text|cross-check|statutory reference|check facts?|confirm against)/i.test(p);
    if (hasVerification) {
      breakdown.verification.score = 15;
      breakdown.verification.present = true;
    } else {
      breakdown.verification.score = 0;
      breakdown.verification.present = false;
    }

    const totalScore = Math.min(100, Object.values(breakdown).reduce((acc, item) => acc + item.score, 0));

    return {
      score: totalScore,
      wordCount,
      breakdown,
      feedback: totalScore >= 80 
        ? 'Excellent prompt! Clear persona, explicit task boundaries, format specifications, and verification guardrails.'
        : 'Review your prompt against the 5-Part Formula. Make sure to explicitly define the AI persona (e.g. "Act as an Administrative Officer"), output structure (e.g. Markdown table), and verification constraints.'
    };
  }

  evaluateOutput(scenario, userOutput = '') {
    const o = (userOutput || '').toLowerCase().trim();
    const outputWords = o.split(/\s+/).filter(Boolean);
    const outputWordCount = outputWords.length;

    const breakdown = {
      accuracy: { name: 'Factual Accuracy & Grounding', max: 25, score: 0 },
      completeness: { name: 'Completeness of Key Points', max: 25, score: 0 },
      relevance: { name: 'Relevance to Scenario Task', max: 20, score: 0 },
      structure: { name: 'Clarity & Heading Structure', max: 15, score: 0 },
      requiredInfo: { name: 'Inclusion of Specific Figures & Dates', max: 15, score: 0 }
    };

    const idealText = (scenario?.ideal_output || '').toLowerCase();
    const sourceText = (scenario?.practice_input?.content || '').toLowerCase();
    const taskText = (scenario?.task || '').toLowerCase();

    // A. Clarity & Heading Structure (Max: 15)
    const hasHeadings = /[\n\r](\d+[\.\)]|[A-Za-z\s]+:|\*\*|##|[-*•]\s+)/.test(userOutput);
    const hasMultipleSections = (userOutput.match(/\n\s*\n/g) || []).length >= 1 || (userOutput.match(/[-*•]\s+/g) || []).length >= 2;
    if (hasHeadings && hasMultipleSections && outputWordCount >= 25) {
      breakdown.structure.score = 15;
    } else if (hasHeadings || hasMultipleSections || outputWordCount >= 18) {
      breakdown.structure.score = 12;
    } else if (outputWordCount >= 10) {
      breakdown.structure.score = 8;
    } else {
      breakdown.structure.score = 4;
    }

    // B. Inclusion of Specific Figures & Dates (Max: 15)
    const sourceNumbers = (sourceText.match(/(\d+([\.,]\d+)?%?|rs\.?|₹|\b(january|february|march|april|may|june|july|august|september|october|november|december|hectares?|ha|acres?|lakh|crore)\b)/gi) || []);
    const uniqueSourceNumbers = Array.from(new Set(sourceNumbers.map(s => s.toLowerCase())));
    
    let matchedNumbersCount = 0;
    uniqueSourceNumbers.forEach(num => {
      if (o.includes(num)) matchedNumbersCount++;
    });

    const numberCoverage = uniqueSourceNumbers.length > 0 ? (matchedNumbersCount / uniqueSourceNumbers.length) : 1;
    if (numberCoverage >= 0.55 || matchedNumbersCount >= 4) {
      breakdown.requiredInfo.score = 15;
    } else if (numberCoverage >= 0.3 || matchedNumbersCount >= 2) {
      breakdown.requiredInfo.score = 12;
    } else if (matchedNumbersCount >= 1 || outputWordCount >= 20) {
      breakdown.requiredInfo.score = 9;
    } else {
      breakdown.requiredInfo.score = 4;
    }

    // C. Relevance to Scenario Task (Max: 20)
    const titleKeywords = (scenario?.title || '').toLowerCase().split(/\s+/).filter(w => w.length > 3);
    const taskKeywords = taskText.split(/\s+/).filter(w => w.length > 4);
    const relevantKeyTerms = Array.from(new Set([...titleKeywords, ...taskKeywords]));
    
    let matchedTaskTerms = 0;
    relevantKeyTerms.forEach(term => {
      if (o.includes(term)) matchedTaskTerms++;
    });

    const taskCoverage = relevantKeyTerms.length > 0 ? (matchedTaskTerms / relevantKeyTerms.length) : 1;
    if (taskCoverage >= 0.45 && outputWordCount >= 30) {
      breakdown.relevance.score = 20;
    } else if (taskCoverage >= 0.25 || outputWordCount >= 18) {
      breakdown.relevance.score = 16;
    } else if (outputWordCount >= 10) {
      breakdown.relevance.score = 11;
    } else {
      breakdown.relevance.score = 5;
    }

    // D. Factual Accuracy & Grounding (Max: 25)
    const sourceKeyPhrases = sourceText
      .split(/[\n,;.]/)
      .map(s => s.trim().toLowerCase())
      .filter(s => s.length > 8 && s.length < 50);

    let matchedPhrasesCount = 0;
    sourceKeyPhrases.forEach(phrase => {
      const significantWords = phrase.split(/\s+/).filter(w => w.length > 4);
      if (significantWords.length >= 2 && significantWords.every(w => o.includes(w))) {
        matchedPhrasesCount++;
      }
    });

    const phraseRatio = sourceKeyPhrases.length > 0 ? (matchedPhrasesCount / sourceKeyPhrases.length) : 0.5;
    if (phraseRatio >= 0.5 || (matchedPhrasesCount >= 3 && outputWordCount >= 35)) {
      breakdown.accuracy.score = 25;
    } else if (phraseRatio >= 0.25 || matchedPhrasesCount >= 2) {
      breakdown.accuracy.score = 20;
    } else if (outputWordCount >= 15) {
      breakdown.accuracy.score = 15;
    } else {
      breakdown.accuracy.score = 8;
    }

    // E. Completeness of Key Points (Max: 25)
    const idealSections = idealText
      .split(/(\d+\.\s+|\n\s*[-*•]\s+)/)
      .map(s => s.trim())
      .filter(s => s.length > 15);

    let coveredSections = 0;
    idealSections.forEach(sec => {
      const wordsInSec = sec.split(/\s+/).filter(w => w.length > 4);
      const matchCount = wordsInSec.filter(w => o.includes(w)).length;
      if (wordsInSec.length > 0 && (matchCount / wordsInSec.length) >= 0.35) {
        coveredSections++;
      }
    });

    const sectionCoverage = idealSections.length > 0 ? (coveredSections / idealSections.length) : (outputWordCount > 40 ? 0.75 : 0.4);
    if (sectionCoverage >= 0.7) {
      breakdown.completeness.score = 25;
    } else if (sectionCoverage >= 0.45) {
      breakdown.completeness.score = 19;
    } else if (sectionCoverage >= 0.25 || outputWordCount >= 25) {
      breakdown.completeness.score = 14;
    } else {
      breakdown.completeness.score = 8;
    }

    const totalScore = Math.min(100, Math.max(20, Object.values(breakdown).reduce((acc, item) => acc + item.score, 0)));

    return {
      score: totalScore,
      wordCount: outputWordCount,
      breakdown,
      feedback: totalScore >= 80
        ? 'High-quality output matching administrative standards.'
        : 'Output is acceptable. Ensure all dates, specific figures, and administrative action points are fully itemized before official use.'
    };
  }

  evaluateFullSubmission(scenario, selectedToolId, userPrompt = '', userOutput = '') {
    const toolEval = this.evaluateAnswer(scenario, selectedToolId);
    const promptEval = this.evaluatePrompt(scenario, userPrompt);
    const outputEval = this.evaluateOutput(scenario, userOutput);

    let responsibleAiScore = 16;
    if (/verify|check|human|confirm|official|source|do not assume/i.test(userPrompt)) {
      responsibleAiScore = 20;
    } else if (userPrompt.length > 40) {
      responsibleAiScore = 18;
    }

    const weightedTool = toolEval.score;
    const weightedPrompt = Math.round((promptEval.score / 100) * 30);
    const weightedOutput = Math.round((outputEval.score / 100) * 30);
    const totalScore = Math.min(100, weightedTool + weightedPrompt + weightedOutput + responsibleAiScore);

    const strengths = [];
    const weaknesses = [];
    const suggestions = [];

    if (toolEval.classification === 'CORRECT') {
      strengths.push('Selected the most appropriate AI capability for this administrative task.');
    } else if (toolEval.classification === 'PARTIALLY_CORRECT') {
      weaknesses.push('Tool can perform general text work, but specialized tools offer superior grounding or data execution.');
    } else {
      weaknesses.push('Selected tool is designed for a completely different function.');
    }

    if (promptEval.breakdown.role.present) strengths.push('Clear administrative role / persona defined in prompt.');
    else suggestions.push('Explicitly define the officer role (e.g. Administrative Officer & Executive Magistrate).');

    if (promptEval.breakdown.format.present) strengths.push('Clear output structure guidelines provided.');
    else suggestions.push('Specify desired output layout (e.g. Markdown table, briefing note).');

    if (promptEval.breakdown.constraints.present || promptEval.breakdown.verification.present) {
      strengths.push('Included fact-checking or boundary constraints to prevent AI hallucination.');
    } else {
      suggestions.push('Add an explicit verification instruction to prevent hallucinated figures.');
    }

    if (outputEval.score >= 80) strengths.push('Generated output is comprehensive and well-structured.');
    else suggestions.push('Cross-verify calculated figures and dates against official office records before use.');

    return {
      tool_score: weightedTool,
      tool_classification: toolEval.classification,
      tool_feedback: toolEval.explanation,
      prompt_score: weightedPrompt,
      prompt_breakdown: promptEval.breakdown,
      prompt_raw_score: promptEval.score,
      prompt_feedback: promptEval.feedback,
      output_score: weightedOutput,
      output_breakdown: outputEval.breakdown,
      output_raw_score: outputEval.score,
      output_feedback: outputEval.feedback,
      responsible_ai_score: responsibleAiScore,
      total_score: totalScore,
      strengths,
      weaknesses,
      suggestions,
      ideal_prompt: scenario.ideal_prompt,
      ideal_output: scenario.ideal_output,
      recommended_tool: scenario.recommended_tool
    };
  }
}

class LLMEvaluationService extends EvaluationService {
  async evaluateFullSubmission(scenario, selectedToolId, userPrompt, userOutput) {
    const fallback = new MockEvaluationService();
    return fallback.evaluateFullSubmission(scenario, selectedToolId, userPrompt, userOutput);
  }
}

module.exports = {
  EvaluationService,
  MockEvaluationService,
  LLMEvaluationService,
  defaultEvaluator: new MockEvaluationService()
};