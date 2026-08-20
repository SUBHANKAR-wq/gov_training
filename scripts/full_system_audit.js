const fs = require('fs');
const path = require('path');
const { modulesData } = require('../client/src/data/modulesData.js');
const { scenariosData } = require('../client/src/data/scenariosData.js');
const { toolsData } = require('../client/src/data/toolsData.js');

console.log('================================================================');
console.log('       BECOME AI SMART — FULL SYSTEM & QUALITY AUDIT REPORT     ');
console.log('================================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`[PASS] ${testName}`);
  } else {
    failedTests++;
    console.log(`[FAIL] ${testName} - ${details}`);
  }
}

// -------------------------------------------------------------
// SECTION 1: CURRICULUM MODULES AUDIT (5 MODULES)
// -------------------------------------------------------------
console.log('--- SECTION 1: MODULE INTEGRITY AUDIT ---');
assert(Array.isArray(modulesData) && modulesData.length === 5, 'Curriculum contains exactly 5 modules');

const expectedModules = ['module-1', 'module-2', 'module-3', 'module-4', 'module-5'];
expectedModules.forEach((modId, index) => {
  const mod = modulesData.find(m => m.id === modId);
  const scenarioCount = scenariosData.filter(s => s.module_id === modId).length;
  assert(!!mod, `Module ${index + 1} (${modId}) exists`);
  assert(mod && mod.order === index + 1, `Module ${modId} has correct order sequence ${index + 1}`);
  assert(mod && mod.title && mod.title.length > 5, `Module ${modId} has valid title: "${mod?.title}"`);
  assert(scenarioCount === 5, `Module ${modId} contains exactly 5 verified scenarios`);
});

// -------------------------------------------------------------
// SECTION 2: SCENARIOS & OPTIONS AUDIT (25 SCENARIOS)
// -------------------------------------------------------------
console.log('\n--- SECTION 2: 25 SCENARIOS & OPTIONS AUDIT ---');
assert(Array.isArray(scenariosData) && scenariosData.length === 25, 'Platform contains exactly 25 realistic scenarios');

scenariosData.forEach((scen, idx) => {
  const num = idx + 1;
  assert(scen.id === `scenario-${num}`, `Scenario ${num} ID is formatted correctly`);
  assert(scen.options && scen.options.length === 4, `Scenario ${num} has exactly 4 options`);
  
  const correctOpts = scen.options.filter(o => o.classification === 'CORRECT');
  const partialOpts = scen.options.filter(o => o.classification === 'PARTIALLY_CORRECT');
  const wrongOpts = scen.options.filter(o => o.classification === 'WRONG');

  assert(correctOpts.length === 1, `Scenario ${num} has exactly 1 CORRECT tool option`);
  assert(partialOpts.length === 1, `Scenario ${num} has exactly 1 PARTIALLY_CORRECT tool option`);
  assert(wrongOpts.length === 2, `Scenario ${num} has exactly 2 WRONG tool options`);
  assert(!!scen.recommended_tool && !!scen.recommended_tool.id, `Scenario ${num} has recommended tool`);
  assert(!!scen.practice_input && !!scen.practice_input.content, `Scenario ${num} has realistic practice input`);
  assert(!!scen.ideal_prompt && scen.ideal_prompt.length > 30, `Scenario ${num} has ideal prompt benchmark`);
  assert(!!scen.ideal_output && scen.ideal_output.length > 30, `Scenario ${num} has ideal output benchmark`);
});

// -------------------------------------------------------------
// SECTION 3: AI TOOLS DIRECTORY (9 TOOLS)
// -------------------------------------------------------------
console.log('\n--- SECTION 3: AI TOOLS DIRECTORY AUDIT ---');
assert(Array.isArray(toolsData) && toolsData.length === 9, 'AI Tools Library contains exactly 9 curated AI tools');

const expectedTools = [
  'chatgpt',
  'chatgpt-data',
  'gemini',
  'claude',
  'notebooklm',
  'perplexity',
  'gamma',
  'canva-ai',
  'adobe-firefly'
];

