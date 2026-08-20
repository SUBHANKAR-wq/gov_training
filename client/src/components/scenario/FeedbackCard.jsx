import React from 'react';
import { CheckCircle2, AlertTriangle, ArrowRight, TrendingUp, RefreshCw, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeedbackCard = ({ evaluation, attempt, onRetry, onNextScenario, nextScenarioId }) => {
  const { total_score, strengths, weaknesses, suggestions, tool_score, prompt_score, output_score, responsible_ai_score } = evaluation;

  return (
    <div className="space-y-6">
      
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 text-accent-gold text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Scenario Performance Summary</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Total Score: {total_score} / 100 Points
          </h3>
          <p className="text-xs text-slate-400 max-w-lg">
            {total_score >= 80 
              ? 'Outstanding performance! You successfully applied the recommended tool, structured instructions cleanly, and validated outputs for public administration.'
              : 'Good progress. Review the improvement tips below and retry this scenario to elevate your AI readiness score.'}
          </p>
          {attempt && attempt.scoreDelta !== null && attempt.scoreDelta !== undefined && (
            <div className="inline-flex items-center space-x-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Score Improvement: {attempt.scoreDelta >= 0 ? `+${attempt.scoreDelta}` : attempt.scoreDelta} pts</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2.5 w-full md:w-auto shrink-0">
          <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-xl text-center">
            <span className="text-[10px] text-slate-400 font-bold block uppercase">Tool (20%)</span>
            <span className="text-base font-black text-emerald-400">{tool_score}/20</span>
          </div>
          <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-xl text-center">
            <span className="text-[10px] text-slate-400 font-bold block uppercase">Prompt (30%)</span>
            <span className="text-base font-black text-gov-400">{prompt_score}/30</span>
          </div>
          <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-xl text-center">
            <span className="text-[10px] text-slate-400 font-bold block uppercase">Output (30%)</span>
            <span className="text-base font-black text-gov-400">{output_score}/30</span>
          </div>
          <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-xl text-center">
            <span className="text-[10px] text-slate-400 font-bold block uppercase">Ethics (20%)</span>
            <span className="text-base font-black text-accent-gold">{responsible_ai_score}/20</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5 space-y-3">
          <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>What You Did Well</span>
          </h4>
          <ul className="space-y-2 text-xs text-emerald-950">
            {strengths && strengths.length > 0 ? (
              strengths.map((str, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{str}</span>
                </li>
              ))
            ) : (
              <li className="text-slate-500 italic">No specific strengths noted.</li>
            )}
          </ul>
        </div>

        <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 space-y-3">
          <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center space-x-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Actionable Improvement Tips</span>
          </h4>
          <ul className="space-y-2 text-xs text-amber-950">
            {suggestions && suggestions.length > 0 ? (
              suggestions.map((sug, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{sug}</span>
                </li>
              ))
            ) : (
              <li className="text-slate-500 italic">Great job! Keep up this high standard of administrative rigor.</li>
            )}
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={onRetry}
          className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-xl text-sm font-bold transition-all w-full sm:w-auto justify-center"
        >
          <RefreshCw className="w-4 h-4 text-slate-600" />
          <span>Improve My Prompt & Retry Scenario</span>
        </button>

        <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
          <Link
            to="/training"
            className="px-4 py-3 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
          >
            All Modules
          </Link>

          {nextScenarioId ? (
            <button
              onClick={onNextScenario}
              className="flex items-center space-x-2 bg-gov-600 hover:bg-gov-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <span>Next Scenario</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <Link
              to="/completion"
              className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <Award className="w-4 h-4" />
              <span>Claim Certificate</span>
            </Link>
          )}
        </div>
      </div>

    </div>
  );
};
