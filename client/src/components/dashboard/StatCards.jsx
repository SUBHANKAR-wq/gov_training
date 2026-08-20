import React from 'react';
import { Award, CheckCircle2, TrendingUp, Sparkles, BookOpen } from 'lucide-react';

export const StatCards = ({ completedCount, totalScenarios, progressPercent, overallScore, totalAttempts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-center space-x-4">
        <div className="w-12 h-12 rounded-xl bg-gov-50 text-gov-600 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-500 block uppercase">Completed</span>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-black text-slate-900">{completedCount}</span>
            <span className="text-xs text-slate-400 font-semibold">/{totalScenarios} Scenarios</span>
          </div>
          <span className="text-[11px] text-gov-600 font-bold">{progressPercent}% Progress</span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-center space-x-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-500 block uppercase">AI Readiness</span>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-black text-slate-900">{overallScore}</span>
            <span className="text-xs text-slate-400 font-semibold">/100 Pts</span>
          </div>
          <span className="text-[11px] text-emerald-600 font-bold">
            {overallScore >= 80 ? 'Mastery Level' : overallScore >= 60 ? 'Competent' : 'In Progress'}
          </span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-center space-x-4">
        <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
          <BookOpen className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-500 block uppercase">Curriculum</span>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-black text-slate-900">5</span>
            <span className="text-xs text-slate-400 font-semibold">Modules</span>
          </div>
          <span className="text-[11px] text-indigo-600 font-bold">Administrative Officer Scope</span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-center space-x-4">
        <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
          <TrendingUp className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-500 block uppercase">Simulations Run</span>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-black text-slate-900">{totalAttempts}</span>
            <span className="text-xs text-slate-400 font-semibold">Attempts</span>
          </div>
          <span className="text-[11px] text-amber-600 font-bold">Learn by Doing</span>
        </div>
      </div>

    </div>
  );
};
