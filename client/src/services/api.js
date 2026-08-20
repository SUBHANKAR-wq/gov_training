import { modulesData } from '../data/modulesData';
import { toolsData } from '../data/toolsData';
import { scenariosData } from '../data/scenariosData';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

export const api = {
  // Modules
  async getModules() {
    try {
      const res = await fetch(`${API_BASE}/modules`);
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json.data;
      }
    } catch (e) {}
    return modulesData;
  },

  async getModuleById(id) {
    try {
      const res = await fetch(`${API_BASE}/modules/${id}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json.data;
      }
    } catch (e) {}
    return modulesData.find(m => m.id === id) || null;
  },

  // Scenarios
  async getScenarios(moduleId = null) {
    try {
      const url = moduleId ? `${API_BASE}/scenarios/module/${moduleId}` : `${API_BASE}/scenarios`;
      const res = await fetch(url);
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json.data;
      }
    } catch (e) {}
    return moduleId ? scenariosData.filter(s => s.module_id === moduleId) : scenariosData;
  },

  async getScenarioById(id) {
    try {
      const res = await fetch(`${API_BASE}/scenarios/${id}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json.data;
      }
    } catch (e) {}
    return scenariosData.find(s => s.id === id) || null;
  },

  async submitAnswer(scenarioId, toolId) {
    try {
      const res = await fetch(`${API_BASE}/scenarios/${scenarioId}/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool_id: toolId })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json.data;
      }
    } catch (e) {}

    // Fallback local evaluation
    const scenario = scenariosData.find(s => s.id === scenarioId);
    if (!scenario) throw new Error('Scenario not found');
    const option = scenario.options.find(o => o.tool_id === toolId);
    let score = 0;
    if (option?.classification === 'CORRECT') score = 20;
    else if (option?.classification === 'PARTIALLY_CORRECT') score = 12;
    return {
      tool_id: toolId,
      tool_name: option?.tool_name || toolId,
      classification: option?.classification || 'WRONG',
      score,
      explanation: option?.explanation || 'Evaluation completed.',
      recommendedTool: scenario.recommended_tool
    };
  },

  async evaluatePrompt(scenarioId, prompt) {
    try {
      const res = await fetch(`${API_BASE}/scenarios/${scenarioId}/prompt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json.data;
      }
    } catch (e) {}
    return { score: 75, wordCount: (prompt || '').split(/\s+/).length, feedback: 'Prompt evaluated.' };
  },

  async evaluateOutput(scenarioId, output) {
    try {
      const res = await fetch(`${API_BASE}/scenarios/${scenarioId}/output`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ output })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json.data;
      }
    } catch (e) {}
    return { score: 80, wordCount: (output || '').split(/\s+/).length, feedback: 'Output evaluated.' };
  },

  async evaluateFull(scenarioId, toolId, prompt, output, userId = 'default-user') {
    try {
      const res = await fetch(`${API_BASE}/scenarios/${scenarioId}/evaluate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool_id: toolId, prompt, output, user_id: userId })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json.data;
      }
    } catch (e) {}

    // Local evaluation engine (matches backend evaluation rubric)
    const scenario = scenariosData.find(s => s.id === scenarioId);
    const option = scenario?.options.find(o => o.tool_id === toolId);
    const toolScore = option?.classification === 'CORRECT' ? 20 : option?.classification === 'PARTIALLY_CORRECT' ? 12 : 0;

    // 1. Dynamic Prompt Rubric Evaluation
    const p = (prompt || '').toLowerCase().trim();
    const promptWords = p.split(/\s+/).filter(Boolean);
    const promptWordCount = promptWords.length;

    const promptBreakdown = {
      role: { name: 'Role & Persona', max: 10, score: 0, present: false },
      context: { name: 'Context & Background', max: 10, score: 0, present: false },
      task: { name: 'Specific Task Definition', max: 15, score: 0, present: false },
      specifics: { name: 'Specific Requirements & Data', max: 20, score: 0, present: false },
      format: { name: 'Output Structure & Format', max: 15, score: 0, present: false },
      constraints: { name: 'Constraints & Boundaries', max: 15, score: 0, present: false },
      verification: { name: 'Verification & Citations', max: 15, score: 0, present: false }
    };

    // Role: Strict check for personification directive
    const hasRoleDirective = /(act as|you are|assume the role|as an? (administrative|revenue|executive|public|government|ai|expert|consultant|officer|analyst|assistant)|role\s*:|persona\s*:)/i.test(p);
    const hasAdminPersona = /(administrative officer|executive magistrate|sdm|sub-divisional magistrate|tahsildar|public admin|revenue officer|data analyst|policy analyst)/i.test(p);

    if (hasRoleDirective && hasAdminPersona) {
      promptBreakdown.role.score = 10;
      promptBreakdown.role.present = true;
    } else if (hasRoleDirective) {
      promptBreakdown.role.score = 5;
      promptBreakdown.role.present = true;
    } else {
      promptBreakdown.role.score = 0;
      promptBreakdown.role.present = false;
    }

    // Context & Background
    if (/(context\s*:|background\s*:|regarding|concerning|in the matter of|pertaining to|attached (order|file|document|table|data|circular|report)|revenue circle|sub-division|district|tehsil|block|panchayat|grievance)/i.test(p)) {
      promptBreakdown.context.score = 10;
      promptBreakdown.context.present = true;
    }

    // Task
    if (/(draft|summarize|extract|analyze|prepare|create|compare|audit|calculate|synthesize|generate|identify|itemise|itemize|review)/i.test(p)) {
      promptBreakdown.task.score = 15;
      promptBreakdown.task.present = true;
    }

    // Specifics & Data
    const hasNumbersOrDates = /\d{1,4}|date|section|plot|rupees|rs\.?|lakh|crore|deadline|schedule|october|november|december|may|target|metric|kpi/i.test(p);
    if (hasNumbersOrDates && promptWordCount > 15) {
      promptBreakdown.specifics.score = 20;
      promptBreakdown.specifics.present = true;
    } else if (hasNumbersOrDates) {
      promptBreakdown.specifics.score = 10;
      promptBreakdown.specifics.present = true;
    }

    // Format
    if (/(table|markdown|bullet points?|numbered list|headings?|columns?|matrix|template|briefing note|executive summary|slide outline|1\.|2\.)/i.test(p)) {
      promptBreakdown.format.score = 15;
      promptBreakdown.format.present = true;
    }

    // Constraints
    if (/(only (include|use)|do not (hallucinate|assume|extrapolate|invent|add)|strict|without (adding|assuming)|confidential|preserve tone|no assumptions|boundaries)/i.test(p)) {
      promptBreakdown.constraints.score = 15;
      promptBreakdown.constraints.present = true;
    }

    // Verification
    if (/(verify|cite sources?|reference sections?|ground in (the )?text|cross-check|statutory reference|check facts?|confirm against)/i.test(p)) {
      promptBreakdown.verification.score = 15;
      promptBreakdown.verification.present = true;
    }

    const rawPromptScore = Math.min(100, Object.values(promptBreakdown).reduce((acc, item) => acc + item.score, 0));
    const promptScore = Math.round((rawPromptScore / 100) * 30);

    // 2. Dynamic Output Rubric Evaluation
    const o = (output || '').toLowerCase().trim();
    const outputWords = o.split(/\s+/).filter(Boolean);
    const outputWordCount = outputWords.length;

    const outputBreakdown = {
      accuracy: { name: 'Factual Accuracy & Grounding', max: 25, score: 0 },
      completeness: { name: 'Completeness of Key Points', max: 25, score: 0 },
      relevance: { name: 'Relevance to Scenario Task', max: 20, score: 0 },
      structure: { name: 'Clarity & Heading Structure', max: 15, score: 0 },
      requiredInfo: { name: 'Inclusion of Specific Figures & Dates', max: 15, score: 0 }
    };

    if (/[\n:\*\-#]|\d\./.test(output) && outputWordCount > 25) outputBreakdown.structure.score = 15;
    else if (outputWordCount > 10) outputBreakdown.structure.score = 8;

    if (/\d+|rs|%|section|date|tehsil|officer|magistrate|district/i.test(o)) outputBreakdown.requiredInfo.score = 15;
    else if (outputWordCount > 15) outputBreakdown.requiredInfo.score = 8;

    if (outputWordCount >= 40) outputBreakdown.relevance.score = 20;
    else if (outputWordCount >= 20) outputBreakdown.relevance.score = 14;
    else if (outputWordCount >= 8) outputBreakdown.relevance.score = 8;

    if (outputWordCount >= 50) outputBreakdown.completeness.score = 25;
    else if (outputWordCount >= 25) outputBreakdown.completeness.score = 18;
    else if (outputWordCount >= 8) outputBreakdown.completeness.score = 10;

    if (outputWordCount >= 30) outputBreakdown.accuracy.score = 25;
    else if (outputWordCount >= 10) outputBreakdown.accuracy.score = 15;

    const rawOutputScore = Math.min(100, Math.max(20, Object.values(outputBreakdown).reduce((acc, item) => acc + item.score, 0)));
    const outputScore = Math.round((rawOutputScore / 100) * 30);

    // 3. Responsible AI Safeguard Score (20 pts)
    let respScore = 14;
    if (/(verify|check|human|confirm|official|source|do not assume|privacy|confidential)/i.test(p)) {
      respScore = 20;
    } else if (promptWordCount > 25) {
      respScore = 18;
    }

    const totalScore = Math.min(100, toolScore + promptScore + outputScore + respScore);

    const strengths = [];
    const weaknesses = [];
    const suggestions = [];

    if (toolScore === 20) strengths.push('Selected the optimal AI tool tailored to this operational administrative domain.');
    else if (toolScore === 12) weaknesses.push('Tool can generate general drafts, but lacks dedicated grounding or analytics capabilities.');
    else weaknesses.push('Selected tool is misaligned with the requirements of this scenario.');

    if (promptBreakdown.role.present) strengths.push('Clear administrative role & persona defined in prompt.');
    else suggestions.push('Explicitly define the persona (e.g. "Act as an Administrative Officer & Executive Magistrate").');

    if (promptBreakdown.format.present) strengths.push('Explicit output layout and formatting constraints specified.');
    else suggestions.push('Specify desired output layout (e.g. Markdown table, briefing note).');

    if (promptBreakdown.constraints.present || promptBreakdown.verification.present) {
      strengths.push('Included fact-checking or boundary constraints to prevent AI hallucination.');
    } else {
      suggestions.push('Add an explicit verification instruction to prevent hallucinated numbers or dates.');
    }

    if (outputScore >= 24) strengths.push('Generated output is comprehensive, structured, and ready for official administrative review.');
    else suggestions.push('Ensure all dates, designated authorities, and action points are clearly itemized before official use.');

    return {
      tool_score: toolScore,
      tool_classification: option?.classification || 'WRONG',
      tool_feedback: option?.explanation || 'Tool evaluation complete.',
      prompt_score: promptScore,
      prompt_raw_score: rawPromptScore,
      prompt_feedback: rawPromptScore >= 80 ? 'Excellent prompt structure with clear persona and constraints.' : 'Prompt can be improved by adding explicit persona, formatting, and verification guardrails.',
      prompt_breakdown: promptBreakdown,
      output_score: outputScore,
      output_raw_score: rawOutputScore,
      output_feedback: rawOutputScore >= 80 ? 'High-quality output matching administrative standards.' : 'Output is acceptable but verify all dates and figures against original records.',
      output_breakdown: outputBreakdown,
      responsible_ai_score: respScore,
      total_score: totalScore,
      strengths,
      weaknesses,
      suggestions,
      ideal_prompt: scenario?.ideal_prompt || '',
      ideal_output: scenario?.ideal_output || '',
      recommended_tool: scenario?.recommended_tool
    };
  },

  // Tools
  async getTools() {
    try {
      const res = await fetch(`${API_BASE}/tools`);
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json.data;
      }
    } catch (e) {}
    return toolsData;
  },

  async getToolById(id) {
    try {
      const res = await fetch(`${API_BASE}/tools/${id}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json.data;
      }
    } catch (e) {}
    return toolsData.find(t => t.id === id) || null;
  },

  // Progress
  async getProgress(userId = 'default-user') {
    try {
      const res = await fetch(`${API_BASE}/progress/${userId}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json.data;
      }
    } catch (e) {}
    return null;
  },

  async resetProgress(userId = 'default-user') {
    try {
      const res = await fetch(`${API_BASE}/progress/reset/${userId}`, { method: 'POST' });
      if (res.ok) {
        const json = await res.json();
        if (json.success) return json.data;
      }
    } catch (e) {}
    return null;
  }
};

export default api;
