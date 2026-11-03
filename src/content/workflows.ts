export type WorkflowStep = {
  feature: string;
  action: string;
};

export type Workflow = {
  id: string;
  title: string;
  description: string;
  platformId: string;
  outcome: string;
  steps: WorkflowStep[];
  practiseHref: string;
};

export const workflows: Workflow[] = [
  {
    id: "chatgpt-research-pack",
    title: "ChatGPT research pack",
    description: "Turn a vague topic into a Project-backed, cited, editable deliverable.",
    platformId: "chatgpt",
    outcome: "A Canvas draft + reusable Project for the next round of research.",
    steps: [
      { feature: "Projects", action: "Create a Project and upload source files / briefs once." },
      { feature: "Deep Research", action: "Run Deep Research with audience, scope, and decision criteria." },
      { feature: "Canvas", action: "Move the best draft into Canvas for side-by-side editing." },
      { feature: "Tasks", action: "Schedule a weekly refresh if the topic is ongoing." },
    ],
    practiseHref: "/scenarios/research-brief",
  },
  {
    id: "claude-artifact-loop",
    title: "Claude Artifact delivery loop",
    description: "Use Projects + Skills + Artifacts for a real editable output.",
    platformId: "claude",
    outcome: "An Artifact you can revise with clear success criteria.",
    steps: [
      { feature: "Projects", action: "Load docs and set project instructions / rubric." },
      { feature: "Skills 2.0", action: "Invoke an Office/PDF Skill when you need a real file, not prose." },
      { feature: "Artifacts", action: "Ask for an Artifact-ready deliverable beside the chat." },
      { feature: "Effort control", action: "Raise effort for hard reasoning; lower it for fast drafts." },
    ],
    practiseHref: "/scenarios/artifact-doc",
  },
  {
    id: "gemini-workspace-brief",
    title: "Gemini Workspace briefing",
    description: "Pull personal context, research deeply, land the output in Docs.",
    platformId: "gemini",
    outcome: "A Docs-ready brief grounded in Drive/Gmail context.",
    steps: [
      { feature: "Personal Intelligence", action: "Allow Gmail/Drive/Calendar context for a personalized briefing." },
      { feature: "Deep Research", action: "Kick off multi-source research with a clear deliverable shape." },
      { feature: "Workspace inline", action: "Finish inside Docs/Sheets instead of copy-pasting from chat." },
      { feature: "Gems", action: "Save the workflow as a Gem if you will repeat it." },
    ],
    practiseHref: "/scenarios/gemini-docs",
  },
  {
    id: "cursor-safe-refactor",
    title: "Cursor safe multi-file refactor",
    description: "Plan → agent → verify with browser/checkpoints.",
    platformId: "cursor",
    outcome: "A reviewed multi-file change with a rollback path.",
    steps: [
      { feature: "Rules", action: "Encode architecture and “do not” constraints in .cursor/rules." },
      { feature: "Plan Mode", action: "Require a step-by-step plan before edits." },
      { feature: "Agent", action: "Execute across files with clear acceptance criteria." },
      { feature: "Checkpoints + Browser", action: "Roll back if needed; verify UI in the built-in browser." },
    ],
    practiseHref: "/scenarios/code-explain",
  },
  {
    id: "perplexity-decision-brief",
    title: "Perplexity decision brief",
    description: "Cited research organized in Spaces with scheduled updates.",
    platformId: "perplexity",
    outcome: "A sourced brief you can re-run on a schedule.",
    steps: [
      { feature: "Pro Search / Deep Research", action: "Demand citations and competing viewpoints." },
      { feature: "Spaces", action: "Group threads and files under one project Space." },
      { feature: "Connectors", action: "Pull Gmail/Drive/Slack context when the decision is internal." },
      { feature: "Scheduled Searches", action: "Automate a recurring brief instead of retyping the query." },
    ],
    practiseHref: "/scenarios/research-brief",
  },
  {
    id: "copilot-meeting-to-action",
    title: "Copilot meeting → action",
    description: "Teams summary into Outlook/Excel owners and dates.",
    platformId: "copilot",
    outcome: "Owners, due dates, and follow-ups grounded in Graph context.",
    steps: [
      { feature: "Teams Copilot", action: "Capture transcript, decisions, and open questions." },
      { feature: "Outlook", action: "Draft follow-ups from thread/meeting context." },
      { feature: "Excel", action: "Turn actions into a tracker with owners and dates." },
      { feature: "Copilot Studio", action: "Productize the flow as a custom agent if it repeats weekly." },
    ],
    practiseHref: "/scenarios/meeting-followups",
  },
  {
    id: "kimi-swarm-delivery",
    title: "Kimi Agent Swarm delivery",
    description: "Parallel sub-agents into Office outputs + optional Claw.",
    platformId: "kimi",
    outcome: "Parallel research/analysis packaged as Word/Excel/PPT.",
    steps: [
      { feature: "Agent Swarm", action: "Split competitor teardown, pricing table, and slides into parallel agents." },
      { feature: "Office end-to-end", action: "Require structured Word/Excel/PPT outputs." },
      { feature: "Kimi Work", action: "Save Skills/scheduled tasks for the next cycle." },
      { feature: "Kimi Claw", action: "Move recurring monitoring to a zero-deploy cloud agent." },
    ],
    practiseHref: "/scenarios/kimi-swarm",
  },
  {
    id: "qwen-screenshot-to-ship",
    title: "Qwen screenshot → ship",
    description: "Multimodal UI generation plus agentic test/fix loop.",
    platformId: "qwen",
    outcome: "A front-end draft iterated until tests pass.",
    steps: [
      { feature: "3.6-Plus multimodal", action: "Generate UI code from screenshot/design + text constraints." },
      { feature: "Agentic coding", action: "Write → test → fix until acceptance criteria pass." },
      { feature: "Edge / self-host", action: "Move sensitive repos to Apache self-host if needed." },
      { feature: "chat.qwen.ai", action: "Use unlimited free chat for ideation before API spend." },
    ],
    practiseHref: "/scenarios/qwen-from-screenshot",
  },
];

export function getWorkflow(id: string) {
  return workflows.find((w) => w.id === id);
}