expectedTools.forEach(toolId => {
  const tool = toolsData.find(t => t.id === toolId);
  assert(!!tool, `Tool "${toolId}" exists in toolsData`);
  assert(tool && Array.isArray(tool.setup_guide) && tool.setup_guide.length >= 3, `Tool "${toolId}" has step-by-step setup guide (${tool?.setup_guide?.length} steps)`);
  assert(tool && Array.isArray(tool.capabilities) && tool.capabilities.length >= 3, `Tool "${toolId}" has defined capabilities`);
  assert(tool && Array.isArray(tool.best_use_cases) && tool.best_use_cases.length >= 2, `Tool "${toolId}" has defined best use cases`);
  assert(tool && Array.isArray(tool.government_examples) && tool.government_examples.length >= 2, `Tool "${toolId}" has realistic public administration examples`);
  assert(tool && Array.isArray(tool.limitations) && tool.limitations.length >= 2, `Tool "${toolId}" has responsible AI safety boundaries`);
});

// -------------------------------------------------------------
// SECTION 4: 6 CERTIFICATES AUDIT
// -------------------------------------------------------------
console.log('\n--- SECTION 4: CERTIFICATES HUB AUDIT ---');
const certCardContent = fs.readFileSync(path.join(__dirname, '../client/src/components/certificate/CertificateCard.jsx'), 'utf8');

const expectedCerts = ['module-1', 'module-2', 'module-3', 'module-4', 'module-5', 'final-capstone'];
expectedCerts.forEach(certId => {
  assert(certCardContent.includes(`'${certId}'`), `Certificate definition for "${certId}" exists in CertificateCard.jsx`);
});

assert(certCardContent.includes('AIPNT Certified AI Program'), 'Certificate card has clean credential accreditation footer');
assert(!certCardContent.includes('Certificate ID:'), 'Zero occurrences of unneeded "Certificate ID:" on certificate');
assert(!certCardContent.includes('Verification Hash:'), 'Zero occurrences of unneeded "Verification Hash:" on certificate');
assert(certCardContent.includes('Become AI Smart - Work Better • Serve Better'), 'Certificate includes official "Become AI Smart - Work Better • Serve Better" tagline');

// -------------------------------------------------------------
// SECTION 5: TERMINOLOGY COMPLIANCE AUDIT
// -------------------------------------------------------------
console.log('\n--- SECTION 5: TERMINOLOGY SANITIZATION AUDIT ---');
const allTextToCheck = JSON.stringify(scenariosData) + JSON.stringify(modulesData) + JSON.stringify(toolsData) + certCardContent;
const hasSubcollector = /subcollector|sub-collector/i.test(allTextToCheck);
assert(!hasSubcollector, 'Zero occurrences of deprecated "subcollector" terminology across data & certificates');

// -------------------------------------------------------------
// SECTION 6: VERCEL ROUTING CONFIG AUDIT
// -------------------------------------------------------------
console.log('\n--- SECTION 6: VERCEL ROUTING CONFIG AUDIT ---');
const rootVercel = fs.existsSync(path.join(__dirname, '../vercel.json'));
const clientVercel = fs.existsSync(path.join(__dirname, '../client/vercel.json'));
const publicVercel = fs.existsSync(path.join(__dirname, '../client/public/vercel.json'));

assert(rootVercel, 'Root vercel.json SPA configuration exists');
assert(clientVercel, 'Client vercel.json SPA configuration exists');
assert(publicVercel, 'Public dist vercel.json SPA configuration exists');

// -------------------------------------------------------------
// SUMMARY REPORT
// -------------------------------------------------------------
console.log('\n================================================================');
console.log(`TOTAL AUDIT CHECKS: ${totalTests}`);
console.log(`PASSED:             ${passedTests}`);
console.log(`FAILED:             ${failedTests}`);
console.log(`PASS RATE:          ${((passedTests / totalTests) * 100).toFixed(1)}%`);
console.log('================================================================\n');
