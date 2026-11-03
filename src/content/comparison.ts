export const featureComparison = {
  columns: [
    "ChatGPT",
    "Claude",
    "Gemini",
    "Cursor",
    "Perplexity",
    "MS Copilot",
    "Kimi",
    "DeepSeek",
    "GLM / Z.ai",
    "MiniMax",
    "Qwen",
  ] as const,
  rows: [
    {
      feature: "Primary strength",
      values: [
        "Broadest AI platform",
        "Best coding + safety",
        "Deepest ecosystem",
        "Best AI code editor",
        "Best cited research",
        "Best enterprise productivity",
        "Long-context agents + open models",
        "Open-weight reasoning + low cost",
        "Open agents, ZCode, cyber",
        "Full multimodal creative stack",
        "Prolific open-weight + agentic coding",
      ],
    },
    {
      feature: "Context window",
      values: [
        "1.05M tokens",
        "200K tokens",
        "1M–2M tokens",
        "Repo-level indexing",
        "Query-based",
        "Document-level",
        "1M+ tokens",
        "1M tokens (V4)",
        "~200K–1M (5.2+)",
        "Long-context M-series",
        "1M tokens (flagship)",
      ],
    },
    {
      feature: "Image generation",
      values: [
        "Native (DALL·E / GPT)",
        "Third-party only",
        "Native (Nano Banana)",
        "No",
        "Via models",
        "Yes (DALL·E)",
        "Native multimodal",
        "Limited vs peers",
        "Chat / API dependent",
        "Yes (platform)",
        "Yes (Qwen-Image)",
      ],
    },
    {
      feature: "Voice mode",
      values: [
        "Advanced",
        "Basic",
        "Gemini Live",
        "No",
        "Voice Mode",
        "Basic",
        "App / platform dependent",
        "Basic / limited",
        "App dependent",
        "Speech + cloning (40 langs)",
        "Qwen3-TTS",
      ],
    },
    {
      feature: "Web search",
      values: [
        "Built-in",
        "Built-in",
        "Native (Google Search)",
        "No",
        "Core feature",
        "Bing",
        "Built-in",
        "Chat / tool dependent",
        "Tool / agent dependent",
        "Tool calling / search",
        "Tool / agent dependent",
      ],
    },
    {
      feature: "Autonomous agents",
      values: [
        "dots, Operator",
        "Claude Code, Cowork",
        "Enterprise Agent Platform",
        "Background Agents",
        "Computer",
        "Copilot Studio agents",
        "Agent Swarm, Claw, Work",
        "Thinking + tool use",
        "AutoGLM, agentic API",
        "Mavis + computer use",
        "Desktop/mobile + agentic coding",
      ],
    },
    {
      feature: "File analysis",
      values: [
        "Broad formats",
        "Broad formats",
        "Drive integration",
        "Code files",
        "PDF, DOCX, etc.",
        "M365 files",
        "50+ formats",
        "Text / code / data",
        "Docs + tools",
        "Office + multimodal",
        "Code + multimodal inputs",
      ],
    },
    {
      feature: "Memory / personalization",
      values: [
        "Dreaming memory",
        "Session memory",
        "Personal Intelligence",
        "Rules per project",
        "~95% recall memory",
        "Microsoft Graph",
        "Long memory buffer",
        "Session / self-host config",
        "Membership / API config",
        "Apps + agent memory",
        "Chat / API / self-host",
      ],
    },
    {
      feature: "Persistent workspaces",
      values: [
        "Projects",
        "Projects",
        "Projects",
        "Rules + repo",
        "Spaces",
        "Copilot Studio",
        "Kimi Work + Skills",
        "Self-host / API apps",
        "ZCode + MaaS",
        "Code + consumer apps",
        "Model Studio + self-host",
      ],
    },
    {
      feature: "Collaborative tools",
      values: [
        "Canvas, Pages, Space",
        "Artifacts, Design",
        "Canvas, Workspace AI",
        "PR review, multi-agent",
        "Spaces, Labs",
        "Word / PPT / Excel Copilot",
        "Office end-to-end + Work",
        "API / IDE model slot",
        "ZCode IDE",
        "Hailuo, Talkie, Code",
        "Cursor / agent frameworks",
      ],
    },
    {
      feature: "API access",
      values: [
        "Full",
        "Full",
        "Full",
        "Editor (not an API product)",
        "Sonar API",
        "Azure OpenAI",
        "OpenAI-compatible",
        "OpenAI-compatible",
        "OpenAI-compatible",
        "OpenAI-compatible",
        "OpenAI-compatible",
      ],
    },
    {
      feature: "Custom agents / GPTs",
      values: [
        "Custom GPTs + plugins",
        "Skills + add-ins",
        "Gems",
        "Rules + custom prompts",
        "Custom Skills",
        "Copilot Studio",
        "Skills + Agent Swarm",
        "Build on API / self-host",
        "Agents + AutoGLM",
        "Mavis + tool/MCP agents",
        "Agent frameworks + coding agents",
      ],
    },
    {
      feature: "MCP support",
      values: [
        "Emerging",
        "Pioneer (open standard)",
        "Emerging",
        "Native",
        "No",
        "Emerging",
        "Native",
        "Via tooling / hosts",
        "Native (Z.ai API)",
        "Yes (tool / MCP)",
        "Via frameworks",
      ],
    },
  ],
};

