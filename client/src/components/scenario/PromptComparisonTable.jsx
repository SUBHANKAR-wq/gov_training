import React from 'react';
import { CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export const PromptComparisonTable = ({ userPrompt, idealPrompt, breakdown }) => {
  const criteriaList = [
    { key: 'role', label: 'Role / Persona', desc: 'Sets authority, rank & jurisdiction (e.g. Administrative Officer & Executive Magistrate)' },
    { key: 'context', label: 'Administrative Context', desc: 'Sets legal scheme, circular or government background' },
    { key: 'task', label: 'Specific Task', desc: 'Explicit action verb (draft, summarize, extract, analyze)' },
    { key: 'specifics', label: 'Specific Parameters', desc: 'Quantifiable limits, dates, plot numbers, financial caps' },
    { key: 'format', label: 'Output Structure', desc: 'Markdown table, numbered notice, executive brief' },
    { key: 'constraints', label: 'Constraints & Decorum', desc: 'Formal tone, judicial decorum, ex-parte notice' },
    { key: 'verification', label: 'Verification Guardrail', desc: 'Strict source grounding, zero hallucination' }
  ];

  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Drafted Prompt:</h4>
            <span className="text-[11px] text-slate-500 font-medium">
              {userPrompt.trim().split(/\s+/).filter(Boolean).length} words
            </span>
          </div>
          <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-xs font-mono text-slate-800 max-h-56 overflow-y-auto custom-scrollbar whitespace-pre-wrap leading-relaxed">
            {userPrompt || '(No prompt entered)'}
          </div>
        </div>

        <div className="bg-gov-50/70 border border-gov-200 rounded-xl p-4 sm:p-5 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-gov-900 uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gov-600" />
              <span>Hardcoded Ideal Reference Prompt:</span>
            </h4>
            <span className="text-[11px] text-gov-700 font-bold">Benchmark Standard</span>
          </div>
          <div className="bg-white p-3.5 rounded-lg border border-gov-200 text-xs font-mono text-slate-900 max-h-56 overflow-y-auto custom-scrollbar whitespace-pre-wrap leading-relaxed">
            {idealPrompt}
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
        <div className="bg-slate-900 text-white px-4 py-3 text-xs font-bold flex justify-between items-center">
          <span>Prompt Quality Evaluation Matrix (7 Dimensions)</span>
          <span className="text-slate-300 font-medium">Rule-Based Assessment</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-100 text-slate-700 uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-4 py-2.5">Prompt Element</th>
                <th className="px-4 py-2.5">Administrative Purpose</th>
                <th className="px-4 py-2.5 text-center">In Your Prompt?</th>
                <th className="px-4 py-2.5 text-right">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {criteriaList.map((crit) => {
                const item = breakdown ? breakdown[crit.key] : null;
                const isPresent = item ? item.present : false;
                const score = item ? item.score : 0;
                const max = item ? item.max : 15;

                return (
                  <tr key={crit.key} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-bold text-slate-900">{crit.label}</td>
                    <td className="px-4 py-3 text-slate-600">{crit.desc}</td>
                    <td className="px-4 py-3 text-center">
                      {isPresent ? (
                        <span className="inline-flex items-center space-x-1 text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold text-[11px]">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Present</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1 text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full font-medium text-[11px]">
                          <AlertCircle className="w-3 h-3 text-amber-500" />
                          <span>Omitted</span>
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-slate-900">{score}/{max}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
