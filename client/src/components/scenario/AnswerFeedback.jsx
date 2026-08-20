import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, XCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export const AnswerFeedback = ({ evaluation, onProceedToGuide }) => {
  const { playCorrect, playPartial, playWrong } = useSound();

  const isCorrect = evaluation.classification === 'CORRECT';
  const isPartial = evaluation.classification === 'PARTIALLY_CORRECT';
  const isWrong = evaluation.classification === 'WRONG';

  useEffect(() => {
    if (isCorrect) playCorrect();
    else if (isPartial) playPartial();
    else if (isWrong) playWrong();
  }, [evaluation.classification]);

  let badgeText = 'Incorrect Tool';
  let badgeColor = 'bg-rose-100 text-rose-800 border-rose-300';
  let Icon = XCircle;
  let bannerColor = 'border-rose-400 bg-rose-50/50';

  if (isCorrect) {
    badgeText = 'Correct Tool Selected (20/20 pts)';
    badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
    Icon = CheckCircle2;
    bannerColor = 'border-emerald-400 bg-emerald-50/50';
  } else if (isPartial) {
    badgeText = 'Partially Correct (12/20 pts)';
    badgeColor = 'bg-amber-100 text-amber-800 border-amber-300';
    Icon = AlertCircle;
    bannerColor = 'border-amber-400 bg-amber-50/50';
  }

  return (
    <div className={`border-2 rounded-2xl p-6 sm:p-7 space-y-5 ${bannerColor} transition-all shadow-sm`}>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            isCorrect ? 'bg-emerald-600 text-white' : isPartial ? 'bg-amber-500 text-white' : 'bg-rose-600 text-white'
          }`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-bold text-slate-900 text-base">Tool Selection Evaluation</h3>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${badgeColor}`}>
                {badgeText}
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Selected: <strong className="text-slate-900">{evaluation.tool_name || evaluation.tool_id}</strong>
            </p>
          </div>
        </div>

        <div className="text-right sm:self-center">
          <span className="text-2xl font-black text-slate-900">{evaluation.score}</span>
          <span className="text-xs text-slate-500 font-semibold"> / 20 pts</span>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-2">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Why this evaluation:</h4>
        <p className="text-sm text-slate-800 leading-relaxed">{evaluation.explanation}</p>
      </div>

      {!isCorrect && evaluation.recommendedTool && (
        <div className="bg-gov-900 text-white rounded-xl p-4 sm:p-5 space-y-2 shadow-sm">
          <div className="flex items-center space-x-2 text-accent-gold font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Recommended Optimal Tool</span>
          </div>
          <h4 className="text-base font-bold text-white">{evaluation.recommendedTool.name}</h4>
          <p className="text-xs text-slate-300 leading-relaxed">{evaluation.recommendedTool.why_recommended}</p>
        </div>
      )}

      <div className="flex justify-end pt-2">
        <button
          onClick={onProceedToGuide}
          className="flex items-center space-x-2 bg-gov-600 hover:bg-gov-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
        >
          <span>Proceed to Tool Setup & Practical Task</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
