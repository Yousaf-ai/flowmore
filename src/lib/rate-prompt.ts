export type PromptRating = {
  score: number;
  dimensions: {
    clarity: number;
    context: number;
    goal: number;
    constraints: number;
    format: number;
    platformLeverage: number;
  };
  tips: string[];
  improvedPrompt: string;
};

const PLATFORM_HINTS: Record<string, string[]> = {
  chatgpt: [
    "Mention Projects, Custom GPTs, or custom instructions when relevant.",
    "Ask for a reusable template you can save.",
  ],
  claude: [
    "Request an Artifact or reference project docs.",
    "Include success criteria / rubric.",
  ],
  gemini: [
    "Name the Google app (Docs, Drive, Sheets) for the output.",
    "Ask for Deep Research or multimodal input when needed.",
  ],
  cursor: [
    "Name files in scope, acceptance criteria, and Agent vs inline.",
    "Mention rules or MCP tools if the job needs them.",
  ],
  perplexity: [
    "Require citations and competing sources.",
    "Specify focus mode (academic, news, official).",
  ],
  copilot: [
    "Name the Microsoft 365 app and the artifact.",
    "Ask for owners, dates, and decisions when summarizing work.",
  ],
};

function clamp(n: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, Math.round(n)));
}

function scoreDimension(prompt: string, patterns: RegExp[], weightHits: number) {
  const hits = patterns.reduce((acc, re) => (re.test(prompt) ? acc + 1 : acc), 0);
  const lengthBonus = prompt.trim().length > 80 ? 15 : prompt.trim().length > 30 ? 8 : 0;
  return clamp((hits / Math.max(patterns.length, 1)) * 70 + lengthBonus + weightHits);
}

/** Deterministic local rater so practice works without API keys. */
export function ratePromptLocal(input: {
  prompt: string;
  platformId?: string | null;
  scenarioGoal?: string | null;
  raterHints?: string[];
}): PromptRating {
  const prompt = input.prompt.trim();
  const lower = prompt.toLowerCase();

  if (prompt.length < 8) {
    return {
      score: 8,
      dimensions: {
        clarity: 10,
        context: 5,
        goal: 5,
        constraints: 5,
        format: 5,
        platformLeverage: 5,
      },
      tips: [
        "Write a fuller prompt: who you are, what you need, and what “good” looks like.",
        "Add audience, constraints, and output format.",
      ],
      improvedPrompt:
        "You are an expert assistant. Goal: [what I need]. Audience: [who]. Context: [key facts]. Constraints: [limits]. Output format: [bullets / table / email / steps]. Ask clarifying questions only if blocked.",
    };
  }

  const clarity = scoreDimension(
    prompt,
    [/\b(please|need|want|help|write|create|draft|explain|analyze|compare)\b/i, /[.!?]/],
    prompt.length > 120 ? 10 : 0,
  );

  const context = scoreDimension(
    prompt,
    [
      /\b(context|background|currently|i am|i'm|we are|because|situation)\b/i,
      /\b(audience|reader|manager|client|student|team)\b/i,
    ],
    0,
  );

  const goal = scoreDimension(
    prompt,
    [/\b(goal|so that|outcome|result|decide|deliver|produce)\b/i, /\b(must|should|need to)\b/i],
    input.scenarioGoal ? 5 : 0,
  );

  const constraints = scoreDimension(
    prompt,
    [
      /\b(constraint|limit|don't|do not|avoid|max|under|within|tone|formal|casual)\b/i,
      /\b(\d+\s*(words|pages|bullets|minutes))\b/i,
    ],
    0,
  );

  const format = scoreDimension(
    prompt,
    [
      /\b(format|table|bullet|checklist|json|markdown|subject line|outline|steps)\b/i,
      /\b(structure|template|sections?)\b/i,
    ],
    0,
  );

  let platformLeverage = 20;
  const platformId = input.platformId && input.platformId !== "any" ? input.platformId : null;
  if (platformId) {
    const hints = PLATFORM_HINTS[platformId] ?? [];
    const featureWords: Record<string, RegExp> = {
      chatgpt: /\b(project|custom gpt|gpt|canvas|instruction)\b/i,
      claude: /\b(artifact|project|mcp|rubric)\b/i,
      gemini: /\b(gem|drive|docs|sheets|deep research|workspace)\b/i,
      cursor: /\b(agent|mcp|rules?|@[\w./-]+|inline)\b/i,
      perplexity: /\b(cite|citation|sources?|focus|space)\b/i,
      copilot: /\b(outlook|excel|teams|word|powerpoint|meeting)\b/i,
    };
    const re = featureWords[platformId];
    platformLeverage = re && re.test(prompt) ? 85 : 35;
    if (hints.length && lower.length > 40) platformLeverage += 5;
  } else {
    platformLeverage = /\b(tool|plugin|mcp|api|workflow|template)\b/i.test(prompt) ? 60 : 30;
  }

  const dims = { clarity, context, goal, constraints, format, platformLeverage };
  const score = clamp(
    dims.clarity * 0.18 +
      dims.context * 0.18 +
      dims.goal * 0.2 +
      dims.constraints * 0.14 +
      dims.format * 0.15 +
      dims.platformLeverage * 0.15,
  );

  const tips: string[] = [];
  if (clarity < 55) tips.push("Lead with a clear action verb and the exact deliverable you want.");
  if (context < 55) tips.push("Add short context: who you are, what already happened, and who it’s for.");
  if (goal < 55) tips.push("State the goal or decision this output should unlock.");
  if (constraints < 55) tips.push("Add constraints: tone, length, what to avoid, and any hard limits.");
  if (format < 55) tips.push("Specify the output format (table, bullets, email, checklist, JSON).");
  if (platformLeverage < 55 && platformId) {
    tips.push(...(PLATFORM_HINTS[platformId] ?? []).slice(0, 2));
  }
  if (input.raterHints?.length && score < 80) {
    tips.push(input.raterHints[0]);
  }
  if (tips.length === 0) {
    tips.push("Strong prompt. Next: save it as a reusable template on your platform.");
    if (platformId) tips.push(...(PLATFORM_HINTS[platformId] ?? []).slice(0, 1));
  }

  const platformBit = platformId
    ? ` Platform: optimize for ${platformId} features where useful.`
    : "";

  const improvedPrompt = [
    `Role: Act as a specialist for this task.`,
    `Goal: ${input.scenarioGoal ?? "Deliver the best possible result for my request."}`,
    `Context: ${prompt.length > 200 ? prompt.slice(0, 200) + "…" : prompt}`,
    `Audience: [who will read or use this]`,
    `Constraints: Be specific, practical, and honest about uncertainty. Keep length appropriate.`,
    `Output format: Clear structure with headings or bullets; include next actions.`,
    platformBit.trim(),
    `If anything critical is missing, ask up to 3 clarifying questions; otherwise proceed.`,
  ]
    .filter(Boolean)
    .join("\n");

  return {
    score,
    dimensions: dims,
    tips: tips.slice(0, 4),
    improvedPrompt,
  };
}
