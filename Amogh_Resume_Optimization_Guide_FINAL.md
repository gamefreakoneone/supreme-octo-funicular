# Amogh Biju — Resume Optimization Guide

---

## ⚡ 90-SECOND APPLICATION CHECKLIST

Use this when you have a JD and need to move fast. Do these steps in order, nothing else.

1. **Reorder skills lines** — move the JD's keywords to the front of each relevant line
2. **Pick your 3 projects** — use the swapping table below; default is Defeat the Darkness → Where We Left Off → Ctrl+Alt+Del Hate
3. **Check for model conflicts** — don't lead with LLaMA projects for Google/Gemini roles
4. **Swap max 2 bullets** — only rewrite bullets if a project is being swapped in/out
5. **Scan for verb repetition** — each strong verb must appear at most once across the whole resume
6. **Confirm collaboration language** — at least 2 bullets across Experience must mention teamwork or supervision

That's it. Do not rewrite the whole resume for every application.

---

## CURRENT DEFAULT RESUME STRUCTURE

**Experience (3 entries, chronological):**
1. Research Assistant — USC Viterbi, Dept. of Computer Science — Feb 2026–Present
2. Research Intern — USC Institute for Creative Technologies — Jun–Sept 2025
3. Research Intern — IIT Hyderabad — Jun 2022–Jul 2023

**Projects (3 entries):**
1. Defeat the Darkness (multimodal AI game)
2. Where We Left Off (RAG + agentic reading companion)
3. Ctrl+Alt+Del Hate (hate speech detection, LoRA finetuning)

> ⚠️ **Memoria lives in Experience, NOT Projects.** Never list it in both sections simultaneously.
> Only move Memoria to Projects if applying to a CV-heavy healthcare/computer-vision role where the research framing actively hurts you.

---

## CRITICAL RULES

### Rule 1 — Action Verb Variety
**Never repeat a strong verb more than once across the entire resume.**

The default resume uses these verbs — do not reuse any of them when customizing:

| Section | Verbs Used |
|---------|-----------|
| Research Assistant (Memoria) | Designed, Reduced, Constructed |
| USC ICT | Collaborated, Implemented, Presented |
| IIT Hyderabad | Partnered, Captured |
| Defeat the Darkness | Architected, Created, Eliminated (implied in bullet 2) |
| Where We Left Off | Developed, Built, Crafted |
| Ctrl+Alt+Del Hate | Trained, Formulated, Attained |

**Available verbs for swapped bullets:** Established, Deployed, Optimized, Streamlined, Delivered, Assembled, Engineered, Spearheaded, Devised, Structured, Secured

### Rule 2 — XYZ Format (Google Standard) ⭐ CRITICAL
Every bullet must follow: **"Accomplished [X] by doing [Y], resulting in [Z]"**

- **X** = The deliverable (what you built/achieved)
- **Y** = The method/tools (how you did it)
- **Z** = The measurable impact (metric or business value)

| ❌ Bad | ✅ Good |
|--------|---------|
| "Worked on fall detection using YOLO" | "Designed real-time fall detection system by fine-tuning Ultralytics YOLO11 on 111 annotated images, achieving 0.923 mAP@0.5 and 94% recall" |
| "Used LangGraph for workflows" | "Built agentic Q&A system by designing LangGraph workflows with conditional semantic search, delivering contextually-grounded answers without plot spoilers" |

**Before submitting:** Read each bullet aloud. Ask: what did I accomplish, how, and what was the result? If any part is missing, rewrite it.

### Rule 3 — Collaboration Language
VMock penalizes resumes with no visible teamwork. Ensure at least 2 bullets across Experience use collaboration language. The default resume satisfies this via:
- USC ICT: "Collaborated with team of 4..."
- IIT Hyderabad: "Partnered with PhD researcher..."

### Rule 4 — Font & Formatting (ATS)
- **Font:** Times New Roman — `\usepackage{mathptmx}` in LaTeX
- **Margins:** 0.5 inches all sides
- **Length:** 1 page maximum
- **No graphics, columns, or tables** — ATS can't parse them

