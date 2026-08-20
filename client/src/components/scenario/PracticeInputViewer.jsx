import React, { useState } from 'react';
import { Copy, Check, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export const PracticeInputViewer = ({ practiceInput, scenarioTask, onProceedToPrompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (practiceInput?.content) {
      navigator.clipboard.writeText(practiceInput.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <span className="bg-slate-100 text-slate-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Practice Document / Dataset
          </span>
          <h3 className="text-base font-bold text-slate-900 mt-1">
            {practiceInput?.title || 'Administrative Practice Input'}
          </h3>
        </div>

        <button
          onClick={handleCopy}
          className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 self-start sm:self-auto ${
            copied ? 'bg-emerald-600 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-300" />
              <span>Copy Practice Material</span>
            </>
          )}
        </button>
      </div>

      <div className="bg-gov-50 border border-gov-200 rounded-xl p-4">
        <h4 className="text-xs font-bold text-gov-900 uppercase tracking-wide mb-1">
          Your Administrative Objective:
        </h4>
        <p className="text-xs text-gov-800 leading-relaxed font-medium">
          {scenarioTask}
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
          <span>Realistic Fictional Office Material:</span>
          <span>Click Copy button above to paste into your AI tool</span>
        </div>
        <div className="bg-slate-900 text-slate-100 p-4 sm:p-5 rounded-xl font-mono text-xs leading-relaxed max-h-72 overflow-y-auto custom-scrollbar border border-slate-800 select-all">
          <pre className="whitespace-pre-wrap font-sans text-xs">
            {practiceInput?.content}
          </pre>
        </div>
      </div>

      <div className="flex items-center space-x-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Fictional administrative practice data. Safe to copy and paste into external AI tools for learning.</span>
      </div>

      <div className="flex justify-end pt-2">
        <button
          onClick={onProceedToPrompt}
          className="flex items-center space-x-2 bg-gov-600 hover:bg-gov-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
        >
          <span>Proceed to Prompt Drafting</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
