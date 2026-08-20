import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SoundProvider } from './context/SoundContext';
import { ProgressProvider } from './context/ProgressContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { TrainingPage } from './pages/TrainingPage';
import { ScenarioSimulatorPage } from './pages/ScenarioSimulatorPage';
import { AIToolsPage } from './pages/AIToolsPage';
import { DashboardPage } from './pages/DashboardPage';
import { AssessmentPage } from './pages/AssessmentPage';
import { CompletionPage } from './pages/CompletionPage';
import { HelpPage } from './pages/HelpPage';

export const App = () => {
  return (
    <SoundProvider>
      <ProgressProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/training" element={<TrainingPage />} />
                <Route path="/scenario/:id" element={<ScenarioSimulatorPage />} />
                <Route path="/tools" element={<AIToolsPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/assessment" element={<AssessmentPage />} />
                <Route path="/completion" element={<CompletionPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ProgressProvider>
    </SoundProvider>
  );
};

export default App;