### Rule 5 — Model/Version Naming
- ✅ YOLO11 (Ultralytics) — keep it, specific and recognizable
- ✅ LLaMA-3.2-1B — keep it, specific and verifiable
- ✅ Gemini API — keep it
- ⚠️ Specific OpenAI model SKUs (e.g., GPT-5 mini) — only keep if the role is explicitly LLM-infra/evals; otherwise write "OpenAI API" to avoid recruiter confusion
- ❌ Never claim you "trained" or "fine-tuned" Gemini — you used the API; say "integrated" or "orchestrated"

### Rule 6 — Cost Metric (Defeat the Darkness)
Do **not** put the $0.75–$1.50 per-session cost on the resume by default. Most recruiters read a dollar figure as "this is expensive" before they read your mitigation strategy.

**Only include it when the JD explicitly mentions:** inference cost optimization, unit economics, or production ML cost constraints.

**When you do include it, always pair it with the control mechanism:**
- ✅ "Managed per-session API costs through LLM-as-a-Judge validation with 3-attempt retry caps and fallback asset injection"
- ❌ "Each game run costs $0.75–$1.50"

### Rule 7 — Don't Fabricate
- ❌ Don't inflate metrics you can't defend in an interview
- ❌ Don't fabricate team sizes or responsibilities
- ❌ Don't claim "Multimodal RAG" under Defeat the Darkness — there is no RAG in that project
- ❌ Don't claim sole authorship on papers — use "Co-authored" or "Contributed to"
- ❌ Don't add Publications section for SWE roles
- ❌ Don't start bullets with "Responsible for" or "Worked on"

---

## PROJECT SWAPPING STRATEGY

| If JD Emphasizes... | Lead Project | 2nd Project | 3rd Project |
|---------------------|-------------|------------|------------|
| **Generative AI / Multimodal** | Defeat the Darkness | Where We Left Off | Ctrl+Alt+Del Hate |
| **Real-Time AI / Streaming** | Defeat the Darkness | Where We Left Off | Ctrl+Alt+Del Hate |
| **RAG / Vector Search / Agents** | Where We Left Off | Defeat the Darkness | Ctrl+Alt+Del Hate |
| **LLM Agents / LangChain** | Where We Left Off | Defeat the Darkness | Ctrl+Alt+Del Hate |
| **Full-Stack / SaaS** | Where We Left Off | Defeat the Darkness | Ctrl+Alt+Del Hate |
| **ML Research / Fine-tuning** | Ctrl+Alt+Del Hate | Where We Left Off | Defeat the Darkness |
| **NLP / Content Moderation** | Ctrl+Alt+Del Hate | Where We Left Off | Defeat the Darkness |
| **Computer Vision / Healthcare** | Move Memoria → Projects | Defeat the Darkness | Where We Left Off |
| **Safety / Monitoring Systems** | VigilMind (add back) | Where We Left Off | Ctrl+Alt+Del Hate |
| **Google / Gemini roles** | Defeat the Darkness | Where We Left Off | Memoria (drop LLaMA project) |

**VigilMind** is the first project to drop when space is tight. Only add it back when the JD explicitly mentions parental controls, content monitoring, or multi-component safety systems.

---

## EXPERIENCE DETAILS

### Research Assistant — USC Viterbi (Feb 2026–Present)
**Department:** Computer Science, USC Viterbi School of Engineering
**Project:** Memoria — AI dementia assistant (agentic architectures + vision language models)
**GitHub:** github.com/gamefreakoneone/Project-Memoria_Dementia-Assistant

**Bullets on default resume (past tense — keep it, signals completed achievements):**
- "Designed real-time fall detection system by fine-tuning Ultralytics YOLO11 on 111 annotated images, achieving 0.923 mAP@0.5, 94% recall, and 0.90 F1 score for elderly safety monitoring"
- "Reduced false positive alerts by implementing a 3.5-second confirmation buffer with pose analysis, delivering email notifications with screenshots within 6–8 seconds of fall events"
- "Constructed a natural-language video query pipeline by combining SAM3 segmentation with temporal video analysis and integrating OpenAI and Gemini APIs, enabling queries over patient daily activities"

**Note on supervisor:** Dr. Saty Raghavachary is your supervisor. Do NOT put his name on the resume. "USC Viterbi School of Engineering, Department of Computer Science" carries the institutional credibility — the professor's name adds surface area for questions you don't need. If asked directly in an interview, mention his name then.

