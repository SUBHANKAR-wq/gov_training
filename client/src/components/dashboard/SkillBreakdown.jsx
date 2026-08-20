import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, FileText, Wrench } from 'lucide-react';

export const SkillBreakdown = ({ skills }) => {
  const list = [
    { key: 'tool_selection', name: '1. AI Tool Selection', score: skills?.tool_selection || 0, icon: Wrench, color: 'bg-blue-600' },
    { key: 'prompt_engineering', name: '2. Administrative Prompting', score: skills?.prompt_engineering || 0, icon: FileText, color: 'bg-gov-600' },
    { key: 'output_evaluation', name: '3. Output Verification', score: skills?.output_evaluation || 0, icon: CheckCircle2, color: 'bg-emerald-600' },
    { key: 'responsible_ai', name: '4. Responsible AI & Ethics', score: skills?.responsible_ai || 0, icon: ShieldCheck, color: 'bg-amber-500' }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-gov-600" />
          <span>Core AI Competencies</span>
        </h3>
        <span className="text-xs text-slate-500">Target: 80%+</span>
      </div>

      <div className="space-y-4">
        {list.map((skill) => {
          const Icon = skill.icon;
          return (
            <div key={skill.key} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 font-bold text-slate-800">
                  <Icon className="w-3.5 h-3.5 text-slate-500" />
                  <span>{skill.name}</span>
                </div>
                <span className="font-black text-slate-900">{skill.score}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div 
                  className={`${skill.color} h-full rounded-full transition-all duration-500`}
                  style={{ width: `${skill.score}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
