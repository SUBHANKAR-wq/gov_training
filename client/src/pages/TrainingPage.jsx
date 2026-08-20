import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Search, 
  Filter, 
  FileText, 
  BarChart3, 
  Presentation, 
  Users,
  Play
} from 'lucide-react';
import { modulesData } from '../data/modulesData';
import { scenariosData } from '../data/scenariosData';
import { useProgress } from '../context/ProgressContext';

export const TrainingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeModuleFilter = searchParams.get('module') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const { completedScenarios, attempts } = useProgress();

  const handleModuleChange = (modId) => {
    if (modId === 'all') {
      searchParams.delete('module');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ module: modId });
    }
  };

  const filteredScenarios = scenariosData.filter((scen) => {
    const matchesMod = activeModuleFilter === 'all' || scen.module_id === activeModuleFilter;
    const matchesSearch = 
      scen.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scen.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scen.administrative_context.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMod && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 bg-gov-100 text-gov-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Workplace Simulation Laboratory</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900">
          AI Smart Training Scenarios
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
          Select any of the 25 practical scenarios below. Each scenario represents a realistic administrative challenge requiring tool selection, prompt writing, and output verification.
        </p>
      </div>

      {/* Filters & Search Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
        
        {/* Module Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto custom-scrollbar pb-2 sm:pb-0">
          <button
            onClick={() => handleModuleChange('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeModuleFilter === 'all'
                ? 'bg-gov-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All 25 Scenarios
          </button>
          {modulesData.map((mod) => (
            <button
              key={mod.id}
              onClick={() => handleModuleChange(mod.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeModuleFilter === mod.id
                  ? 'bg-gov-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Module {mod.order} ({mod.title.split(':')[1]?.trim().slice(0, 20)}...)
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by scenario name, administrative context, or keyword..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:bg-white focus:ring-2 focus:ring-gov-500 focus:border-gov-500 outline-none"
          />
        </div>

      </div>

      {/* Scenarios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredScenarios.map((scen) => {
          const isCompleted = completedScenarios.includes(scen.id);
          const pastAttempts = attempts.filter(a => a.scenario_id === scen.id);
          const latestScore = pastAttempts.length > 0 ? pastAttempts[pastAttempts.length - 1].total_score : null;

          return (
            <div
              key={scen.id}
              className={`bg-white border rounded-2xl p-5 shadow-xs flex flex-col justify-between transition-all hover:shadow-md ${
                isCompleted ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200 hover:border-gov-300'
              }`}
            >
              <div className="space-y-3">
                
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Scenario #{scen.scenario_number}
                  </span>
                  
                  {isCompleted ? (
                    <span className="inline-flex items-center space-x-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{latestScore ? `${latestScore}/100 pts` : 'Completed'}</span>
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">Not Started</span>
                  )}
                </div>

                {/* Title & Context */}
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">
                    {scen.title}
                  </h3>
                  <p className="text-[11px] text-gov-700 font-semibold mt-0.5">
                    {scen.administrative_context}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {scen.description}
                </p>

              </div>

              {/* Bottom Action Button */}
              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  {scen.options.length} Tool Options
                </span>
                <Link
                  to={`/scenario/${scen.id}`}
                  className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isCompleted
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      : 'bg-gov-600 hover:bg-gov-700 text-white shadow-sm'
                  }`}
                >
                  <span>{isCompleted ? 'Retry / Review' : 'Start Simulation'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
