const { scenariosData } = require('../client/src/data/scenariosData.js');

const testScenario = scenariosData[0]; // Scenario 1: MKKVY

function evaluatePrompt(prompt) {
  const p = (prompt || '').toLowerCase().trim();
  const words = p.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const breakdown = {
    role: { name: 'Role & Persona', max: 10, score: 0, present: false },
    context: { name: 'Context & Background', max: 10, score: 0, present: false },
    task: { name: 'Specific Task Definition', max: 15, score: 0, present: false },
    specifics: { name: 'Specific Requirements & Data', max: 20, score: 0, present: false },
    format: { name: 'Output Structure & Format', max: 15, score: 0, present: false },
    constraints: { name: 'Constraints & Boundaries', max: 15, score: 0, present: false },
    verification: { name: 'Verification & Citations', max: 15, score: 0, present: false }
  };

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

  if (/(context\s*:|background\s*:|regarding|concerning|in the matter of|pertaining to|attached (government\s+)?(notification|order|file|document|table|data|circular|report|policy)|revenue circle|sub-division|district|tehsil|block|panchayat|grievance|scheme)/i.test(p)) {
    breakdown.context.score = 10;
    breakdown.context.present = true;
  }

  if (/(draft|summarize|extract|analyze|prepare|create|compare|audit|calculate|synthesize|generate|identify|itemise|itemize|review)/i.test(p)) {
    breakdown.task.score = 15;
    breakdown.task.present = true;
  }

  const hasNumbersOrDates = /\d{1,4}|date|section|plot|rupees|rs\.?|lakh|crore|deadline|schedule|october|november|december|may|target|metric|kpi/i.test(p);
  if (hasNumbersOrDates && wordCount > 15) {
    breakdown.specifics.score = 20;
    breakdown.specifics.present = true;
  } else if (hasNumbersOrDates) {
    breakdown.specifics.score = 10;
    breakdown.specifics.present = true;
  }

  if (/(table|markdown|bullet points?|numbered list|headings?|columns?|matrix|template|briefing note|executive summary|slide outline|1\.|2\.)/i.test(p)) {
    breakdown.format.score = 15;
    breakdown.format.present = true;
  }

  if (/(only (include|use)|do not (hallucinate|assume|extrapolate|invent|add)|strict|without (adding|assuming)|confidential|preserve tone|no assumptions|boundaries)/i.test(p)) {
    breakdown.constraints.score = 15;
    breakdown.constraints.present = true;
  }

  if (/(verify|cite sources?|reference sections?|ground in (the )?text|cross-check|statutory reference|check facts?|confirm against|present in (the )?text|factual tone|human-in-the-loop|strict grounding)/i.test(p)) {
    breakdown.verification.score = 15;
    breakdown.verification.present = true;
  }

  const rawScore = Math.min(100, Object.values(breakdown).reduce((acc, item) => acc + item.score, 0));
  const weightedScore = Math.round((rawScore / 100) * 30);
  return { rawScore, weightedScore, breakdown };
}

