import React, { useState } from 'react';
import { Award, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { scenariosData } from '../data/scenariosData';
import { toolsData } from '../data/toolsData';
import api from '../services/api';
import { useSound } from '../context/SoundContext';

export const AssessmentPage = () => {
  const { playCorrect } = useSound();

  // Pick 5 representative questions (1 per module)
  const assessmentScenarios = [
    scenariosData[0],  // Mod 1
    scenariosData[5],  // Mod 2
    scenariosData[10], // Mod 3
    scenariosData[15], // Mod 4
    scenariosData[20]  // Mod 5
  ];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  const handleSelect = (scenarioId, toolId) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [scenarioId]: toolId }));
  };

  const handleSubmit = () => {
    let total = 0;
    const details = assessmentScenarios.map((scen) => {
      const selected = answers[scen.id];
      const opt = scen.options.find(o => o.tool_id === selected);
      const isCorrect = opt?.classification === 'CORRECT';
      const score = isCorrect ? 20 : opt?.classification === 'PARTIALLY_CORRECT' ? 12 : 0;
      total += score;
      return {
        scenario: scen,
        selectedTool: selected,
        option: opt,
        score,
        isCorrect
      };
    });

    const res = {
      finalScore: total,
      passed: total >= 60,
      grade: total >= 90 ? 'High Distinction' : total >= 75 ? 'Distinction' : total >= 60 ? 'Certified' : 'Needs Review',
      details
    };

    setResult(res);
    setSubmitted(true);
    if (res.passed) playCorrect();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 bg-gov-100 text-gov-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          <span>Statutory Certification Assessment</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
          AI Smart Competency Assessment
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Test your tool selection and administrative AI decision-making across 5 comprehensive multi-module questions. Passing benchmark: 60%.
        </p>
      </div>

      {!submitted ? (
        <div className="space-y-6">
          {assessmentScenarios.map((scen, idx) => (
            <div key={scen.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-gov-800 uppercase tracking-wider">
                  Question {idx + 1} of 5 (Module {idx + 1})
                </span>
                <span className="text-xs text-slate-400 font-medium">20 Points</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900">{scen.title}</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{scen.description}</p>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 mt-2 text-xs text-slate-800">
                  <strong>Task:</strong> {scen.task}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {scen.options.map((opt, oIdx) => {
                  const letter = String.fromCharCode(65 + oIdx);
                  const isSelected = answers[scen.id] === opt.tool_id;

                  return (
                    <div
                      key={opt.tool_id}
                      onClick={() => handleSelect(scen.id, opt.tool_id)}
                      className={`p-3.5 rounded-xl border-2 cursor-pointer flex items-center space-x-3 transition-all ${
                        isSelected
                          ? 'border-gov-600 bg-gov-50/80 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-gov-300'
                      }`}
                    >
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                        isSelected ? 'bg-gov-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {letter}
                      </span>
                      <span className="text-xs font-bold text-slate-900">{opt.tool_name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="flex justify-end pt-4">
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < assessmentScenarios.length}
              className={`px-8 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all ${
                Object.keys(answers).length === assessmentScenarios.length
                  ? 'bg-gov-600 hover:bg-gov-700 scale-100 active:scale-95'
                  : 'bg-slate-300 cursor-not-allowed opacity-70'
              }`}
            >
              Submit Assessment & Grade Results
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          
          <div className="bg-slate-900 text-white rounded-2xl p-8 text-center space-y-4 shadow-xl">
            <span className="text-accent-gold text-xs font-bold uppercase tracking-widest block">
              Official Assessment Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Score: {result.finalScore} / 100 Points
            </h2>
            <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 px-4 py-1.5 rounded-full text-xs font-bold text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Status: {result.passed ? `PASSED (${result.grade})` : 'NEEDS RETRY'}</span>
            </div>
          </div>

          <div className="space-y-4">
            {result.details.map((d, i) => (
              <div key={d.scenario.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">Q{i + 1}: {d.scenario.title}</span>
                  <span className={`font-extrabold ${d.isCorrect ? 'text-emerald-600' : 'text-amber-600'}`}>
                    +{d.score} pts
                  </span>
                </div>
                <p className="text-xs text-slate-600">{d.option?.explanation || 'No answer submitted.'}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-4 pt-4">
            <button
              onClick={() => { setSubmitted(false); setAnswers({}); }}
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
            >
              Retake Assessment
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