export const pricingComparison = {
  columns: [
    "ChatGPT",
    "Claude",
    "Gemini",
    "Cursor",
    "Perplexity",
    "MS Copilot",
    "Kimi",
    "DeepSeek",
    "GLM / Z.ai",
    "MiniMax",
    "Qwen",
  ] as const,
  rows: [
    {
      tier: "Free",
      values: [
        "Yes",
        "Yes",
        "Yes",
        "Yes (limited)",
        "Yes",
        "Yes",
        "Yes (Adagio)",
        "Yes (web chat)",
        "Yes (daily quota)",
        "Yes (limited API)",
        "Yes (unlimited chat)",
      ],
    },
    {
      tier: "~$20/mo",
      values: [
        "Plus",
        "Pro",
        "AI Pro",
        "Pro",
        "Pro",
        "Copilot Pro",
        "Premium (varies)",
        "API usage",
        "Membership",
        "API / coding plan",
        "API usage",
      ],
    },
    {
      tier: "~$200/mo",
      values: ["Pro", "Max", "—", "Ultra", "Max", "—", "—", "—", "—", "—", "—"],
    },
    {
      tier: "Team / Business",
      values: [
        "Team",
        "Team",
        "Workspace AI",
        "Business ($40)",
        "Enterprise",
        "M365 Copilot ($30)",
        "API / enterprise options",
        "Self-host / API",
        "MaaS / API",
        "API platform",
        "Model Studio / cloud",
      ],
    },
    {
      tier: "Enterprise",
      values: [
        "Custom",
        "Custom",
        "Custom",
        "Custom",
        "Custom",
        "Custom",
        "Custom / self-host",
        "Self-host (MIT)",
        "Custom / self-host",
        "Custom / API",
        "Self-host (Apache 2.0)",
      ],
    },
  ],
};

