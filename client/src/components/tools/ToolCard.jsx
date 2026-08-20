import React from 'react';
import { ExternalLink, CheckCircle2, AlertTriangle, Sparkles, BookOpen } from 'lucide-react';

export const ToolCard = ({ tool, onOpenSetup }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5 group hover:border-gov-300">
      
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="bg-gov-50 text-gov-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              {tool.category}
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-gov-700 transition-colors">
              {tool.name}
            </h3>
          </div>
          <a
            href={tool.official_url}
            target="_blank"
            rel="noopener noreferrer"
            title="Open official tool"
            className="p-2 rounded-lg bg-slate-100 hover:bg-gov-100 text-slate-600 hover:text-gov-700 transition-colors shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          {tool.description}
        </p>

        <div className="space-y-2 pt-2 border-t border-slate-100">
          <h4 className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-gov-600" />
            <span>Best For Administration Office:</span>
          </h4>
          <ul className="space-y-1 text-xs text-slate-600">
            {tool.best_use_cases && tool.best_use_cases.slice(0, 2).map((useCase, idx) => (
              <li key={idx} className="flex items-start space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-2">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={() => onOpenSetup(tool)}
          className="text-xs font-bold text-gov-600 hover:text-gov-800 flex items-center space-x-1"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>View Setup Guide</span>
        </button>

        <a
          href={tool.official_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center space-x-1"
        >
          <span>Launch Tool</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

    </div>
  );
};