function evaluateOutput(output, scenario) {
  const o = (output || '').toLowerCase().trim();
  const words = o.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

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

  // Structure
  const hasHeadings = /[\n\r](\d+[\.\)]|[A-Za-z\s]+:|\*\*|##|[-*•]\s+)/.test(output);
  const hasMultipleSections = (output.match(/\n\s*\n/g) || []).length >= 1 || (output.match(/[-*•]\s+/g) || []).length >= 2;
  if (hasHeadings && hasMultipleSections && wordCount >= 25) breakdown.structure.score = 15;
  else if (hasHeadings || hasMultipleSections || wordCount >= 18) breakdown.structure.score = 12;
  else if (wordCount >= 10) breakdown.structure.score = 8;
  else breakdown.structure.score = 4;

  // Figures & Dates
  const sourceNumbers = (sourceText.match(/(\d+([\.,]\d+)?%?|rs\.?|₹|\b(january|february|march|april|may|june|july|august|september|october|november|december|hectares?|ha|acres?|lakh|crore)\b)/gi) || []);
  const uniqueSourceNumbers = Array.from(new Set(sourceNumbers.map(s => s.toLowerCase())));
  let matchedNumbersCount = 0;
  uniqueSourceNumbers.forEach(num => { if (o.includes(num)) matchedNumbersCount++; });
  const numberCoverage = uniqueSourceNumbers.length > 0 ? (matchedNumbersCount / uniqueSourceNumbers.length) : 1;
  if (numberCoverage >= 0.55 || matchedNumbersCount >= 4) breakdown.requiredInfo.score = 15;
  else if (numberCoverage >= 0.3 || matchedNumbersCount >= 2) breakdown.requiredInfo.score = 12;
  else if (matchedNumbersCount >= 1 || wordCount >= 20) breakdown.requiredInfo.score = 9;
  else breakdown.requiredInfo.score = 4;

  // Relevance
  const titleKeywords = (scenario?.title || '').toLowerCase().split(/\s+/).filter(w => w.length > 3);
  const taskKeywords = taskText.split(/\s+/).filter(w => w.length > 4);
  const relevantKeyTerms = Array.from(new Set([...titleKeywords, ...taskKeywords]));
  let matchedTaskTerms = 0;
  relevantKeyTerms.forEach(term => { if (o.includes(term)) matchedTaskTerms++; });
  const taskCoverage = relevantKeyTerms.length > 0 ? (matchedTaskTerms / relevantKeyTerms.length) : 1;
  if (taskCoverage >= 0.45 && wordCount >= 30) breakdown.relevance.score = 20;
  else if (taskCoverage >= 0.25 || wordCount >= 18) breakdown.relevance.score = 16;
  else if (wordCount >= 10) breakdown.relevance.score = 11;
  else breakdown.relevance.score = 5;

  // Accuracy
  const sourceKeyPhrases = sourceText.split(/[\n,;.]/).map(s => s.trim().toLowerCase()).filter(s => s.length > 8 && s.length < 50);
  let matchedPhrasesCount = 0;
  sourceKeyPhrases.forEach(phrase => {
    const significantWords = phrase.split(/\s+/).filter(w => w.length > 4);
    if (significantWords.length >= 2 && significantWords.every(w => o.includes(w))) matchedPhrasesCount++;
  });
  const phraseRatio = sourceKeyPhrases.length > 0 ? (matchedPhrasesCount / sourceKeyPhrases.length) : 0.5;
  if (phraseRatio >= 0.5 || (matchedPhrasesCount >= 3 && wordCount >= 35)) breakdown.accuracy.score = 25;
  else if (phraseRatio >= 0.25 || matchedPhrasesCount >= 2) breakdown.accuracy.score = 20;
  else if (wordCount >= 15) breakdown.accuracy.score = 15;
  else breakdown.accuracy.score = 8;

  // Completeness
  const idealSections = idealText.split(/(\d+\.\s+|\n\s*[-*•]\s+)/).map(s => s.trim()).filter(s => s.length > 15);
  let coveredSections = 0;
  idealSections.forEach(sec => {
    const wordsInSec = sec.split(/\s+/).filter(w => w.length > 4);
    const matchCount = wordsInSec.filter(w => o.includes(w)).length;
    if (wordsInSec.length > 0 && (matchCount / wordsInSec.length) >= 0.35) coveredSections++;
  });
  const sectionCoverage = idealSections.length > 0 ? (coveredSections / idealSections.length) : (wordCount > 40 ? 0.75 : 0.4);
  if (sectionCoverage >= 0.7) breakdown.completeness.score = 25;
  else if (sectionCoverage >= 0.45) breakdown.completeness.score = 19;
  else if (sectionCoverage >= 0.25 || wordCount >= 25) breakdown.completeness.score = 14;
  else breakdown.completeness.score = 8;

  const rawScore = Math.min(100, Math.max(20, Object.values(breakdown).reduce((acc, item) => acc + item.score, 0)));
  const weightedScore = Math.round((rawScore / 100) * 30);
  return { rawScore, weightedScore, breakdown };
}

console.log('====================================================');
console.log('       PROMPT & OUTPUT RUBRIC TEST BENCHMARK        ');
console.log('====================================================\n');

console.log('--- TEST 1: PROMPT SCORING EVALUATION ---');

const promptA = 'Summarize the attached government notification for MKKVY and give key points.';
const resPA = evaluatePrompt(promptA);
console.log('\n[Case 1: No Personification Directive]');
console.log('Input Prompt:', JSON.stringify(promptA));
console.log('-> Role Score: ' + resPA.breakdown.role.score + '/' + resPA.breakdown.role.max + ' (Present: ' + resPA.breakdown.role.present + ')');
console.log('-> Total Raw Prompt Score: ' + resPA.rawScore + '/100 | Weighted: ' + resPA.weightedScore + '/30');

