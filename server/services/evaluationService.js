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

    if (/Administrative Officer|officer|magistrate|assistant|tahsildar|admin|expert|consultant/i.test(p)) {
      breakdown.role.score = 10;
      breakdown.role.present = true;
    } else if (/you are|act as|as an/i.test(p)) {
      breakdown.role.score = 6;
      breakdown.role.present = true;
    }

    if (/government|scheme|order|circular|office|sub-division|district|odisha|revenue|grievance|village|public|paddy/i.test(p)) {
      breakdown.context.score = 10;
      breakdown.context.present = true;
    } else if (wordCount > 15) {
      breakdown.context.score = 5;
      breakdown.context.present = true;
    }

    if (/draft|summarize|extract|analyze|prepare|create|compare|provide|generate|explain|review/i.test(p)) {
      breakdown.task.score = 15;
      breakdown.task.present = true;
    } else {
      breakdown.task.score = 7;
    }

    const hasNumbersOrDates = /\d{1,4}|date|section|plot|rupees|rs|lakh|crore|deadline|schedule|october|november|december|may|tehsil/i.test(p);
    if (hasNumbersOrDates && wordCount > 20) {
      breakdown.specifics.score = 20;
      breakdown.specifics.present = true;
    } else if (hasNumbersOrDates || wordCount > 15) {
      breakdown.specifics.score = 12;
      breakdown.specifics.present = true;
    } else {
      breakdown.specifics.score = 5;
    }

    if (/table|bullet|headings|numbered|markdown|matrix|template|sections|1\.|2\.|point|slide/i.test(p)) {
      breakdown.format.score = 15;
      breakdown.format.present = true;
    } else if (wordCount > 25) {
      breakdown.format.score = 8;
    }

    if (/only|do not|strict|formal|legal|no hallucination|preserve|without adding|decorum|confidential/i.test(p)) {
      breakdown.constraints.score = 15;
      breakdown.constraints.present = true;
    } else if (wordCount > 30) {
      breakdown.constraints.score = 7;
    }

    if (/verify|source|grounded|citation|check|confirm|cross-check|reference/i.test(p)) {
      breakdown.verification.score = 15;
      breakdown.verification.present = true;
    } else if (wordCount > 35) {
      breakdown.verification.score = 6;
    }

    const totalScore = Math.min(100, Math.max(25, Object.values(breakdown).reduce((acc, item) => acc + item.score, 0)));

    return {
      score: totalScore,
      wordCount,
      breakdown,
      feedback: totalScore >= 80 
        ? 'Excellent prompt! Clear persona, explicit task boundaries, format specifications, and verification guardrails.'
        : 'Good effort. For a top score, explicitly state the official role (e.g. Administrative Officer), specify output structure (e.g. Markdown table), and add verification constraints.'
    };
  }

  evaluateOutput(scenario, userOutput = '') {
    const o = (userOutput || '').toLowerCase().trim();
    const wordCount = o.split(/\s+/).filter(Boolean).length;

    const breakdown = {
      accuracy: { name: 'Factual Accuracy & Grounding', max: 25, score: 0 },
      completeness: { name: 'Completeness of Key Points', max: 25, score: 0 },
      relevance: { name: 'Relevance to Scenario Task', max: 20, score: 0 },
      structure: { name: 'Clarity & Heading Structure', max: 15, score: 0 },
      requiredInfo: { name: 'Inclusion of Specific Figures & Dates', max: 15, score: 0 }
    };

    if (wordCount < 10) {
      return {
        score: 20,
        wordCount,
        breakdown,
        feedback: 'Output appears very brief. Please paste the full AI-generated result.'
      };
    }

    if (/[\n:\*\-#]|\d\./.test(userOutput) && wordCount > 25) breakdown.structure.score = 15;
    else breakdown.structure.score = 8;

    if (/\d+|rs|%|section|date|tehsil|Administrative Officer|officer/i.test(o)) breakdown.requiredInfo.score = 15;
    else breakdown.requiredInfo.score = 8;

    if (wordCount >= 35) breakdown.relevance.score = 20;
    else if (wordCount >= 18) breakdown.relevance.score = 14;
    else breakdown.relevance.score = 8;

    if (wordCount >= 50) breakdown.completeness.score = 25;
    else if (wordCount >= 25) breakdown.completeness.score = 18;
    else breakdown.completeness.score = 10;

    if (wordCount >= 30) breakdown.accuracy.score = 25;
    else breakdown.accuracy.score = 15;

    const totalScore = Math.min(100, Math.max(30, Object.values(breakdown).reduce((acc, item) => acc + item.score, 0)));

    return {
      score: totalScore,
      wordCount,
      breakdown,
      feedback: totalScore >= 80
        ? 'High-quality output! Accurately structured, comprehensive, and ready for official administrative review.'
        : 'Acceptable output. Ensure all dates, designated authorities, and action points are clearly itemized before official use.'
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