export const underusedFeatures = [
  {
    platform: "ChatGPT",
    href: "/platforms/chatgpt",
    items:
      "Projects with scoped memory, Canvas, Tasks, Custom GPTs, Code Interpreter, Deep Research",
  },
  {
    platform: "Claude",
    href: "/platforms/claude",
    items:
      "Artifacts, MCP connections, Skills 2.0, Effort Control, Projects with custom instructions",
  },
  {
    platform: "Gemini",
    href: "/platforms/gemini",
    items:
      "Gems, Deep Research, Personal Intelligence, Workspace integration beyond basic chat",
  },
  {
    platform: "Cursor",
    href: "/platforms/cursor",
    items:
      ".cursor/rules, Plan Mode, Checkpoints, Background Agents, MCP, Hooks, built-in browser",
  },
  {
    platform: "Perplexity",
    href: "/platforms/perplexity",
    items:
      "Spaces, Scheduled Searches, Connectors, Custom Skills, Model Council, Finance tools",
  },
  {
    platform: "MS Copilot",
    href: "/platforms/copilot",
    items:
      "Copilot Studio, Excel natural-language analysis, Teams meeting intelligence, Power Automate, M365 Chat with Graph",
  },
  {
    platform: "Kimi",
    href: "/platforms/kimi",
    items:
      "Agent Swarm, Kimi Claw, Kimi Code, Kimi Work Skills, Researcher, open weights / self-host",
  },
  {
    platform: "DeepSeek",
    href: "/platforms/deepseek",
    items:
      "R1 reasoning mode, V4 1M context, MIT self-hosting, R1-Distill for production, Prover-V2, tool+thinking loop",
  },
  {
    platform: "GLM / Z.ai",
    href: "/platforms/glm",
    items:
      "ZCode IDE, AutoGLM phone agent, thinking+tools, GLM-5.3 cyber, MIT self-host, MCP API",
  },
  {
    platform: "MiniMax",
    href: "/platforms/minimax",
    items:
      "Hailuo video, voice cloning, Music 3.0, MiniMax Code + computer use, Mavis, MCP/browser agents",
  },
  {
    platform: "Qwen",
    href: "/platforms/qwen",
    items:
      "Agentic coding loops, code-from-screenshot, edge/self-host, unlimited free chat, Flash-Next 1M agents, desktop/mobile control",
  },
];

/** Side-by-side of the five Chinese AI platforms */
export const chineseFeatureComparison = {
  columns: ["Kimi", "DeepSeek", "GLM (Z.ai)", "MiniMax", "Qwen"] as const,
  rows: [
    {
      feature: "Developer",
      values: ["Moonshot AI", "DeepSeek", "Zhipu AI (Z.ai)", "MiniMax Group", "Alibaba Cloud"],
    },
    {
      feature: "Flagship model",
      values: [
        "K3 (3T-class)",
        "V4-Pro (1.6T)",
        "GLM-5.3 (743B)",
        "M3.1 Flash",
        "Qwen3.8-Max (2.4T)",
      ],
    },
    {
      feature: "Context window",
      values: ["1M+ tokens", "1M tokens", "1M tokens (GLM-5.2+)", "128K tokens", "1M tokens"],
    },
    {
      feature: "License",
      values: [
        "Open-source (K2.6, K3)",
        "MIT",
        "MIT",
        "Partial open-source",
        "Apache 2.0",
      ],
    },
    {
      feature: "Image generation",
      values: ["Native", "Limited", "Limited", "Native", "Native"],
    },
    {
      feature: "Video generation",
      values: ["Internal testing", "No", "No", "Hailuo AI (world-class)", "No"],
    },
    {
      feature: "Voice / speech",
      values: [
        "Basic",
        "Basic",
        "GLM-4-Voice",
        "Best-in-class (40 languages, cloning)",
        "Qwen3-TTS",
      ],
    },
    {
      feature: "Music generation",
      values: ["No", "No", "No", "Music 3.0", "No"],
    },
    {
      feature: "Code IDE",
      values: ["Kimi Code", "No", "ZCode", "MiniMax Code", "Works in Cursor (no native IDE)"],
    },
    {
      feature: "Phone / desktop agent",
      values: ["Kimi Work", "No", "AutoGLM", "Mavis", "Desktop / mobile agent"],
    },
    {
      feature: "Cloud agents",
      values: ["Kimi Claw", "No", "API-only", "Agent Teams", "Via Alibaba Cloud"],
    },
    {
      feature: "Agent Swarm",
      values: ["Native", "No", "Via tool-use", "Agent Teams", "Via frameworks"],
    },
    {
      feature: "MCP support",
      values: ["Yes", "No", "Yes", "Yes", "Via frameworks"],
    },
    {
      feature: "Web search",
      values: ["Yes", "Yes", "Yes", "Yes", "Yes"],
    },
    {
      feature: "Free chat",
      values: ["Yes", "Yes", "Yes", "Via Talkie / apps", "Yes (unlimited)"],
    },
    {
      feature: "API pricing",
      values: [
        "~1/5 of ChatGPT",
        "Extremely low",
        "Competitive (Flash free)",
        "Very competitive",
        "$0.16–$2.50/M tokens",
      ],
    },
    {
      feature: "HK IPO",
      values: ["Not yet", "Not yet", "Jan 2026 (~$62B)", "Jan 2026", "N/A (Alibaba)"],
    },
    {
      feature: "Cybersecurity",
      values: ["Limited", "Limited", "Best open-weight", "Limited", "Limited"],
    },
  ],
};

