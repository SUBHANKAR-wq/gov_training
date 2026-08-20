import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export const ToolSelector = ({ options, selectedToolId, onSelect, onSubmit, isSubmitted }) => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
        <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-gov-600" />
          <span>Step 1: Choose the Right AI Tool for this Scenario</span>
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          Carefully review the scenario requirements. Consider whether the task involves general text drafting, zero-hallucination document citations, statistical data crunching, visual layout creation, or regional language translation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option, idx) => {
          const letter = String.fromCharCode(65 + idx);
          const isSelected = selectedToolId === option.tool_id;

          return (
            <div
              key={option.tool_id}
              onClick={() => !isSubmitted && onSelect(option.tool_id)}
              className={`relative flex items-start space-x-3.5 p-4 sm:p-5 rounded-xl border-2 cursor-pointer transition-all ${
                isSelected
                  ? 'border-gov-600 bg-gov-50/70 shadow-md ring-2 ring-gov-200'
                  : 'border-slate-200 bg-white hover:border-gov-300 hover:bg-slate-50 shadow-xs'
              } ${isSubmitted ? 'cursor-default' : ''}`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                isSelected
                  ? 'bg-gov-600 text-white'
                  : 'bg-slate-100 text-slate-700'
              }`}>
                {letter}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {option.tool_name}
                  </h4>
                  {isSelected && (
                    <span className="w-5 h-5 rounded-full bg-gov-600 text-white flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-1 font-semibold">
                  Option {letter}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {!isSubmitted && (
        <div className="flex justify-end pt-2">
          <button
            onClick={onSubmit}
            disabled={!selectedToolId}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold text-white shadow-md transition-all ${
              selectedToolId
                ? 'bg-gov-600 hover:bg-gov-700 hover:shadow-lg scale-100 active:scale-95'
                : 'bg-slate-300 cursor-not-allowed opacity-70'
            }`}
          >
            <span>Lock In Selection & Verify</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
