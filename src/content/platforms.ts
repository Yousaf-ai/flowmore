export type Platform = {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  capabilities: { title: string; description: string }[];
  mostUsersMiss: string[];
  practiceTips: string[];
};

export const platforms: Platform[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    tagline: "General workhorse for writing, analysis, and custom tools",
    summary:
      "Most people treat ChatGPT like a search box. Power users shape Projects, Custom GPTs, tools, and memory so the model works inside their real workflows.",
    capabilities: [
      {
        title: "Projects",
        description:
          "Keep files, instructions, and chats together for ongoing work instead of starting from zero every time.",
      },
      {
        title: "Custom GPTs",
        description:
          "Package a repeated workflow—tone, steps, tools—into a reusable assistant you (or your team) can open anytime.",
      },
      {
        title: "Custom instructions",
        description:
          "Tell ChatGPT who you are and how you want answers once, so every chat inherits your defaults.",
      },
      {
        title: "Tools & browsing",
        description:
          "Ask it to use browsing, code, images, or connected apps when the job needs more than plain text.",
      },
      {
        title: "Voice & Canvas",
        description:
          "Use voice for thinking out loud and Canvas for editing long drafts side by side with the model.",
      },
      {
        title: "API & automations",
        description:
          "Move repeatable prompts into scripts or Zapier-style flows so the platform works while you sleep.",
      },
    ],
    mostUsersMiss: [
      "Create a Project for each ongoing job and drop source files in once.",
      "Write custom instructions that define role, audience, and output format.",
      "Build one Custom GPT for a task you repeat weekly.",
      "Ask for structured outputs (tables, checklists, JSON) instead of vague paragraphs.",
      "Use browsing or tools when facts must be current—don’t guess.",
      "Save strong prompts as reusable templates inside Projects.",
    ],
    practiceTips: [
      "State role, goal, audience, constraints, and format in one prompt.",
      "Name the ChatGPT feature you would use next (Project, Custom GPT, Canvas).",
      "Ask for a checklist of steps the model should follow before answering.",
    ],
  },
  {
    id: "claude",
    name: "Claude",
    tagline: "Long-context reasoning, Artifacts, and careful drafting",
    summary:
      "Claude shines when you give it large documents, clear rubrics, and room to produce Artifacts you can iterate on—not one-line questions.",
    capabilities: [
      {
        title: "Projects & knowledge",
        description:
          "Upload docs and set project instructions so Claude stays grounded in your materials.",
      },
      {
        title: "Artifacts",
        description:
          "Generate docs, code, or diagrams in a side panel you can revise without losing the chat thread.",
      },
      {
        title: "Long context",
        description:
          "Paste or upload large briefs and ask for synthesis, critique, or rewriting against criteria.",
      },
      {
        title: "Computer use / tools",
        description:
          "Where available, let Claude act with tools instead of only describing what to do.",
      },
      {
        title: "Styles & preferences",
        description:
          "Set how Claude should write so tone stays consistent across sessions.",
      },
      {
        title: "API & MCP",
        description:
          "Connect Claude to external tools via API or MCP so it can work with your real systems.",
      },
    ],
    mostUsersMiss: [
      "Put source docs in a Project before asking for analysis.",
      "Request an Artifact when you need something you will edit.",
      "Give evaluation criteria (what good looks like) in the prompt.",
      "Ask Claude to quote or cite which parts of your docs it used.",
      "Use styles/preferences instead of repeating tone every chat.",
      "Explore MCP or API when you need Claude wired into tools you already use.",
    ],
    practiceTips: [
      "Include success criteria and what to avoid.",
      "Ask for an Artifact-ready deliverable, not just advice.",
      "Reference “use my project docs” when the scenario involves source material.",
    ],
  },
  {
    id: "gemini",
    name: "Gemini",
    tagline: "Google ecosystem research, multimodal, and Workspace",
    summary:
      "Gemini is strongest when you connect it to Google apps, multimodal inputs, and research workflows—not when you only paste short chat prompts.",
    capabilities: [
      {
        title: "Workspace integration",
        description:
          "Work across Gmail, Docs, Drive, and Sheets so answers land where you already work.",
      },
      {
        title: "Deep Research",
        description:
          "Kick off longer research runs that gather sources and structure findings.",
      },
      {
        title: "Multimodal",
        description:
          "Pass images, PDFs, and video frames when the task is visual or document-heavy.",
      },
      {
        title: "Gems",
        description:
          "Save specialized assistants for recurring jobs (study, marketing, ops).",
      },
      {
        title: "Extensions & apps",
        description:
          "Connect Maps, YouTube, Flights, and more when the task needs live app data.",
      },
      {
        title: "API & Vertex",
        description:
          "Scale the same models into products and internal tools when chat UI is not enough.",
      },
    ],
    mostUsersMiss: [
      "Connect Drive/Docs and ask Gemini to work from specific files.",
      "Use Deep Research for multi-source topics instead of one shallow answer.",
      "Create a Gem for a workflow you repeat.",
      "Upload screenshots or PDFs instead of retyping everything.",
      "Ask for outputs ready to paste into Docs or Sheets.",
      "Name which Google app the result should live in.",
    ],
    practiceTips: [
      "Say which Google app the output belongs in.",
      "Request sources and a structured research outline.",
      "Mention multimodal input when the task involves images or PDFs.",
    ],
  },
  {
    id: "cursor",
    name: "Cursor",
    tagline: "AI-native coding with rules, agents, and MCP",
    summary:
      "Cursor is not ChatGPT in an editor. Rules, Agent mode, MCP, and repo context are how you take it from autocomplete to real delivery.",
    capabilities: [
      {
        title: "Rules & memories",
        description:
          "Encode project conventions so every agent turn follows your standards.",
      },
      {
        title: "Agent mode",
        description:
          "Let the agent plan, edit multiple files, and run commands for larger tasks.",
      },
      {
        title: "MCP tools",
        description:
          "Plug in browsers, docs, issue trackers, and services the agent can call.",
      },
      {
        title: "Codebase context",
        description:
          "Point at files, symbols, and docs with @ so answers stay grounded in your repo.",
      },
      {
        title: "Inline edit & Tab",
        description:
          "Use targeted edits for small changes; save Agent for multi-file work.",
      },
      {
        title: "Background / cloud agents",
        description:
          "Offload longer jobs while you keep coding in the foreground.",
      },
    ],
    mostUsersMiss: [
      "Add project rules for architecture, style, and “do not” constraints.",
      "Use @file / @folder instead of pasting huge blobs.",
      "Enable MCP for tools you already rely on (docs, tickets, browser).",
      "Write prompts that state acceptance criteria and files in scope.",
      "Prefer Agent for multi-file features; inline for tight edits.",
      "Review diffs—treat the agent as a teammate, not autopilot.",
    ],
    practiceTips: [
      "Name files in scope and definition of done.",
      "Mention rules or MCP when the workflow needs them.",
      "Ask for a short plan before edits on larger tasks.",
    ],
  },
  {
    id: "perplexity",
    name: "Perplexity",
    tagline: "Cited research and focused collections",
    summary:
      "Perplexity wins when you demand sources, compare viewpoints, and save threads into Spaces—not when you accept the first summary.",
    capabilities: [
      {
        title: "Cited answers",
        description:
          "Get answers with sources you can open and verify.",
      },
      {
        title: "Focus modes",
        description:
          "Narrow search to academic, web, social, or other lenses.",
      },
      {
        title: "Spaces & collections",
        description:
          "Group research threads so topics stay organized over time.",
      },
      {
        title: "Pro search / research",
        description:
          "Run deeper multi-step searches for harder questions.",
      },
      {
        title: "File upload",
        description:
          "Ground questions in your PDFs or notes alongside the web.",
      },
      {
        title: "API",
        description:
          "Pull cited research into your own apps and pipelines.",
      },
    ],
    mostUsersMiss: [
      "Ask for competing sources and what they disagree on.",
      "Use focus modes instead of a generic web search every time.",
      "Save important threads into a Space for the project.",
      "Follow citations—don’t trust summaries blindly.",
      "Upload primary docs and ask questions against them + the web.",
      "Request a comparison table with source links.",
    ],
    practiceTips: [
      "Require citations and note which claims need verification.",
      "Specify focus (academic, news, official docs).",
      "Ask for disagreements between sources, not only consensus.",
    ],
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    tagline: "AI inside Microsoft 365 and the browser",
    summary:
      "Copilot’s advantage is living inside Word, Excel, Outlook, Teams, and Edge. Prompts that name the file, meeting, or sheet win.",
    capabilities: [
      {
        title: "Microsoft 365 Copilot",
        description:
          "Draft and transform content inside Word, Excel, PowerPoint, Outlook, and Teams.",
      },
      {
        title: "Work grounding",
        description:
          "Ask about your emails, meetings, and files when organizational access is enabled.",
      },
      {
        title: "Excel analysis",
        description:
          "Describe the insight you need; let Copilot build formulas, charts, and summaries.",
      },
      {
        title: "Meeting recap",
        description:
          "Turn transcripts into decisions, owners, and follow-ups.",
      },
      {
        title: "Edge & web",
        description:
          "Summarize pages and compare open tabs while you browse.",
      },
      {
        title: "Agents & Studio",
        description:
          "Build specialized agents for department workflows when available.",
      },
    ],
    mostUsersMiss: [
      "Open the relevant file or meeting first, then prompt in context.",
      "Ask for actions with owners and dates after meetings.",
      "In Excel, state the columns and the decision you need.",
      "Use Copilot in Outlook to draft from thread context, not a blank box.",
      "Ground requests in “my emails / this deck / this workbook.”",
      "Save prompts that match how your team writes and decides.",
    ],
    practiceTips: [
      "Name the Microsoft app and the artifact (email, sheet, deck).",
      "Ask for decisions, owners, and next steps when summarizing work.",
      "Specify audience and tone for business writing.",
    ],
  },
];

export function getPlatform(id: string) {
  return platforms.find((p) => p.id === id);
}