**Real metrics for interview prep:**
- mAP@0.5: 0.923 | Recall: 94% | F1: 0.90
- Training data: 111 annotated images from Kaggle
- Video processing: 20 FPS
- Email alert latency: 6–8 seconds with 3.5s false-positive buffer

---

### Research Intern — USC ICT (Jun–Sept 2025)
**Note on title:** The official label was "Volunteer" due to budget constraints. The resume says "Research Intern" — this is accurate to the work performed. If asked: *"The work was internship-level (30+ hrs/week, structured research), but the official designation was volunteer due to lab budget constraints."* That's a complete and honest answer.

**Real metrics:**
- 500+ images per scene
- Reconstruction time: 8 min → 5 min (37% improvement)

**Bullets on default resume:**
- "Collaborated with team of 4 (2 PhD students, 1 postdoc, 1 peer) to build 3D reconstruction pipeline integrating RDD Structure-from-Motion, Doppelganger++ neural matching, and Gaussian Splatting"
- "Implemented feature extraction pipeline using RDD descriptors and LightGlue matcher, processing 500+ images per scene and reducing reconstruction time from 8 to 5 minutes (37% improvement)"
- "Presented final pipeline demo to lab team; optimized Doppelganger++ duplicate detection through strategic image subset selection, improving point cloud quality"

---

### Research Intern — IIT Hyderabad (Jun 2022–Jul 2023)
**Why keep it:** Prevents a multi-year gap, provides an IEEE publication credential, and anchors your profile as researcher/engineer rather than just a recent student. Once you land a first full-time industry role, this entry becomes optional.

**Trimmed to 2 bullets on default resume:**
- "Partnered with PhD researcher from Osaka University through weekly technical sessions, co-authoring IEEE Access survey paper analyzing 11 cellular network monitoring applications across 2G–5G architectures"
- "Captured physical layer cellular data using MobileInsight chipset-level monitoring and Dragonet's VPN-based approach, analyzing RRC/NAS signaling and traffic patterns across multiple Android devices"

**Additional bullet (swap in for Telecom/Research roles):**
- "Conducted comparative analysis of Android monitoring tools, evaluating data collection from Android Telephony APIs vs. root-level chipset access across 2G/3G/4G/5G networks"

---

## PROJECT DETAILS & REAL METRICS

### Defeat the Darkness
**GitHub:** github.com/gamefreakoneone/all-your-base-is-ours
**Type:** Solo hackathon project
**Use for:** Generative AI, Multimodal AI, Real-time systems, Full-Stack AI integration, Google/Gemini roles

**Architecture:**
- Three Gemini 3 modalities: Pro (image generation), Flash (structured JSON), Live API (real-time voice streaming)
- Self-correcting pipeline: Generate → LLM-as-a-Judge validate (≥70/100) → Retry (3x cap) → Fallback assets
- Voice boss fight: 16kHz PCM mic audio streamed over WebSocket; function-call-driven damage scoring (`apply_ego_damage`)
- Parallel generation: 5 concurrent Gemini Pro calls during player onboarding

**Bullets on default resume:**
- "Constructed real-time multimodal AI game by integrating three Gemini 3 capabilities (image generation, structured output, live voice streaming), delivering unique procedurally-generated gameplay per session"
- "Architected parallel asset generation system by running 5 concurrent Gemini Pro image calls during player onboarding, eliminating perceived wait time despite multiple API round-trips"
- "Created self-correcting asset pipeline by implementing LLM-as-a-Judge validation with automatic retry and fallback, ensuring consistent sprite quality with a 70+ score threshold"

**Additional bullets (swap in per role):**

*Full-Stack/SWE:*
- "Deployed serverless AI backend across 9 Vercel functions spanning image generation, LLM validation, boss profiling, and session auth, supporting a complete game lifecycle with no pre-made assets"
- "Engineered real-time WebSocket voice system using Gemini Live API with exponential backoff reconnection and gapless 24kHz audio queue, delivering responsive AI-driven dialogue"

*Creative AI:*
- "Designed sketch-to-sprite pipeline by transforming HTML5 canvas drawings into 4×3 animated pixel-art sprite sheets via Gemini 3 Pro, creating a direct creative loop between player input and AI output"

