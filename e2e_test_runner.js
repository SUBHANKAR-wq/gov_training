const http = require('http');
const app = require('./server/app');
const { modulesData } = require('./client/src/data/modulesData');
const { toolsData } = require('./client/src/data/toolsData');
const { scenariosData } = require('./client/src/data/scenariosData');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const errors = [];

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${message}`);
  } else {
    failedTests++;
    console.error(`  [FAIL] ${message}`);
    errors.push(message);
  }
}

const server = app.listen(5055, async () => {
  try {
    console.log('====================================================');
    console.log('  BECOME AI SMART - FULL SYSTEM COMPREHENSIVE TEST  ');
    console.log('====================================================\n');

    const get = (path) => new Promise((resolve, reject) => {
      http.get('http://localhost:5055' + path, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    const post = (path, body) => new Promise((resolve, reject) => {
      const payload = JSON.stringify(body);
      const req = http.request('http://localhost:5055' + path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload)
        }
      }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      });
      req.on('error', reject);
      req.write(payload);
      req.end();
    });

    // 1. DATA INTEGRITY TESTS
    console.log('--- 1. Testing Curriculum & Scenario Data Integrity ---');
    assert(modulesData.length === 5, `Expected exactly 5 modules, got ${modulesData.length}`);
    assert(scenariosData.length === 25, `Expected exactly 25 scenarios, got ${scenariosData.length}`);
    assert(toolsData.length >= 8, `Expected at least 8 tools, got ${toolsData.length}`);

    // Check each module has 5 scenarios
    modulesData.forEach((mod, idx) => {
      const modScenarios = scenariosData.filter(s => s.module_id === mod.id);
      assert(modScenarios.length === 5, `Module ${idx + 1} (${mod.id}) has exactly 5 scenarios (found ${modScenarios.length})`);
    });

    // Check 4 options per scenario and correct distribution
    scenariosData.forEach((s) => {
      assert(s.options && s.options.length === 4, `Scenario #${s.scenario_number} (${s.id}) has exactly 4 options`);
      const correctOpts = s.options.filter(o => o.classification === 'CORRECT');
      const partialOpts = s.options.filter(o => o.classification === 'PARTIALLY_CORRECT');
      const wrongOpts = s.options.filter(o => o.classification === 'WRONG');
      assert(correctOpts.length === 1, `Scenario #${s.scenario_number} has exactly 1 CORRECT option (${correctOpts[0]?.tool_name})`);
      assert(partialOpts.length === 1, `Scenario #${s.scenario_number} has exactly 1 PARTIALLY_CORRECT option (${partialOpts[0]?.tool_name})`);
      assert(wrongOpts.length === 2, `Scenario #${s.scenario_number} has exactly 2 WRONG options`);
      assert(s.recommended_tool && s.recommended_tool.id === correctOpts[0]?.tool_id, `Scenario #${s.scenario_number} recommended tool matches CORRECT option`);
      assert(s.practice_input && s.practice_input.content.length > 50, `Scenario #${s.scenario_number} has realistic practice content`);
      assert(s.ideal_prompt && s.ideal_prompt.length > 30, `Scenario #${s.scenario_number} has hardcoded ideal prompt`);
      assert(s.ideal_output && s.ideal_output.length > 50, `Scenario #${s.scenario_number} has hardcoded ideal benchmark output`);
    });

    // 2. API HEALTH & DISCOVERY TESTS
    console.log('\n--- 2. Testing API Base Endpoints ---');
    const health = await get('/api/health');
    assert(health.status === 'ok', 'GET /api/health returned status ok');
    assert(health.developer.includes('AIPNT Technologies'), 'GET /api/health verified AIPNT Technologies developer branding');

    const apiModules = await get('/api/modules');
    assert(apiModules.success && apiModules.count === 5, 'GET /api/modules returned 5 modules');

    const apiTools = await get('/api/tools');
    assert(apiTools.success && apiTools.count >= 8, `GET /api/tools returned ${apiTools.count} tools`);

    // 3. COMPLETE SCENARIO SIMULATION TESTS (ALL 25 SCENARIOS)
    console.log('\n--- 3. Testing All 25 Scenarios Live Simulation Flow ---');
    
    for (const scen of scenariosData) {
      const sNum = scen.scenario_number;
      // Test Tool Evaluation for Correct Tool
      const correctTool = scen.options.find(o => o.classification === 'CORRECT').tool_id;
      const ansRes = await post(`/api/scenarios/${scen.id}/answer`, { tool_id: correctTool });
      assert(ansRes.success && ansRes.data.classification === 'CORRECT' && ansRes.data.score === 20, 
        `Scenario #${sNum} [Step 1]: Answer evaluated CORRECT with 20/20 pts`);

      // Test Full Evaluation (Step 4 & 5 -> Step 6)
      const fullRes = await post(`/api/scenarios/${scen.id}/evaluate`, {
        tool_id: correctTool,
        prompt: `You are assisting the Sub-Collector & SDM. Execute the administrative task for ${scen.title}. Format as a structured briefing table with dates and verification safeguards.`,
        output: `ADMINISTRATIVE BRIEFING & OUTPUT:\n1. Objectives & Mandates: Verified as per official order.\n2. Compliance Dates: Scheduled deadlines verified.\n3. Designated Action Officer: Sub-Collector Office.`,
        user_id: 'test-e2e-user'
      });

      assert(fullRes.success && fullRes.data.total_score >= 60, 
        `Scenario #${sNum} [Step 6]: Full evaluation generated score of ${fullRes.data.total_score}/100 pts`);
      assert(fullRes.data.prompt_breakdown && fullRes.data.output_breakdown, 
        `Scenario #${sNum} [Step 6]: Prompt and output granular breakdown matrices generated`);
    }

    // 4. PROGRESS, SKILL TRACKING & CERTIFICATION TESTS
    console.log('\n--- 4. Testing Progress & Readiness Analytics ---');
    const userProgress = await get('/api/progress/test-e2e-user');
    assert(userProgress.success, 'GET /api/progress/test-e2e-user returned successfully');
    assert(userProgress.data.completed_count === 25, `Expected 25 completed scenarios for test user, got ${userProgress.data.completed_count}`);
    assert(userProgress.data.progress_percent === 100, `Expected 100% progress, got ${userProgress.data.progress_percent}%`);
    assert(userProgress.data.overall_readiness_score > 60, `Overall readiness score is ${userProgress.data.overall_readiness_score}% (Certified status)`);
    assert(userProgress.data.skill_scores.tool_selection === 100, `Tool selection competency is ${userProgress.data.skill_scores.tool_selection}%`);

    // 5. CAPSTONE ASSESSMENT TESTS
    console.log('\n--- 5. Testing Capstone Assessment Service ---');
    const assessQuestions = await get('/api/assessment');
    assert(assessQuestions.success && assessQuestions.count === 5, 'GET /api/assessment returned 5 capstone questions (1 per module)');

    const assessSubmission = assessQuestions.data.map(q => ({
      scenario_id: q.id,
      selected_tool: q.recommended_tool.id,
      prompt: q.ideal_prompt,
      output: q.ideal_output
    }));

    const assessResult = await post('/api/assessment/submit', { submissions: assessSubmission });
    assert(assessResult.success && assessResult.data.passed === true, `Capstone assessment evaluated: PASSED with ${assessResult.data.final_score}% (${assessResult.data.grade})`);

    // 6. PROGRESS RESET TEST
    console.log('\n--- 6. Testing Progress Reset ---');
    const resetRes = await post('/api/progress/reset/test-e2e-user');
    assert(resetRes.success && resetRes.data.completed_count === 0, 'POST /api/progress/reset successfully cleared user progress');

    console.log('\n====================================================');
    console.log(`  TEST RESULTS: ${passedTests} PASSED / ${totalTests} TOTAL`);
    if (failedTests === 0) {
      console.log('  STATUS: ALL TESTS PASSED (100% OPERATIONAL)        ');
    } else {
      console.error(`  STATUS: ${failedTests} TESTS FAILED               `);
    }
    console.log('====================================================\n');

  } catch (err) {
    console.error('Fatal test error:', err);
  } finally {
    server.close();
    process.exit(failedTests > 0 ? 1 : 0);
  }
});