export const chinesePricingComparison = {
  columns: ["Kimi", "DeepSeek", "GLM (Z.ai)", "MiniMax", "Qwen"] as const,
  rows: [
    {
      tier: "Free chat",
      values: ["Yes", "Yes", "Yes (daily quota)", "Yes (via apps)", "Yes (unlimited)"],
    },
    {
      tier: "API",
      values: [
        "~1/5 ChatGPT",
        "Cheapest frontier API",
        "Flash free; competitive",
        "Very competitive",
        "$0.16–$2.50/M tokens",
      ],
    },
    {
      tier: "Self-host",
      values: ["Yes (K2.6, K3)", "Yes (MIT)", "Yes (MIT)", "Partial", "Yes (Apache 2.0)"],
    },
  ],
};

export const westVsChina = [
  {
    dimension: "Ecosystem depth",
    western: "ChatGPT (plugins, GPTs), Gemini (Workspace), Copilot (M365)",
    chinese: "Kimi (Work/Claw/Code), GLM (ZCode/AutoGLM), MiniMax (full multimodal)",
    difference: "Western = deeper enterprise integrations; Chinese = more self-contained stacks",
  },
  {
    dimension: "Open source",
    western: "Limited (Claude/GPT closed; Gemini partial)",
    chinese: "DeepSeek (MIT), GLM (MIT), Qwen (Apache 2.0)",
    difference: "Chinese platforms lead in open-weight availability",
  },
  {
    dimension: "Pricing",
    western: "$20–$200/mo subscriptions common",
    chinese: "Free or near-free for many features",
    difference: "Chinese platforms are dramatically cheaper for many workloads",
  },
  {
    dimension: "Multimodal breadth",
    western: "Gemini (text+image+video+audio), ChatGPT (text+image+voice)",
    chinese: "MiniMax (text+image+video+speech+music+voice cloning)",
    difference: "MiniMax has one of the broadest multimodal stacks globally",
  },
  {
    dimension: "Coding",
    western: "Cursor, Claude Code, GitHub Copilot",
    chinese: "Kimi Code, ZCode, MiniMax Code, Qwen Coder",
    difference: "Chinese platforms rapidly catching up; several now ship coding IDEs",
  },
  {
    dimension: "Enterprise compliance",
    western: "SOC 2, HIPAA, FedRAMP, GDPR on major platforms",
    chinese: "Limited formal Western compliance",
    difference: "Major gap for Chinese platforms in regulated Western industries",
  },
  {
    dimension: "Data sovereignty",
    western: "Self-hosting limited; mostly API-dependent",
    chinese: "Full self-hosting via MIT/Apache open weights",
    difference: "Chinese open weights enable true data sovereignty when self-hosted",
  },
  {
    dimension: "Agent capabilities",
    western: "ChatGPT (dots), Claude (Cowork), Copilot (Studio)",
    chinese: "Kimi (Claw/Agent Swarm), GLM (AutoGLM), MiniMax (Mavis)",
    difference: "Both ecosystems racing toward autonomous agents",
  },
  {
    dimension: "Context windows",
    western: "ChatGPT ~1.05M, Gemini ~1–2M",
    chinese: "DeepSeek 1M, GLM 1M, Qwen 1M, Kimi 1M+",
    difference: "Comparable across both ecosystems",
  },
];