**Interview red flags:**
- ❌ Don't claim you trained/fine-tuned Gemini — you used the API
- ❌ Don't claim "Multimodal RAG" — no RAG in this project
- ❌ Don't fabricate latency numbers — you have no benchmarks

---

### Where We Left Off
**GitHub:** github.com/gamefreakoneone/Where-we-left-off-reader
**Type:** Solo, 1 month
**Use for:** RAG/Agentic AI, Full-Stack, SaaS product engineering, OpenAI-stack roles

**Architecture:**
- Chapter-aware RAG with ChromaDB metadata filtering (spoiler protection)
- LangGraph multi-pass agentic Q&A (semantic search → generation OR refinement loop)
- Two-pass story analysis: chapter-level extraction → cross-chapter consolidation
- Entity canonicalization: "Elizabeth" ↔ "Lizzy" ↔ "Ms. Bennet"
- Next.js 15 + React 19, ReactFlow relationship graphs, React-PDF, FastAPI, Pydantic

**Do NOT fabricate performance metrics** — no "processed 1000 books" or accuracy percentages.

**Bullets on default resume:**
- "Developed spoiler-protected reading companion by implementing chapter-aware RAG with ChromaDB metadata filtering, enabling contextual Q&A restricted to user's current reading progress"
- "Built agentic Q&A system by designing LangGraph workflows with conditional semantic search and refinement loops, delivering contextually-grounded answers without future plot spoilers"
- "Crafted entity resolution pipeline by implementing alias canonicalization across chapters, enabling unified character tracking despite varying name references (e.g., Elizabeth/Lizzy/Ms. Bennet)"

**Additional bullets (swap in per role):**

*AI/ML Engineering:*
- "Architected two-pass story analysis pipeline by extracting chapter entities via Pydantic structured outputs then resolving canonical identities, achieving accurate character tracking across multi-chapter narratives"

*Full-Stack/Frontend:*
- "Designed interactive PDF reading interface by integrating React-PDF viewer with ReactFlow relationship graphs, enabling real-time character status visualization as users navigate chapters"

---

### Ctrl+Alt+Del Hate
**GitHub:** github.com/gamefreakoneone/Ctrl-Alt-Del-Hate
**Type:** Solo project
**Use for:** ML research, NLP, content moderation, trust & safety, fine-tuning roles
**Default position:** 3rd project slot

**Real metrics:**
- Accuracy: 83.7% | F1: 0.693 | Dataset: 39K annotated comments
- Spearman correlation: 0.80 (severity scoring)
- MAE on ordinal facets: 0.53 | Micro F1 on demographic targets: 0.59
- Model: LoRA-finetuned LLaMA-3.2-1B, three-task architecture

**Bullets on default resume:**
- "Trained multi-task hate speech detection model by LoRA-finetuning LLaMA-3.2-1B on 39K annotated comments, achieving 83.7% accuracy and 0.693 F1 on multi-class classification"
- "Formulated three-task classification architecture with shared encoder and task-specific heads, delivering 0.59 Micro F1 on 45 demographic target groups and 0.53 MAE on 10 ordinal toxicity facets"
- "Attained 0.80 Spearman correlation on hate speech severity scoring, enabling fine-grained content moderation beyond binary classification"

**Note for Google/Gemini roles:** Drop this project entirely — LLaMA is a competitor model. Replace with VigilMind or a 4th Defeat the Darkness bullet.

---

### Memoria (when moved back to Projects)
Only move Memoria from Experience to Projects if the role is CV-heavy and specifically calls for computer vision, healthcare AI, or edge deployment. Reframe bullets as a personal project, not supervised research.

**Bullets:**
- "Built real-time fall detection system by fine-tuning Ultralytics YOLO11 on 111 annotated images, achieving 0.923 mAP@0.5 and 94% recall for elderly safety monitoring"
- "Reduced false positive alerts by implementing 3.5-second confirmation buffer with pose analysis, delivering email notifications within 6–8 seconds of fall events"
- "Designed multi-agent orchestration system combining SAM3 segmentation and temporal video analysis, enabling natural language queries about patient daily activities"

---

