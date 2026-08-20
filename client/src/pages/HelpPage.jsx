import React from 'react';
import { ShieldCheck, AlertTriangle, FileText, CheckCircle2, Lock, Eye, BookOpen } from 'lucide-react';

export const HelpPage = () => {
  const guidelines = [
    { title: '1. Human Accountability Rule', desc: 'The presiding officer / administrative staff is 100% legally accountable for all signed decisions. AI is strictly a cognitive writing assistant.' },
    { title: '2. Zero Confidentiality Breach', desc: 'Never upload classified cabinet notes, secret vigilance dockets, or unredacted citizen Aadhaar numbers to commercial AI clouds.' },
    { title: '3. Mandatory Fact-Checking', desc: 'Always verify statutory section numbers, revenue plot coordinates, dates, and financial figures against original physical records.' },
    { title: '4. Grounding & Zero Hallucination', desc: 'When querying complex orders, use grounded tools like NotebookLM or provide the exact text in prompt context.' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 bg-gov-100 text-gov-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Ethics, Governance & User Guide</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
          Responsible AI Guidelines for Public Administration
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Standard operating rules, data safety mandates, and prompt engineering cheat sheets for government officers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {guidelines.map((g, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{g.title}</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed pl-6">{g.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-accent-gold" />
          <span>5-Part Administrative Prompt Formula</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
            <strong className="text-gov-400 block mb-1">1. Role</strong>
            Administrative Officer & Executive Magistrate
          </div>
          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
            <strong className="text-gov-400 block mb-1">2. Context</strong>
            Disaster / Revenue SOP
          </div>
          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
            <strong className="text-gov-400 block mb-1">3. Task</strong>
            Action matrix extraction
          </div>
          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
            <strong className="text-gov-400 block mb-1">4. Format</strong>
            Markdown table & deadlines
          </div>
          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
            <strong className="text-gov-400 block mb-1">5. Guardrail</strong>
            Strict source citation
          </div>
        </div>
      </div>

    </div>
  );
};
