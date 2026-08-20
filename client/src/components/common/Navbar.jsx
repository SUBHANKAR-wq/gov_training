import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  BookOpen, 
  Wrench, 
  BarChart2, 
  Award, 
  HelpCircle, 
  Volume2, 
  VolumeX, 
  Menu, 
  X,
  CheckCircle2,
  Home,
  ShieldCheck
} from 'lucide-react';
import { useSound } from '../../context/SoundContext';
import { useProgress } from '../../context/ProgressContext';

export const Navbar = () => {
  const location = useLocation();
  const { soundEnabled, toggleSound } = useSound();
  const { progressPercent, completedCount, totalScenarios, overallReadinessScore } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Training Modules', short: 'Training', path: '/training', icon: BookOpen, badge: '25' },
    { name: 'AI Tools', short: 'AI Tools', path: '/tools', icon: Wrench },
    { name: 'Assessment', short: 'Assessment', path: '/assessment', icon: Sparkles },
    { name: 'Certificates', short: 'Certificates', path: '/completion', icon: Award, badge: '6' },
    { name: 'Dashboard', short: 'Dashboard', path: '/dashboard', icon: BarChart2 },
    { name: 'Help & Safety', short: 'Help', path: '/help', icon: ShieldCheck }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/90 shadow-xs">
      
      {/* 1. TOP ANNOUNCEMENT & BRANDING STRIP */}
      <div className="bg-slate-900 text-slate-300 text-xs px-4 sm:px-6 lg:px-8 py-1.5 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 text-slate-200 font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-white">AI Smart Simulator</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-[11px]">
          <div className="hidden md:flex items-center space-x-1 text-slate-300">
            <span className="text-slate-400">Developed for</span>
            <strong className="text-white font-semibold">AIPNT Technologies Private Limited</strong>
          </div>
          <div className="flex items-center space-x-2 bg-slate-800/90 px-2.5 py-0.5 rounded-full border border-slate-700 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-bold text-white">{completedCount}/{totalScenarios}</span>
            <span className="text-slate-400 text-[10px]">({progressPercent}%)</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN ORGANIZED NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* LEFT: BRAND IDENTITY */}
          <Link to="/" className="flex items-center space-x-3 shrink-0 group">
            <div className="h-10 w-10 rounded-xl bg-white p-1 flex items-center justify-center border border-slate-200 shadow-sm group-hover:border-gov-500 transition-colors">
              <img 
                src="/aipnt-logo.png" 
                alt="AIPNT Technologies Logo" 
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/40x40?text=AIPNT';
                }}
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-none group-hover:text-gov-700 transition-colors">
                  Become AI Smart
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-none">
                Work Better • Serve Better
              </p>
            </div>
          </Link>

          {/* CENTER: SEGMENTED NAV PILLS (CLEAN & BALANCED) */}
          <nav className="hidden xl:flex items-center bg-slate-100/80 p-1 rounded-xl border border-slate-200/80 shadow-inner">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    active
                      ? 'bg-white text-gov-700 shadow-xs ring-1 ring-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-gov-600' : 'text-slate-400'}`} />
                  <span>{link.short || link.name}</span>
                  {link.badge && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      active ? 'bg-gov-100 text-gov-800' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: CONTROL CLUSTER (AUDIO, SCORE & MOBILE) */}
          <div className="flex items-center space-x-2.5 shrink-0">
            
            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Sound ON (Click to Mute)' : 'Sound MUTED (Click to Enable)'}
              aria-label="Toggle Sound"
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                soundEnabled
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100 shadow-xs'
                  : 'bg-slate-100 border-slate-200 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-600" />
                  <span className="hidden sm:inline">Audio ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-400" />
                  <span className="hidden sm:inline">Muted</span>
                </>
              )}
            </button>

            {/* Officer Readiness Score Badge */}
            <Link
              to="/dashboard"
              title="View your AI Competency Dashboard"
              className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-sm transition-all border border-slate-700 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-gold group-hover:rotate-12 transition-transform" />
              <span>Readiness:</span>
              <span className="text-accent-gold font-extrabold">{overallReadinessScore}%</span>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* 3. SLIM PROGRESS LINE */}
      <div className="w-full bg-slate-100 h-0.5">
        <div 
          className="bg-gradient-to-r from-gov-600 via-gov-500 to-emerald-500 h-0.5 transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 4. MOBILE / COMPACT TABLET MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in fade-in duration-200">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                  active
                    ? 'bg-gov-50 text-gov-700 font-extrabold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  {Icon && <Icon className={`w-4 h-4 ${active ? 'text-gov-600' : 'text-slate-400'}`} />}
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className="bg-slate-200 text-slate-700 text-[10px] px-2 py-0.5 rounded-full font-bold">
                    {link.badge} Scenarios
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 px-1">
            <span>Progress: {progressPercent}% ({completedCount}/25 Completed)</span>
            <span className="font-semibold text-slate-700">AIPNT Technologies</span>
          </div>
        </div>
      )}

    </header>
  );
};