### VigilMind (bench project — use only when JD fits)
**GitHub:** github.com/gamefreakoneone/VigilMind
**Drop first** when space is tight. Add back only when JD mentions safety/monitoring systems.

**Do NOT fabricate accuracy percentages for this project.**

**Bullets:**
- "Architected three-component parental control system by building Flask backend, React dashboard, and Chrome extension, enabling parents to configure content guidelines with real-time web filtering"
- "Designed cross-platform monitoring solution by integrating Chrome extension with Python desktop agent using pywin32, providing oversight across browser and desktop applications"
- "Established self-service appeal workflow using MongoDB-backed request queue with AI analysis, allowing children to contest blocked content with automated review"

---

## RESEARCH PAPERS (Research/Academic roles only)

### IEEE Access Survey — Cellular Network Monitoring
**Citation:** S. M. Kala et al., *IEEE Access*, vol. 12, pp. 88426-88444, 2024.
**DOI:** 10.1109/ACCESS.2024.3412752
**Role:** Co-author | **Team:** International collaboration — USC, Osaka University, IIT Hyderabad, Celona Inc., Kyoto Tachibana University

**Metrics:** 11 applications tested, 32 papers reviewed, 5 network generations (2G–5G)
**Funding:** KAKENHI Grant 23H03384, JST CREST Grant JPMJCR21M5

**Bullets (Research/Telecom roles):**
- "Collaborated with PhD researcher through weekly technical sessions, co-authoring IEEE Access survey analyzing 11 cellular monitoring applications across 2G–5G architectures"
- "Evaluated RRC/NAS signaling access methodologies by comparing Android Telephony APIs against chipset-level diagnostics, identifying trade-offs between data granularity and deployment complexity"

### Buildings Journal — Thermal Comfort ML
**Citation:** B. Lala et al., *Buildings*, vol. 13, no. 4, p. 890, 2023.
**DOI:** 10.3390/buildings13040890
**Role:** Co-author (Software Developer & Data Analyst)

**Metrics:** 79% accuracy (XGBoost), 86% PCA variance, 5,364 responses, 500+ students, 11 schools

**Bullets (ML/Data Science roles):**
- "Developed ML pipeline by implementing SVM, Random Forest, and XGBoost classifiers on 5,364 student survey responses, achieving 79% accuracy in predicting thermal comfort metrics"
- "Designed feature selection algorithm by analyzing PCA components (86% variance explained), identifying Thermal Sensation Vote as optimal predictor across 12 experimental scenarios"

**For SWE roles:** Condense both papers to a single "Publications" line at the bottom of the resume — do not use bullet space for research details.

---

## SKILLS SECTION

**Default (on resume now):**
```
Languages:            Python, JavaScript, TypeScript, SQL, C++, HTML/CSS, Bash
AI/ML:                PyTorch, YOLO, LLaMA, LoRA, LangChain, LangGraph, Hugging Face Transformers, OpenAI API, Gemini API, SAM3, RAG
Web & Backend:        React, Next.js, Flask, FastAPI, Node.js, REST APIs, WebSockets, Chrome Extensions, Vercel
Data & Infrastructure:MongoDB, PostgreSQL, ChromaDB, Redis, Docker, AWS (S3, EC2), Git, Linux
Computer Vision & 3D: OpenCV, COLMAP, Gaussian Splatting, Structure-from-Motion, LightGlue, RDD Descriptors
```

**Tailor this section:** Move skills mentioned in the JD to the front of each line. This is the fastest, lowest-risk way to improve ATS score.

**For Research/ML Engineering roles, add:**
```
Research & Analysis: Academic Writing, Literature Review, Statistical Analysis, PCA, Correlation Analysis
```

---

## AMOGH'S BACKGROUND SUMMARY

- **Education:** MS Computer Science, USC (Jan 2024–Dec 2025)
- **Current Role:** Research Assistant, USC Viterbi School of Engineering (Feb 2026–Present)
- **Location:** Los Angeles, California
- **Strengths:** Multimodal/Generative AI, agentic systems, computer vision, LLM applications, full-stack development, real-time AI
- **Publications:** 2 co-authored papers — only surface for research/academic roles

---

*Last updated: February 2026*
*Incorporates feedback from multi-reviewer pass — Feb 17, 2026*
