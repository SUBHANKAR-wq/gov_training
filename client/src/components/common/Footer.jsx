import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, AlertTriangle, Building, Award, CheckCircle2, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Human Verification Notice Callout */}
        <div className="mb-10 bg-slate-800/80 border border-slate-700 rounded-xl p-5 shadow-sm">
          <div className="flex items-start space-x-3.5">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm flex items-center space-x-2">
                <span>Statutory Human-in-the-Loop & Administrative Responsibility Mandate</span>
                <span className="bg-amber-500/20 text-amber-300 text-[10px] uppercase font-bold px-2 py-0.5 rounded">Crucial Rule</span>
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                AI assistants are tools for drafting, summarization, and cognitive productivity. In government public administration, 
                <strong> the human officer remains 100% legally and administratively accountable</strong> for all final decisions, orders, notices, and communications. Always cross-verify factual numbers, statutory clauses, gazette notifications, and names against authentic official office records before signing or issuing any document.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800 text-xs">
          
          {/* Col 1: Platform & Company */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-lg bg-white p-1 flex items-center justify-center">
                <img src="/aipnt-logo.png" alt="AIPNT Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="font-bold text-white text-sm block">Become AI Smart</span>
                <span className="text-slate-400 text-[10px]">Work Better / Serve Better</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              A specialized AI Smart simulation workshop designed for administrative teams and officers to build responsible, practical AI skills through realistic hands-on practice.
            </p>
            <div className="pt-1 text-[11px] text-slate-400">
              <p className="font-semibold text-slate-300">AIPNT Technologies Private Limited</p>
              <p className="text-slate-500">Government AI Competency Development</p>
            </div>
          </div>

          {/* Col 2: Training Modules */}
          <div>
            <h5 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              5 Training Modules
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/training" className="hover:text-gov-400 transition-colors">Module 1: Introduction to AI</Link></li>
              <li><Link to="/training" className="hover:text-gov-400 transition-colors">Module 2: AI for Documents</Link></li>
              <li><Link to="/training" className="hover:text-gov-400 transition-colors">Module 3: AI for Data Analysis</Link></li>
              <li><Link to="/training" className="hover:text-gov-400 transition-colors">Module 4: AI for Presentations & Visuals</Link></li>
              <li><Link to="/training" className="hover:text-gov-400 transition-colors">Module 5: AI for Communication & Odia</Link></li>
            </ul>
          </div>

          {/* Col 3: AI Tools Library */}
          <div>
            <h5 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Core AI Tools
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/tools" className="hover:text-gov-400 transition-colors">ChatGPT (OpenAI)</Link></li>
              <li><Link to="/tools" className="hover:text-gov-400 transition-colors">Gemini (Google)</Link></li>
              <li><Link to="/tools" className="hover:text-gov-400 transition-colors">Claude (Anthropic)</Link></li>
              <li><Link to="/tools" className="hover:text-gov-400 transition-colors">NotebookLM (Google)</Link></li>
              <li><Link to="/tools" className="hover:text-gov-400 transition-colors">Perplexity & Gamma</Link></li>
              <li><Link to="/tools" className="hover:text-gov-400 transition-colors">Canva AI & Adobe Firefly</Link></li>
            </ul>
          </div>

          {/* Col 4: Platform Navigation & Certification */}
          <div>
            <h5 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Quick Links & Certification
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/dashboard" className="hover:text-gov-400 transition-colors">Performance Dashboard</Link></li>
              <li><Link to="/assessment" className="hover:text-gov-400 transition-colors">Comprehensive Assessment</Link></li>
              <li><Link to="/completion" className="hover:text-gov-400 transition-colors">Certificate Generation</Link></li>
              <li><Link to="/help" className="hover:text-gov-400 transition-colors">Responsible AI Guidelines</Link></li>
              <li className="pt-2">
                <span className="inline-flex items-center space-x-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-1 rounded text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ISO 27001 Public Security Compliant</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 space-y-2 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} <strong>AIPNT Technologies Private Limited</strong>. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>AI Smart Workplace Enablement</span>
            <span>•</span>
            <Link to="/help" className="hover:text-slate-400">Privacy & Data Ethics</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
