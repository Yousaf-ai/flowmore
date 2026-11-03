export type Scenario = {
  id: string;
  title: string;
  description: string;
  goal: string;
  category: "work" | "study" | "life";
  platformId: string | "any";
  starterContext: string;
  raterHints: string[];
};

export const scenarios: Scenario[] = [
  {
    id: "rewrite-email",
    title: "Rewrite a sensitive email",
    description: "Turn a blunt draft into a clear, professional message.",
    goal: "Produce a prompt that yields a polished email with tone, audience, and outcome specified.",
    category: "work",
    platformId: "any",
    starterContext:
      "You need to tell a client a deadline will slip by one week without damaging trust.",
    raterHints: [
      "Should include audience, tone, key facts, and desired outcome.",
      "Should ask for subject line + body, or length constraints.",
    ],
  },
  {
    id: "research-brief",
    title: "Build a research brief",
    description: "Get a structured brief with sources and open questions.",
    goal: "Prompt for a cited research overview a decision-maker can scan in 5 minutes.",
    category: "work",
    platformId: "perplexity",
    starterContext:
      "Your manager wants a brief on whether your team should adopt AI meeting notes tools.",
    raterHints: [
      "Should demand citations and competing viewpoints.",
      "Should define audience, length, and decision to support.",
    ],
  },
  {
    id: "study-notes",
    title: "Study notes from a chapter",
    description: "Turn dense material into active recall notes.",
    goal: "Ask for notes formatted for memorization, not a vague summary.",
    category: "study",
    platformId: "claude",
    starterContext:
      "You have a long PDF chapter on cellular respiration and an exam in three days.",
    raterHints: [
      "Should specify format: flashcards, Q&A, or spaced-repetition style.",
      "Should mention using uploaded/project docs and difficulty level.",
    ],
  },
  {
    id: "weekly-plan",
    title: "Plan a realistic week",
    description: "Design a week that fits energy, deadlines, and rest.",
    goal: "Prompt for a schedule with constraints and priorities, not generic advice.",
    category: "life",
    platformId: "chatgpt",
    starterContext:
      "You work full time, have two evening classes, and keep abandoning plans that are too ambitious.",
    raterHints: [
      "Should include time constraints, priorities, and non-negotiables.",
      "Should ask for a concrete calendar-style output.",
    ],
  },
  {
    id: "code-explain",
    title: "Explain and improve code",
    description: "Get a review grounded in your repo conventions.",
    goal: "Write a Cursor-style prompt with scope, criteria, and files.",
    category: "work",
    platformId: "cursor",
    starterContext:
      "A login form works but feels messy. You want a safer, clearer implementation without a rewrite.",
    raterHints: [
      "Should name files in scope and definition of done.",
      "Should mention rules, tests, or constraints.",
    ],
  },
  {
    id: "meeting-followups",
    title: "Meeting to action list",
    description: "Convert notes into owners, dates, and next steps.",
    goal: "Prompt Copilot-style for decisions and accountability.",
    category: "work",
    platformId: "copilot",
    starterContext:
      "You left a 45-minute product sync with messy notes and three unclear decisions.",
    raterHints: [
      "Should ask for decisions, owners, due dates, and open questions.",
      "Should mention the Microsoft app context (Teams/Outlook).",
    ],
  },
  {
    id: "compare-options",
    title: "Compare three options",
    description: "Force a decision framework, not a vague pro/con list.",
    goal: "Get a comparison table with criteria you define.",
    category: "life",
    platformId: "any",
    starterContext:
      "You are choosing between three online courses and keep reading marketing pages.",
    raterHints: [
      "Should define decision criteria and weights.",
      "Should ask for a recommendation with tradeoffs.",
    ],
  },
  {
    id: "gemini-docs",
    title: "Draft from Drive context",
    description: "Write something ready for Google Docs from source files.",
    goal: "Prompt Gemini with app target, sources, and audience.",
    category: "work",
    platformId: "gemini",
    starterContext:
      "You have notes in Drive and need a one-page update for stakeholders by end of day.",
    raterHints: [
      "Should name Docs/Drive and the output length.",
      "Should specify audience and what to pull from files.",
    ],
  },
  {
    id: "custom-gpt-spec",
    title: "Spec a Custom GPT",
    description: "Design instructions for a reusable assistant.",
    goal: "Describe role, steps, tools, and output format for a Custom GPT.",
    category: "work",
    platformId: "chatgpt",
    starterContext:
      "You rewrite job descriptions every month and waste time restating the same rules.",
    raterHints: [
      "Should define role, process steps, inputs, and output template.",
      "Should mention Custom GPT / reusable assistant.",
    ],
  },
  {
    id: "artifact-doc",
    title: "Ship an editable Artifact",
    description: "Ask Claude for a document you can revise in-panel.",
    goal: "Prompt for an Artifact-ready deliverable with success criteria.",
    category: "study",
    platformId: "claude",
    starterContext:
      "You need a 2-page literature review outline your professor can comment on.",
    raterHints: [
      "Should request an Artifact/document and revision-friendly structure.",
      "Should include rubric or grading criteria.",
    ],
  },
  {
    id: "deep-research",
    title: "Deep research kickoff",
    description: "Frame a research run with scope and deliverables.",
    goal: "Prompt for multi-source research with clear boundaries.",
    category: "study",
    platformId: "gemini",
    starterContext:
      "You are writing a paper on remote work productivity and need more than a Wikipedia-level skim.",
    raterHints: [
      "Should set scope, timeframe, source types, and deliverable shape.",
      "Should mention Deep Research or multi-step research.",
    ],
  },
  {
    id: "mcp-workflow",
    title: "Design an MCP-powered flow",
    description: "Describe tools an agent should call to finish a job.",
    goal: "Write a prompt that names tools, steps, and done criteria for Cursor + MCP.",
    category: "work",
    platformId: "cursor",
    starterContext:
      "You want an agent to open docs, check a ticket, and draft a PR description.",
    raterHints: [
      "Should list tools/MCP needs and ordered steps.",
      "Should define done and what not to change.",
    ],
  },
  {
    id: "kimi-swarm",
    title: "Brief an Agent Swarm",
    description: "Split a complex job across parallel Kimi sub-agents.",
    goal: "Prompt that names sub-tasks, coordination, and final deliverable for Agent Swarm.",
    category: "work",
    platformId: "kimi",
    starterContext:
      "You need a competitor teardown, a pricing table in Excel, and a short slide summary—by end of day.",
    raterHints: [
      "Should assign parallel sub-agents or workstreams.",
      "Should name Agent Swarm / Claw / Work and the output formats.",
    ],
  },
  {
    id: "kimi-longdoc",
    title: "Analyze a massive document set",
    description: "Use Kimi’s long context for a multi-file research brief.",
    goal: "Prompt for synthesis across a huge corpus with structure and citations or sources.",
    category: "study",
    platformId: "kimi",
    starterContext:
      "You have a 400-page report pack and need themes, risks, and open questions—not a vague summary.",
    raterHints: [
      "Should reference long context / full document set.",
      "Should ask for structured sections and what to prioritize.",
    ],
  },
  {
    id: "deepseek-reason",
    title: "Hard reasoning with R1",
    description: "Force DeepSeek’s reasoning mode on a multi-step logic problem.",
    goal: "Prompt that requests extended chain-of-thought, checks, and a clear final answer.",
    category: "study",
    platformId: "deepseek",
    starterContext:
      "You have a multi-step probability puzzle and keep getting inconsistent answers from fast chat models.",
    raterHints: [
      "Should mention R1 / thinking / step-by-step verification.",
      "Should ask for assumptions, intermediate checks, and a final boxed answer.",
    ],
  },
  {
    id: "deepseek-selfhost",
    title: "Choose self-host vs API",
    description: "Write a prompt that decides DeepSeek deployment for sensitive code.",
    goal: "Prompt covering MIT self-host, privacy constraints, and which model class to run.",
    category: "work",
    platformId: "deepseek",
    starterContext:
      "Your company forbids sending source code to foreign hosted APIs but still wants strong coding help.",
    raterHints: [
      "Should mention self-host / MIT / local inference.",
      "Should pick a model class (V4 coding vs distill) and constraints.",
    ],
  },
  {
    id: "glm-zcode",
    title: "Brief a ZCode coding agent",
    description: "Write a GLM/Z.ai prompt for multi-step coding with tools.",
    goal: "Prompt that names ZCode/tools, acceptance criteria, and bilingual needs if any.",
    category: "work",
    platformId: "glm",
    starterContext:
      "You need a small API feature implemented with tests, and you may switch between English specs and Chinese stakeholder notes.",
    raterHints: [
      "Should mention ZCode or tool calling / thinking mode.",
      "Should include definition of done and language/context needs.",
    ],
  },
  {
    id: "glm-autoglm",
    title: "Design an AutoGLM phone task",
    description: "Describe a multi-step mobile workflow for AutoGLM.",
    goal: "Prompt with ordered app steps, success criteria, and what not to do.",
    category: "life",
    platformId: "glm",
    starterContext:
      "You want a phone agent to check messages and place a simple food order without buying extras.",
    raterHints: [
      "Should list ordered app steps and constraints.",
      "Should name AutoGLM or phone-agent style automation.",
    ],
  },
  {
    id: "minimax-video",
    title: "Produce a Hailuo video brief",
    description: "Prompt MiniMax for a 1080p text-to-video spot.",
    goal: "Prompt with scene, length, style, and audio/voice needs.",
    category: "work",
    platformId: "minimax",
    starterContext:
      "You need a 20-second product teaser with voiceover and no stock-looking footage.",
    raterHints: [
      "Should mention Hailuo / video modality and specs (length, resolution).",
      "Should include style, voice, and brand constraints.",
    ],
  },
  {
    id: "minimax-voice",
    title: "Clone a voice for dubbing",
    description: "Use MiniMax speech cloning for a multilingual clip.",
    goal: "Prompt covering clone sample, languages, and delivery style.",
    category: "life",
    platformId: "minimax",
    starterContext:
      "You have a 5-second voice sample and need English and Spanish dubs that match tone.",
    raterHints: [
      "Should mention voice cloning / speech and languages.",
      "Should specify tone, pacing, and what to avoid.",
    ],
  },
  {
    id: "qwen-agentic-code",
    title: "Run an agentic coding loop",
    description: "Prompt Qwen to write, test, and fix until done.",
    goal: "Prompt with acceptance tests, iteration rules, and stop conditions.",
    category: "work",
    platformId: "qwen",
    starterContext:
      "You need a small CLI tool built with tests. Fast one-shot answers keep failing on edge cases.",
    raterHints: [
      "Should request write/test/fix loops and clear done criteria.",
      "Should mention agentic coding or multi-step troubleshooting.",
    ],
  },
  {
    id: "qwen-from-screenshot",
    title: "Code a UI from a screenshot",
    description: "Use Qwen multimodal coding from a design image.",
    goal: "Prompt that references screenshot/design input and front-end constraints.",
    category: "work",
    platformId: "qwen",
    starterContext:
      "You have a mobile UI screenshot and need a responsive React page that matches layout and spacing.",
    raterHints: [
      "Should mention screenshot / design draft as input.",
      "Should specify stack, responsiveness, and fidelity constraints.",
    ],
  },
];

export function getScenario(id: string) {
  return scenarios.find((s) => s.id === id);
}

export function scenariosForPlatform(platformId: string) {
  return scenarios.filter(
    (s) => s.platformId === platformId || s.platformId === "any",
  );
}
