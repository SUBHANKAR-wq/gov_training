import React, { useRef } from 'react';
import { Award, Download, Printer, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const certificateConfigs = {
  'module-1': {
    id: 'module-1',
    type: 'MODULE_1',
    moduleNumber: 1,
    tagline: 'BUILD AN AI SMART / EFFICIENT OFFICE',
    title: 'CERTIFICATE OF AI AWARENESS & ADOPTION',
    subject: 'Module 1: Introduction to AI for Administration',
    description: 'has successfully undergone rigorous practical AI decision-making simulations in Administrative AI Foundations & Workflow Enablement, demonstrating competence in foundational LLM principles, 5-part prompt engineering, citation grounding in administrative SOPs, real-time web verification, and ethical AI boundaries.',
    defaultScore: '100 PTS',
    scenariosTotal: '5 / 5',
    rating: 'AI-AWARE',
    certCode: 'AIPNT-M1-AI-2026'
  },
  'module-2': {
    id: 'module-2',
    type: 'MODULE_2',
    moduleNumber: 2,
    tagline: 'BUILD AN AI SMART / ZERO-HALLUCINATION OFFICE',
    title: 'CERTIFICATE OF DOCUMENT AI MASTERY',
    subject: 'Module 2: AI for Government Documents',
    description: 'has successfully undergone rigorous practical document AI decision-making simulations in Official Document Synthesis & Drafting, demonstrating competence in long-form government order summarization, strict gazette timeline extraction, formal meeting notice creation, statutory order discrepancy audits, and multi-order legal comparisons.',
    defaultScore: '100 PTS',
    scenariosTotal: '5 / 5',
    rating: 'DOC-MASTER',
    certCode: 'AIPNT-M2-DOC-2026'
  },
  'module-3': {
    id: 'module-3',
    type: 'MODULE_3',
    moduleNumber: 3,
    tagline: 'BUILD AN AI SMART / DATA-DRIVEN OFFICE',
    title: 'CERTIFICATE OF ADMINISTRATIVE DATA INTELLIGENCE',
    subject: 'Module 3: AI for Administrative Data Analysis',
    description: 'has successfully undergone rigorous practical data AI decision-making simulations in Public Administration Data Analytics, demonstrating competence in revenue target vs collection auditing, citizen grievance mutation hotspot detection, development scheme physical vs financial trend synthesis, and block-level healthcare performance scorecards.',
    defaultScore: '100 PTS',
    scenariosTotal: '5 / 5',
    rating: 'DATA-ANALYST',
    certCode: 'AIPNT-M3-DAT-2026'
  },
  'module-4': {
    id: 'module-4',
    type: 'MODULE_4',
    moduleNumber: 4,
    tagline: 'BUILD AN AI SMART / VISUALLY COMPELLING OFFICE',
    title: 'CERTIFICATE OF EXECUTIVE PRESENTATIONS & VISUALS',
    subject: 'Module 4: AI for Presentations & Visuals',
    description: 'has successfully undergone rigorous practical visual AI decision-making simulations in Executive Presentations & Visual Communication, demonstrating competence in converting complex administrative reports into executive decks, rapid leadership review briefings, citizen scheme flowcharts, and public awareness concept visuals.',
    defaultScore: '100 PTS',
    scenariosTotal: '5 / 5',
    rating: 'VISUAL-LEAD',
    certCode: 'AIPNT-M4-VIS-2026'
  },
  'module-5': {
    id: 'module-5',
    type: 'MODULE_5',
    moduleNumber: 5,
    tagline: 'BUILD AN AI SMART / COLLABORATIVE OFFICE',
    title: 'CERTIFICATE OF ADMINISTRATIVE COMMUNICATION & ODIA',
    subject: 'Module 5: AI for Communication & Collaboration',
    description: 'has successfully undergone rigorous practical communication AI decision-making simulations in Inter-Departmental & Citizen Communication, demonstrating competence in formal inter-agency email directives, timed meeting agendas, numbered statutory proceedings synthesis, actionable accountability matrices, and accurate Odia citizen advisories.',
    defaultScore: '100 PTS',
    scenariosTotal: '5 / 5',
    rating: 'COMM-EXPERT',
    certCode: 'AIPNT-M5-COM-2026'
  },
  'final-capstone': {
    id: 'final-capstone',
    type: 'FINAL_CAPSTONE',
    moduleNumber: 'MASTER',
    tagline: 'BUILD AN AI SMART / HIGH-PERFORMANCE GOVERNANCE WORKPLACE',
    title: 'CERTIFICATE OF AI SMART MASTERY',
    subject: 'Master Capstone: Comprehensive 25-Scenario Practical Simulation',
    description: 'has successfully undergone rigorous practical AI decision-making simulations across All 5 Comprehensive Operational Tracks (AI Foundations, Document Intelligence, Data Analytics, Executive Visuals, and Regional Communications), demonstrating comprehensive mastery in prompt engineering, tool selection, zero-hallucination verification, and public accountability.',
    defaultScore: '500 PTS',
    scenariosTotal: '25 / 25',
    rating: 'AI-MASTER',
    certCode: 'AIPNT-MAST-2026'
  }
};

export const CertificateCard = ({ 
  certId = 'final-capstone',
  userName = 'Officer / Staff Member', 
  userScore = null, 
  scenariosPassed = null,
  date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}) => {
  const certRef = useRef();
  const config = certificateConfigs[certId] || certificateConfigs['final-capstone'];

  const displayScore = userScore ? `${userScore} PTS` : config.defaultScore;
  const displayScenarios = scenariosPassed ? `${scenariosPassed}` : config.scenariosTotal;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      
      {/* 1. PRINT-OPTIMIZED A4 CERTIFICATE CONTAINER */}
      <div 
        ref={certRef}
        id="printable-certificate"
        className="certificate-print-area bg-white border-[6px] sm:border-[10px] border-[#0f1d38] rounded-xl sm:rounded-2xl p-5 sm:p-10 shadow-2xl text-center relative overflow-hidden max-w-3xl sm:max-w-4xl mx-auto text-slate-900 flex flex-col justify-between"
        style={{
          boxShadow: '0 25px 50px -12px rgba(15, 29, 56, 0.25)',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
        }}
      >
        {/* Subtle Watermark BG */}
        <div className="absolute inset-0 opacity-[0.035] flex items-center justify-center pointer-events-none">
          <img src="/aipnt-logo.png" alt="" className="w-80 sm:w-[460px] object-contain" />
        </div>

        {/* Decorative Inner Thin Border */}
        <div className="absolute inset-2 sm:inset-3 border border-slate-300 rounded-lg pointer-events-none" />

        {/* Certificate Top Section */}
        <div>
          {/* Top AIPNT Logo */}
          <div className="flex justify-center mb-2.5 relative z-10">
            <div className="h-12 sm:h-16 w-12 sm:w-16 bg-white p-1 rounded-lg flex items-center justify-center border border-slate-200 shadow-xs">
              <img src="/aipnt-logo.png" alt="AIPNT Logo" className="h-full w-full object-contain" />
            </div>
          </div>

          {/* Tagline */}
          <div className="relative z-10 my-1">
            <p className="text-[9px] sm:text-xs font-bold text-slate-800 tracking-[0.2em] sm:tracking-[0.25em] uppercase">
              Become AI Smart • Work Better • Serve Better
            </p>
          </div>

          {/* Main Certificate Title */}
          <div className="relative z-10 my-2.5 sm:my-3.5">
            <h2 className="text-lg sm:text-3xl font-black text-[#0e2756] tracking-tight uppercase leading-tight font-serif">
              {config.title}
            </h2>
          </div>

          {/* "THIS IS TO CERTIFY THAT" */}
          <div className="relative z-10 my-1.5 sm:my-2.5">
            <p className="text-[9px] sm:text-xs font-semibold text-slate-500 tracking-[0.25em] uppercase">
              THIS IS TO CERTIFY THAT
            </p>
          </div>

          {/* Recipient Officer Name */}
          <div className="relative z-10 my-2 sm:my-3">
            <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight underline decoration-slate-900 decoration-2 underline-offset-8 font-sans">
              {userName || 'Officer / Staff Member'}
            </h1>
          </div>

          {/* Citation / Achievement Paragraph */}
          <div className="relative z-10 max-w-2xl mx-auto my-3 sm:my-4 px-2">
            <p className="text-[11px] sm:text-[13px] text-slate-700 leading-relaxed font-normal text-justify sm:text-center">
              {config.description}
            </p>
          </div>

          {/* 3-Box Metrics Row */}
          <div className="relative z-10 cert-metrics-grid grid grid-cols-3 gap-2 sm:gap-4 max-w-xl mx-auto my-3 sm:my-5">
            
            <div className="bg-[#f3f7fb] border border-slate-200/90 rounded-xl p-2 sm:p-3 shadow-2xs">
              <span className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                ASSESSMENT SCORE
              </span>
              <span className="text-xs sm:text-base font-black text-[#0f2348]">
                {displayScore}
              </span>
            </div>

            <div className="bg-[#f3f7fb] border border-slate-200/90 rounded-xl p-2 sm:p-3 shadow-2xs">
              <span className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                SCENARIOS PASSED
              </span>
              <span className="text-xs sm:text-base font-black text-[#0f2348]">
                {displayScenarios}
              </span>
            </div>

            <div className="bg-[#f3f7fb] border border-slate-200/90 rounded-xl p-2 sm:p-3 shadow-2xs">
              <span className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                AI RATING
              </span>
              <span className="text-[10px] sm:text-sm font-black text-[#b45309] uppercase tracking-wide">
                {config.rating}
              </span>
            </div>

          </div>
        </div>

        {/* Certificate Bottom Section: Verification Metadata, Circular Stamp & Trainer Signatory */}
        <div>
          <div className="relative z-10 pt-3 sm:pt-4 border-t border-slate-200 cert-bottom-grid grid grid-cols-1 sm:grid-cols-3 items-end gap-3 text-left">
            
            {/* Left: Issue Date, Program Credentials & Verification ID */}
            <div className="space-y-1 text-xs text-slate-700 pb-1">
              <div>
                <span className="font-bold text-slate-900 font-sans">Issue Date:</span> {date}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">
                AIPNT Certified AI Smart Program
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                CERT ID: {config.certCode || 'AIPNT-MAST-2026'}
              </div>
            </div>

            {/* Center: Circular Verified Seal */}
            <div className="flex justify-center my-1 sm:my-0">
              <div className="w-14 sm:w-18 h-14 sm:h-18 rounded-full border-2 border-dashed border-[#0f2a5c] bg-white flex flex-col items-center justify-center p-1 text-[#0f2a5c] shadow-xs rotate-[-6deg]">
                <span className="text-[6px] sm:text-[7px] font-black uppercase tracking-wider">AI SMART</span>
                <Award className="w-3.5 sm:w-4.5 h-3.5 sm:h-4.5 my-0.5 text-gov-600" />
                <span className="text-[5px] sm:text-[6px] font-bold uppercase tracking-widest text-slate-600">VERIFIED</span>
              </div>
            </div>

            {/* Right: Designated Trainer Signature Space */}
            <div className="text-center sm:text-right flex flex-col items-center sm:items-end justify-end">
              {/* Dedicated space for physical pen signature or seal */}
              <div className="h-10 sm:h-12 w-36 sm:w-44 flex items-end justify-center sm:justify-end pb-1 select-none">
                <span className="text-[8px] sm:text-[9px] text-slate-300 italic font-serif">
                  ( Trainer's Signature / Seal )
                </span>
              </div>
              <div className="w-36 sm:w-44 border-b-2 border-slate-800 mb-1"></div>
              <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 font-serif">
                Lead AI Trainer / Evaluator
              </h4>
              <p className="text-[9px] sm:text-[10px] font-semibold text-slate-600">
                Authorized Signatory & AI Lead
              </p>
              <p className="text-[8px] sm:text-[9px] font-medium text-slate-500">
                AIPNT Technologies Private Limited
              </p>
            </div>

          </div>

          {/* Disclaimer Note */}
          <div className="relative z-10 pt-2.5 mt-2.5 border-t border-slate-100 text-[8px] sm:text-[9px] text-slate-400 leading-normal">
            Disclaimer: This certificate confirms completion of practical AI Smart workplace simulations. All training scenarios are structured simulations. Issued by <strong>AIPNT Technologies Private Limited</strong>.
          </div>
        </div>

      </div>

      {/* 2. PRINT / EXPORT CONTROLS */}
      <div className="flex flex-col items-center justify-center gap-2 pt-2 no-print">
        <button
          onClick={handlePrint}
          className="flex items-center space-x-2 bg-[#0f1d38] hover:bg-[#1e345e] text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Save as PDF / Print Certificate (A4 Single Page)</span>
        </button>
        <p className="text-[11px] text-slate-500 text-center font-medium">
          Formatted for A4 Single-Page with designated space for Trainer's signature & seal.
        </p>
      </div>

    </div>
  );
};

