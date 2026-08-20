import React from 'react';
import { CheckCircle2, HelpCircle, BookOpen, FileText, Edit3, Send, GitCompare } from 'lucide-react';

export const ScenarioStepNav = ({ currentStep, onStepClick, maxStepReached = 1 }) => {
  const steps = [
    { id: 1, label: '1. Select Tool', short: 'Tool', icon: HelpCircle },
    { id: 2, label: '2. Tool Guide', short: 'Guide', icon: BookOpen },
    { id: 3, label: '3. Practice Input', short: 'Input', icon: FileText },
    { id: 4, label: '4. Write Prompt', short: 'Prompt', icon: Edit3 },
    { id: 5, label: '5. Submit Output', short: 'Output', icon: Send },
    { id: 6, label: '6. Compare & Score', short: 'Review', icon: GitCompare }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-3 sm:p-4 shadow-xs mb-6">
      <div className="flex items-center justify-between overflow-x-auto custom-scrollbar pb-1 sm:pb-0 gap-2">
        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isCompleted = step.id < currentStep || maxStepReached > step.id;
          const isAccessible = step.id <= maxStepReached;
          const Icon = step.icon;

          return (
            <button
              key={step.id}
              onClick={() => isAccessible && onStepClick(step.id)}
              disabled={!isAccessible}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-gov-600 text-white shadow-sm ring-2 ring-gov-200'
                  : isCompleted
                  ? 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                  : isAccessible
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  : 'bg-slate-50 text-slate-400 cursor-not-allowed opacity-60'
              }`}
            >
              {isCompleted && !isActive ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
              )}
              <span className="hidden sm:inline">{step.label}</span>
              <span className="sm:hidden">{step.short}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
