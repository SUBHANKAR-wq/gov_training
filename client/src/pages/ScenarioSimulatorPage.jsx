import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  RefreshCw, 
  AlertTriangle,
  Award
} from 'lucide-react';
import { scenariosData } from '../data/scenariosData';
import { toolsData } from '../data/toolsData';
import api from '../services/api';
import { useProgress } from '../context/ProgressContext';
import { ScenarioStepNav } from '../components/scenario/ScenarioStepNav';
import { ToolSelector } from '../components/scenario/ToolSelector';
import { AnswerFeedback } from '../components/scenario/AnswerFeedback';
import { ToolGuideCard } from '../components/scenario/ToolGuideCard';
import { PracticeInputViewer } from '../components/scenario/PracticeInputViewer';
import { PromptEditor } from '../components/scenario/PromptEditor';
import { OutputEditor } from '../components/scenario/OutputEditor';
import { PromptComparisonTable } from '../components/scenario/PromptComparisonTable';
import { OutputComparisonTable } from '../components/scenario/OutputComparisonTable';
import { FeedbackCard } from '../components/scenario/FeedbackCard';

export const ScenarioSimulatorPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recordScenarioAttempt } = useProgress();

  const scenario = scenariosData.find(s => s.id === id) || scenariosData[0];
  const currentIndex = scenariosData.findIndex(s => s.id === scenario.id);
  const nextScenario = currentIndex >= 0 && currentIndex < scenariosData.length - 1 ? scenariosData[currentIndex + 1] : null;

  // Simulator Workflow State
  const [currentStep, setCurrentStep] = useState(1);
  const [maxStepReached, setMaxStepReached] = useState(1);

  // Step 1: Tool Selection
  const [selectedToolId, setSelectedToolId] = useState('');
  const [isToolSubmitted, setIsToolSubmitted] = useState(false);
  const [toolEvaluation, setToolEvaluation] = useState(null);

  // Step 4: Prompt
  const [prompt, setPrompt] = useState('');

  // Step 5: Output
  const [output, setOutput] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);

  // Step 6: Full Evaluation Result & Attempt
  const [fullEvaluation, setFullEvaluation] = useState(null);
  const [recordedAttempt, setRecordedAttempt] = useState(null);
  const [activeReviewTab, setActiveReviewTab] = useState('summary'); // 'summary' | 'prompt' | 'output'

  // Reset state when scenario changes
  useEffect(() => {
    setCurrentStep(1);
    setMaxStepReached(1);
    setSelectedToolId('');
    setIsToolSubmitted(false);
    setToolEvaluation(null);
    setPrompt('');
    setOutput('');
    setFullEvaluation(null);
    setRecordedAttempt(null);
    setActiveReviewTab('summary');
  }, [id]);

  // Handle Tool Selection Submit
  const handleToolSubmit = async () => {
    if (!selectedToolId) return;
    try {
      const evalResult = await api.submitAnswer(scenario.id, selectedToolId);
      setToolEvaluation(evalResult);
      setIsToolSubmitted(true);
    } catch (e) {
      console.error(e);
    }
  };

  // Move to Step 2 (Guide)
  const handleProceedToGuide = () => {
    setCurrentStep(2);
    setMaxStepReached(prev => Math.max(prev, 2));
  };

  // Move to Step 3 (Practice Material)
  const handleProceedToPractice = () => {
    setCurrentStep(3);
    setMaxStepReached(prev => Math.max(prev, 3));
  };

  // Move to Step 4 (Prompt Writing)
  const handleProceedToPrompt = () => {
    setCurrentStep(4);
    setMaxStepReached(prev => Math.max(prev, 4));
  };

  // Move to Step 5 (Output Submission)
  const handleProceedToOutput = () => {
    setCurrentStep(5);
    setMaxStepReached(prev => Math.max(prev, 5));
  };

  // Step 5 Submit & Evaluate Full Submission
  const handleFullEvaluate = async () => {
    if (!output.trim()) return;
    setIsEvaluating(true);
    try {
      const evalResult = await api.evaluateFull(
        scenario.id,
        selectedToolId || scenario.options[0].tool_id,
        prompt,
        output
      );
      setFullEvaluation(evalResult);
      const att = recordScenarioAttempt(scenario.id, evalResult);
      setRecordedAttempt(att);
      setCurrentStep(6);
      setMaxStepReached(6);
    } catch (e) {
      console.error(e);
    } finally {
      setIsEvaluating(false);
    }
  };

  // Retry Scenario
  const handleRetry = () => {
    setCurrentStep(4); // Jump straight to prompt improvement
  };

  const handleNextScenario = () => {
    if (nextScenario) {
      navigate(`/scenario/${nextScenario.id}`);
    } else {
      navigate('/completion');
    }
  };

  const recommendedTool = scenario.recommended_tool;
  const toolData = toolsData.find(t => t.id === recommendedTool?.id) || toolsData[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Breadcrumb & Scenario Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
          <Link to="/training" className="hover:text-gov-600 flex items-center space-x-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Modules</span>
          </Link>
          <span>Scenario {scenario.scenario_number} of 25</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-gov-100 text-gov-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {scenario.administrative_context || 'Administration Office'}
            </span>
            <span className="text-xs text-slate-400 font-medium">|</span>
            <span className="text-xs text-slate-500 font-semibold">Module {scenario.scenario_number <= 5 ? '1' : scenario.scenario_number <= 10 ? '2' : scenario.scenario_number <= 15 ? '3' : scenario.scenario_number <= 20 ? '4' : '5'}</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
            {scenario.title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {scenario.description}
          </p>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800">
            <strong className="text-gov-900 block mb-0.5 font-bold">Mandated Administrative Task:</strong>
            {scenario.task}
          </div>
        </div>
      </div>

      {/* Step Navigation Bar */}
      <ScenarioStepNav
        currentStep={currentStep}
        onStepClick={(step) => setCurrentStep(step)}
        maxStepReached={maxStepReached}
      />

      {/* STEP 1: Tool Selection */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <ToolSelector
            options={scenario.options}
            selectedToolId={selectedToolId}
            onSelect={(toolId) => setSelectedToolId(toolId)}
            onSubmit={handleToolSubmit}
            isSubmitted={isToolSubmitted}
          />

          {isToolSubmitted && toolEvaluation && (
            <AnswerFeedback
              evaluation={toolEvaluation}
              onProceedToGuide={handleProceedToGuide}
            />
          )}
        </div>
      )}

      {/* STEP 2: Tool Guide */}
      {currentStep === 2 && (
        <ToolGuideCard
          toolId={recommendedTool?.id || selectedToolId}
          onProceedToPractice={handleProceedToPractice}
        />
      )}

      {/* STEP 3: Practice Input Viewer */}
      {currentStep === 3 && (
        <PracticeInputViewer
          practiceInput={scenario.practice_input}
          scenarioTask={scenario.task}
          onProceedToPrompt={handleProceedToPrompt}
        />
      )}

      {/* STEP 4: Prompt Editor */}
      {currentStep === 4 && (
        <PromptEditor
          prompt={prompt}
          setPrompt={setPrompt}
          onProceedToOutput={handleProceedToOutput}
          recommendedToolName={recommendedTool?.name}
        />
      )}

      {/* STEP 5: Output Editor */}
      {currentStep === 5 && (
        <OutputEditor
          output={output}
          setOutput={setOutput}
          onEvaluate={handleFullEvaluate}
          recommendedToolUrl={toolData?.official_url}
          recommendedToolName={recommendedTool?.name}
          isEvaluating={isEvaluating}
        />
      )}

      {/* STEP 6: Compare & Review Feedback */}
      {currentStep === 6 && fullEvaluation && (
        <div className="space-y-6">
          
          {/* Review Sub-Tabs */}
          <div className="flex border-b border-slate-200 space-x-6 text-xs font-bold">
            <button
              onClick={() => setActiveReviewTab('summary')}
              className={`pb-3 transition-colors border-b-2 ${
                activeReviewTab === 'summary' ? 'border-gov-600 text-gov-600' : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Overall Evaluation & Feedback
            </button>
            <button
              onClick={() => setActiveReviewTab('prompt')}
              className={`pb-3 transition-colors border-b-2 ${
                activeReviewTab === 'prompt' ? 'border-gov-600 text-gov-600' : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Prompt vs Ideal Benchmark
            </button>
            <button
              onClick={() => setActiveReviewTab('output')}
              className={`pb-3 transition-colors border-b-2 ${
                activeReviewTab === 'output' ? 'border-gov-600 text-gov-600' : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Output vs Reference Standard
            </button>
          </div>

          {activeReviewTab === 'summary' && (
            <FeedbackCard
              evaluation={fullEvaluation}
              attempt={recordedAttempt}
              onRetry={handleRetry}
              onNextScenario={handleNextScenario}
              nextScenarioId={nextScenario?.id}
            />
          )}

          {activeReviewTab === 'prompt' && (
            <PromptComparisonTable
              userPrompt={prompt}
              idealPrompt={scenario.ideal_prompt}
              breakdown={fullEvaluation.prompt_breakdown}
            />
          )}

          {activeReviewTab === 'output' && (
            <OutputComparisonTable
              userOutput={output}
              idealOutput={scenario.ideal_output}
              breakdown={fullEvaluation.output_breakdown}
            />
          )}

        </div>
      )}

    </div>
  );
};
