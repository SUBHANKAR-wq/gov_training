# Become AI Smart - Work Better / Serve Better

> **Tagline:** Learn AI. Choose the right tools. Work smarter. Serve better.  
> **Developed for:** AIPNT Technologies Private Limited  
> **Target Audience:** Sub-Collector Office Members, Executive Magistrates, and Government Administrative Staff

---

## 🌟 Overview & Philosophy

**Become AI Smart** is an interactive, practical AI workplace simulation and training platform. Rather than passive video lectures or multiple-choice quizzes, the platform follows an active **"Learn by Doing"** methodology:

$$\text{Understand AI} \longrightarrow \text{Select Tool} \longrightarrow \text{Learn Capabilities} \longrightarrow \text{Draft Prompt} \longrightarrow \text{Execute Tool} \longrightarrow \text{Compare Output} \longrightarrow \text{Improve & Retry}$$

---

## 🏛️ Comprehensive Curriculum (5 Modules • 25 Scenarios)

### Module 1: Introduction to AI for Administration
1. **Understanding a New Government Scheme** (MKKVY Policy Analysis) — *ChatGPT*
2. **Learning Prompt Writing** (5-Element Administrative Prompt Framework) — *ChatGPT*
3. **Asking Questions About a Government Document** (Disaster SOP Grounding) — *NotebookLM*
4. **Finding Current Information** (DILRMP & SVAMITVA Guidelines) — *Perplexity*
5. **General AI Assistance** (Drafting internal office circulars & memos) — *ChatGPT*

### Module 2: AI for Government Documents
6. **Summarizing a Government Order** (PDR Procedure Revision) — *NotebookLM*
7. **Extracting Dates and Action Points** (Special Summary Revision 2025 Matrix) — *ChatGPT*
8. **Drafting an Official Notice** (Paddy Procurement Review Meeting Notice) — *ChatGPT*
9. **Reviewing an Official Document** (Police Force Requisition for Eviction) — *Claude*
10. **Comparing Government Orders** (Land Alienation 2016 vs 2024 Guidelines) — *Claude*

### Module 3: AI for Administrative Data Analysis
11. **Revenue Data Analysis** (Tehsil-wise Q2 Land Revenue Recovery Rates) — *ChatGPT with Data Analysis*
12. **Grievance Patterns** (Public Grievance Clustering & Disposal Overdue) — *ChatGPT with Data Analysis*
13. **Development Trends** (12-Month Scheme Physical vs Financial Audit) — *ChatGPT with Data Analysis*
14. **Data-Driven Insights** (Multi-Block Welfare & Health Indicator Ranking) — *ChatGPT with Data Analysis*
15. **Review Meeting Data Analysis** (Executive Scorecard & Talking Points for Collector Review) — *ChatGPT with Data Analysis*

### Module 4: AI for Presentations & Visuals
16. **Report to Presentation** (8-Slide Executive Deck from 20-Page Report) — *Gamma*
17. **Review Meeting Briefing** (6-Slide Leadership Briefing Deck) — *Gamma*
18. **Infographic Creation** (4-Step Citizen Subsidy Application Flow) — *Canva AI*
19. **Process Diagram** (6-Stage Grievance Redressal Flowchart SOP) — *Canva AI*
20. **Custom Visuals & Illustrations** (Green & Digital Governance Artwork) — *Adobe Firefly*

### Module 5: AI for Communication & Collaboration
21. **Official Email to Department Heads** (Pre-Review Report Submission Call) — *ChatGPT*
22. **Meeting Agenda Structuring** (2-Hour Timed Multi-Department Agenda) — *ChatGPT*
23. **Synthesizing Formal Meeting Minutes** (Proceedings with Numbered Resolutions) — *Claude*
24. **Action-Item Summary Matrix** (Officer -> Task -> Deadline Matrix) — *ChatGPT*
25. **Citizen Communication in Odia** (Simplified English Notice & Natural Odia Script) — *Gemini*

---

## 🛠️ Technology Stack

- **Frontend:** React.js 18 (JavaScript ES6+), React Router v6, Tailwind CSS, Lucide React Icons.
- **Audio Feedback Engine:** Web Audio API sound synthesizer with multi-frequency chimes, alerts, and buzzers. Persistent ON/OFF audio toggle.
- **Backend:** Node.js, Express.js, Morgan logger, CORS.
- **Evaluation Service:** Modular `EvaluationService` architecture with rule-based `MockEvaluationService` scoring (0–100 pts) evaluating Tool Selection (20%), Prompt Quality (30%), Output Quality (30%), and Responsible AI Guardrails (20%).
- **Branding:** Official AIPNT Technologies Private Limited logo and seal.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### 1. Install Dependencies
```bash
# In Root directory
npm run install:all
```

### 2. Start Both Backend & Frontend Concurrently
```bash
npm run dev
```

- **Backend API:** `http://localhost:5000`
- **Frontend App:** `http://localhost:5173`

---

## 🔒 Responsible AI & Governance Standards

- **Human-in-the-Loop Principle:** AI assists the administrative officer; the officer remains 100% legally accountable for all signed decisions.
- **Data Confidentiality:** Strict guidelines against uploading classified cabinet dockets or citizen personal data.
- **Zero Hallucination Grounding:** Verification checklists for statutory sections, plot numbers, and financial allocations.

---

© 2026 AIPNT Technologies Private Limited. All rights reserved.
