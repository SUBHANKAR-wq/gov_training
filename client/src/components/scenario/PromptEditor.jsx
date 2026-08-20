import React from 'react';
import { Edit3, ArrowRight, Sparkles } from 'lucide-react';

export const PromptEditor = ({ prompt, setPrompt, onProceedToOutput, recommendedToolName }) => {
  const wordCount = prompt.trim() ? prompt.trim().split(/\s+/).length : 0;
  const charCount = prompt.length;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-6">
      
      <div className="space-y-3">
        <span className="bg-gov-100 text-gov-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Step 4: Prompt Engineering
        </span>
        <h3 className="text-xl font-extrabold text-slate-900">
          Draft Your Administrative Prompt
        </h3>
        
        {/* Eye-catching, Bold Pop Banner for Core Prompt Instruction */}
        <div className="p-3.5 sm:p-4 bg-gradient-to-r from-amber-50 via-amber-100/60 to-blue-50/70 border-2 border-amber-400 rounded-xl shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded-md">
              MANDATORY INSTRUCTION
            </span>
            <p className="text-sm sm:text-base font-black text-slate-950 leading-snug">
              Write the exact prompt you will give to <span className="text-gov-800 font-black underline decoration-amber-500 decoration-2">{recommendedToolName || 'the AI tool'}</span> to accomplish the task.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[11px] font-semibold">
        <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700">
          <span className="block text-gov-600 font-bold">1. Role</span>
          Administrative Officer / SDM
        </div>
        <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700">
          <span className="block text-gov-600 font-bold">2. Context</span>
          Order / Tehsil Data
        </div>
        <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700">
          <span className="block text-gov-600 font-bold">3. Specific Task</span>
          Extract / Draft / Analyze
        </div>
        <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700">
          <span className="block text-gov-600 font-bold">4. Format</span>
          Table / Notice / Bullets
        </div>
        <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 col-span-2 sm:col-span-1">
          <span className="block text-gov-600 font-bold">5. Guardrails</span>
          Verify & No Assumptions
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs text-slate-500 font-medium px-1">
          <label htmlFor="prompt-input" className="font-semibold text-slate-700">
            Your Prompt Instructions:
          </label>
          <span>{wordCount} words | {charCount} chars</span>
        </div>
        <textarea
          id="prompt-input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={7}
          placeholder="e.g. You are assisting the Administrative Officer & Executive Magistrate. Analyze the attached government notification and provide a structured briefing note containing..."
          className="w-full p-4 text-xs font-mono sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-gov-500 focus:border-gov-500 transition-all outline-none leading-relaxed"
        />
      </div>

      <div className="flex items-start space-x-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
        <Sparkles className="w-4 h-4 text-gov-600 shrink-0 mt-0.5" />
        <span>
          <strong>Pro-Tip:</strong> Copy this prompt, open <strong>{recommendedToolName || 'your AI tool'}</strong>, paste the prompt together with the practice text, and copy the generated output for the next step.
        </span>
      </div>

      <div className="flex justify-end pt-2">
        <button
          onClick={onProceedToOutput}
          disabled={!prompt.trim()}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold text-white shadow-md transition-all ${
            prompt.trim()
              ? 'bg-gov-600 hover:bg-gov-700 hover:shadow-lg scale-100 active:scale-95'
              : 'bg-slate-300 cursor-not-allowed opacity-70'
          }`}
        >
          <span>Proceed to Tool Execution & Output</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
