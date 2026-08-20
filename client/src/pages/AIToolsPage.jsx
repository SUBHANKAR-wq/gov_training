import React, { useState } from 'react';
import { Search, Sparkles, BookOpen, ExternalLink, ShieldCheck, X } from 'lucide-react';
import { toolsData } from '../data/toolsData';
import { ToolCard } from '../components/tools/ToolCard';

export const AIToolsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalTool, setActiveModalTool] = useState(null);

  const categories = ['All', 'General AI & Drafting', 'Data Analytics & Statistics', 'Multilingual & Multimodal AI', 'Document Analysis & Polishing', 'Grounded Document Research', 'Information Retrieval & Search', 'Presentations & Visual Briefings', 'Infographics & Visual Design', 'Generative Imagery & Illustrations'];

  const filteredTools = toolsData.filter(tool => {
    const matchesCat = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 bg-gov-100 text-gov-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Government AI Competency Directory</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900">
          Curated AI Tools for Public Administration
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
          Detailed breakdown of all 9 core AI technologies: setup guides, capabilities, realistic government use cases, official links, and administrative safety boundaries.
        </p>
      </div>

      {/* Filter / Search Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
        
        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto custom-scrollbar pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-gov-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
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
            placeholder="Search AI tool by name, strength, or capability..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:bg-white focus:ring-2 focus:ring-gov-500 focus:border-gov-500 outline-none"
          />
        </div>

      </div>

      {/* Tools Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            onOpenSetup={(t) => setActiveModalTool(t)}
          />
        ))}
      </div>

      {/* Setup Guide Modal */}
      {activeModalTool && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl relative">
            
            <button
              onClick={() => setActiveModalTool(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="bg-gov-100 text-gov-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                {activeModalTool.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900">{activeModalTool.name} Setup Guide</h3>
              <p className="text-xs text-slate-500">{activeModalTool.tagline}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Step-by-Step Instructions:
              </h4>
              {activeModalTool.setup_guide && activeModalTool.setup_guide.map((step) => (
                <div key={step.step} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="w-6 h-6 rounded-full bg-gov-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {step.step}
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">{step.title}</h5>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{step.instruction}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setActiveModalTool(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <a
                href={activeModalTool.official_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-gov-600 hover:bg-gov-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm"
              >
                <span>Launch {activeModalTool.name}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
