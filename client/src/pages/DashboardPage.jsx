import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, TrendingUp, Sparkles, BookOpen, RotateCcw } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { modulesData } from '../data/modulesData';
import { scenariosData } from '../data/scenariosData';
import { StatCards } from '../components/dashboard/StatCards';
import { SkillBreakdown } from '../components/dashboard/SkillBreakdown';

export const DashboardPage = () => {
  const { 
    user, 
    completedScenarios, 
    attempts, 
    totalScenarios, 
    completedCount, 
    progressPercent, 
    overallReadinessScore, 
    skillScores, 
    resetAllProgress 
  } = useProgress();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 bg-gov-100 text-gov-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Competency Analytics</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Officer Training Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            {user.name} • {user.department}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            to="/training"
            className="px-4 py-2.5 bg-gov-600 hover:bg-gov-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
          >
            Continue Training
          </Link>
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to reset all simulation progress?')) {
                resetAllProgress();
              }
            }}
            title="Reset simulation progress"
            className="p-2.5 bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-600 border border-slate-200 rounded-xl text-xs font-semibold transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* KPI Stat Cards */}
      <StatCards
        completedCount={completedCount}
        totalScenarios={totalScenarios}
        progressPercent={progressPercent}
        overallScore={overallReadinessScore}
        totalAttempts={attempts.length}
      />

      {/* 2-Column Skills & Module Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Col: Skill Breakdown */}
        <div className="lg:col-span-1">
          <SkillBreakdown skills={skillScores} />
        </div>

        {/* Right Col: 5 Modules Overview */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-gov-600" />
              <span>5 Curriculum Modules Progress</span>
            </h3>
            <span className="text-xs text-slate-500 font-semibold">{completedCount}/25 Completed</span>
          </div>

          <div className="space-y-3">
            {modulesData.map((mod) => {
              const modScenarios = scenariosData.filter(s => s.module_id === mod.id);
              const modCompleted = modScenarios.filter(s => completedScenarios.includes(s.id)).length;
              const modPercent = Math.round((modCompleted / modScenarios.length) * 100);

              return (
                <div key={mod.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-extrabold text-gov-800">Module {mod.order}</span>
                      <span className="text-xs font-bold text-slate-800">•</span>
                      <h4 className="text-xs font-bold text-slate-900">{mod.title.split(':')[1]?.trim()}</h4>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden max-w-md">
                      <div 
                        className="bg-gov-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${modPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <span className="text-xs font-bold text-slate-700">{modCompleted}/{modScenarios.length} Done</span>
                    {modCompleted === modScenarios.length && (
                      <Link
                        to={`/completion?cert=${mod.id}`}
                        className="inline-flex items-center space-x-1 px-2.5 py-1 bg-accent-gold/20 text-accent-gold-dark border border-accent-gold/40 rounded-lg text-xs font-extrabold hover:bg-accent-gold/30 transition-colors"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>Certificate</span>
                      </Link>
                    )}
                    <Link
                      to={`/training?module=${mod.id}`}
                      className="text-xs font-bold text-gov-600 hover:text-gov-800"
                    >
                      {modCompleted === modScenarios.length ? 'Review' : 'Continue'}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Recent Simulation History */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-gov-600" />
          <span>Recent Simulation Attempts</span>
        </h3>

        {attempts.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-xs">
            No simulations recorded yet. Start any scenario from the Training tab to generate analytics.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-600 uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-4 py-2.5">Scenario</th>
                  <th className="px-4 py-2.5">Tool Used</th>
                  <th className="px-4 py-2.5 text-center">Classification</th>
                  <th className="px-4 py-2.5 text-center">Score</th>
                  <th className="px-4 py-2.5 text-right">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {attempts.slice(-8).reverse().map((att) => {
                  const scen = scenariosData.find(s => s.id === att.scenario_id);
                  return (
                    <tr key={att.id} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {scen ? scen.title : att.scenario_id}
                      </td>
                      <td className="px-4 py-3 text-slate-600 uppercase font-mono text-[11px]">
                        {att.selected_tool}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          att.tool_classification === 'CORRECT' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {att.tool_classification}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center font-black text-slate-900">
                        {att.total_score}/100
                      </td>
                      <td className="px-4 py-3 text-right text-slate-400 text-[11px]">
                        {new Date(att.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};
