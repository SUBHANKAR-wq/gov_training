import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  BarChart3, 
  Presentation, 
  Users, 
  BookOpen, 
  Award,
  AlertTriangle,
  Play
} from 'lucide-react';
import { modulesData } from '../data/modulesData';
import { useProgress } from '../context/ProgressContext';

export const HomePage = () => {
  const { completedCount, totalScenarios, progressPercent, overallReadinessScore } = useProgress();

  const moduleIcons = [Sparkles, FileText, BarChart3, Presentation, Users];

  const workflowSteps = [
    { num: '1', title: 'Scenario Briefing', desc: 'Read authentic Administration Office task requirements' },
    { num: '2', title: 'Tool Selection', desc: 'Choose from 4 tools with instant audio & visual classification' },
    { num: '3', title: 'Setup & Practice', desc: 'Learn capabilities, copy realistic administrative test data' },
    { num: '4', title: 'Prompt & Execute', desc: 'Draft structured prompt and test with external AI tool' },
    { num: '5', title: 'Compare & Score', desc: 'Compare side-by-side with hardcoded benchmark outputs' },
    { num: '6', title: 'Improve & Retry', desc: 'Refine prompt, track point delta, and earn certified credentials' }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-navy-900 to-slate-900 text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        
        {/* Glow BG */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gov-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>AIPNT Technologies • AI Smart Workplace Simulator</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Become AI Smart <br />
            <span className="bg-gradient-to-r from-gov-400 via-gov-300 to-emerald-400 bg-clip-text text-transparent">
              Work Better / Serve Better
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            <strong>Learn AI. Choose the right tools. Work smarter. Serve better.</strong><br className="hidden sm:inline" />
            A practical workplace simulation platform to understand, prompt, and evaluate AI tools across 25 realistic administrative and governance scenarios.
          </p>

          {/* Quick CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/training"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gov-600 hover:bg-gov-500 text-white px-8 py-4 rounded-xl text-sm font-extrabold shadow-lg shadow-gov-600/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Launch Training Simulator</span>
            </Link>

            <Link
              to="/tools"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all"
            >
              <BookOpen className="w-4 h-4 text-slate-400" />
              <span>Explore AI Tools Library</span>
            </Link>
          </div>

          {/* Progress Bar Badge */}
          {completedCount > 0 && (
            <div className="pt-4 max-w-md mx-auto">
              <div className="bg-slate-800/90 border border-slate-700 p-3.5 rounded-xl text-xs flex items-center justify-between">
                <span className="text-slate-300 font-medium">Your Progress: {completedCount}/{totalScenarios} Scenarios</span>
                <span className="font-bold text-emerald-400">Readiness: {overallReadinessScore}%</span>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 6-Step Workflow Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-gov-600 uppercase tracking-widest">
            The Core Training Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Learn By Doing — Not Passive Reading
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Every administrative scenario guides you through the full cognitive loop required for real-world governance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {workflowSteps.map((s) => (
            <div key={s.num} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs hover:border-gov-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-lg bg-gov-100 text-gov-800 font-black text-xs flex items-center justify-center mb-3">
                  {s.num}
                </span>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">{s.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 Curriculum Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-gov-600 uppercase tracking-widest">
              Comprehensive Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              5 Modules • 25 Administrative Scenarios
            </h2>
          </div>
          <Link
            to="/training"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-gov-600 hover:text-gov-800"
          >
            <span>View All 25 Scenarios</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {modulesData.map((mod, idx) => {
            const Icon = moduleIcons[idx] || Sparkles;
            return (
              <div key={mod.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:border-gov-400 hover:shadow-md transition-all group">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-gov-50 text-gov-600 flex items-center justify-center group-hover:bg-gov-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Module {mod.order}</span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-gov-700 transition-colors line-clamp-2">
                      {mod.title.replace(/^Module \d+:\s*/, '')}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4">
                  <Link
                    to={`/training?module=${mod.id}`}
                    className="text-xs font-bold text-gov-600 hover:text-gov-800 flex items-center space-x-1"
                  >
                    <span>Start 5 Scenarios</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Human-in-the-loop Statutory Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Public Service Accountability Principle</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              AI Assists the Officer — The Officer Decides.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              In government administration, AI is a powerful assistant for first-draft composition, data interpretation, and report structuring. However, the civil servant remains legally responsible for all official actions, statutory orders, and public disbursements.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-200">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Hallucination Grounding</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Fact-Checking & Gazette Verification</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Data Privacy & Redaction</span>
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
