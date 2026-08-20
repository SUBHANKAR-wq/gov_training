import React from 'react';
import { Sparkles } from 'lucide-react';

export const OutputComparisonTable = ({ userOutput, idealOutput, breakdown }) => {
  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Submitted AI Output:</h4>
            <span className="text-[11px] text-slate-500 font-medium">
              {userOutput.trim().split(/\s+/).filter(Boolean).length} words
            </span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 text-xs font-sans text-slate-800 max-h-72 overflow-y-auto custom-scrollbar whitespace-pre-wrap leading-relaxed">
            {userOutput || '(No output provided)'}
          </div>
        </div>

        <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 sm:p-5 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Hardcoded Benchmark Output:</span>
            </h4>
            <span className="text-[11px] text-emerald-700 font-bold">Official Quality Standard</span>
          </div>
          <div className="bg-white p-4 rounded-lg border border-emerald-200 text-xs font-sans text-slate-900 max-h-72 overflow-y-auto custom-scrollbar whitespace-pre-wrap leading-relaxed font-normal">
            {idealOutput}
          </div>
        </div>
      </div>

      {breakdown && (
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
            Output Quality Dimension Breakdown:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {Object.entries(breakdown).map(([key, item]) => (
              <div key={key} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center space-y-1">
                <span className="block text-[11px] font-bold text-slate-700 truncate" title={item.name}>
                  {item.name}
                </span>
                <span className="text-lg font-black text-gov-700 block">
                  {item.score}<span className="text-xs text-slate-400 font-normal">/{item.max}</span>
                </span>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gov-600 h-full rounded-full"
                    style={{ width: `${(item.score / item.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
