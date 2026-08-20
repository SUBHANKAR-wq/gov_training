import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, AlertTriangle, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { toolsData } from '../../data/toolsData';

export const ToolGuideCard = ({ toolId, onProceedToPractice }) => {
  const tool = toolsData.find(t => t.id === toolId) || toolsData[0];
  const [activeTab, setActiveTab] = useState('guide');

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-gov-100 text-gov-800 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              {tool.category || 'AI Tool'}
            </span>
            <span className="text-xs text-slate-500 font-medium">Difficulty: {tool.difficulty || 'Beginner'}</span>
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 mt-1">{tool.name}</h3>
          <p className="text-xs text-slate-600 mt-0.5">{tool.tagline}</p>
        </div>

        <a
          href={tool.official_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-gov-900 hover:bg-gov-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm hover:shadow transition-all shrink-0 self-start sm:self-auto"
        >
          <span>Open Official {tool.name}</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
        </a>
      </div>

      <div className="flex border-b border-slate-200 space-x-4 text-xs font-bold">
        <button
          onClick={() => setActiveTab('guide')}
          className={`pb-2.5 transition-colors border-b-2 ${
            activeTab === 'guide' ? 'border-gov-600 text-gov-600' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Setup & How to Use (Step-by-Step)
        </button>
        <button
          onClick={() => setActiveTab('capabilities')}
          className={`pb-2.5 transition-colors border-b-2 ${
            activeTab === 'capabilities' ? 'border-gov-600 text-gov-600' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Administrative Capabilities & Examples
        </button>
        <button
          onClick={() => setActiveTab('rules')}
          className={`pb-2.5 transition-colors border-b-2 ${
            activeTab === 'rules' ? 'border-gov-600 text-gov-600' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Responsible AI Boundaries
        </button>
      </div>

      {activeTab === 'guide' && (
        <div className="space-y-4">
          <p className="text-xs text-slate-600">
            Follow these simple steps in your web browser to perform the real workplace simulation exercise:
          </p>
          <div className="space-y-3">
            {tool.setup_guide && tool.setup_guide.map((step) => (
              <div key={step.step} className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="w-6 h-6 rounded-full bg-gov-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {step.step}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{step.title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{step.instruction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'capabilities' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gov-600" />
              <span>Core Strengths</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {tool.capabilities && tool.capabilities.map((cap, i) => (
                <li key={i} className="flex items-start space-x-1.5">
                  <span className="text-gov-600 font-bold">•</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center space-x-1.5">
              <BookOpen className="w-3.5 h-3.5 text-gov-600" />
              <span>Government Use Cases</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {tool.government_examples && tool.government_examples.map((ex, i) => (
                <li key={i} className="flex items-start space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'rules' && (
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-3">
          <div className="flex items-center space-x-2 text-amber-900 font-bold text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Important Governance & Safety Precautions</span>
          </div>
          <ul className="space-y-2 text-xs text-amber-950">
            {tool.limitations && tool.limitations.map((lim, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>{lim}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-end pt-2">
        <button
          onClick={onProceedToPractice}
          className="flex items-center space-x-2 bg-gov-600 hover:bg-gov-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
        >
          <span>Proceed to Practice Input Material</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
