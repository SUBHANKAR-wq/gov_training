import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Award, ShieldCheck, Sparkles, User, ArrowRight, CheckCircle2, BookOpen, Layers, Printer } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { CertificateCard, certificateConfigs } from '../components/certificate/CertificateCard';
import { modulesData } from '../data/modulesData';
import { scenariosData } from '../data/scenariosData';

export const CompletionPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCert = searchParams.get('cert') || 'final-capstone';
  const [activeCert, setActiveCert] = useState(initialCert);
  const { user, updateUserName, overallReadinessScore, completedScenarios, attempts } = useProgress();
  const [nameInput, setNameInput] = useState(user.name || 'Officer / Staff Member');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const certList = [
    { id: 'final-capstone', label: 'Master AI Smart Capstone', tag: 'Grand Certificate', icon: Award, scenariosCount: 25 },
    { id: 'module-1', label: 'Module 1: AI Fundamentals', tag: 'Module 1', icon: BookOpen, scenariosCount: 5 },
    { id: 'module-2', label: 'Module 2: Document AI Mastery', tag: 'Module 2', icon: Layers, scenariosCount: 5 },
    { id: 'module-3', label: 'Module 3: Data Intelligence', tag: 'Module 3', icon: Sparkles, scenariosCount: 5 },
    { id: 'module-4', label: 'Module 4: Presentations & Visuals', tag: 'Module 4', icon: Layers, scenariosCount: 5 },
    { id: 'module-5', label: 'Module 5: Communication & Odia', tag: 'Module 5', icon: BookOpen, scenariosCount: 5 }
  ];

  const handleSelectCert = (id) => {
    setActiveCert(id);
    setSearchParams({ cert: id });
  };

  const handleUpdateName = () => {
    if (nameInput.trim()) {
      updateUserName(nameInput.trim());
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2000);
    }
  };

  // Calculate live stats for the active certificate
  const getCertStats = (certId) => {
    if (certId === 'final-capstone') {
      const passedCount = completedScenarios.length;
      const avgScore = overallReadinessScore || 96;
      return {
        score: passedCount > 0 ? `${Math.round(avgScore * 5)}` : '500',
        scenariosPassed: `${passedCount} / 25`
      };
    } else {
      // Find module scenarios
      const modScenarios = scenariosData.filter(s => s.module_id === certId);
      const passedInMod = modScenarios.filter(s => completedScenarios.includes(s.id)).length;
      const modAttempts = attempts.filter(a => modScenarios.some(s => s.id === a.scenario_id));
      const totalModScore = modAttempts.reduce((acc, curr) => acc + (curr.total_score || 0), 0);
      const avgMod = modAttempts.length > 0 ? Math.round(totalModScore / modAttempts.length) : 98;
      
      return {
        score: `${avgMod} PTS`,
        scenariosPassed: `${passedInMod} / 5`
      };
    }
  };

  const currentStats = getCertStats(activeCert);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* 1. HEADER SECTION */}
      <div className="space-y-2 text-center max-w-3xl mx-auto no-print">
        <div className="inline-flex items-center space-x-2 bg-gov-100 text-gov-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
          <Award className="w-4 h-4 text-gov-600" />
          <span>Official Certification Hub • 6 Available Certificates</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900">
          AI Smart Training & Module Certificates
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Select any certificate below to customize recipient details and download or print in high-resolution PDF format. Issued by <strong>AIPNT Technologies Private Limited</strong>.
        </p>
      </div>

      {/* 2. RECIPIENT NAME CUSTOMIZATION BAR */}
      <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-2 no-print">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-800 flex items-center space-x-1.5">
            <User className="w-4 h-4 text-gov-600" />
            <span>Officer / Participant Name for Certificates:</span>
          </label>
          {savedSuccess && (
            <span className="text-[11px] font-bold text-emerald-600 flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Name Updated!</span>
            </span>
          )}
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="e.g. Shri Ramesh Chandra Mohanty, OAS"
            className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold focus:bg-white focus:ring-2 focus:ring-gov-500 outline-none"
          />
          <button
            onClick={handleUpdateName}
            className="px-5 py-2.5 bg-gov-600 hover:bg-gov-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all active:scale-95 shrink-0"
          >
            Apply to All
          </button>
        </div>
      </div>

      {/* 3. 6-CERTIFICATE SELECTOR CAROUSEL / GRID */}
      <div className="space-y-3 no-print">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Select Certificate to Preview & Download:
          </span>
          <span className="text-xs font-semibold text-gov-700">
            Active: {certificateConfigs[activeCert]?.title}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {certList.map((cert) => {
            const isActive = activeCert === cert.id;
            const Icon = cert.icon;
            return (
              <button
                key={cert.id}
                onClick={() => handleSelectCert(cert.id)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isActive
                    ? 'border-[#0f2756] bg-slate-900 text-white shadow-md ring-2 ring-gov-400'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-gov-500 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {cert.tag}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-accent-gold' : 'text-slate-400'}`} />
                  </div>
                  <h4 className="font-bold text-xs line-clamp-2 leading-tight">
                    {cert.label}
                  </h4>
                </div>
                <div className="pt-2 mt-2 border-t border-slate-700/20 text-[10px] opacity-80">
                  {cert.scenariosCount} Scenarios
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. ACTIVE CERTIFICATE CARD VIEWER */}
      <div className="pt-2">
        <CertificateCard
          certId={activeCert}
          userName={user.name || nameInput}
          userScore={currentStats.score}
          scenariosPassed={currentStats.scenariosPassed}
          date={new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        />
      </div>

    </div>
  );
};
