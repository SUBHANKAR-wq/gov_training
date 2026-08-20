export const scenariosData = [
  {
    "id": "scenario-1",
    "module_id": "module-1",
    "scenario_number": 1,
    "title": "Understanding a New Government Scheme",
    "description": "A new government scheme \"Mukhyamantri Krushi Vikash Yojana (MKKVY)\" has been announced. The Administrative Officer's office needs to quickly understand its objectives, eligibility criteria, implementation process and important provisions before briefing field officers.",
    "administrative_context": "Sub-Divisional Revenue & Agriculture Administration",
    "task": "You need an AI assistant to explain the core objectives, beneficiary criteria, and field responsibilities under the new scheme from the policy overview.",
    "options": [
      {
        "tool_id": "chatgpt",
        "tool_name": "ChatGPT",
        "classification": "CORRECT",
        "explanation": "ChatGPT is ideal for breaking down new concepts, explaining administrative schemes into structured headings, and drafting briefing points for field officers."
      },
      {
        "tool_id": "claude",
        "tool_name": "Claude",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Claude can explain the scheme very well, but ChatGPT offers the most direct conversational breakdown and prompt learning flexibility for initial scheme comprehension."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a graphic design tool meant for posters and visual layouts, not for conceptual analysis of government policy text."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly is an image generation AI and cannot read or explain government schemes."
      }
    ],
    "recommended_tool": {
      "id": "chatgpt",
      "name": "ChatGPT",
      "why_recommended": "ChatGPT excels at synthesizing complex policy announcements into structured, bulleted briefings tailored for administrative officers."
    },
    "practice_input": {
      "type": "scheme_announcement",
      "title": "State Agriculture & Farmer Empowerment Dept - Notification No. AGR-2024-884",
      "content": "GOVERNMENT NOTIFICATION - MUKHYAMANTRI KRUSHI VIKASH YOJANA (MKKVY) 2024-25\n1. Preamble: Enhance farm productivity in rainfed areas; provide input subsidies to marginal farmers.\n2. Scheme Objectives:\n   (a) Direct financial assistance of Rs 10,000/year in two equal tranches of Rs 5,000 for verified landholding up to 2 hectares.\n   (b) 75% subsidy on micro-irrigation pump sets for registered farmer groups (SHGs/FPOs).\n3. Eligibility Criteria:\n   - Resident small and marginal farmers with updated RoR (Record of Rights).\n   - Tenant farmers registered under Krushak Portal with valid Tahsildar certification.\n   - Exclusion: Institutional landholders and income taxpayers.\n4. Implementation Timelines:\n   - Citizen registration portal opens: 1st October 2024.\n   - Field verification by VAWs & RIs: by 15th November 2024.\n   - First tranche disbursement: 1st December 2024.\n5. Administration Office Role:\n   - Administrative Officer chairs the Sub-Divisional Verification & Grievance Redressal Committee.\n   - Random super-check of 5% beneficiary verifications across all Tehsils within 15 days."
    },
    "ideal_prompt": "You are assisting a Administrative Officer's office. Analyze the attached government notification for \"Mukhyamantri Krushi Vikash Yojana (MKKVY) 2024-25\" and provide a structured administrative briefing note containing: (1) Core Objectives, (2) Beneficiary Eligibility & Exclusions, (3) Key Implementation Deadlines, (4) Specific Administrative Officer Responsibilities and 5% Super-Check mandate, and (5) Action Items for Field Officers (Tahsildars, RIs, VAWs). Maintain a formal, factual tone. Do not add assumptions not present in the text.",
    "ideal_output": "BRIEFING NOTE: MUKHYAMANTRI KRUSHI VIKASH YOJANA (MKKVY) 2024-25\nFor: Administrative Officer & Sub-Divisional Administrative Officers\n\n1. CORE OBJECTIVES:\n- Enhance agricultural productivity in rainfed sub-divisions.\n- Direct financial aid of Rs 10,000/year (two equal tranches of Rs 5,000) to small/marginal farmers (<= 2 ha).\n- 75% subsidy on micro-irrigation pump sets for SHGs/FPOs.\n\n2. ELIGIBILITY & EXCLUSIONS:\n- Eligible: Resident small/marginal farmers with updated RoR; tenant farmers certified by Tahsildar via Krushak Portal.\n- Excluded: Institutional landholders and income tax-paying individuals.\n\n3. KEY IMPLEMENTATION DEADLINES:\n- Portal Registration: Starts 1st October 2024\n- Field Verification (VAWs & RIs): By 15th November 2024\n- First Tranche Disbursement: 1st December 2024\n\n4. Administration Office RESPONSIBILITIES:\n- Preside as Chairperson of Sub-Divisional Verification & Grievance Redressal Committee.\n- Conduct mandatory 5% random super-check of verified beneficiary records across all Tehsils within 15 days.\n\n5. IMMEDIATE FIELD ACTION ITEMS:\n- Instruct Tahsildars to notify Revenue Inspectors (RIs) regarding tenant verification protocols.\n- Coordinate with Block Agriculture Officers (BAOs) for VAW mobilization before portal launch.",
    "evaluation_criteria": [
      "Clarity of role definition (Administration Office)",
      "Structured categorization",
      "Inclusion of specific verification deadlines and super-check mandate",
      "Responsible AI verification note"
    ],
    "improvement_suggestions": [
      "Specify the exact output format (e.g. bulleted briefing note for officers)",
      "Include constraints against assuming unauthorized subsidies or budget totals",
      "Ask the AI to extract action points categorized by officer role"
    ]
  },
  {
    "id": "scenario-2",
    "module_id": "module-1",
    "scenario_number": 2,
    "title": "Learning Prompt Writing",
    "description": "An office employee wants to learn how to give AI clear instructions so that it generates better drafts, summaries and administrative responses without vague or repetitive text.",
    "administrative_context": "General Office Administration & Capability Building",
    "task": "Select the best tool to practice structuring administrative prompts with Role, Context, Task, Constraints, and Output Format.",
    "options": [
      {
        "tool_id": "chatgpt",
        "tool_name": "ChatGPT",
        "classification": "CORRECT",
        "explanation": "ChatGPT is the gold standard for learning conversational prompt engineering and testing prompt iterations interactively."
      },
      {
        "tool_id": "gemini",
        "tool_name": "Gemini",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Gemini understands prompts well, but ChatGPT provides superior step-by-step meta-prompting feedback and role-play refinement."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a graphic design tool and cannot evaluate or teach prompt engineering text frameworks."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly is an image generator and does not provide prompt tutoring for office text."
      }
    ],
    "recommended_tool": {
      "id": "chatgpt",
      "name": "ChatGPT",
      "why_recommended": "ChatGPT allows interactive prompt iteration, demonstrating how constraints and personas dramatically improve administrative outputs."
    },
    "practice_input": {
      "type": "administrative_exercise",
      "title": "Administrative Prompt Formulation Exercise",
      "content": "Vague Prompt Example: \"Write an order about village land encroachment.\"\nRequired Components:\n1. Role: Executive Magistrate / Administrative Officer\n2. Context: Notice under Odisha Prevention of Land Encroachment Act for Govt Plot No. 412\n3. Task: Formal Show-Cause Notice to unauthorized occupant\n4. Specific Data: Village Rampur, Plot No. 412, Area 0.35 Acres, Hearing: 28th October 2024 at 11:00 AM\n5. Constraints: Use formal legal tone, cite Section 7 notice period, mandate personal appearance or authorized representative."
    },
    "ideal_prompt": "You are acting as an expert Government Prompt Engineering Trainer. Show me the difference between a poor administrative prompt and a high-quality administrative prompt for drafting a formal Show-Cause Notice regarding village land encroachment. Break down the high-quality prompt into the 5 core elements: (1) Role, (2) Context, (3) Specific Task, (4) Constraints, and (5) Expected Format. Then generate the resulting formal notice based on the high-quality prompt.",
    "ideal_output": "PROMPT ENGINEERING BREAKDOWN FOR GOVERNMENT OFFICIALS:\n\n1. POOR PROMPT:\n\"Write an order about village land encroachment.\"\n-> Why it fails: Lacks jurisdiction, plot details, statutory references, hearing dates, and formal structure.\n\n2. MASTER ADMINISTRATIVE PROMPT:\n\"You are the Administrative Officer & Sub-Divisional Magistrate. Draft a formal Show-Cause Notice under Section 7 of the Prevention of Land Encroachment Act addressed to Sri Ramesh Jena regarding unauthorized occupation of Government Khata Plot No. 412 (Area: 0.35 Acres) in Village Rampur.\nMandate that the encroacher appear in person or through an authorized representative on 28th October 2024 at 11:00 AM at the Administrative Officer Court Room, Chandbali, to show cause why eviction orders should not be passed.\nConstraints: Maintain strict judicial decorum, include case number placeholder, and specify consequence of non-appearance (ex-parte proceedings).\"\n\n3. THE 5 CORE ELEMENTS IDENTIFIED:\n- Role: Administrative Officer & Executive Magistrate (Sets authority and tone)\n- Context: Land Encroachment under statutory provisions (Sets legal baseline)\n- Specific Task: Issue a Show-Cause Notice with hearing details (Clear actionable output)\n- Constraints: Maintain judicial tone, highlight ex-parte clause (Prevents omissions)\n- Expected Format: Formal Court Notice with Case No., Date, Heading, Directives, and Signature block (Structured delivery).",
    "evaluation_criteria": [
      "Identification of 5 prompt components (Role, Context, Task, Constraints, Format)",
      "Clear comparison between weak prompt and structured prompt",
      "Realistic government administrative application"
    ],
    "improvement_suggestions": [
      "Always include the specific Persona (e.g. Sub-Divisional Magistrate)",
      "Provide exact placeholders and parameters in your prompt template"
    ]
  },
  {
    "id": "scenario-3",
    "module_id": "module-1",
    "scenario_number": 3,
    "title": "Asking Questions About a Government Document",
    "description": "An employee has received a 30-page government circular on Disaster Preparedness and needs to ask precise factual questions based strictly on its contents without any hallucinations or external assumptions.",
    "administrative_context": "Emergency Relief & Disaster Management Section",
    "task": "Select the AI tool built specifically for strictly grounded, zero-hallucination document querying with citations.",
    "options": [
      {
        "tool_id": "notebooklm",
        "tool_name": "NotebookLM",
        "classification": "CORRECT",
        "explanation": "NotebookLM is built specifically for zero-hallucination querying grounded entirely in uploaded source documents, providing verified citations."
      },
      {
        "tool_id": "chatgpt",
        "tool_name": "ChatGPT",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "ChatGPT can answer questions if the document is pasted, but it may blend general knowledge rather than strictly grounding answers to page citations."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a graphic design tool and has no document grounding or research capabilities."
      },
      {
        "tool_id": "gamma",
        "tool_name": "Gamma",
        "classification": "WRONG",
        "explanation": "Gamma creates presentations and does not provide an interactive grounded document Q&A engine."
      }
    ],
    "recommended_tool": {
      "id": "notebooklm",
      "name": "NotebookLM",
      "why_recommended": "NotebookLM grounds all responses strictly on your uploaded circular and provides direct inline citations for instant fact-checking."
    },
    "practice_input": {
      "type": "circular",
      "title": "Special Relief Commissioner (SRC) - Circular No. 2024/DIS-419",
      "content": "STANDARD OPERATING PROCEDURE: CYCLONE & FLOOD PREPAREDNESS 2024\nSection 3.1: Cyclone Shelters Activation Protocol\n- All Administrative Officers must inspect and certify 100% of Multipurpose Cyclone Shelters (MCS) by May 15th.\n- Each shelter must have a designated Nodal Officer (Revenue Inspector / Headmaster) and an alternate officer.\nSection 3.2: Food & Potable Water Reserves\n- Minimum 3 days of dry rations (Chuda, Gur, Biscuits) and 5,000 halogen tablets must be pre-positioned at each shelter by May 20th.\nSection 4.1: Power Generator & Fuel Backups\n- Sub-Divisional control room must test VHF wireless handsets daily starting 72 hours prior to forecast landfall.\n- Fuel buffer: Minimum 200 Litres of diesel per shelter generator maintained under joint sign-off of Tahsildar and BDO.\nSection 5.3: Evacuation of Vulnerable Citizens\n- Mandatory evacuation of pregnant women (EDD within 15 days), elderly, and PwDs to Maa Gruhas/PHCs at least 24 hours before wind speeds exceed 65 km/h."
    },
    "ideal_prompt": "Based solely on the uploaded Disaster Preparedness SOP (Circular No. 2024/DIS-419), answer the following specific queries: (1) Mandatory inspection deadline for Multipurpose Cyclone Shelters, (2) Stock requirements for dry food rations and halogen tablets per shelter, (3) Exact fuel reserve requirement for backup power generators and joint sign-off authority, (4) Protocol for evacuating pregnant women and vulnerable individuals. Provide exact section references for each answer and do not include any information not stated in the text.",
    "ideal_output": "FACTUAL QUERY RESPONSES (Grounded in SRC Circular No. 2024/DIS-419):\n\n1. MCS INSPECTION DEADLINE:\n- Administrative Officers must inspect and certify 100% of Multipurpose Cyclone Shelters by May 15th [Ref: Section 3.1].\n- Each shelter must have a designated Nodal Officer and an alternate officer.\n\n2. FOOD & HALOGEN STOCK REQUIREMENTS:\n- Minimum 3 days of dry rations (Chuda, Gur, Biscuits) and 5,000 halogen tablets per shelter by May 20th [Ref: Section 3.2].\n\n3. BACKUP POWER GENERATOR FUEL & SIGN-OFF:\n- Minimum 200 Litres of diesel per shelter generator.\n- Maintained under joint sign-off of Tahsildar and BDO [Ref: Section 4.1].\n\n4. VULNERABLE CITIZEN EVACUATION PROTOCOL:\n- Mandatory evacuation of pregnant women with EDD within 15 days, elderly, and PwDs to Maa Gruhas/PHCs.\n- Must occur at least 24 hours before forecast wind speeds exceed 65 km/h [Ref: Section 5.3].",
    "evaluation_criteria": [
      "Strict grounding to provided document text",
      "Exact citation of sections and numbers",
      "Absence of external hallucinated advice"
    ],
    "improvement_suggestions": [
      "Instruct the AI explicitly: \"Use only information contained in the source document\"",
      "Request section numbers or paragraph references for audit verification"
    ]
  },
  {
    "id": "scenario-4",
    "module_id": "module-1",
    "scenario_number": 4,
    "title": "Finding Current Information",
    "description": "The Administrative Officer's office needs to find current information about the nationwide implementation status, recent portal updates, and gazette notifications regarding the Digital India Land Records Modernization Programme (DILRMP) with verified online citations.",
    "administrative_context": "Land Records & Revenue Modernization Cell",
    "task": "Choose an AI search engine that conducts real-time web lookups and provides direct hyperlink citations to official government portals.",
    "options": [
      {
        "tool_id": "perplexity",
        "tool_name": "Perplexity",
        "classification": "CORRECT",
        "explanation": "Perplexity is an AI answer engine designed for real-time search that retrieves current public information and provides explicit citations to official websites."
      },
      {
        "tool_id": "gemini",
        "tool_name": "Gemini",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Gemini has Google search grounding, but Perplexity is purpose-built with dedicated citation cards and domain filtering."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a graphic design tool and cannot search the web or compile live citations."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly generates visual images and cannot perform web information retrieval."
      }
    ],
    "recommended_tool": {
      "id": "perplexity",
      "name": "Perplexity",
      "why_recommended": "Perplexity aggregates live web sources, linking directly to official government domains (.gov.in, .nic.in) so you can verify public information instantly."
    },
    "practice_input": {
      "type": "research_query",
      "title": "DILRMP Implementation & Geo-Referencing Guidelines Investigation",
      "content": "Target Information Requirements:\n1. Current national status of Cadastral Map digitization and Geo-referencing under DILRMP.\n2. Standard operating guidelines for drone-based rural land survey (SVAMITVA scheme).\n3. Official portal URL and nodal ministry responsible (Ministry of Rural Development / Department of Land Resources)."
    },
    "ideal_prompt": "Provide a structured status briefing on the Digital India Land Records Modernization Programme (DILRMP) and SVAMITVA drone land survey guidelines. Focus on: (1) Current national core objectives and targets for cadastral map digitization, (2) Drone surveying methodology and property card generation process, (3) Nodal Central Ministry and official portal URLs (.gov.in/.nic.in). Provide authoritative source citations for each finding.",
    "ideal_output": "RESEARCH BRIEFING: DIGITAL INDIA LAND RECORDS MODERNIZATION PROGRAMME (DILRMP) & SVAMITVA\n\n1. CORE OBJECTIVES & CADASTRAL DIGITIZATION:\n- Modernize management of land records, minimize scope of property disputes, and enhance transparency in revenue transactions.\n- Digitization of Cadastral Maps (Bhumunaksha), spatial georeferencing, and integration with textual RoR (Record of Rights).\n\n2. SVAMITVA DRONE SURVEY & PROPERTY CARDS:\n- Collaborative initiative between Ministry of Panchayati Raj, Survey of India, and State Revenue Departments.\n- High-resolution drone imagery (5cm accuracy) used to demarcate inhabited rural land (Abadi areas).\n- Ground-truthing, dispute resolution, and issuance of legal Property Cards (SVAMITVA Cards/Pattas) to rural property owners.\n\n3. NODAL MINISTRIES & OFFICIAL PORTALS:\n- Department of Land Resources, Ministry of Rural Development: https://dolr.gov.in\n- Ministry of Panchayati Raj (SVAMITVA Portal): https://svamitva.nic.in\n- Citations: Press Information Bureau (PIB) releases and official DoLR annual reports.",
    "evaluation_criteria": [
      "Inclusion of specific government domains (.gov.in, .nic.in)",
      "Clear separation of DILRMP and SVAMITVA mandates",
      "Fact-checking citations provided"
    ],
    "improvement_suggestions": [
      "Specify domain restriction to official government portals in your search query",
      "Ask for recent year milestones to ensure the information is up-to-date"
    ]
  },
  {
    "id": "scenario-5",
    "module_id": "module-1",
    "scenario_number": 5,
    "title": "General AI Assistance",
    "description": "An administrative employee needs day-to-day general AI assistance for drafting internal memos, summarizing diverse rough points, brainstorming public grievance reduction strategies, and refining official correspondence.",
    "administrative_context": "General Administration & Office Coordination",
    "task": "Select a versatile general-purpose AI assistant capable of multi-tasking across drafting, summarization, brainstorming, and structuring administrative workflows.",
    "options": [
      {
        "tool_id": "chatgpt",
        "tool_name": "ChatGPT",
        "classification": "CORRECT",
        "explanation": "ChatGPT is the most capable general-purpose AI conversational assistant for general administrative drafting, ideation, and text transformation."
      },
      {
        "tool_id": "gemini",
        "tool_name": "Gemini",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Gemini is also a capable general assistant, especially with Google Workspace, while ChatGPT is widely recognized as the versatile baseline standard."
      },
      {
        "tool_id": "gamma",
        "tool_name": "Gamma",
        "classification": "WRONG",
        "explanation": "Gamma is specialized exclusively for generating slides and presentations, not general multi-purpose text drafting."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly is an image generator and cannot draft memos or brainstorm administrative processes."
      }
    ],
    "recommended_tool": {
      "id": "chatgpt",
      "name": "ChatGPT",
      "why_recommended": "ChatGPT handles diverse text tasks—from drafting memos to structuring complex procedures—with high conversational agility."
    },
    "practice_input": {
      "type": "office_notes",
      "title": "Rough Administrative Task List - Administration Office",
      "content": "Items requiring assistance:\n1. Brainstorm 4 practical measures to reduce citizen waiting time at the Administrative Officer Single Window Public Grievance Counter.\n2. Draft an internal office circular reminding staff regarding punctuality and biometric attendance compliance by 10:00 AM daily.\n3. Convert rough bullet notes into a 3-step citizen guidance notice on how to apply for certified land record copies."
    },
    "ideal_prompt": "You are an administrative advisor to a Administrative Officer. Complete the following three office tasks: (1) Brainstorm 4 actionable, low-cost measures to reduce citizen wait times at the Single Window Public Grievance Counter, (2) Draft a firm yet professional internal office circular regarding strict compliance with 10:00 AM biometric attendance, (3) Structure a simple 3-step citizen advisory explaining how to obtain certified copies of land records (RoR) from the Tehsil/Administration Office. Format each task clearly under distinct headings.",
    "ideal_output": "ADMINISTRATIVE ACTION PLAN & DRAFTS\nOffice of the Administrative Officer & Sub-Divisional Magistrate\n\nTASK 1: 4 MEASURES TO REDUCE GRIEVANCE COUNTER WAIT TIMES:\n1. Token Queue System: Implement computerized token dispensing with category-based routing (Senior Citizens, Revenue, Welfare).\n2. Document Pre-Check Helpdesk: Deploy an officer at the entrance to verify form completeness and attachments before token issuance.\n3. SMS Acknowledgment & Status Tracking: Issue instant SMS docket numbers so citizens can track status without repeated physical counter visits.\n4. Designated Grievance Hearing Hours: Fixed daily slot (11:00 AM to 1:00 PM) for direct hearing by the Administrative Officer/Executive Magistrate.\n\nTASK 2: INTERNAL CIRCULAR ON BIOMETRIC ATTENDANCE:\nCIRCULAR NO: 2024/ESTT-512\nTo: All Officers and Staff, Administration Office\nSubject: Strict Adherence to Office Timings and Biometric Attendance - Reg.\nAll employees are strictly directed to mark their biometric attendance by 10:00 AM on all working days. Unpunctual marking without prior approved leave will result in debit of half-day casual leave as per service rules.\n(By Order of Administrative Officer)\n\nTASK 3: CITIZEN ADVISORY - OBTAINING CERTIFIED RoR COPIES (3 STEPS):\n- Step 1: Submit Application Form-1 with Court Fee stamp at Counter No. 2 with Khata and Plot details.\n- Step 2: Pay prescribed government search & copying fee against an official e-Receipt.\n- Step 3: Collect your digitally signed and sealed certified copy within 3 working days from Counter No. 4.",
    "evaluation_criteria": [
      "Delivery of all 3 requested administrative deliverables",
      "Appropriate administrative tone in the internal circular",
      "Clarity and practicality in citizen instructions"
    ],
    "improvement_suggestions": [
      "Request specific tone parameters (firm for staff circular, welcoming for citizen guide)",
      "Ask for standard office reference number placeholders"
    ]
  },
  {
    "id": "scenario-6",
    "module_id": "module-2",
    "scenario_number": 6,
    "title": "Summarizing a Government Order",
    "description": "A 40-page government order regarding the Revised Revenue Recovery and Certificate Procedure has arrived. The Administrative Officer needs a concise executive summary covering major provisions, key responsibilities, and procedural changes.",
    "administrative_context": "Revenue Recovery & Certificate Court Administration",
    "task": "Use an AI tool capable of synthesizing long, complex policy orders into a clean summary with source grounding and zero hallucinations.",
    "options": [
      {
        "tool_id": "notebooklm",
        "tool_name": "NotebookLM",
        "classification": "CORRECT",
        "explanation": "NotebookLM is built for long multi-page documents (up to 500,000 words per notebook) and generates grounded summaries with instant source citations."
      },
      {
        "tool_id": "claude",
        "tool_name": "Claude",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Claude has an excellent context window and writing style, but NotebookLM provides superior source citations and notebook source grounding."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a design app and cannot read, parse, or summarize a 40-page legal order."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly generates images and cannot process text documents."
      }
    ],
    "recommended_tool": {
      "id": "notebooklm",
      "name": "NotebookLM",
      "why_recommended": "NotebookLM processes extensive multi-page PDFs seamlessly and produces summaries with clickable page citations for administrative verification."
    },
    "practice_input": {
      "type": "government_order",
      "title": "Revenue & Disaster Management Dept - GO Ms. No. 104/2024",
      "content": "GOVERNMENT OF ODISHA - REVENUE & DISASTER MANAGEMENT DEPARTMENT\nORDER: REVISION OF PUBLIC DEMANDS RECOVERY PROCEDURES 2024\nSection 1: Scope & Jurisdiction\n- Replaces 1963 Manual guidelines for all certificate cases exceeding Rs 50,000 in default.\n- Certificate Officer (Administrative Officer / Additional Tahsildar) empowered to issue Form 3 notice with 30-day response window.\nSection 2: Digital Certificate Filing\n- All requisitioning departments (Commercial Tax, Mining, Banking) must file requisitions digitally via the e-PDR portal with verified PAN/Aadhaar/GSTIN.\n- Manual paper requisitions are abolished effective 1st November 2024.\nSection 3: Distraint & Attachment of Property\n- Section 14 warrant of attachment cannot be executed against agricultural implements, standing subsistence crops (up to 1 hectare), or residential dwelling of default value under Rs 1,00,000.\n- Mandatory 15-day public notice before conducting auction of seized movable assets.\nSection 4: Compromise & One-Time Settlement (OTS)\n- Administrative Officer permitted to sanction installment payments up to 12 months for genuine hardship cases with 50% upfront payment."
    },
    "ideal_prompt": "You are an administrative officer in a Administrative Officer's office. Summarize the attached Government Order (GO Ms. No. 104/2024 on Public Demands Recovery) into a 1-page executive summary covering: (1) Purpose & Scope of Revision, (2) Major Procedural Changes (Mandatory Digital Filing), (3) Property Attachment Protections & Constraints, (4) Powers of the Administrative Officer regarding Installment Settlements, and (5) Key Compliance Dates and Section References. Ensure every point is factually grounded with no extraneous commentary.",
    "ideal_output": "EXECUTIVE SUMMARY: GO MS. NO. 104/2024 (REVISED PUBLIC DEMANDS RECOVERY PROCEDURES)\nFor: Administrative Officer & Certificate Officers\n\n1. PURPOSE & SCOPE:\n- Modernizes 1963 PDR guidelines for certificate recovery cases exceeding Rs 50,000 in default.\n\n2. MAJOR PROCEDURAL CHANGES:\n- Mandatory Digital Filing: All requisitioning departments (Commercial Tax, Mining, Banks) must file via the e-PDR portal with PAN/Aadhaar/GSTIN verification [Sec. 2].\n- Abolition of paper requisitions effective 1st November 2024.\n- 30-day statutory response window for Form 3 notices issued by Certificate Officers [Sec. 1].\n\n3. ATTACHMENT PROTECTIONS & CONSTRAINTS:\n- Prohibition: Section 14 warrants cannot attach agricultural implements, subsistence crops (up to 1 ha), or residential homes for default under Rs 1,00,000 [Sec. 3].\n- Auction Rules: Mandatory 15-day public notice required prior to auctioning seized movables [Sec. 3].\n\n4. Administrative Officer OTS & INSTALLMENT POWERS:\n- Authorized to approve up to 12 monthly installments for genuine hardship cases, provided 50% is deposited upfront [Sec. 4].\n\n5. IMMEDIATE ACTION DEADLINE:\n- 1st November 2024: Complete transition to digital e-PDR portal requisitions.",
    "evaluation_criteria": [
      "Accurate capture of threshold limits (Rs 50,000, Rs 1,00,000, 50% upfront)",
      "Clear identification of exemptions (agricultural tools, subsistence crops)",
      "Clear section references and compliance dates"
    ],
    "improvement_suggestions": [
      "Ask for specific financial thresholds to be highlighted",
      "Instruct the summary to separate officer duties from statutory exemptions"
    ]
  },
  {
    "id": "scenario-7",
    "module_id": "module-2",
    "scenario_number": 7,
    "title": "Extracting Dates and Action Points",
    "description": "A government circular contains multiple scattered deadlines, important dates, decisions and action points that need to be extracted into a structured list for administrative monitoring.",
    "administrative_context": "General Administration & Compliance Monitoring",
    "task": "Extract all dates, responsible officers, tasks, and submission modes into a structured chronological matrix.",
    "options": [
      {
        "tool_id": "chatgpt",
        "tool_name": "ChatGPT",
        "classification": "CORRECT",
        "explanation": "ChatGPT is outstanding at parsing dense unstructured administrative circulars into structured markdown tables and chronological action checklists."
      },
      {
        "tool_id": "gemini",
        "tool_name": "Gemini",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Gemini can extract tables, but ChatGPT provides very strict structured formatting and table consistency."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a graphic design tool and cannot parse text into structured tabular data."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly is an image generation model and has no text parsing capabilities."
      }
    ],
    "recommended_tool": {
      "id": "chatgpt",
      "name": "ChatGPT",
      "why_recommended": "ChatGPT reliably extracts dates, officers, and deliverables from narrative government circulars and formats them into clean monitoring tables."
    },
    "practice_input": {
      "type": "circular",
      "title": "State Election Commission & District Office Joint Circular - SEC/ELE-902",
      "content": "SUB-DIVISION ELECTION READINESS CIRCULAR: SPECIAL SUMMARY REVISION (SSR) 2025\n- All Electoral Registration Officers (EROs / Administrative Officers) must publish the Integrated Draft Electoral Roll on 29th October 2024.\n- The period for filing claims and objections will run from 29th October 2024 to 28th November 2024.\n- Special Campaign Dates at all Polling Stations with Booth Level Officers (BLOs) present: 9th & 10th November 2024 and 23rd & 24th November 2024 under supervision of Assistant EROs (Tahsildars/BDOs).\n- Disposal of all claims and objections by EROs must be finalized by 24th December 2024.\n- Final Electoral Roll publication by Administrative Officer: 6th January 2025.\n- Submission of weekly Form 6, 7, and 8 disposal progress reports to District Election Officer every Friday by 5:00 PM."
    },
    "ideal_prompt": "You are an Election Executive Officer in the Administrative Officer's office. Extract all compliance milestones, dates, responsible functionaries, and required actions from the attached Special Summary Revision circular. Format the output as a Markdown table with the columns: | S.No | Milestone / Action Item | Mandatory Deadline | Responsible Officer | Deliverable / Submission Mode | followed by a chronological list of Immediate Next Steps for the Administrative Officer.",
    "ideal_output": "COMPLIANCE MONITORING MATRIX: SPECIAL SUMMARY REVISION (SSR) 2025\n\n| S.No | Milestone / Action Item | Mandatory Deadline | Responsible Officer | Deliverable / Submission Mode |\n|:---:|:---|:---|:---|:---|\n| 1 | Publication of Integrated Draft Electoral Roll | 29th October 2024 | ERO (Administrative Officer) | Public Notice at Sub-Division & Tehsil Notice Boards |\n| 2 | Period for Claims & Objections (Forms 6, 7, 8) | 29 Oct - 28 Nov 2024 | Citizens / AEROs / BLOs | Online portal & Polling Station Dropboxes |\n| 3 | Special Campaign Weekend Phase 1 | 9th & 10th Nov 2024 | AEROs (Tahsildars/BDOs) & BLOs | Physical presence at all Polling Stations |\n| 4 | Special Campaign Weekend Phase 2 | 23rd & 24th Nov 2024 | AEROs & BLOs | Physical verification & Form collection |\n| 5 | Weekly Progress Reporting | Every Friday by 5:00 PM | ERO Election Cell | Weekly Form 6/7/8 Report to DEO |\n| 6 | Final Disposal of Claims & Objections | 24th December 2024 | ERO (Administrative Officer) | Judicial order & E-Roll database update |\n| 7 | Publication of Final Electoral Roll | 6th January 2025 | ERO (Administrative Officer) | Gazette publication & public distribution |\n\nIMMEDIATE NEXT STEPS FOR Administrative Officer:\n1. Issue formal notification to Tahsildars and BDOs regarding Draft Roll publication on 29th October.\n2. Formulate inspection rosters for the Special Campaign dates (9-10 Nov & 23-24 Nov).\n3. Set up the weekly Friday compliance tracking registry for DEO submissions.",
    "evaluation_criteria": [
      "Accurate chronological ordering of all 7 milestones",
      "Clear tabular formatting with all requested columns",
      "Identification of recurring weekly deadline (Fridays at 5 PM)"
    ],
    "improvement_suggestions": [
      "Always specify the desired table column names in the prompt",
      "Ask the AI to highlight recurring weekly/monthly deadlines separately"
    ]
  },
  {
    "id": "scenario-8",
    "module_id": "module-2",
    "scenario_number": 8,
    "title": "Drafting an Official Notice",
    "description": "The office needs to prepare a formal notice for an Urgent Review Meeting on Paddy Procurement using provided date, venue, participants and agenda information.",
    "administrative_context": "Civil Supplies, Food & Procurement Administration",
    "task": "Draft a formal government meeting notice with proper administrative decorum, official numbering placeholders, and clear compliance instructions.",
    "options": [
      {
        "tool_id": "chatgpt",
        "tool_name": "ChatGPT",
        "classification": "CORRECT",
        "explanation": "ChatGPT is exceptionally good at adopting the standard protocol, structure, and formal tone required for government notices and official memos."
      },
      {
        "tool_id": "claude",
        "tool_name": "Claude",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Claude drafts formal letters very well, but ChatGPT provides rapid template generation and flexible tone tuning for standard office notices."
      },
      {
        "tool_id": "gamma",
        "tool_name": "Gamma",
        "classification": "WRONG",
        "explanation": "Gamma is a presentation generator and does not create formal government letterhead notices."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly is an image generator and cannot draft text documents."
      }
    ],
    "recommended_tool": {
      "id": "chatgpt",
      "name": "ChatGPT",
      "why_recommended": "ChatGPT creates polished, ready-to-issue official administrative notices respecting civil service decorum and protocol hierarchy."
    },
    "practice_input": {
      "type": "meeting_parameters",
      "title": "Meeting Details: Kharif Paddy Procurement Review 2024-25",
      "content": "Meeting Details:\n- Authority: Administrative Officer & Executive Magistrate, Bhadrak\n- Meeting: Inter-Departmental Coordination Committee on Kharif Paddy Procurement 2024-25\n- Date & Time: 14th November 2024 at 11:30 AM\n- Venue: Conference Hall, Administration Office\n- Participants: All Tahsildars, BDOs, ACSO, Lead Bank Manager, PACS Secretaries, RMC Secretaries, Custom Millers.\n- Mandatory Instruction: Attend in person with farmer registration figures, mandi infrastructure audit reports, and millers tagging list. No substitutes."
    },
    "ideal_prompt": "You are an Administrative Officer to the Administrative Officer & Executive Magistrate. Draft a formal Government Meeting Notice for the Kharif Paddy Procurement 2024-25 Review Meeting. Incorporate: (1) Official Letterhead header, Notice Ref No placeholder, Date, (2) Formal Subject and Salutation, (3) Date (14th Nov 2024 at 11:30 AM), Venue (Conference Hall, Administration Office), (4) 4 key agenda items (Farmer Registration, Mandi Infrastructure, Miller Tagging, Payment Mechanism), (5) Mandatory personal attendance rule, (6) Formal signature block and copy forwarded memo list.",
    "ideal_output": "OFFICE OF THE Administrative Officer & SUB-DIVISIONAL MAGISTRATE, BHADRAK\nNOTICE NO: ________ / CS-PROC / 2024                    DATED: __/__/2024\n\nMEETING NOTICE\n\nSub: Sub-Divisional Review Meeting on Kharif Paddy Procurement Preparations for KMS 2024-25 - Reg.\n\nA comprehensive review meeting under the Chairmanship of the Administrative Officer & Sub-Divisional Magistrate, Bhadrak, is hereby convened on 14th November 2024 at 11:30 AM in the Conference Hall of the Administration Office to review readiness for the Kharif Marketing Season (KMS) 2024-25.\n\nAGENDA OF THE MEETING:\n1. Final verification status of online farmer registrations and Aadhaar-seeded bank accounts.\n2. Infrastructure audit and basic amenities readiness at all PACS and RMC Mandis (weighbridges, moisture meters, tarpaulins, drinking water).\n3. Custom Millers tagging and security deposit verification.\n4. Logistics, transport planning, and quick payment disbursement mechanisms to farmers.\n\nThe following officers are directed to attend the meeting in person without fail:\n1. All Tahsildars, Bhadrak Sub-Division\n2. All Block Development Officers (BDOs), Bhadrak Sub-Division\n3. Assistant Civil Supplies Officer (ACSO), Bhadrak\n4. Lead District Bank Manager (LDBM), Bhadrak\n5. Secretaries of all PACS and Market Secretaries of RMCs\n6. Representatives of Authorized Custom Millers\n\nIMPORTANT INSTRUCTION:\nAll participating officers must attend in person along with complete Tehsil/Block-wise updated reports. Under no circumstances will subordinate representatives be entertained without prior written permission of the Administrative Officer.\n\nSd/-\nAdministrative Officer & Sub-Divisional Magistrate\nBhadrak\n\nMemo No: ________ / Dt: __/__/2024\nCopy forwarded for kind information to:\n1. Collector & District Magistrate, Bhadrak for favor of kind information.\n2. Chief Civil Supplies Officer (CCSO), Bhadrak.\n3. Office Notice Board / Computer Section for uploading to Sub-Division Portal.",
    "evaluation_criteria": [
      "Standard government notice formatting and official tone",
      "Detailed agenda covering key procurement requirements",
      "Clear attendance rules and copy-forwarded memo structure"
    ],
    "improvement_suggestions": [
      "Include a Memo No / copy-forwarded distribution block",
      "Explicitly state what reports attendees must bring to the table"
    ]
  },
  {
    "id": "scenario-9",
    "module_id": "module-2",
    "scenario_number": 9,
    "title": "Reviewing an Official Document",
    "description": "An official letter contains correct information but has unclear, repetitive and grammatically weak language. The employee wants to improve it while preserving its meaning.",
    "administrative_context": "Revenue Litigation & Enforcement Administration",
    "task": "Use an AI model with superior writing refinement and tone sensitivity to transform the rough draft into an authoritative, polished official letter.",
    "options": [
      {
        "tool_id": "claude",
        "tool_name": "Claude",
        "classification": "CORRECT",
        "explanation": "Claude is renowned for nuanced language editing, eliminating repetitive filler, and elevating administrative prose while preserving 100% of facts."
      },
      {
        "tool_id": "chatgpt",
        "tool_name": "ChatGPT",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "ChatGPT can improve grammar, but Claude exhibits superior finesse in formal civil service prose and strict adherence to factual constraints."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is for visual graphics and cannot edit or refine complex legal text."
      },
      {
        "tool_id": "gamma",
        "tool_name": "Gamma",
        "classification": "WRONG",
        "explanation": "Gamma generates slides and is not designed for letter drafting or text refinement."
      }
    ],
    "recommended_tool": {
      "id": "claude",
      "name": "Claude",
      "why_recommended": "Claude excels at refining tone, eliminating administrative ambiguity, and ensuring precise legal terminology without changing facts."
    },
    "practice_input": {
      "type": "rough_letter",
      "title": "Rough Draft: Requisition for Police Force for Encroachment Drive",
      "content": "To Superintendent of Police,\nSir, this is to inform that in our tehsil Chandbali there is many illegal shops on government road near bus stand on plot 209 which is creating traffic problem and public is complaining again and again. Tahsildar has already given notice 3 times but they are not listening and shouting at revenue inspector. So we have decided to break the illegal construction with JCB on next Tuesday dated 22nd October 2024 at 9 am morning. Therefore you please send 2 platoon police force including 1 lady police section so no law and order problem will happen. JCB and magistrate will be there. Please confirm fast."
    },
    "ideal_prompt": "You are an Executive Magistrate and Administrative Officer. Review and rewrite the attached rough requisition letter addressed to the Superintendent of Police. Requirements: (1) Elevate tone to formal administrative correspondence, (2) Eliminate informal phrasing, (3) Clearly state statutory context (Encroachment Removal), plot reference (Plot 209, Chandbali Bus Stand), eviction date (22nd October 2024 at 09:00 AM), and Executive Magistrate deployment, (4) Formalize police force requisition (2 platoons with 1 woman section), (5) Strictly preserve all facts.",
    "ideal_output": "OFFICE OF THE Administrative Officer & SUB-DIVISIONAL MAGISTRATE, CHANDBALI\nLetter No: ________ / REV-ENCR / 2024                  Dated: __/__/2024\n\nTo\nThe Superintendent of Police,\nBhadrak District.\n\nSub: Requisition of Adequate Police Force for Eviction Drive against Unauthorized Encroachments on Government Land at Chandbali Bus Stand - Reg.\n\nSir,\nI invite your kind attention to the subject cited above.\n\nIt is reported by the Tahsildar, Chandbali that extensive unauthorized commercial encroachments on Government Land (Plot No. 209, adjacent to Chandbali Bus Stand) are causing severe traffic congestion and public inconvenience. Despite the service of statutory eviction notices under the Odisha Prevention of Land Encroachment Act, the unauthorized occupants have failed to vacate the premises and have exhibited resistance towards Revenue Field Staff.\n\nAccordingly, a joint eviction and demolition drive has been scheduled on 22nd October 2024 at 09:00 AM. An Executive Magistrate has been duly deputed to oversee the operations alongside the Revenue Enforcement Squad.\n\nTo maintain law and order and prevent any untoward incident during the enforcement drive, you are requested to kindly deploy adequate police personnel comprising two (2) platoons of police force, including one (1) woman police section, at the venue by 08:30 AM on the designated date.\n\nYour prompt cooperation in this regard will facilitate smooth administrative action.\n\nYours faithfully,\n\nSd/-\nAdministrative Officer & Sub-Divisional Magistrate\nChandbali",
    "evaluation_criteria": [
      "Professional executive tone replacing informal phrasing",
      "Accurate retention of date, time, location, plot number, and force requirements",
      "Clear administrative structure with subject and statutory references"
    ],
    "improvement_suggestions": [
      "Instruct the model to remove emotional language and use formal administrative terms",
      "Ensure standard requisition protocols and deployment timings are requested"
    ]
  },
  {
    "id": "scenario-10",
    "module_id": "module-2",
    "scenario_number": 10,
    "title": "Comparing Government Orders",
    "description": "An old and new government order need to be compared to identify changes in provisions, deadlines, responsibilities and procedures regarding Land Alienation.",
    "administrative_context": "Land Alienation & Revenue Policy Analysis",
    "task": "Use an AI model with strong comparative reasoning to generate a clause-by-clause comparison between old and new government orders.",
    "options": [
      {
        "tool_id": "claude",
        "tool_name": "Claude",
        "classification": "CORRECT",
        "explanation": "Claude excels at comparative document analysis, rigorously identifying subtle clause changes, deleted requirements, and newly added compliance mandates."
      },
      {
        "tool_id": "chatgpt",
        "tool_name": "ChatGPT",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "ChatGPT can compare text, but Claude offers deeper nuance in side-by-side legal clause comparisons and structured variance tables."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a graphic tool and cannot compare text documents."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly generates artwork and cannot analyze government policies."
      }
    ],
    "recommended_tool": {
      "id": "claude",
      "name": "Claude",
      "why_recommended": "Claude provides rigorous, clause-by-clause comparative analysis, highlighting additions, deletions, and operational implications for the Administration Office."
    },
    "practice_input": {
      "type": "comparative_orders",
      "title": "Comparative Policy Extract: Land Alienation Rules (2016 vs 2024)",
      "content": "2016 CIRCULAR PROVISIONS (OLD):\n1. Financial Sanction Limit: Administrative Officer can recommend government land alienation proposals up to value of Rs 25 Lakhs. Proposals above Rs 25 Lakhs require RDC sanction.\n2. Environmental Clearance: Mandatory NOC from State Pollution Control Board required before submission of preliminary feasibility report.\n3. Processing Timeline: Maximum 90 days for Tahsildar field inquiry.\n4. User Agency Premium: 100% upfront premium payment within 30 days of sanction.\n\n2024 AMENDED CIRCULAR PROVISIONS (NEW):\n1. Financial Sanction Limit: Administrative Officer empowered to recommend proposals up to Rs 1.00 Crore. Proposals between Rs 1.00 Crore and Rs 5.00 Crore vetted by Collector; above Rs 5.00 Crore by RDC.\n2. Environmental Clearance: In-principle land alienation permit may be issued pending statutory clearance, but physical possession handed over only upon final CPCB/SPCB NOC.\n3. Processing Timeline: Compressed to 45 days via online e-Alienation portal; deemed NOC if line departments do not respond in 21 days.\n4. User Agency Premium: Payment permitted in 2 equal installments (50% upfront, 50% within 180 days with 6% simple interest)."
    },
    "ideal_prompt": "You are a Legal & Revenue Consultant to a Administrative Officer. Conduct a rigorous comparative analysis between the 2016 Land Alienation Guidelines and the 2024 Amended Guidelines. Structure your output into: (1) Comparative Matrix Table: | Policy Parameter | 2016 Guidelines (Old) | 2024 Amended Guidelines (New) | Operational Impact on Administration Office |, (2) Key Administrative Takeaways highlighting streamlined timelines and enhanced financial powers.",
    "ideal_output": "COMPARATIVE POLICY ANALYSIS: GOVERNMENT LAND ALIENATION (2016 VS 2024)\n\n1. COMPARATIVE MATRIX TABLE:\n\n| Policy Parameter | 2016 Guidelines (Old) | 2024 Amended Guidelines (New) | Operational Impact on Administration Office |\n|:---|:---|:---|:---|\n| Financial Sanction Limit | Administrative Officer recommends up to Rs 25 Lakhs; above Rs 25 L sent to RDC | Administrative Officer recommends up to Rs 1.00 Crore; Collector: Rs 1-5 Cr; RDC: >Rs 5 Cr | Significant decentralization; 4x increase in financial proposal jurisdiction. |\n| Environmental Clearance | Strict NOC mandatory before preliminary feasibility submission | In-principle approval permitted; physical possession deferred until final NOC | Accelerates initial file movement without stalling infrastructure project planning. |\n| Inquiry Timeline & Deemed Consent | 90 days manual inquiry; no deemed clause | 45 days total via e-Alienation portal; 21-day Deemed NOC for line departments | Halves processing time; removes inter-departmental stalling. |\n| Premium Payment Schedule | 100% upfront within 30 days | 2 installments: 50% upfront, 50% within 180 days (with 6% interest) | Eases capital burden on public utility agencies while securing revenue interest. |\n\n2. KEY ADMINISTRATIVE TAKEAWAYS:\n- Faster Turnaround: Field inquiry window slashed from 90 to 45 days with automated 21-day deemed consent.\n- Enhanced Local Authority: Administrative Officer now exercises jurisdiction up to Rs 1 Crore, expediting public school, hospital, and infrastructure alienation files locally.",
    "evaluation_criteria": [
      "Accurate comparison across all 4 policy parameters",
      "Quantification of financial limits (Rs 25L -> Rs 1Cr) and days (90d -> 45d)",
      "Clear assessment of operational impact on the Administration Office"
    ],
    "improvement_suggestions": [
      "Request an \"Operational Impact\" column in the comparative table",
      "Ask the AI to highlight potential risks or compliance safeguards"
    ]
  },
  {
    "id": "scenario-11",
    "module_id": "module-3",
    "scenario_number": 11,
    "title": "Revenue Data Analysis",
    "description": "The office has monthly revenue collection data across 5 Tehsils and wants to calculate recovery percentages, identify areas performing poorly against targets, and produce analytical bar charts.",
    "administrative_context": "Sub-Divisional Land Revenue & Recovery Monitoring",
    "task": "Use an AI tool with built-in code execution and statistical data analysis to process spreadsheet numbers and identify lagging revenue circles.",
    "options": [
      {
        "tool_id": "chatgpt-data",
        "tool_name": "ChatGPT with Data Analysis",
        "classification": "CORRECT",
        "explanation": "ChatGPT with Data Analysis runs Python in a secure sandbox to calculate sums, percentages, variance, and generate downloadable charts from spreadsheets."
      },
      {
        "tool_id": "gemini",
        "tool_name": "Gemini",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Gemini can read basic tabular numbers, but ChatGPT with Data Analysis executes dedicated Python code for accurate mathematical calculations and charting."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a graphic tool and cannot compute statistical formulas or analyze raw spreadsheet rows."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly is an image generator and has no data calculation capabilities."
      }
    ],
    "recommended_tool": {
      "id": "chatgpt-data",
      "name": "ChatGPT with Data Analysis",
      "why_recommended": "ChatGPT with Data Analysis executes verified Python code to compute exact revenue recovery percentages and generate executive charts."
    },
    "practice_input": {
      "type": "revenue_dataset",
      "title": "Q2 Land Revenue & Water Rate Collection Dataset",
      "content": "TEHSIL-WISE REVENUE PERFORMANCE (Q2 - Target vs Collection in Rs Lakhs):\n1. Tehsil A (Chandbali): Target = 120.0, Collection = 108.5\n2. Tehsil B (Dhamnagar): Target = 95.0, Collection = 62.0\n3. Tehsil C (Basudevpur): Target = 140.0, Collection = 131.0\n4. Tehsil D (Bhandaripokhari): Target = 80.0, Collection = 44.5\n5. Tehsil E (Tihidi): Target = 110.0, Collection = 96.0"
    },
    "ideal_prompt": "You are a Senior Revenue Analyst to the Administrative Officer. Analyze the attached Q2 Land Revenue performance dataset. Provide: (1) A complete calculation table showing Target, Collection, Recovery Rate (%), and Shortfall (Rs Lakhs) for each Tehsil, (2) Overall Sub-Division recovery percentage, (3) Identification of the top-performing and bottom 2 lagging Tehsils, (4) 3 specific administrative interventions to enforce revenue recovery before Q3 review.",
    "ideal_output": "SUB-DIVISIONAL REVENUE PERFORMANCE ANALYSIS (Q2)\nPrepared for: Administrative Officer & Executive Magistrate\n\n1. PERFORMANCE MATRIX:\n\n| Tehsil | Target (Rs L) | Collection (Rs L) | Recovery Rate (%) | Shortfall (Rs L) | Status |\n|:---|:---:|:---:|:---:|:---:|:---:|\n| Basudevpur | 140.0 | 131.0 | 93.6% | 9.0 | Excellent |\n| Chandbali | 120.0 | 108.5 | 90.4% | 11.5 | Good |\n| Tihidi | 110.0 | 96.0 | 87.3% | 14.0 | Satisfactory |\n| Bhandaripokhari | 80.0 | 44.5 | 55.6% | 35.5 | Critical Lag |\n| Dhamnagar | 95.0 | 62.0 | 65.3% | 33.0 | Serious Lag |\n\n2. SUB-DIVISION OVERALL TOTALS:\n- Total Target: Rs 545.00 Lakhs\n- Total Collection: Rs 442.00 Lakhs\n- Overall Sub-Division Recovery Rate: 81.1%\n- Net Sub-Division Deficit: Rs 103.00 Lakhs\n\n3. KEY OBSERVATIONS:\n- Top Performer: Basudevpur (93.6%)\n- Worst Lagging Circles: Bhandaripokhari (55.6%) and Dhamnagar (65.3%) which account for 66.5% of total sub-division shortfall.\n\n4. RECOMMENDED INTERVENTIONS:\n- Issue immediate show-cause notice to Tahsildars of Bhandaripokhari and Dhamnagar for recovery below 70%.\n- Mobilize weekly special certificate court camps for top 50 commercial defaulters.\n- Direct RIs to reconcile pending industrial land water rate dues within 14 days.",
    "evaluation_criteria": [
      "Accurate percentage and total calculations",
      "Ranking of Tehsils by performance",
      "Actionable revenue recovery interventions"
    ],
    "improvement_suggestions": [
      "Request a structured Markdown table with specific mathematical columns",
      "Ask for priority ranking of lagging administrative units"
    ]
  },
  {
    "id": "scenario-12",
    "module_id": "module-3",
    "scenario_number": 12,
    "title": "Grievance Patterns",
    "description": "Thousands of grievance records need to be analysed to identify unusual increases, common categories, repeat complaints, and areas with concentrated grievances.",
    "administrative_context": "Public Grievance Redressal & Citizen Charter Cell",
    "task": "Use AI data analytics to cluster grievance categories, calculate average disposal times, and pinpoint recurring administrative hotspots.",
    "options": [
      {
        "tool_id": "chatgpt-data",
        "tool_name": "ChatGPT with Data Analysis",
        "classification": "CORRECT",
        "explanation": "ChatGPT with Data Analysis can aggregate thousands of complaint rows, group categories via Python, and highlight statistical outliers."
      },
      {
        "tool_id": "gemini",
        "tool_name": "Gemini",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Gemini can summarize text descriptions, but analyzing large CSV complaint files and calculating category distributions requires code execution."
      },
      {
        "tool_id": "gamma",
        "tool_name": "Gamma",
        "classification": "WRONG",
        "explanation": "Gamma makes presentations and cannot process or cluster grievance databases."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly is an image generator with no dataset processing capability."
      }
    ],
    "recommended_tool": {
      "id": "chatgpt-data",
      "name": "ChatGPT with Data Analysis",
      "why_recommended": "ChatGPT with Data Analysis clusters grievance categories, computes disposal bottlenecks, and reveals repeat failure points."
    },
    "practice_input": {
      "type": "grievance_dataset",
      "title": "Monthly Public Grievance Log (Sample Extract of 1,200 Complaints)",
      "content": "GRIEVANCE CATEGORIES & DISPOSAL METRICS (Last Month):\n1. Mutation & Land Record Correction: Total = 480, Disposed within 30 days = 210, Pending > 30 days = 270\n2. Ration Card & PDS Food Supply: Total = 310, Disposed within 30 days = 280, Pending > 30 days = 30\n3. Rural Road Repair & Encroachment: Total = 220, Disposed within 30 days = 70, Pending > 30 days = 150\n4. Old Age / Widow Pension Disbursal: Total = 130, Disposed within 30 days = 115, Pending > 30 days = 15\n5. Drinking Water & Tube-well Repair: Total = 60, Disposed within 30 days = 45, Pending > 30 days = 15"
    },
    "ideal_prompt": "You are the Public Grievance Officer in the Administrative Officer's office. Analyze the attached monthly grievance log. Generate: (1) A categorized summary table with Total Complaints, Share of Total (%), Disposal Rate (%), and Backlog (>30 days), (2) Identification of top 2 systemic bottleneck categories, (3) 3 administrative directives from the Administrative Officer to Tahsildars and BDOs to resolve pending pendency.",
    "ideal_output": "MONTHLY GRIEVANCE ANALYSIS & DISPOSAL REPORT\n\n1. GRIEVANCE DISTRIBUTION & DISPOSAL TABLE:\n\n| Category | Complaints | % Share | Disposed (<=30d) | Backlog (>30d) | Disposal Rate (%) |\n|:---|:---:|:---:|:---:|:---:|:---:|\n| Mutation & Land Records | 480 | 40.0% | 210 | 270 | 43.8% (Critical) |\n| Ration Card & PDS | 310 | 25.8% | 280 | 30 | 90.3% (Good) |\n| Rural Roads & Encroachment | 220 | 18.3% | 70 | 150 | 31.8% (Critical) |\n| Pension Disbursal | 130 | 10.8% | 115 | 15 | 88.5% (Good) |\n| Drinking Water Repairs | 60 | 5.0% | 45 | 15 | 75.0% (Satisfactory) |\n| Total | 1,200 | 100.0% | 720 | 480 | 60.0% Overall |\n\n2. SYSTEMIC BOTTLENECKS IDENTIFIED:\n- Land Mutation: Represents 40% of all grievances and accounts for 56.3% of total pendency (270 overdue cases).\n- Road Encroachments: Lowest disposal efficiency (31.8%) due to delayed joint police-revenue field visits.\n\n3. Administrative Officer DIRECTIVES:\n- Mandate all Tahsildars conduct \"Mutation Disposal Camps\" on Wednesdays to eliminate 270 backlog cases.\n- Formulate joint Revenue-Police enforcement teams with a fixed weekly roster for clearing road encroachments.\n- Institute automatic SMS escalation to Administrative Officer for any grievance pending beyond 45 days.",
    "evaluation_criteria": [
      "Accurate percentage calculations",
      "Clear identification of primary bottlenecks (Mutation & Encroachment)",
      "Practical administrative directives"
    ],
    "improvement_suggestions": [
      "Ask for percentage share of total complaints",
      "Request specific directives to field officers"
    ]
  },
  {
    "id": "scenario-13",
    "module_id": "module-3",
    "scenario_number": 13,
    "title": "Development Trends",
    "description": "The Administrative Officer wants to know whether development-project progress across 12 months has improved or declined in terms of financial utilization versus physical milestone completion.",
    "administrative_context": "Sub-Divisional Planning & Development Review",
    "task": "Use AI data analytics to calculate expenditure rates, compare physical completion vs budget burned, and detect slowing projects.",
    "options": [
      {
        "tool_id": "chatgpt-data",
        "tool_name": "ChatGPT with Data Analysis",
        "classification": "CORRECT",
        "explanation": "ChatGPT with Data Analysis executes trend analysis, calculates expenditure velocity, and tracks month-on-month milestone metrics."
      },
      {
        "tool_id": "claude",
        "tool_name": "Claude",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Claude can interpret narrative summaries, but calculating month-over-month numerical velocity across multiple projects is best executed via Python in ChatGPT."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI cannot compute mathematical trend lines or analyze financial progress."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly generates artwork and cannot process project ledger data."
      }
    ],
    "recommended_tool": {
      "id": "chatgpt-data",
      "name": "ChatGPT with Data Analysis",
      "why_recommended": "ChatGPT with Data Analysis computes trajectory trends, identifies stalled schemes, and evaluates financial vs physical alignment."
    },
    "practice_input": {
      "type": "development_data",
      "title": "12-Month Sub-Divisional Development Fund Progress (Sample Projects)",
      "content": "PROJECT PROGRESS SUMMARY (Sanctioned vs Utilized vs Physical Completion %):\n1. Rural Piped Water Supply: Sanctioned = Rs 450 Lakhs, Utilized = Rs 410 Lakhs (91.1%), Physical Completion = 68%\n2. Model High School Classrooms: Sanctioned = Rs 200 Lakhs, Utilized = Rs 190 Lakhs (95.0%), Physical Completion = 96%\n3. Anganwadi Centre Construction: Sanctioned = Rs 120 Lakhs, Utilized = Rs 45 Lakhs (37.5%), Physical Completion = 30%\n4. Bridge Construction (Salandi River): Sanctioned = Rs 600 Lakhs, Utilized = Rs 510 Lakhs (85.0%), Physical Completion = 82%"
    },
    "ideal_prompt": "You are a Development Planning Officer to the Administrative Officer. Analyze the 12-month development project progress. Provide: (1) A comparative evaluation table highlighting Financial Expenditure % vs Physical Progress %, (2) Identification of project anomalies (such as high expenditure with lagging physical progress, or severe under-utilization), (3) Recommendations for the upcoming District Development Review Committee.",
    "ideal_output": "DEVELOPMENT PROJECT PERFORMANCE & TREND REVIEW\n\n1. PROJECT COMPARATIVE EVALUATION:\n\n| Project Name | Sanction (Rs L) | Expenditure (Rs L) | Fin. Burn (%) | Physical % | Alignment / Anomaly Status |\n|:---|:---:|:---:|:---:|:---:|:---|\n| Model High Schools | 200.0 | 190.0 | 95.0% | 96.0% | Excellent (Balanced) |\n| Salandi Bridge | 600.0 | 510.0 | 85.0% | 82.0% | Good (On Track) |\n| Rural Water Supply | 450.0 | 410.0 | 91.1% | 68.0% | Serious Anomaly (Financial burn 91% but physical progress only 68%) |\n| Anganwadi Centres | 120.0 | 45.0 | 37.5% | 30.0% | Stalled / Low Utilization (Only 37.5% spent) |\n\n2. KEY ANOMALY FINDINGS:\n- Rural Water Supply: 91.1% funds spent but physical work is only 68% complete. Potential advance payments without site execution.\n- Anganwadi Construction: Severely lagging due to contractor delays or land dispute bottlenecks.\n\n3. RECOMMENDATIONS FOR Administrative Officer:\n- Order immediate physical verification audit by Executive Engineer (RWSS) for Rural Water Supply before releasing final bills.\n- Issue 15-day show-cause notice to lagging Anganwadi building contractors with threat of de-empanelment.",
    "evaluation_criteria": [
      "Detection of financial vs physical discrepancy in Water Supply",
      "Accurate percentage calculations",
      "Concrete administrative audit recommendations"
    ],
    "improvement_suggestions": [
      "Ask the AI to highlight financial vs physical variance",
      "Request specific inspection recommendations for leadership"
    ]
  },
  {
    "id": "scenario-14",
    "module_id": "module-3",
    "scenario_number": 14,
    "title": "Data-Driven Insights",
    "description": "An employee uploads administrative data across 4 development blocks and asks AI to identify the five most important trends, outliers, and administrative issues requiring immediate intervention.",
    "administrative_context": "Executive Decision Support & Governance Analytics",
    "task": "Use an AI analytical engine to automatically detect top 5 critical administrative insights, anomalies, and performance gaps from multi-block data.",
    "options": [
      {
        "tool_id": "chatgpt-data",
        "tool_name": "ChatGPT with Data Analysis",
        "classification": "CORRECT",
        "explanation": "ChatGPT with Data Analysis runs automated statistical summaries, outlier detection, and correlation analysis on tabular data."
      },
      {
        "tool_id": "gemini",
        "tool_name": "Gemini",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Gemini can provide broad observations, but ChatGPT with Data Analysis computes exact statistical variance and quantifies insights."
      },
      {
        "tool_id": "gamma",
        "tool_name": "Gamma",
        "classification": "WRONG",
        "explanation": "Gamma generates slides and does not perform exploratory data analysis."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a graphic design application and has no automated data mining capabilities."
      }
    ],
    "recommended_tool": {
      "id": "chatgpt-data",
      "name": "ChatGPT with Data Analysis",
      "why_recommended": "ChatGPT with Data Analysis automatically identifies statistical outliers, ranking shifts, and key administrative action areas."
    },
    "practice_input": {
      "type": "administrative_dataset",
      "title": "Multi-Block Key Performance Indicators (4 Blocks)",
      "content": "INDICATOR DATASET:\nBlock A: PMAY House Completion = 88%, Institutional Deliveries = 94%, MGNREGS 100-day households = 42%, Aadhaar Seeding = 98%\nBlock B: PMAY House Completion = 52%, Institutional Deliveries = 91%, MGNREGS 100-day households = 18%, Aadhaar Seeding = 82%\nBlock C: PMAY House Completion = 84%, Institutional Deliveries = 72%, MGNREGS 100-day households = 55%, Aadhaar Seeding = 95%\nBlock D: PMAY House Completion = 79%, Institutional Deliveries = 89%, MGNREGS 100-day households = 48%, Aadhaar Seeding = 91%"
    },
    "ideal_prompt": "You are the Chief Administrative Officer to the Administrative Officer. Analyze the multi-block administrative dataset across the 4 Blocks. Synthesize: (1) A comparative dashboard ranking each block across all 4 indicators, (2) The 5 most critical administrative insights & anomalies, (3) Block-specific action mandates for the BDOs of lagging blocks.",
    "ideal_output": "EXECUTIVE DATA INSIGHTS & PERFORMANCE DASHBOARD\n\n1. MULTI-BLOCK PERFORMANCE MATRIX:\n\n| Block | PMAY Houses (%) | Inst. Deliveries (%) | MGNREGS 100-Days (%) | Aadhaar Seeding (%) | Overall Rank |\n|:---|:---:|:---:|:---:|:---:|:---:|\n| Block A | 88.0% | 94.0% | 42.0% | 98.0% | Rank 1 (Balanced Lead) |\n| Block D | 79.0% | 89.0% | 48.0% | 91.0% | Rank 2 (Stable) |\n| Block C | 84.0% | 72.0% (Critical) | 55.0% (Lead) | 95.0% | Rank 3 (Health Alert) |\n| Block B | 52.0% (Critical) | 91.0% | 18.0% (Critical) | 82.0% (Lag) | Rank 4 (Severe Deficit) |\n\n2. THE 5 CRITICAL ADMINISTRATIVE INSIGHTS:\n1. Severe PMAY Lag in Block B: 52% completion vs 88% in Block A indicates unmonitored masonry shortages or geotagging delays.\n2. Acute MGNREGS Employment Deficit: Block B achieved only 18% 100-day completion, causing rural wage distress.\n3. Healthcare Warning in Block C: Institutional delivery rate dropped to 72% (vs 94% in Block A), indicating ambulance or sub-center gaps.\n4. Aadhaar Seeding Success: Blocks A and C achieved >95% integration, enabling direct benefit transfers.\n5. Inter-Block Disparity: Block B requires immediate administrative restructuring across welfare schemes.\n\n3. ACTION MANDATES:\n- BDO Block B: Daily review of PMAY instalments and deployment of Gaon Sathis to boost MGNREGS work sites.\n- BDO & CDMO Block C: Joint audit of ASHA/ANM tracking in remote hamlets to raise institutional deliveries above 90%.",
    "evaluation_criteria": [
      "Identification of the 5 specific data insights",
      "Clear block ranking table",
      "Targeted actionable directives for BDOs"
    ],
    "improvement_suggestions": [
      "Instruct AI to rank blocks numerically",
      "Require block-specific accountability measures"
    ]
  },
  {
    "id": "scenario-15",
    "module_id": "module-3",
    "scenario_number": 15,
    "title": "Review Meeting Data Analysis",
    "description": "The Administrative Officer needs a concise executive analytical brief of major trends, unusual values, and priority circles requiring immediate attention before the Monthly District Collector Review.",
    "administrative_context": "Administrative Officer Executive Briefing & Review Meeting Prep",
    "task": "Synthesize complex multi-departmental administrative data into a high-impact executive brief highlighting achievements, red flags, and priority interventions.",
    "options": [
      {
        "tool_id": "chatgpt-data",
        "tool_name": "ChatGPT with Data Analysis",
        "classification": "CORRECT",
        "explanation": "ChatGPT with Data Analysis synthesizes raw multi-sectoral data into an executive briefing with high analytical clarity and verified totals."
      },
      {
        "tool_id": "claude",
        "tool_name": "Claude",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Claude writes articulate briefings, but calculating numerical aggregates and variance across multiple departments is best performed by ChatGPT with Data Analysis."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly generates visuals and cannot analyze text or datasets."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a layout tool and cannot perform cross-departmental data analytics."
      }
    ],
    "recommended_tool": {
      "id": "chatgpt-data",
      "name": "ChatGPT with Data Analysis",
      "why_recommended": "ChatGPT with Data Analysis provides rapid quantitative synthesis, extracting red flags and positive achievements for executive meetings."
    },
    "practice_input": {
      "type": "review_data",
      "title": "Monthly Sub-Divisional Multi-Departmental Scorecard",
      "content": "SECTOR DATA:\n- Revenue Collection: Target = Rs 545 Lakhs, Achieved = Rs 442 Lakhs (81.1%), Worst = Bhandaripokhari (55.6%)\n- Grievance Redressal: Total = 1,200, Disposed = 720 (60.0%), Backlog = 480 (Mutation accounts for 56%)\n- Development Works: Total Sanction = Rs 1,370 Lakhs, Spent = Rs 1,155 Lakhs (84.3%), Water supply anomaly detected\n- Social Welfare & Pensions: 92% coverage, Aadhaar seeding at 91.5%"
    },
    "ideal_prompt": "You are the Executive Officer assisting the Administrative Officer for the upcoming Monthly District Review Meeting. Transform the multi-departmental scorecard into an Executive Briefing containing: (1) 3 Key Achievements to showcase, (2) 3 Critical Red Flags / Vulnerabilities with root cause analysis, (3) Talking points and defense strategy for the Administrative Officer, (4) Immediate 15-day targets.",
    "ideal_output": "EXECUTIVE BRIEFING FOR Administrative Officer\nMonthly District Collector Review Meeting\n\n1. KEY ACHIEVEMENTS (To Showcase):\n- Social Welfare & Pensions: Strong 92% coverage with 91.5% Aadhaar seeding completed.\n- Development Expenditure: High overall fund utilization rate of 84.3% (Rs 1,155 Lakhs disbursed).\n- Model Schools & Salandi Bridge: Both projects progressing on schedule at >80% physical completion.\n\n2. CRITICAL RED FLAGS (Vulnerabilities to Address):\n- Revenue Deficit: Sub-division at 81.1% recovery due to severe lag in Bhandaripokhari (55.6%) and Dhamnagar (65.3%).\n- Grievance Backlog: 480 pending cases (>30 days), driven primarily by delayed Tehsil land mutations.\n- RWSS Water Project Anomaly: 91.1% funds drawn while physical completion is only 68%.\n\n3. Administrative Officer TALKING POINTS & ACTION DEFENSE:\n- \"Special recovery camps notified in Bhandaripokhari starting Monday to bridge the Rs 35.5 Lakh revenue deficit.\"\n- \"Weekly Wednesday mutation disposal drive initiated to clear the 270 land record grievance backlog within 21 days.\"\n- \"Joint engineering inspection team dispatched to audit the rural piped water supply project.\"\n\n4. 15-DAY SUB-DIVISIONAL TARGETS:\n- Revenue recovery to cross 88% overall.\n- Clear minimum 200 overdue mutation grievance applications.\n- Complete 100% Aadhaar seeding in social pension registries.",
    "evaluation_criteria": [
      "Clear separation of achievements vs red flags",
      "Strategic talking points tailored for Administrative Officer",
      "Realistic 15-day measurable targets"
    ],
    "improvement_suggestions": [
      "Structure into distinct sections: Achievements, Red Flags, Strategy, Targets",
      "Include defensive talking points anticipating District Collector scrutiny"
    ]
  },
  {
    "id": "scenario-16",
    "module_id": "module-4",
    "scenario_number": 16,
    "title": "Report to Presentation",
    "description": "A 20-page development report needs to become an 8-slide professional presentation for an executive review meeting with the District Collector.",
    "administrative_context": "Sub-Divisional Executive Presentations & Briefings",
    "task": "Select the AI tool specifically designed to automatically convert dense document text into structured, professionally designed slide presentations.",
    "options": [
      {
        "tool_id": "gamma",
        "tool_name": "Gamma",
        "classification": "CORRECT",
        "explanation": "Gamma is a specialized AI presentation generator that transforms text reports into formatted 8-12 slide visual decks with cards, progress bars, and export to PPTX/PDF."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Canva AI has presentation templates, but Gamma is purpose-built to parse entire narrative documents and generate complete multi-slide layouts in one click."
      },
      {
        "tool_id": "notebooklm",
        "tool_name": "NotebookLM",
        "classification": "WRONG",
        "explanation": "NotebookLM is for research and document Q&A and cannot export or build slide presentations."
      },
      {
        "tool_id": "perplexity",
        "tool_name": "Perplexity",
        "classification": "WRONG",
        "explanation": "Perplexity is a search engine and does not create presentation slide decks."
      }
    ],
    "recommended_tool": {
      "id": "gamma",
      "name": "Gamma",
      "why_recommended": "Gamma instantly converts text reports into polished, executive-ready presentations with professional hierarchy and customizable themes."
    },
    "practice_input": {
      "type": "report_summary",
      "title": "Sub-Division Quarterly Development Report (Executive Extract)",
      "content": "REPORT EXTRACT:\n- Slide 1: Sub-Division Overview & Administrative Demographics (5 Tehsils, 4 Blocks, 7.8 Lakh population)\n- Slide 2: Q2 Revenue Performance (Rs 442 L collected against Rs 545 L target - 81.1%)\n- Slide 3: Major Infrastructure Projects (Salandi River Bridge 82%, Model Schools 96%)\n- Slide 4: Rural Drinking Water Scheme Challenges (RWSS physical vs financial gap)\n- Slide 5: Public Grievance Disposal Status (720 resolved, special camps for mutation)\n- Slide 6: Social Welfare Schemes & Pension saturation (92% coverage)\n- Slide 7: Monsoon Preparedness & Disaster Shelter Readiness (100% inspected)\n- Slide 8: Next Quarter Priority Action Milestones"
    },
    "ideal_prompt": "You are an Administrative Communications Officer in the Administrative Officer's office. Create an 8-slide executive presentation outline based on the Quarterly Development Report for the District Collector. For each slide provide: (1) Slide Title, (2) Key Message / Header, (3) 3 concise bullet points with numbers and facts, (4) Suggested visual card / stat layout style. Use a clean, authoritative administrative tone.",
    "ideal_output": "8-SLIDE PRESENTATION STRUCTURE (FOR GAMMA / PPTX EXPORT)\nTheme: Clean Navy / Slate Executive\n\nSLIDE 1: SUB-DIVISION OVERVIEW & JURISDICTION\n- Header: Governance & Administrative Profile\n- Bullets: 5 Tehsils & 4 Blocks covering 7.8 Lakh citizens; 100% digitized land record coverage; Focus on rural connectivity & social security.\n- Layout: Split Hero Card with map outline & key population stats.\n\nSLIDE 2: Q2 REVENUE COLLECTION PERFORMANCE\n- Header: Target vs Achievement Breakdown\n- Bullets: Total collection Rs 442.0 Lakhs against Rs 545.0 Lakh target (81.1%); Top Circle: Basudevpur (93.6%); Lagging Circles: Bhandaripokhari (55.6%) & Dhamnagar (65.3%).\n- Layout: 3-column comparative stat metric cards with progress rings.\n\nSLIDE 3: INFRASTRUCTURE MILESTONES\n- Header: Key Capital Works on Schedule\n- Bullets: Salandi River Bridge at 82% completion (target opening Dec 2024); Model High Schools at 96% completion; 42 km of rural arterial roads upgraded.\n- Layout: Horizontal timeline / milestone tracker.\n\nSLIDE 4: DRINKING WATER PROJECT AUDIT\n- Header: Identifying & Addressing Project Variances\n- Bullets: Rs 410 L utilized (91.1%) with 68% physical work; Joint technical audit ordered under Executive Engineer RWSS; Target 100% tap water commissioning by Q3.\n- Layout: Callout box with warning icon and mitigation steps.\n\nSLIDE 5: PUBLIC GRIEVANCE REDRESSAL EFFICIENCY\n- Header: Citizen Charter & Resolution Metrics\n- Bullets: 1,200 complaints received; 720 disposed within 30 days (60%); Special Wednesday \"Mutation Disposal Camps\" launched to clear 270 backlog files.\n- Layout: 2-column comparative card (Disposed vs In-Progress).\n\nSLIDE 6: SOCIAL WELFARE & DIRECT BENEFIT TRANSFERS\n- Header: Universal Pension & Welfare Saturation\n- Bullets: 92% coverage across Old Age & Widow pensions; 91.5% Aadhaar seeding completed; Zero disbursement pendency across all 4 blocks.\n- Layout: Stat highlight banner with 92% metric counter.\n\nSLIDE 7: DISASTER PREPAREDNESS & CYCLONE SHELTERS\n- Header: Monsoon Readiness & Citizen Safety\n- Bullets: 100% of Multipurpose Cyclone Shelters inspected & certified; 3-day dry food rations and 5,000 halogen tablets prepositioned; VHF backup active.\n- Layout: Checklist grid with green verification indicators.\n\nSLIDE 8: Q3 PRIORITY ACTION MILESTONES\n- Header: Roadmap for Next Quarter\n- Bullets: Achieve >90% revenue collection; Complete remaining 18% Salandi Bridge works; Eliminate mutation grievance backlog within 30 days.\n- Layout: 3 numbered action pill cards.",
    "evaluation_criteria": [
      "Complete 8-slide structured breakdown",
      "Accurate data from practice input",
      "Visual card and layout recommendations"
    ],
    "improvement_suggestions": [
      "Specify slide themes and card styles",
      "Ensure every slide includes quantifiable data points"
    ]
  },
  {
    "id": "scenario-17",
    "module_id": "module-4",
    "scenario_number": 17,
    "title": "Review Meeting Briefing Presentation",
    "description": "The Administrative Officer needs a presentation showing achievements, pending work, challenges and next steps for the visiting Principal Secretary review committee.",
    "administrative_context": "High-Level Review Committee Briefing",
    "task": "Use an AI presentation generator to structure an executive slide deck organized into Achievements, Pending Works, Challenges, and Next Steps.",
    "options": [
      {
        "tool_id": "gamma",
        "tool_name": "Gamma",
        "classification": "CORRECT",
        "explanation": "Gamma excels at generating decision-oriented briefing decks with clear visual hierarchy for leadership reviews."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Canva AI is suitable for designing single slides, but Gamma generates the entire multi-section narrative briefing deck automatically."
      },
      {
        "tool_id": "claude",
        "tool_name": "Claude",
        "classification": "WRONG",
        "explanation": "Claude is a text model and cannot output slide decks or visual presentations directly."
      },
      {
        "tool_id": "notebooklm",
        "tool_name": "NotebookLM",
        "classification": "WRONG",
        "explanation": "NotebookLM is a document study tool and does not build slide presentations."
      }
    ],
    "recommended_tool": {
      "id": "gamma",
      "name": "Gamma",
      "why_recommended": "Gamma produces structured executive decks with progress cards, stat indicators, and professional slide layouts."
    },
    "practice_input": {
      "type": "briefing_data",
      "title": "Sub-Division Key Focus Areas for Principal Secretary Review",
      "content": "KEY MATTERS:\n- Achievements: 96% Model Schools ready; 92% Pension saturation; 100% Cyclone Shelter inspection certified.\n- Pending Works: Salandi Bridge (18% left); Rural Water Supply pipe laying in 12 villages.\n- Challenges: Revenue deficit in 2 Tehsils (Bhandaripokhari & Dhamnagar); Mutation grievance backlog (270 cases).\n- Next Steps: Weekly special revenue recovery camps; 15-day clearance drive for land disputes; Fast-tracking bridge inauguration."
    },
    "ideal_prompt": "You are preparing a high-level briefing presentation for the Administrative Officer to present before the visiting Principal Secretary. Using Gamma's presentation framework, draft a 6-slide briefing deck organized around: (1) Executive Dashboard, (2) Major Administrative Achievements, (3) Ongoing Infrastructure Works, (4) Administrative Bottlenecks & Challenges, (5) Corrective Actions Underway, (6) 30-Day Commitments. Include visual layout instructions.",
    "ideal_output": "EXECUTIVE BRIEFING DECK: SUB-DIVISION PERFORMANCE REVIEW\nPresented to: Principal Secretary & State Monitoring Committee\n\nSLIDE 1: EXECUTIVE DASHBOARD (HIGH-LEVEL SNAPSHOT)\n- Overall Performance Score: 84.3% Scheme Utilization | 92% Welfare Saturation | 81.1% Revenue Recovery.\n- Layout: 3 KPI metric tiles at the top with Sub-Division administrative map.\n\nSLIDE 2: KEY ADMINISTRATIVE ACHIEVEMENTS\n- Education: 96% Model High Schools completed with smart classrooms.\n- Social Security: 92% pension coverage with 91.5% Aadhaar seeding.\n- Disaster Readiness: 100% of Cyclone Shelters audited and certified.\n- Layout: 3 feature cards with checkmark badges.\n\nSLIDE 3: ONGOING CAPITAL INFRASTRUCTURE\n- Salandi River Bridge: 82% completed; superstructure placed; approach road in progress.\n- Rural Piped Water Supply: Rs 410 L utilized; distribution lines active in 28 of 40 villages.\n- Layout: 2-column comparative progress bars.\n\nSLIDE 4: CHALLENGES & BOTTLENECKS IDENTIFIED\n- Revenue Lag: 2 Tehsils below 70% recovery due to dispute litigation.\n- Land Mutation Backlog: 270 grievances pending beyond 30 days.\n- Layout: Two warning cards highlighted in amber and red borders.\n\nSLIDE 5: CORRECTIVE INTERVENTIONS UNDERWAY\n- Revenue Enforcement: Weekly mobile certificate camps notified.\n- Grievance Clearance: Wednesday special mutation disposal camps chaired by Administrative Officer.\n- Engineering Audit: Joint inspection ordered for water supply schemes.\n- Layout: 3-step action roadmap.\n\nSLIDE 6: 30-DAY ADMINISTRATIVE COMMITMENTS\n- Bridge completion and load testing by end of month.\n- Clear 100% of overdue mutation grievances.\n- Bring all Tehsils above 85% revenue recovery.\n- Layout: Final commitment pledge card with signature block.",
    "evaluation_criteria": [
      "Clear 6-slide executive structure",
      "Categorization into Achievements, Challenges, and Commitments",
      "Professional civil service tone"
    ],
    "improvement_suggestions": [
      "Include KPI metrics on the dashboard slide",
      "Define tangible 30-day commitments"
    ]
  },
  {
    "id": "scenario-18",
    "module_id": "module-4",
    "scenario_number": 18,
    "title": "Infographic",
    "description": "The office wants to explain a government scheme's implementation process and citizen application workflow through an attractive, easy-to-understand visual infographic.",
    "administrative_context": "Citizen Awareness & Public Information Campaign",
    "task": "Select the best visual design platform for creating citizen-friendly infographics with clear step numbers, icons, and contact helplines.",
    "options": [
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "CORRECT",
        "explanation": "Canva AI is the ideal platform for designing public infographics, visual posters, step-by-step citizen guides, and social awareness banners."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Adobe Firefly can generate raw background artwork, but Canva AI provides complete infographic layouts with typography, icons, and text boxes."
      },
      {
        "tool_id": "notebooklm",
        "tool_name": "NotebookLM",
        "classification": "WRONG",
        "explanation": "NotebookLM is a text notebook tool and cannot create visual infographics."
      },
      {
        "tool_id": "perplexity",
        "tool_name": "Perplexity",
        "classification": "WRONG",
        "explanation": "Perplexity is a search engine and does not have visual graphic design tools."
      }
    ],
    "recommended_tool": {
      "id": "canva-ai",
      "name": "Canva AI",
      "why_recommended": "Canva AI features hundreds of government infographic templates, icons, and visual layout tools tailored for public awareness."
    },
    "practice_input": {
      "type": "scheme_workflow",
      "title": "Citizen Guide: Applying for MKKVY Agriculture Subsidy in 4 Steps",
      "content": "CITIZEN WORKFLOW:\n- Step 1: Online Registration at Krushak Portal (Aadhaar & Bank Account linked)\n- Step 2: Upload Documents (Land RoR, Passport Photo, Mobile Number)\n- Step 3: Field Verification by Village Agriculture Worker (VAW) & Revenue Inspector (RI)\n- Step 4: Direct Benefit Transfer (DBT) of Rs 5,000 tranche directly into Aadhaar-seeded Bank Account\n- Helpline: Toll-Free 1800-123-4567 / Administration Office Grievance Cell"
    },
    "ideal_prompt": "You are a Public Information & Graphic Design Specialist in the Administrative Officer's office. Design a comprehensive visual infographic layout for the \"Mukhyamantri Krushi Vikash Yojana (MKKVY) - 4 Simple Steps to Get Your Subsidy\". Include: (1) Infographic Title & Header Banner with Government Emblem placeholder, (2) 4 visual step cards with suggested icons, brief citizen text, and required documents, (3) Beneficiary helpline banner, (4) Color scheme and font styling recommendations for accessibility.",
    "ideal_output": "CANVA INFOGRAPHIC DESIGN SPECIFICATION:\nMUKHYAMANTRI KRUSHI VIKASH YOJANA (MKKVY)\nTheme: Official Green & Navy Gold (High Contrast for Public Notice Boards)\n\n1. HEADER BANNER:\n- Main Title: \"Apply for Farmer Assistance in 4 Simple Steps\"\n- Subtitle: \"Mukhyamantri Krushi Vikash Yojana 2024-25 | Administration Office, Bhadrak\"\n- Badge: Official Government Scheme Seal & Toll-Free Helpline\n\n2. 4 STEP CARDS (Vertical Flow with Arrow Connectors):\n\n- STEP 1: ONLINE PORTAL REGISTRATION\n  * Icon: Laptop / Mobile Phone\n  * Text: Visit krushak.odisha.gov.in and login using your Aadhaar number and OTP.\n  * Requirement: Active mobile linked to Aadhaar.\n\n- STEP 2: DOCUMENT UPLOAD\n  * Icon: Document / File Upload\n  * Text: Upload your updated Land Record (RoR) and bank passbook details.\n  * Requirement: Landholding <= 2 Hectares.\n\n- STEP 3: DOORSTEP FIELD VERIFICATION\n  * Icon: Checkmark Shield / Officer Badge\n  * Text: Your local Village Agriculture Worker (VAW) and Revenue Inspector will verify your land parcel.\n  * Timeline: Completed within 15 days.\n\n- STEP 4: DIRECT BANK DISBURSEMENT (DBT)\n  * Icon: Bank / Rupee Coin Transfer\n  * Text: Receive Rs 5,000 per tranche directly in your Aadhaar-seeded bank account.\n  * Frequency: Bi-annual DBT payment.\n\n3. FOOTER HELPLINE BANNER:\n- Toll-Free Citizen Helpline: 1800-123-4567 | Email: Administrative Officer.bhadrak@gov.in\n- Single Window Helpdesk: Counter No. 1, Administration Office (10 AM - 5 PM).",
    "evaluation_criteria": [
      "Visual layout specification with 4 clear steps",
      "Icon and color accessibility choices",
      "Inclusion of official helplines and portals"
    ],
    "improvement_suggestions": [
      "Specify icon suggestions for each step",
      "Include high-contrast color codes for accessibility"
    ]
  },
  {
    "id": "scenario-19",
    "module_id": "module-4",
    "scenario_number": 19,
    "title": "Process Diagram",
    "description": "The office wants to visually explain the administrative grievance redressal workflow: Citizen Complaint -> Verification -> Department Assignment -> Action -> Review -> Resolution.",
    "administrative_context": "Administrative SOP & Citizen Charter Flowcharts",
    "task": "Use a visual design tool to generate a clear, professional multi-stage administrative process flowchart diagram.",
    "options": [
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "CORRECT",
        "explanation": "Canva AI is ideal for building clean process flowcharts, stage diagrams, and administrative operational workflows."
      },
      {
        "tool_id": "gamma",
        "tool_name": "Gamma",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Gamma can format text lists into cards, but Canva AI provides dedicated flowchart symbols, connectors, and graphic node control."
      },
      {
        "tool_id": "notebooklm",
        "tool_name": "NotebookLM",
        "classification": "WRONG",
        "explanation": "NotebookLM is a document study tool and cannot draw process diagrams."
      },
      {
        "tool_id": "perplexity",
        "tool_name": "Perplexity",
        "classification": "WRONG",
        "explanation": "Perplexity is a search engine and does not have diagramming capabilities."
      }
    ],
    "recommended_tool": {
      "id": "canva-ai",
      "name": "Canva AI",
      "why_recommended": "Canva AI provides pre-built flowchart nodes, process arrows, and milestone styling for administrative SOP diagrams."
    },
    "practice_input": {
      "type": "process_flow",
      "title": "Standard Grievance Redressal Protocol (6 Stages)",
      "content": "STAGES:\n1. Citizen Submission: Online portal or physical single window counter -> Docket ID generated.\n2. Initial Scrutiny: Administrative Officer grievance cell screens document within 24 hours.\n3. Department Assignment: Forwarded to Tahsildar / BDO with 15-day timeline.\n4. Field Action & Inquiry: Field officer inspects site and uploads action-taken report.\n5. Administrative Officer Review: Weekly magistrate review to verify resolution quality.\n6. Final Resolution & SMS: Citizen notified via SMS and case closed."
    },
    "ideal_prompt": "You are an Administrative Systems Designer in the Administrative Officer's office. Create a structured design blueprint for a 6-stage Public Grievance Redressal Flowchart. Detail: (1) Stage Name & Sequence, (2) Role Responsible, (3) Timeline / SLA, (4) Specific Action performed at each stage, (5) Visual shape and connector style (e.g. decision diamond, action rectangle).",
    "ideal_output": "ADMINISTRATIVE PROCESS FLOWCHART BLUEPRINT\nWorkflow: Citizen Grievance Redressal Lifecycle (SLA: 21 Days)\n\nSTAGE 1: CITIZEN LODGING & DOCKETING\n- Shape: Rounded Rectangle (Start Node)\n- Actor: Citizen / Counter Operator\n- Action: Submit grievance at Single Window Counter or online portal.\n- Output: Instant 10-digit SMS Docket Tracking Number.\n- Connector: Downward Flow Arrow\n\nSTAGE 2: INITIAL SCRUTINY & TRIAGE (24 Hours)\n- Shape: Process Rectangle\n- Actor: Grievance Nodal Officer, Administration Office\n- Action: Screen jurisdiction, verify documents, and categorize urgency.\n- Connector: Downward Flow Arrow\n\nSTAGE 3: LINE DEPARTMENT ASSIGNMENT (Day 2)\n- Shape: Process Rectangle\n- Actor: Administrative Officer / Executive Magistrate\n- Action: Electronic endorsement to Tahsildar, BDO, or Police with statutory deadline.\n- Connector: Downward Flow Arrow\n\nSTAGE 4: FIELD INQUIRY & ACTION (Days 3-15)\n- Shape: Action Rectangle with Decision Diamond\n- Actor: Revenue Inspector / Field Engineer\n- Action: On-site inquiry, hearing of parties, and draft Action Taken Report (ATR).\n- Decision Node: Is dispute resolved? If NO -> Escalate to Joint Hearing.\n- Connector: Downward Flow Arrow\n\nSTAGE 5: Administrative Officer QUALITY REVIEW (Days 16-18)\n- Shape: Process Rectangle\n- Actor: Administrative Officer & Executive Magistrate\n- Action: Review ATR in Wednesday Grievance Court; approve or order re-investigation.\n- Connector: Downward Flow Arrow\n\nSTAGE 6: CLOSURE & CITIZEN FEEDBACK (Day 21)\n- Shape: Rounded Rectangle (End Node)\n- Actor: System Portal\n- Action: Upload signed disposal order; SMS alert sent to citizen; automated satisfaction rating.",
    "evaluation_criteria": [
      "Complete 6-stage chronological workflow",
      "Explicit SLA timelines per stage",
      "Design shapes and decision node integration"
    ],
    "improvement_suggestions": [
      "Include decision nodes (e.g. dispute resolved YES/NO)",
      "Specify SLAs in days for each stage"
    ]
  },
  {
    "id": "scenario-20",
    "module_id": "module-4",
    "scenario_number": 20,
    "title": "Custom Visuals & Illustrations",
    "description": "A review presentation and administrative campaign booklet needs custom artistic illustrations explaining a new green governance and digital office initiative.",
    "administrative_context": "Public Relations & Administrative Campaign Art",
    "task": "Select the generative AI tool specialized in producing high-quality custom illustrations and thematic artwork from descriptive prompts.",
    "options": [
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "CORRECT",
        "explanation": "Adobe Firefly is specifically designed for generating custom illustrations, artwork, and visual concept elements with commercially safe AI models."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Canva AI integrates image generation tools, but Adobe Firefly provides deeper artistic style controls, vector styling, and prompt precision."
      },
      {
        "tool_id": "notebooklm",
        "tool_name": "NotebookLM",
        "classification": "WRONG",
        "explanation": "NotebookLM is a text notebook and cannot generate images or illustrations."
      },
      {
        "tool_id": "perplexity",
        "tool_name": "Perplexity",
        "classification": "WRONG",
        "explanation": "Perplexity is an AI search engine and does not generate artistic visual assets."
      }
    ],
    "recommended_tool": {
      "id": "adobe-firefly",
      "name": "Adobe Firefly",
      "why_recommended": "Adobe Firefly generates custom thematic illustrations in vector or clean digital art styles for official administrative publications."
    },
    "practice_input": {
      "type": "visual_brief",
      "title": "Administrative Campaign: \"Digital & Green Administration Office Initiative\"",
      "content": "VISUAL CONCEPT BRIEF:\n- Concept 1: Modern Indian administrative office with solar panels on roof, lush greenery, and citizens accessing digital touch-screen kiosks.\n- Concept 2: Farmer standing in a lush green agricultural field holding a smartphone with an e-governance app, solar water pump in background.\n- Art Style: Clean flat vector illustration, professional, warm morning lighting, government-appropriate color palette."
    },
    "ideal_prompt": "You are a Creative Visual Designer for a government administrative department. Formulate 2 high-precision image generation prompts for Adobe Firefly to create cover illustrations for the \"Digital & Green Governance Report\". Specify: (1) Subject Matter, (2) Environment & Setting, (3) Lighting & Camera Angle, (4) Art Style & Color Palette, (5) Negative constraints to avoid caricatures or inappropriate elements.",
    "ideal_output": "ADOBE FIREFLY GENERATIVE VISUAL PROMPTS:\n\nPROMPT 1: DIGITAL REVENUE & CITIZEN EMPOWERMENT\n- Text Prompt: \"Clean flat vector illustration of a modern Indian district administrative office with solar panels on the roof and a green garden. In the foreground, an Indian rural citizen and a professional female government officer are viewing a tablet screen together. Bright natural morning sunlight, clean lines, professional aesthetic. Color palette of navy blue, soft emerald green, and warm ochre. Vector art, high resolution, minimalist, trustworthy, public administration style.\"\n- Style Controls: Graphic / Vector, Soft Warm Lighting, Wide Angle.\n- Negative Constraints: No distorted hands, no chaotic clutter, no text watermarks, no exaggerated caricatures.\n\nPROMPT 2: SUSTAINABLE AGRICULTURE & SMART GOVERNANCE\n- Text Prompt: \"Flat art illustration of a smiling Indian farmer standing in a thriving green agricultural field at sunrise, holding a mobile phone displaying a digital government welfare receipt. In the background, solar-powered water irrigation pump and canal. Crisp vector shapes, soft gradient sky with morning sun rays, harmonious modern aesthetic. Corporate government report cover quality.\"\n- Style Controls: Illustration / Concept Art, Vibrant yet professional.\n- Negative Constraints: Avoid dark moody shadows, no clutter, no distorted facial features.",
    "evaluation_criteria": [
      "Two complete, descriptive generative prompts",
      "Explicit style specifications (flat vector, lighting, palette)",
      "Inclusion of negative constraints to ensure professional output"
    ],
    "improvement_suggestions": [
      "Specify camera angles and lighting conditions",
      "Include negative prompts to prevent distorted artifacts"
    ]
  },
  {
    "id": "scenario-21",
    "module_id": "module-5",
    "scenario_number": 21,
    "title": "Official Email to Department Heads",
    "description": "The Administrative Officer needs an official email to all Line Department Heads requesting updated data and status reports before the Quarterly Sub-Divisional Review.",
    "administrative_context": "Inter-Departmental Administrative Communication",
    "task": "Draft a firm, professional, and clear executive email to senior departmental officers with structured requirements and strict deadlines.",
    "options": [
      {
        "tool_id": "chatgpt",
        "tool_name": "ChatGPT",
        "classification": "CORRECT",
        "explanation": "ChatGPT is outstanding at adopting proper civil service etiquette, drafting clear executive emails, and organizing required report attachments."
      },
      {
        "tool_id": "gemini",
        "tool_name": "Gemini",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Gemini handles emails well (especially via Gmail), but ChatGPT provides sharp administrative tone tuning and structured checklists."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a graphic tool and does not draft official email correspondence."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly is an image generator and cannot write emails."
      }
    ],
    "recommended_tool": {
      "id": "chatgpt",
      "name": "ChatGPT",
      "why_recommended": "ChatGPT structures authoritative, professional executive communications respecting administrative hierarchy and clarity."
    },
    "practice_input": {
      "type": "email_brief",
      "title": "Executive Email Requirements - Administration Office",
      "content": "DETAILS:\n- From: Administrative Officer & Sub-Divisional Magistrate, Bhadrak\n- To: All Tahsildars, Block Development Officers, Executive Engineers (RWSS, PWD, Minor Irrigation), ACSO, and CDPO\n- Context: Upcoming District Collector Quarterly Development Review on 25th November 2024\n- Required Submission: Updated progress in prescribed Annexures A, B, and C by 20th November at 5:00 PM\n- Key Warning: No incomplete submissions; personal attendance mandatory in pre-review meeting on 22nd November."
    },
    "ideal_prompt": "You are an Executive Assistant to the Administrative Officer & Executive Magistrate. Draft a formal administrative email addressed to all Sub-Divisional Line Department Heads (Tahsildars, BDOs, Executive Engineers, ACSO, CDPO). Include: (1) Professional Subject Line, (2) Context of upcoming District Collector Review, (3) Numbered list of required data deliverables (Annexures A, B, C), (4) Strict deadline (20th Nov 2024, 5:00 PM), (5) Pre-review meeting notification (22nd Nov at 11:00 AM), (6) Official sign-off block.",
    "ideal_output": "SUBJECT: URGENT: Submission of Updated Departmental Status Reports for District Collector Quarterly Review - Reg.\n\nFrom: Administrative Officer & Sub-Divisional Magistrate, Bhadrak <Administrative Officer.bhadrak@gov.in>\nTo: All Tahsildars / BDOs / Executive Engineers (RWSS, PWD, MI) / ACSO / CDPOs, Bhadrak Sub-Division\n\nDear Officers,\n\nI invite your immediate attention to the upcoming District Collector Quarterly Development Review scheduled for 25th November 2024.\n\nTo consolidate the comprehensive Sub-Divisional performance dossier, all Department Heads are hereby directed to submit their updated progress reports strictly in the prescribed formats:\n\n1. Annexure-A: Financial & Physical Progress of Capital Infrastructure Works (2024-25).\n2. Annexure-B: Public Grievance Disposal Status & Overdue Pendency Breakdown.\n3. Annexure-C: Beneficiary Saturation under Direct Welfare & Subsidies Schemes.\n\nSUBMISSION DEADLINE:\nAll verified reports must be emailed to this office (Administrative Officer.bhadrak@gov.in) with a hard copy endorsed by 20th November 2024 before 5:00 PM positively.\n\nPRE-REVIEW COORDINATION MEETING:\nA mandatory pre-review meeting to reconcile all departmental data will be held under my Chairmanship on 22nd November 2024 at 11:00 AM in the Administrative Officer Conference Hall. All officers must attend in person with verified master registers.\n\nPlease treat this on PRIORITY.\n\nYours sincerely,\n\nSd/-\nAdministrative Officer & Sub-Divisional Magistrate\nBhadrak Sub-Division\nOffice Phone: 06784-XXXXXX",
    "evaluation_criteria": [
      "Professional executive subject line",
      "Clear itemization of Annexures and deliverables",
      "Explicit compliance deadlines and pre-meeting summons"
    ],
    "improvement_suggestions": [
      "Include Annexure names explicitly in the email body",
      "Add official office contact block"
    ]
  },
  {
    "id": "scenario-22",
    "module_id": "module-5",
    "scenario_number": 22,
    "title": "Meeting Agenda Structuring",
    "description": "A multi-departmental review meeting will cover Revenue Recovery, Public Grievances, Development Schemes, and Law & Order. A structured, timed administrative agenda is required.",
    "administrative_context": "Sub-Divisional Meeting Management & Protocol",
    "task": "Structure a professional, timed meeting agenda allocating slots, presentation responsibilities, and key discussion questions.",
    "options": [
      {
        "tool_id": "chatgpt",
        "tool_name": "ChatGPT",
        "classification": "CORRECT",
        "explanation": "ChatGPT excels at structuring organized administrative agendas, allocating realistic time blocks, and assigning responsible officers."
      },
      {
        "tool_id": "claude",
        "tool_name": "Claude",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Claude can structure agendas well, but ChatGPT provides rapid template customization and time-block breakdowns."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a graphic tool and does not manage administrative agenda planning."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly generates visual images and cannot structure meeting agendas."
      }
    ],
    "recommended_tool": {
      "id": "chatgpt",
      "name": "ChatGPT",
      "why_recommended": "ChatGPT creates structured, time-blocked meeting agendas with assigned officer presentations and discussion topics."
    },
    "practice_input": {
      "type": "agenda_topics",
      "title": "Topics for Monthly Sub-Division Coordination Meeting",
      "content": "MEETING DURATION: 2 Hours (10:30 AM to 12:30 PM)\nTOPICS TO COVER:\n1. Confirmation of previous meeting minutes & compliance (15 mins)\n2. Revenue Collection & Certificate Cases Review (Tahsildars - 30 mins)\n3. Development & Infrastructure Projects Review (BDOs & Engineers - 30 mins)\n4. Grievance Redressal & Citizen Charter Compliance (20 mins)\n5. Law & Order and Disaster Preparedness (15 mins)\n6. Concluding Remarks & Directives by Administrative Officer (10 mins)"
    },
    "ideal_prompt": "You are an Administrative Officer to the Administrative Officer. Formulate a comprehensive Timed Meeting Agenda for the Monthly Sub-Divisional Coordination Meeting (Duration: 2 Hours, 10:30 AM - 12:30 PM). Create a structured table with: | Time Slot | Agenda Item / Topic | Lead Officer / Department | Key Discussion Focus | Required Documentation |.",
    "ideal_output": "STRUCTURED MEETING AGENDA: MONTHLY SUB-DIVISION COORDINATION MEETING\nChair: Administrative Officer & Executive Magistrate | Venue: Conference Hall | Time: 10:30 AM - 12:30 PM\n\n| Time Slot | Agenda Item / Topic | Lead Presenter | Key Discussion Focus | Required Documents |\n|:---|:---|:---|:---|:---|\n| 10:30 - 10:45 AM | Action Taken Report (ATR) | Head Clerk / Nodal Officer | Review of compliance on decisions of previous meeting | Signed ATR Register |\n| 10:45 - 11:15 AM | Land Revenue & Recovery | All Tahsildars | Q2 collection targets, lagging circles, PDR certificate cases >Rs 50K | e-PDR Ledger & Demand Collection Balance (DCB) |\n| 11:15 - 11:45 AM | Development Schemes | BDOs & Exec. Engineers | PMAY house completion, MGNREGS wage disbursals, piped water supply status | Physical vs Financial Progress Reports |\n| 11:45 - 12:05 PM | Public Grievances & Mutations | Grievance Cell & Tahsildars | Disposal of complaints >30 days, special mutation disposal camp schedule | Grievance Portal Pendency Sheet |\n| 12:05 - 12:20 PM | Law & Order & Disaster Readiness | SDPO & Relief Officer | Encroachment removal coordination, cyclone shelter stock certification | Police deployment plans & Shelter audit list |\n| 12:20 - 12:30 PM | Chairman's Directives | Administrative Officer & Executive Magistrate | Summary of time-bound targets, next meeting date, closing remarks | Official Minutes Recording Sheet |\n\nMEETING PROTOCOL RULES:\n- Presentations strictly limited to assigned time limits.\n- All line department heads must bring signed duplicate copies of required registers.",
    "evaluation_criteria": [
      "Accurate 2-hour timeline calculation",
      "Clear tabular structure with lead presenters",
      "Inclusion of specific required documentation per slot"
    ],
    "improvement_suggestions": [
      "Include a dedicated Action Taken Report (ATR) review slot",
      "Specify required documentation for each agenda topic"
    ]
  },
  {
    "id": "scenario-23",
    "module_id": "module-5",
    "scenario_number": 23,
    "title": "Synthesizing Formal Meeting Minutes",
    "description": "Rough meeting notes containing discussions, arguments, decisions and officer assignments need to be converted into authoritative, formal Minutes of the Meeting (MoM) with Resolution numbers.",
    "administrative_context": "Sub-Divisional Meeting Proceedings & Official Minutes",
    "task": "Use an AI model with superior contextual nuance and administrative polish to convert rough scribble notes into formal proceedings of the meeting.",
    "options": [
      {
        "tool_id": "claude",
        "tool_name": "Claude",
        "classification": "CORRECT",
        "explanation": "Claude is renowned for transforming unstructured meeting transcripts into articulate, legally precise official minutes with resolution numbering."
      },
      {
        "tool_id": "chatgpt",
        "tool_name": "ChatGPT",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "ChatGPT can write minutes, but Claude provides exceptional formal refinement, eliminating casual remarks while preserving all official resolutions."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a visual tool and cannot synthesize meeting minutes."
      },
      {
        "tool_id": "gamma",
        "tool_name": "Gamma",
        "classification": "WRONG",
        "explanation": "Gamma generates slides and does not produce formal legal meeting minutes."
      }
    ],
    "recommended_tool": {
      "id": "claude",
      "name": "Claude",
      "why_recommended": "Claude transforms rough proceedings into formal, numbered administrative resolutions with unambiguous officer accountability."
    },
    "practice_input": {
      "type": "rough_notes",
      "title": "Rough Scribbled Notes of Review Meeting - Administration Office",
      "content": "NOTES:\nMeeting on 14 Nov at 11:30 AM. Administrative Officer was angry about Bhandaripokhari revenue being only 55%. Tahsildar said staff was on election duty. Administrative Officer said no excuse, conduct special recovery camp by 20 Nov. Basudevpur did good (93%). On water supply, EE RWSS was questioned why 91% money spent but 32% work pending. Joint inquiry ordered with BDO Basudevpur within 7 days. On paddy procurement, 5 PACS had faulty moisture meters. ACSO told to replace them by 18 Nov. Meeting ended 1:15 PM."
    },
    "ideal_prompt": "You are the Chief Administrative Officer to the Administrative Officer & Executive Magistrate. Transform the attached rough meeting notes into formal \"Proceedings of the Sub-Divisional Review Meeting\". Structure into: (1) Meeting Metadata (Date, Time, Chair, Attendees), (2) Formalized Discussions by Sector, (3) Numbered Official Resolutions (Resolution No. 1/2024 to 4/2024) specifying Action Officer, Task, and Hard Deadline, (4) Formal closing signature block.",
    "ideal_output": "PROCEEDINGS OF THE SUB-DIVISIONAL INTER-DEPARTMENTAL REVIEW MEETING\nHeld on 14th November 2024 at 11:30 AM in the Conference Hall, Administration Office\nPresided by: Administrative Officer & Sub-Divisional Magistrate, Bhadrak\n\nPRESENT:\n1. Administrative Officer & Executive Magistrate, Bhadrak (In Chair)\n2. All Tahsildars of Bhadrak Sub-Division\n3. All Block Development Officers of Bhadrak Sub-Division\n4. Executive Engineer, RWSS Division\n5. Assistant Civil Supplies Officer (ACSO), Bhadrak\n\nRECORD OF DISCUSSIONS & FORMAL RESOLUTIONS:\n\n1. REVIEW OF REVENUE COLLECTION:\nThe Chair expressed serious concern over the lagging revenue performance of Bhandaripokhari Tehsil (55.6% recovery). The plea of staff diversion for election duties was disallowed in view of revenue targets.\n- RESOLUTION NO. 01/REV/2024: The Tahsildar, Bhandaripokhari is directed to organize Special Certificate Recovery Camps commencing from 20th November 2024 to recover outstanding demands from top commercial defaulters. Compliance report to be submitted weekly.\n\n2. DRINKING WATER INFRASTRUCTURE AUDIT:\nThe Chair noted with gravity the variance in the Rural Piped Water Supply Project, where financial expenditure has reached 91.1% against physical completion of only 68%.\n- RESOLUTION NO. 02/RWSS/2024: A Joint Technical Inquiry Committee comprising the Executive Engineer (RWSS) and BDO Basudevpur is hereby constituted to conduct on-site physical measurements across all 12 disputed project sites and submit a comprehensive audit report within seven (7) days (by 21st November 2024).\n\n3. PADDY PROCUREMENT INFRASTRUCTURE READINESS:\nDuring inspection reviews, five (5) Primary Agricultural Credit Societies (PACS) were reported with defective moisture analysis meters.\n- RESOLUTION NO. 03/CS/2024: The Assistant Civil Supplies Officer (ACSO) is directed to replace all defective moisture meters and calibrate weighbridges across all identified PACS by 18th November 2024.\n\nThe meeting concluded at 01:15 PM with thanks to the Chair.\n\nSd/-\nAdministrative Officer & Sub-Divisional Magistrate\nBhadrak",
    "evaluation_criteria": [
      "Formal administrative language replacing colloquial notes",
      "Numbered official resolutions with assigned officer and deadline",
      "Correct synthesis of all 3 agenda discussions"
    ],
    "improvement_suggestions": [
      "Adopt formal resolution numbering (e.g. Resolution No. 01/REV/2024)",
      "Ensure emotional expressions in notes are converted into professional civil service language"
    ]
  },
  {
    "id": "scenario-24",
    "module_id": "module-5",
    "scenario_number": 24,
    "title": "Action-Item Summary Matrix",
    "description": "A 10-page meeting transcript needs to be converted into a structured executive monitoring matrix: Officer -> Task -> Deadline -> Follow-up Method.",
    "administrative_context": "Compliance Tracking & Executive Action Matrices",
    "task": "Extract all administrative directives from meeting notes into a clean, actionable monitoring table.",
    "options": [
      {
        "tool_id": "chatgpt",
        "tool_name": "ChatGPT",
        "classification": "CORRECT",
        "explanation": "ChatGPT is outstanding at parsing multi-page meeting proceedings and mapping directives into clean Officer -> Task -> Deadline -> Deliverable matrices."
      },
      {
        "tool_id": "gemini",
        "tool_name": "Gemini",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "Gemini can create tables, but ChatGPT provides superior consistency in parsing complex administrative responsibilities."
      },
      {
        "tool_id": "adobe-firefly",
        "tool_name": "Adobe Firefly",
        "classification": "WRONG",
        "explanation": "Adobe Firefly is an image generation AI and cannot process text tables."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a graphic tool and cannot extract tabular data from meeting transcripts."
      }
    ],
    "recommended_tool": {
      "id": "chatgpt",
      "name": "ChatGPT",
      "why_recommended": "ChatGPT extracts all assigned action items into a clean, accountability-driven compliance table."
    },
    "practice_input": {
      "type": "transcript_extract",
      "title": "Review Meeting Directives Extract",
      "content": "DIRECTIVES GIVEN IN MEETING:\n1. Tahsildar Bhandaripokhari: Hold recovery camps for top 50 defaulters by Nov 20. Submit report via e-mail.\n2. EE RWSS & BDO Basudevpur: Joint site audit of piped water scheme by Nov 21. Submit hard copy report.\n3. ACSO Bhadrak: Calibrate weighbridges and replace 5 moisture meters at PACS by Nov 18. Physical certificate required.\n4. Tahsildar Chandbali: Execute eviction on Plot 209 near bus stand with police on Nov 22. Video recording required.\n5. All BDOs: Ensure 100% Aadhaar seeding of pension beneficiaries by Nov 25. Online portal confirmation."
    },
    "ideal_prompt": "You are the Compliance Monitoring Officer to the Administrative Officer. Extract all administrative tasks from the review meeting directives into an Executive Action-Item Matrix. Format as a Markdown table with columns: | S.No | Designated Officer | Specific Task Mandate | Mandatory Deadline | Verification Deliverable | Escalation Trigger |. Follow with a prioritized checklist for the Administrative Officer's weekly review.",
    "ideal_output": "EXECUTIVE ACTION-ITEM COMPLIANCE MATRIX\nAdministrative Officer Review Meeting Decisions\n\n| S.No | Designated Officer | Specific Task Mandate | Mandatory Deadline | Verification Deliverable | Escalation Trigger |\n|:---:|:---|:---|:---|:---|:---|\n| 1 | ACSO, Bhadrak | Replace 5 defective moisture meters & calibrate weighbridges at PACS mandis | 18th Nov 2024 | Calibration Certificate | Mandi de-listing if uncalibrated |\n| 2 | Tahsildar, Bhandaripokhari | Conduct Special Recovery Camps for top 50 commercial tax/land defaulters | 20th Nov 2024 | e-Mail DCR Collection Sheet | Show-cause notice under Service Rules |\n| 3 | EE (RWSS) & BDO Basudevpur | Joint on-site physical measurement audit of piped water supply project | 21st Nov 2024 | Joint Signed Audit Report | Freezing of contractor payment bills |\n| 4 | Tahsildar, Chandbali | Execute joint eviction drive against encroachments on Plot 209 (Bus Stand) | 22nd Nov 2024 (09:00 AM) | Video recording & clearance report | Law & order review with SP |\n| 5 | All BDOs (4 Blocks) | 100% Aadhaar seeding completion for social pension beneficiaries | 25th Nov 2024 | Portal Saturation Certificate | Withholding of monthly administrative block grant |\n\nAdministrative Officer WEEKLY MONITORING CHECKLIST:\n- 18th Nov (Evening): Verify ACSO moisture meter replacement status.\n- 21st Nov (Morning): Review joint RWSS water project audit findings.\n- 22nd Nov (08:30 AM): Confirm police force mobilization for Chandbali eviction.",
    "evaluation_criteria": [
      "Accurate extraction of all 5 officer assignments",
      "Clear tabular matrix with all requested columns",
      "Administrative Officer weekly chronological monitoring checklist"
    ],
    "improvement_suggestions": [
      "Include an \"Escalation Trigger\" column for non-compliance",
      "Provide a chronological monitoring checklist for the Administrative Officer"
    ]
  },
  {
    "id": "scenario-25",
    "module_id": "module-5",
    "scenario_number": 25,
    "title": "Citizen Communication in Odia & Simple Language",
    "description": "A government circular contains dense administrative terminology and needs to be communicated to rural citizens in simple, welcoming language and translated into Odia for public notices and local announcement loudspeakers.",
    "administrative_context": "Public Information, Vernacular Translation & Citizen Outreach",
    "task": "Use an AI model with deep Indian multilingual understanding (Odia) to simplify complex administrative notifications into accessible citizen advisories.",
    "options": [
      {
        "tool_id": "gemini",
        "tool_name": "Gemini",
        "classification": "CORRECT",
        "explanation": "Gemini possesses superior training in Indian vernacular languages, including Odia script, ensuring culturally nuanced and accurate regional translations."
      },
      {
        "tool_id": "chatgpt",
        "tool_name": "ChatGPT",
        "classification": "PARTIALLY_CORRECT",
        "explanation": "ChatGPT can translate Odia, but Gemini exhibits stronger native fluency, regional idioms, and accurate administrative terminology in Odia."
      },
      {
        "tool_id": "canva-ai",
        "tool_name": "Canva AI",
        "classification": "WRONG",
        "explanation": "Canva AI is a graphic tool and does not provide deep vernacular language translation engines."
      },
      {
        "tool_id": "gamma",
        "tool_name": "Gamma",
        "classification": "WRONG",
        "explanation": "Gamma creates presentations and lacks specialized regional Indian language translation support."
      }
    ],
    "recommended_tool": {
      "id": "gemini",
      "name": "Gemini",
      "why_recommended": "Gemini provides exceptional regional language understanding in Odia, producing natural, simple citizen announcements without bureaucratic jargon."
    },
    "practice_input": {
      "type": "complex_order",
      "title": "Complex Administrative Notification: Mutation Fee Waiver & Hearing Schedule",
      "content": "ORDER TEXT:\n\"Pursuant to Revenue Department Notification No. 8832, all small and marginal farmers with total ancestral agricultural holdings less than 2.00 hectares are hereby exempted from the statutory non-refundable mutation scrutiny fee. Beneficiaries must tender self-attested copies of RoR and legacy linkage documents at the camp court. Non-appearance on scheduled camp dates will result in remanding the application to the regular hearing docket.\""
    },
    "ideal_prompt": "You are a Public Relations & Citizen Welfare Officer in the Administrative Officer's office. Simplify the attached complex government order into: (1) A simple, citizen-friendly English public notice (free of jargon), (2) A clear, natural Odia translation (in Odia script) suitable for village notice boards and Gram Panchayat loudspeaker announcements, (3) A 3-point summary highlighting who benefits, what documents are needed, and where to go.",
    "ideal_output": "CITIZEN ADVISORY / ସାଧାରଣ ସୂଚନା\nAdministration Office, Bhadrak | ଉପ-ଜିଲ୍ଲାପାଳଙ୍କ କାର୍ଯ୍ୟାଳୟ, ଭଦ୍ରକ\n\n1. SIMPLIFIED CITIZEN NOTICE (ENGLISH):\n\"Good news for farmers! If you own up to 2 hectares (5 acres) of agricultural land, you do NOT have to pay any government mutation fee to update your land records. Special mutation camp courts are being held in your Tehsil. Simply bring your land passbook/RoR copy and Aadhaar card to the camp to get your land record updated for free.\"\n\n2. VERNACULAR ODIA CITIZEN ADVISORY (ଓଡ଼ିଆ ସୂଚନା):\n\"ଚାଷୀ ଭାଇ ଓ ଭଉଣୀମାନଙ୍କ ପାଇଁ ଖୁସି ଖବର!\nଯଦି ଆପଣଙ୍କ ପାଖରେ ୨ ହେକ୍ଟର (ପ୍ରାୟ ୫ ଏକର) ପର୍ଯ୍ୟନ୍ତ ଜମି ଅଛି, ତେବେ ଜମି ଖାରିଜ (Mutation) ପାଇଁ ଆପଣଙ୍କୁ କୌଣସି ସରକାରୀ ଫି ଦେବାକୁ ପଡ଼ିବ ନାହିଁ । ଏହା ସମ୍ପୂର୍ଣ୍ଣ ମାଗଣା ଅଟେ ।\nଆପଣଙ୍କ ତହସିଲ ଅନ୍ତର୍ଗତ ଗ୍ରାମ ପଞ୍ଚାୟତରେ ସ୍ୱତନ୍ତ୍ର କ୍ୟାମ୍ପ କୋର୍ଟ ଆୟୋଜନ କରାଯାଉଛି । ଆପଣଙ୍କ ଜମି ପଟ୍ଟାର ନକଲ ଏବଂ ଆଧାର କାର୍ଡ ନେଇ କ୍ୟାମ୍ପକୁ ଆସନ୍ତୁ ଏବଂ ନିଜର ଜମି ରେକର୍ଡ ସଂଶୋଧନ କରନ୍ତୁ ।\"\n\n3. 3-POINT CITIZEN CHECKLIST / ୩ଟି ମୁଖ୍ୟ ବିଷୟ:\n- କାହା ପାଇଁ (Who Benefits): ୨ ହେକ୍ଟର ପର୍ଯ୍ୟନ୍ତ ଜମି ଥିବା କ୍ଷୁଦ୍ର ଓ ନାମମାତ୍ର ଚାଷୀ ।\n- କେଉଁ କାଗଜ ଦରକାର (Required Documents): ଜମି ପଟ୍ଟା (RoR) ନକଲ ଏବଂ ଆଧାର କାର୍ଡ ।\n- ସୁବିଧା (Benefit): ମାଗଣା ଜମି ଖାରିଜ ଓ ତୁରନ୍ତ ସମାଧାନ ।\n- ସହାୟତା ପାଇଁ ଯୋଗାଯୋଗ (Helpline): ଟୋଲ୍-ଫ୍ରି ୧୮୦୦-୧୨୩-୪୫୬୭ / ନିକଟସ୍ଥ ତହସିଲ କାର୍ଯ୍ୟାଳୟ ।",
    "evaluation_criteria": [
      "Jargon-free simplified English message",
      "Natural, grammatically accurate Odia script translation",
      "3-point citizen takeaway structure"
    ],
    "improvement_suggestions": [
      "Instruct the AI to avoid technical legal terms in the regional language",
      "Request both English and Odia loudspeaker announcement scripts"
    ]
  }
];
export default scenariosData;
