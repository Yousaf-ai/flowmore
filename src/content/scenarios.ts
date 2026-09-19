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
];

export function getScenario(id: string) {
  return scenarios.find((s) => s.id === id);
}

export function scenariosForPlatform(platformId: string) {
  return scenarios.filter(
    (s) => s.platformId === platformId || s.platformId === "any",
  );
}
