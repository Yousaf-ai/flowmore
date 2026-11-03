export type PickerOption = {
  id: string;
  label: string;
  scores: Partial<Record<string, number>>;
};

export type PickerQuestion = {
  id: string;
  prompt: string;
  options: PickerOption[];
};

export const pickerQuestions: PickerQuestion[] = [
  {
    id: "job",
    prompt: "What do you mainly need AI for right now?",
    options: [
      {
        id: "write",
        label: "Writing, planning, and general work",
        scores: { chatgpt: 3, claude: 2, gemini: 2, copilot: 2 },
      },
      {
        id: "code",
        label: "Coding inside a real codebase",
        scores: { cursor: 4, claude: 3, qwen: 2, glm: 2, deepseek: 2, copilot: 2 },
      },
      {
        id: "research",
        label: "Research with sources I can verify",
        scores: { perplexity: 4, gemini: 2, chatgpt: 2, claude: 1 },
      },
      {
        id: "media",
        label: "Video, voice, music, or creative media",
        scores: { minimax: 4, gemini: 2, chatgpt: 2 },
      },
      {
        id: "agents",
        label: "Agents that act across apps / desktop / phone",
        scores: { kimi: 3, glm: 3, chatgpt: 2, claude: 2, minimax: 2, qwen: 2 },
      },
      {
        id: "cheap-open",
        label: "Cheap or self-hosted / open-weight models",
        scores: { deepseek: 4, qwen: 4, glm: 3, kimi: 2 },
      },
    ],
  },
  {
    id: "where",
    prompt: "Where should the AI live?",
    options: [
      {
        id: "chat",
        label: "A chat website or app",
        scores: { chatgpt: 3, claude: 3, gemini: 2, perplexity: 2, qwen: 2, deepseek: 2 },
      },
      {
        id: "editor",
        label: "Inside my code editor",
        scores: { cursor: 4, copilot: 3, glm: 2, kimi: 2, minimax: 1 },
      },
      {
        id: "office",
        label: "Inside Word / Excel / Docs / Sheets",
        scores: { copilot: 4, gemini: 4, chatgpt: 1 },
      },
      {
        id: "local",
        label: "On my machine / private infra",
        scores: { deepseek: 4, qwen: 4, glm: 3, kimi: 2, cursor: 1 },
      },
    ],
  },
  {
    id: "must",
    prompt: "Which matter most?",
    options: [
      {
        id: "citations",
        label: "Citations and fact-checking",
        scores: { perplexity: 4, gemini: 2, chatgpt: 1 },
      },
      {
        id: "safety",
        label: "Careful reasoning and safety tone",
        scores: { claude: 4, chatgpt: 2 },
      },
      {
        id: "ecosystem",
        label: "Already living in Google or Microsoft",
        scores: { gemini: 4, copilot: 4 },
      },
      {
        id: "price",
        label: "Lowest cost / free tiers",
        scores: { qwen: 4, deepseek: 4, kimi: 2, glm: 2, perplexity: 1 },
      },
      {
        id: "long",
        label: "Huge documents or long agent runs",
        scores: { kimi: 3, qwen: 3, deepseek: 3, gemini: 3, chatgpt: 2, glm: 2 },
      },
    ],
  },
  {
    id: "region",
    prompt: "Any constraint on who runs the service?",
    options: [
      {
        id: "western",
        label: "Prefer Western vendors / compliance posture",
        scores: { chatgpt: 3, claude: 3, gemini: 3, copilot: 3, cursor: 3, perplexity: 2 },
      },
      {
        id: "open",
        label: "Open weights matter more than brand",
        scores: { qwen: 4, deepseek: 4, glm: 3, kimi: 2 },
      },
      {
        id: "either",
        label: "No strong preference",
        scores: { chatgpt: 1, claude: 1, gemini: 1, cursor: 1, perplexity: 1 },
      },
    ],
  },
];

export function scorePickerAnswers(selectedOptionIds: string[]) {
  const totals: Record<string, number> = {};
  for (const q of pickerQuestions) {
    const opt = q.options.find((o) => selectedOptionIds.includes(o.id));
    if (!opt) continue;
    for (const [platformId, pts] of Object.entries(opt.scores)) {
      totals[platformId] = (totals[platformId] ?? 0) + (pts ?? 0);
    }
  }
  return Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .map(([id, score]) => ({ id, score }));
}
