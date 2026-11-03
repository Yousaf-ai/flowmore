export type PowerUserRule = {
  id: string;
  situation: string;
  use: string;
  platformId: string;
  why: string;
  avoid?: string;
};

export const powerUserRules: PowerUserRule[] = [
  {
    id: "cited-facts",
    situation: "You need facts you can verify quickly",
    use: "Perplexity (Pro Search / Deep Research)",
    platformId: "perplexity",
    why: "Inline citations and source-first answers beat generic chat for trust.",
    avoid: "Don’t use a creative chatbot as your only fact checker.",
  },
  {
    id: "multi-file-code",
    situation: "You are changing a real repo across many files",
    use: "Cursor (Plan Mode → Agent → Checkpoints)",
    platformId: "cursor",
    why: "Editor-native agents, diffs, and rules beat paste-into-chat coding.",
    avoid: "Avoid huge blind pastes into a web chatbot.",
  },
  {
    id: "careful-docs",
    situation: "You need a careful long document with a rubric",
    use: "Claude (Projects + Artifacts + Skills)",
    platformId: "claude",
    why: "Long context, Artifacts, and Skills produce editable deliverables.",
  },
  {
    id: "google-work",
    situation: "Your work already lives in Gmail / Drive / Docs",
    use: "Gemini (Personal Intelligence + Workspace inline)",
    platformId: "gemini",
    why: "Answers land where you already work; context is native.",
  },
  {
    id: "microsoft-work",
    situation: "Your work already lives in Outlook / Teams / Excel",
    use: "Microsoft Copilot (Graph-grounded M365)",
    platformId: "copilot",
    why: "Permissions-aware grounding inside the Microsoft stack.",
  },
  {
    id: "general-workspace",
    situation: "You want one flexible AI workspace with plugins/agents",
    use: "ChatGPT (Projects + Canvas + Deep Research + Tasks)",
    platformId: "chatgpt",
    why: "Broadest consumer feature set for mixed writing/research/automation.",
  },
  {
    id: "video-voice",
    situation: "You need video, voice cloning, or music",
    use: "MiniMax (Hailuo + speech + Music)",
    platformId: "minimax",
    why: "Broadest multimodal creative stack among Flowmore platforms.",
  },
  {
    id: "phone-agent",
    situation: "You need a phone agent to tap through apps",
    use: "GLM AutoGLM (or Kimi Work for desktop knowledge work)",
    platformId: "glm",
    why: "AutoGLM is built for multi-step mobile app navigation.",
  },
  {
    id: "cheap-reasoning",
    situation: "You need strong reasoning/coding at minimal API cost",
    use: "DeepSeek R1 / V4 (or self-host MIT)",
    platformId: "deepseek",
    why: "Frontier-competitive reasoning/coding with aggressively low pricing.",
  },
  {
    id: "open-weight-default",
    situation: "You want the default open-weight ecosystem + free unlimited chat",
    use: "Qwen (chat.qwen.ai + Apache self-host)",
    platformId: "qwen",
    why: "Most prolific open-weight family with unlimited free chat and agentic coding.",
  },
  {
    id: "swarm-office",
    situation: "You need parallel agents and Office-ready files",
    use: "Kimi (Agent Swarm + Office + Claw)",
    platformId: "kimi",
    why: "Native swarm + end-to-end Word/Excel/PPT strengths.",
  },
  {
    id: "mix-stack",
    situation: "You are a power user coordinating multiple tools",
    use: "Research in Perplexity → draft in Claude/ChatGPT → ship code in Cursor → media in MiniMax",
    platformId: "perplexity",
    why: "No single platform wins every job—chain specialists.",
    avoid: "Don’t force one model to do citations, coding, and video equally well.",
  },
];