const promptB = 'Act as an AI assistant. Analyze the attached document and provide a markdown table of key deadlines.';
const resPB = evaluatePrompt(promptB);
console.log('\n[Case 2: Generic Assistant Directive]');
console.log('Input Prompt:', JSON.stringify(promptB));
console.log('-> Role Score: ' + resPB.breakdown.role.score + '/' + resPB.breakdown.role.max + ' (Present: ' + resPB.breakdown.role.present + ')');
console.log('-> Total Raw Prompt Score: ' + resPB.rawScore + '/100 | Weighted: ' + resPB.weightedScore + '/30');

const promptC = testScenario.ideal_prompt;
const resPC = evaluatePrompt(promptC);
console.log('\n[Case 3: Complete 5-Part Formula with Administrative Persona]');
console.log('Input Prompt:', JSON.stringify(promptC.slice(0, 100) + '...'));
console.log('-> Role & Persona: ' + resPC.breakdown.role.score + '/' + resPC.breakdown.role.max);
console.log('-> Context: ' + resPC.breakdown.context.score + '/' + resPC.breakdown.context.max);
console.log('-> Task: ' + resPC.breakdown.task.score + '/' + resPC.breakdown.task.max);
console.log('-> Specifics: ' + resPC.breakdown.specifics.score + '/' + resPC.breakdown.specifics.max);
console.log('-> Format: ' + resPC.breakdown.format.score + '/' + resPC.breakdown.format.max);
console.log('-> Constraints: ' + resPC.breakdown.constraints.score + '/' + resPC.breakdown.constraints.max);
console.log('-> Verification: ' + resPC.breakdown.verification.score + '/' + resPC.breakdown.verification.max);
console.log('-> Total Raw Prompt Score: ' + resPC.rawScore + '/100 | Weighted: ' + resPC.weightedScore + '/30');

console.log('\n----------------------------------------------------');
console.log('--- TEST 2: OUTPUT SCORING EVALUATION ---');

const partialOutput = 'MKKVY 2024-25 — Briefing\n\nPurpose:\nMukhyamantri Krushi Vikash Yojana (MKKVY) aims to improve farm productivity in rainfed areas and support small and marginal farmers through financial and irrigation assistance.\n\nKey Benefits:\n₹10,000 per year direct financial assistance.\nPaid in 2 equal tranches of ₹5,000.\nApplicable to verified landholdings of up to 2 hectares.\n75% subsidy on micro-irrigation pump sets for registered SHGs/FPOs.';
const resOA = evaluateOutput(partialOutput, testScenario);
console.log('\n[Case 1: Partial Output (User Screenshot: Purpose & Benefits only)]');
console.log('-> Accuracy & Grounding: ' + resOA.breakdown.accuracy.score + '/' + resOA.breakdown.accuracy.max);
console.log('-> Completeness of Key Points: ' + resOA.breakdown.completeness.score + '/' + resOA.breakdown.completeness.max + ' (Accurately reflects missing timelines/duties)');
console.log('-> Relevance: ' + resOA.breakdown.relevance.score + '/' + resOA.breakdown.relevance.max);
console.log('-> Structure: ' + resOA.breakdown.structure.score + '/' + resOA.breakdown.structure.max);
console.log('-> Specific Figures & Dates: ' + resOA.breakdown.requiredInfo.score + '/' + resOA.breakdown.requiredInfo.max + ' (Reflects missing dates: 1st Oct, 15th Nov, 1st Dec)');
console.log('-> Total Output Score: ' + resOA.rawScore + '/100 | Weighted: ' + resOA.weightedScore + '/30');

const fullOutput = testScenario.ideal_output;
const resOB = evaluateOutput(fullOutput, testScenario);
console.log('\n[Case 2: Comprehensive Full Benchmark Output (All 5 Sections + Dates)]');
console.log('-> Accuracy & Grounding: ' + resOB.breakdown.accuracy.score + '/' + resOB.breakdown.accuracy.max);
console.log('-> Completeness of Key Points: ' + resOB.breakdown.completeness.score + '/' + resOB.breakdown.completeness.max);
console.log('-> Relevance: ' + resOB.breakdown.relevance.score + '/' + resOB.breakdown.relevance.max);
console.log('-> Structure: ' + resOB.breakdown.structure.score + '/' + resOB.breakdown.structure.max);
console.log('-> Specific Figures & Dates: ' + resOB.breakdown.requiredInfo.score + '/' + resOB.breakdown.requiredInfo.max);
console.log('-> Total Output Score: ' + resOB.rawScore + '/100 | Weighted: ' + resOB.weightedScore + '/30');
console.log('\n====================================================');
