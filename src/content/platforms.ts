export type PlatformCapability = { title: string; description: string };

export type PricingTier = {
  plan: string;
  price: string;
  inclusions: string;
};

export type UseCaseRow = {
  useCase: string;
  how: string;
};

export type Platform = {
  id: string;
  name: string;
  vendor?: string;
  tagline: string;
  summary: string;
  /** Short technical overview paragraphs */
  technical?: {
    models?: string[];
    multimodal?: string;
    architecture?: string;
  };
  capabilities: PlatformCapability[];
  mostUsersMiss: string[];
  pricing?: PricingTier[];
  pricingNote?: string;
  useCases?: UseCaseRow[];
  useCasesNote?: string;
  integrations?: string[];
  security?: string[];
  strengths?: string[];
  weaknesses?: string[];
  practiceTips: string[];
};

export const platforms: Platform[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    vendor: "OpenAI",
    tagline: "From chatbot to AI workspace — Projects, agents, research, and more",
    summary:
      "Most people treat ChatGPT like a search box. In 2026 it behaves more like an AI workspace: Projects, Memory, Deep Research, Canvas, agents, voice, and connectors. Power users shape those features so the model works inside real workflows—not one-off chats.",
    technical: {
      models: [
        "GPT-5.6 Sol is the flagship of the GPT-5.6 series (alongside lighter Terra and Luna), with a context window of about 1.05M tokens and a 128k output limit.",
        "Updated GPT-5.6 models focus on accuracy, consistency, and more focused responses. Plus and Pro users can adjust how much thinking ChatGPT puts into a response; Free users get a Think option for questions that need extra reasoning.",
        "Recent product shifts include GPT-6 with Intelligent UI (7 October 2026), always-on agents called dots (29 September 2026), Pages and Space for shared work, audio uploads, and a Microsoft Word add-in.",
        "Intelligent UI lets ChatGPT answer with interactive visuals—diagrams, charts, calculators, and tappable buttons—rather than text alone. It shipped with GPT-6 on 7 October 2026.",
      ],
      multimodal:
        "ChatGPT accepts PDF, DOCX, XLSX, CSV, TXT, JSON, HTML, images, code files, and audio files.",
      architecture:
        "Transformer-based large language model family, with reasoning-tier models (o-series) for extended chain-of-thought processing.",
    },
    capabilities: [
      {
        title: "Projects",
        description:
          "Persistent workspaces with scoped memory and uploaded files so ongoing work does not start from zero every time.",
      },
      {
        title: "Memory",
        description:
          "A persistent profile with extracted facts across sessions. The rebuilt Dreaming memory system offers roughly 2× capacity for Plus and Pro users.",
      },
      {
        title: "Deep Research",
        description:
          "A multi-step research agent with web retrieval and structured citations—one of the biggest productivity gains for business users.",
      },
      {
        title: "Canvas",
        description:
          "Side-by-side editing for collaborative documents and code, instead of dumping everything into a single chat bubble.",
      },
      {
        title: "ChatGPT Agent",
        description:
          "A computer-use agent that can act on tasks beyond plain chat. Pair with connectors and desktop workflows for bigger gains.",
      },
      {
        title: "Advanced Voice Mode",
        description:
          "Real-time spoken conversation, with enhanced real-time Voice among the 2026 upgrades.",
      },
      {
        title: "Code Interpreter",
        description:
          "A Python sandbox for data analysis, math, charts, and file-driven work.",
      },
      {
        title: "Custom GPTs & GPT Store",
        description:
          "Reusable assistants with custom instructions and API actions. In July 2026, ChatGPT apps were renamed to plugins.",
      },
      {
        title: "Tasks",
        description:
          "Scheduled recurring or one-time operations so ChatGPT can run work on a cadence.",
      },
      {
        title: "File uploads & web browsing",
        description:
          "Upload source files and use web browsing/search when answers need current information.",
      },
      {
        title: "Prism & ChatGPT Go",
        description:
          "Prism is an AI-native research workspace. ChatGPT Go is a low-cost plan with far more messages, uploads, and image creation than Free.",
      },
      {
        title: "Lockdown Mode",
        description:
          "Launched June 2026 with Elevated Risk labels for prompt-injection protection on higher-risk actions.",
      },
    ],
    mostUsersMiss: [
      "Open a Project for each ongoing job and upload source files once.",
      "Turn on and curate Memory so ChatGPT stops re-asking who you are.",
      "Use Deep Research for multi-source topics instead of a single shallow answer.",
      "Switch to Canvas when you need to edit a document or code side by side.",
      "Build one Custom GPT (or plugin) for a task you repeat every week.",
      "Use Tasks for recurring work instead of remaking the same prompt.",
      "Connect Slack, Drive, or other connectors when the answer lives in your tools.",
      "Try Intelligent UI outputs (charts, calculators, interactive controls) when a visual answer is clearer than text.",
    ],
    pricing: [
      {
        plan: "Free",
        price: "$0",
        inclusions: "GPT-5.3 Instant by default, limited messages, basic features, Think option for harder questions",
      },
      {
        plan: "ChatGPT Go",
        price: "Low-cost tier",
        inclusions: "About 10× more messages, uploads, and image creation versus Free",
      },
      {
        plan: "Plus",
        price: "~$20/mo",
        inclusions: "GPT-5.5+ reasoning tiers, Canvas, Deep Research, Voice, Projects",
      },
      {
        plan: "Pro",
        price: "$200/mo",
        inclusions: "All models including GPT-5.5 Pro, highest limits, extended context",
      },
      {
        plan: "Team / Business",
        price: "Per-seat pricing",
        inclusions: "Admin controls, workspace features, connectors",
      },
      {
        plan: "Enterprise",
        price: "Custom",
        inclusions: "SSO, SCIM, advanced security, compliance, dedicated support",
      },
    ],
    pricingNote:
      "The gap between Free and paid is mainly usage limits and features such as Deep Research and Canvas—not raw model quality alone.",
    useCases: [
      {
        useCase: "Education",
        how: "Study guides, document summarization, Canvas for collaborative writing, Code Interpreter for math and data",
      },
      {
        useCase: "Coding",
        how: "Code Interpreter sandbox, Codex (autonomous coding agent), Canvas for code editing",
      },
      {
        useCase: "Business",
        how: "Projects for team workflows, Deep Research for market analysis, Tasks for automation, connectors to enterprise tools",
      },
      {
        useCase: "Research",
        how: "Deep Research reads multiple sources with citations; web search for current information",
      },
      {
        useCase: "Everyday",
        how: "Voice conversations, image generation, scheduled tasks, Memory for personalization",
      },
    ],
    useCasesNote:
      "The biggest shift in ChatGPT during 2026 is that it is becoming less like a standalone chatbot and more like an AI workspace.",
    integrations: [
      "Custom GPTs / plugins — user-built configurations with custom instructions and API actions",
      "Connectors — link to enterprise data sources such as Slack and Google Drive",
      "API — Chat Completions, Assistants API, and Realtime API for voice",
      "Desktop apps — macOS and Windows",
      "Microsoft Word add-in (September 2026)",
      "Codex — autonomous software engineering agent",
    ],
    security: [
      "Enterprise-grade controls including SOC 2 Type II, with encryption at rest and in transit",
      "Lockdown Mode (June 2026) with Elevated Risk labels for prompt-injection protection",
      "Data not used for training on paid Team and Enterprise plans",
      "GDPR and CCPA compliant",
      "Agent and Memory features raise privacy trade-offs because they gather and remember more about users than classic chat tools",
    ],
    strengths: [
      "Broadest feature set of any major consumer AI assistant",
      "Large Custom GPT / plugin ecosystem",
      "Strong multimodal support across text, image, voice, code, and files",
      "Projects and Canvas for collaborative work",
      "Best-in-class voice mode for many everyday users",
    ],
    weaknesses: [
      "Feature bloat — hard to discover everything without a map like Flowmore",
      "Reported market share fell below 50% for the first time",
      "Memory and agent features increase privacy and security concerns",
      "Rate limits can frustrate power users",
      "Some advanced capabilities sit behind the $200/mo Pro tier",
    ],
    practiceTips: [
      "State role, goal, audience, constraints, and format in one prompt.",
      "Name the ChatGPT feature you will use next (Project, Custom GPT, Canvas, Deep Research).",
      "Ask for a checklist of steps the model should follow before answering.",
    ],
  },
  {
    id: "claude",
    name: "Claude",
    vendor: "Anthropic",
    tagline: "Long-context reasoning, Artifacts, Skills, and MCP-powered workflows",
    summary:
      "Claude shines when you give it large documents, clear rubrics, and room to produce Artifacts, Skills, and agent workflows—not one-line questions. In 2026 it spans coding agents, finance packs, Design, Memory, and MCP so work happens inside real tools, not only in chat.",
    technical: {
      models: [
        "The 2026 lineup includes Fable 5, Mythos 5, Opus 4.8, Sonnet 5, and Haiku 4.5—five models across the family.",
        "Opus 4.8 launches with several new features: effort control on claude.ai, and Claude Code dynamic workflows for very large-scale problems.",
        "Claude Opus 4.6 brought stronger coding, better planning and debugging, improved financial analysis, and a reported task-completion time horizon of about 14.5 hours—among the longest of any AI model.",
        "Opus 4.7 is available across Claude.ai, the Claude API, Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry.",
      ],
      multimodal:
        "Text, images, PDFs, and code files. Third-party integrations can pair Claude with image generation models, but image generation is not a native Claude capability.",
      architecture:
        "200K-token context window as standard on Opus and Sonnet, with research and product direction aiming for windows that feel effectively unlimited for long work.",
    },
    capabilities: [
      {
        title: "Skills 2.0",
        description:
          "Full workflow packages with executable scripts, shipped in Q1 2026. Anthropic provides pre-built Skills for Excel, PowerPoint, Word, and PDF work so Claude produces real deliverables—not only text.",
      },
      {
        title: "Chat memory",
        description:
          "Claude derives summaries of past conversations and carries them across sessions. View and manage them at Settings → Capabilities → Memory. Available on all tiers, including Free, since 2 March 2026.",
      },
      {
        title: "MCP (Model Context Protocol)",
        description:
          "An open standard Anthropic designed so Claude can connect to external tools, data sources, and services through one interface. Research preview January 2026; generally available on all paid plans April 2026.",
      },
      {
        title: "Claude Design",
        description:
          "A collaborative visual creation tool released 17 April 2026 for designs, prototypes, slides, and marketing materials via natural-language prompts.",
      },
      {
        title: "Dynamic workflows & effort control",
        description:
          "Dynamic workflows let Claude plan large jobs and run hundreds of parallel subagents in one session. Effort control lets you trade deeper thinking for speed and slower rate-limit use.",
      },
      {
        title: "Claude Code & Code Security",
        description:
          "Terminal-based autonomous coding agent with dynamic workflows for migrations and large refactors. Claude Code Security uses reasoning-based scanning to hunt zero-day vulnerabilities in codebases.",
      },
      {
        title: "Agents, Finance & add-ins",
        description:
          "Key agent features include Dreaming, Outcomes, multi-agent orchestration, Claude Finance (10 pre-built agents for financial services), and add-ins from the marketplace.",
      },
      {
        title: "Artifacts",
        description:
          "Interactive, renderable outputs—code, documents, visualizations—shown beside the chat. One of Claude’s most underused features.",
      },
      {
        title: "Projects",
        description:
          "Persistent workspaces with custom instructions and uploaded knowledge bases for ongoing research and team work.",
      },
      {
        title: "Computer Use & scheduled tasks",
        description:
          "Point, click, and navigate on screen; run scheduled tasks on Anthropic’s cloud; remotely control Claude Code on servers or CI.",
      },
    ],
    mostUsersMiss: [
      "Put source docs in a Project before asking for analysis.",
      "Request an Artifact when you need something you will edit side by side.",
      "Install or invoke a Skill (Excel, PPT, Word, PDF) instead of asking for plain text only.",
      "Turn on Memory and review what Claude stores under Settings → Capabilities → Memory.",
      "Connect tools via MCP instead of copy-pasting data from other apps.",
      "Use effort control: higher for hard reasoning, lower when you need speed.",
      "For large code jobs, use Claude Code dynamic workflows and parallel subagents.",
      "Try Claude Design when the deliverable is a slide, prototype, or marketing visual.",
    ],
    pricing: [
      {
        plan: "Free",
        price: "$0",
        inclusions: "Sonnet model, basic features, Memory, limited usage",
      },
      {
        plan: "Pro",
        price: "$20/mo",
        inclusions: "Opus access, higher limits, Projects, Artifacts, Claude Code",
      },
      {
        plan: "Max",
        price: "$100–200/mo",
        inclusions: "Highest limits, all models, priority access, full Claude Code",
      },
      {
        plan: "Team",
        price: "Per-seat",
        inclusions: "Shared workspaces, admin controls, Claude Code, MCP",
      },
      {
        plan: "Enterprise",
        price: "Custom",
        inclusions: "SSO, SCIM, audit logs, data isolation, SLAs",
      },
    ],
    useCases: [
      {
        useCase: "Education",
        how: "Long-document analysis with 200K context, Artifacts for interactive learning materials, careful explanations",
      },
      {
        useCase: "Coding",
        how: "Claude Code (terminal agent), Code Security, multi-agent code review, dynamic workflows for codebase migrations",
      },
      {
        useCase: "Business",
        how: "Claude Finance (10 predefined agents), Skills for Excel/PowerPoint/Word, Claude Design for marketing",
      },
      {
        useCase: "Research",
        how: "Deep analysis of full documents and books, web search, Projects for persistent research contexts",
      },
      {
        useCase: "Everyday",
        how: "Conversation, writing assistance, Memory-powered personalization",
      },
    ],
    useCasesNote:
      "Beyond chat: Computer Use, scheduled cloud tasks, and remote Claude Code on servers or CI extend Claude into the desktop and pipeline.",
    integrations: [
      "MCP — open standard for connecting to external tools and data sources",
      "Claude Code — terminal-based autonomous coding agent",
      "Claude for Chrome — browser extension",
      "Cowork — desktop agent (macOS, Windows) for computer use",
      "API — Claude API, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry",
      "Marketplace (March 2026) — community-built Skills and add-ins",
      "Connectors — integrations with enterprise tools",
    ],
    security: [
      "Constitutional AI methodology for ethical compliance",
      "2026 updates include improved bias detection, reduced hallucinations, transparent reasoning explanations, and stronger privacy preservation",
      "SOC 2 Type II certified",
      "Enterprise data isolation; data not used for training by default",
      "GDPR, CCPA, and HIPAA-eligible on Enterprise",
      "Audit logging on Enterprise and Team plans",
    ],
    strengths: [
      "Best-in-class for many coding workflows via Claude Code",
      "Long reported task-completion horizon (about 14.5 hours on Opus 4.6)",
      "MCP as an open standard for tool integration",
      "Artifacts for interactive outputs beside the chat",
      "Constitutional AI emphasis on safety",
      "Skills 2.0 for real Office/PDF deliverables—not just text",
    ],
    weaknesses: [
      "No native image generation",
      "Smaller plugin ecosystem than ChatGPT",
      "Can be overly cautious or verbose",
      "Voice mode less developed than competitors",
      "Standard context window (200K) is smaller than GPT-5.6’s ~1M tokens",
    ],
    practiceTips: [
      "Include success criteria and what to avoid.",
      "Ask for an Artifact-ready deliverable, not just advice.",
      "Name Skills, MCP tools, Projects, or Claude Code when the job needs them.",
    ],
  },
  {
    id: "gemini",
    name: "Gemini",
    vendor: "Google DeepMind",
    tagline: "Universal agent across Workspace, Search, Android, and multimodal creation",
    summary:
      "Gemini is strongest when you use it inside Google’s ecosystem—Gmail, Drive, Docs, Search, Android—plus Deep Research, Gems, Live voice, and true multimodal input/output. Treat it as a workspace agent, not only a chat box at gemini.google.com.",
    technical: {
      models: [
        "Current lineup includes Gemini 4 Argon (30 September 2026), Gemini 3 Deep Think (12 February 2026), Gemini 3.8 Flash (2 September 2026), and Gemini 3.5 Flash-Lite (21 July 2026).",
        "Gemini 3.5 Flash combines frontier intelligence with agentic tasks; Gemini 3.5 Pro is available for advanced use.",
        "Gemini Omni is a new series that combines reasoning with creation: it accepts image, audio, video, and text input and can output video grounded in real-world knowledge.",
      ],
      multimodal:
        "Available on iOS, Android, and gemini.google.com. Google’s multimodal models handle text, images, audio, and video in natural conversation—input and, with Omni, richer media output.",
      architecture:
        "Context windows up to 1M+ tokens on Gemini Pro models, with up to 2M tokens on some API configurations—among the largest of any major platform.",
    },
    capabilities: [
      {
        title: "Personal Intelligence",
        description:
          "Pulls from Gmail, Drive, Calendar, and other Workspace apps to create personalized briefings grounded in your own accounts.",
      },
      {
        title: "Gemini Live",
        description:
          "Voice conversations built into the main Gemini interface so you can move between typing and speaking in the same thread.",
      },
      {
        title: "Deep Research",
        description:
          "Autonomous research reports that go beyond a single shallow answer—ideal for study and market work.",
      },
      {
        title: "Custom Gems",
        description:
          "Specialized assistants for recurring tasks. Powerful when scoped well, though generally less deep than Custom GPTs or Claude Projects.",
      },
      {
        title: "Canvas",
        description:
          "Interactive visual prototyping beside the conversation for designs and structured drafts.",
      },
      {
        title: "Nano Banana",
        description:
          "Image generation inside the Gemini experience for everyday creative and marketing visuals.",
      },
      {
        title: "Computer use (agentic)",
        description:
          "Built into Gemini 3.5 Flash from June 2026 so developers can build agents that interact with browser, desktop, and mobile interfaces.",
      },
      {
        title: "Inline Workspace agent",
        description:
          "Works directly inside Gmail, Drive, Docs, Slides, Sheets, Chat, and Calendar—one universal agent for knowledge work, media, and code.",
      },
      {
        title: "Projects & notebook workflows",
        description:
          "Structure conversations into dedicated projects and use notebook-style workflows on the web, including without a paid subscription in some cases.",
      },
      {
        title: "Compute-used limits",
        description:
          "The Gemini app is moving from daily prompt caps to a compute-used model that factors prompt complexity, features used, and chat length.",
      },
    ],
    mostUsersMiss: [
      "Turn on Personal Intelligence so Gemini can brief you from Gmail, Drive, and Calendar.",
      "Use Deep Research instead of a single chat answer for multi-source topics.",
      "Create a Gem for any workflow you repeat weekly.",
      "Work inline in Docs, Sheets, or Gmail—don’t only use gemini.google.com.",
      "Switch to Gemini Live in the same thread when speaking is faster than typing.",
      "Open Canvas or Nano Banana when the output should be visual, not only text.",
      "Organize long work into Projects or notebook-style workflows.",
      "For agent work, use computer-use capabilities on Flash/Pro rather than describing clicks by hand.",
    ],
    pricing: [
      {
        plan: "Free",
        price: "$0",
        inclusions: "Gemini Flash models, basic features, limited usage",
      },
      {
        plan: "AI Plus",
        price: "~$10/mo",
        inclusions: "More access to advanced models, additional storage",
      },
      {
        plan: "AI Pro",
        price: "$20/mo",
        inclusions: "Broader access to advanced Gemini 3 Pro capabilities with more AI credits",
      },
      {
        plan: "AI Ultra",
        price: "~$25–30/mo",
        inclusions: "Gemini Pro/Ultra models, ~30TB storage, full Workspace AI, highest limits",
      },
      {
        plan: "Google One AI Premium",
        price: "Bundled with storage",
        inclusions: "2TB+ storage, Gemini in Workspace",
      },
      {
        plan: "Enterprise (Workspace)",
        price: "Per-seat",
        inclusions: "Full Gemini Enterprise Agent Platform, custom agents, compliance",
      },
    ],
    useCases: [
      {
        useCase: "Education",
        how: "NotebookLM for study materials, Deep Research, Gemini in Docs for writing",
      },
      {
        useCase: "Coding",
        how: "Code generation, Gemini Code Assist in IDEs, Jules (agentic coding assistant)",
      },
      {
        useCase: "Business",
        how: "Inline in Gmail, Drive, Docs, Slides, Sheets, Chat, and Calendar; Enterprise Agent Platform for custom workflows",
      },
      {
        useCase: "Research",
        how: "Deep Research mode, 1M+ token context for massive documents, Gemini in Search",
      },
      {
        useCase: "Everyday",
        how: "Gemini Live in the same conversation as text; Android system assistant replacement",
      },
    ],
    useCasesNote:
      "Gemini’s edge is reach: one agent across devices and Google products, not a single standalone chatbot.",
    integrations: [
      "Access from web, iOS, Android, Windows, Mac, CLI, Google Workspace, Microsoft 365, and Slack",
      "Google Workspace — Gmail, Drive, Docs, Slides, Sheets, Calendar, Chat, Meet",
      "Gemini Enterprise Agent Platform (announced 22 April 2026) — evolution/replacement path from Vertex AI for enterprise agents",
      "Google Search — AI Mode powered by Gemini",
      "Android — system-wide assistant replacement",
      "API — Gemini API via Google AI Studio and Google Cloud",
      "Chrome — built-in AI features",
      "NotebookLM — AI-powered research notebook",
    ],
    security: [
      "Enterprise controls including HIPAA compliance, customer-managed encryption keys (CMEK), and VPC Service Controls",
      "SOC 2 Type II, ISO 27001, and FedRAMP via Google Cloud",
      "Data processing agreements for Workspace",
      "Governed by Google’s AI Principles",
      "On consumer plans, prompts may be reviewed for quality; opt-out is available",
      "SynthID watermarking for AI-generated content",
    ],
    strengths: [
      "Deepest ecosystem integration across Workspace, Android, Search, and Chrome",
      "Largest context windows (about 1M–2M tokens)",
      "True multimodal — text, image, audio, and video in (and richer media out with Omni)",
      "Generous free tier for many everyday users",
      "Seamless Gemini Live voice in the main app",
      "Compute-used billing model that can feel fairer than flat daily caps",
    ],
    weaknesses: [
      "Can feel fragmented — features spread across many Google products",
      "Some consumer features lag ChatGPT or Claude in depth",
      "Privacy trade-offs with deep Google account integration",
      "Enterprise pricing can be complex or bundled with Workspace",
      "Custom Gems are generally less powerful than Custom GPTs or Claude Projects",
    ],
    practiceTips: [
      "Say which Google app the output belongs in (Docs, Sheets, Gmail).",
      "Request Deep Research with sources when the topic is multi-sided.",
      "Mention Personal Intelligence, Gems, Live, Canvas, or Omni when those features fit the job.",
    ],
  },
  {
    id: "cursor",
    name: "Cursor",
    vendor: "Anysphere",
    tagline: "AI-first code editor — Rules, agents, Plan Mode, and MCP on a VS Code fork",
    summary:
      "Cursor is not ChatGPT in an editor. Anysphere forked VS Code and rebuilt AI into the core: Rules, Plan Mode, Composer, Agent, Browser, Hooks, and Background Agents. Cursor 2.0 centered the UI on agents; Cursor 3.0 made parallel agents across local, cloud, and SSH feel like a workbench—not just autocomplete.",
    technical: {
      models: [
        "Composer 2 is Cursor’s own frontier coding model—described as about 4× faster than similarly intelligent models, with most turns completing in under 30 seconds.",
        "Cursor also supports multiple frontier models (Claude, GPT, Gemini) so you can pick the model that fits the task.",
        "As a standalone VS Code fork, Cursor embeds AI into the editor architecture with autonomous agents that can run terminal commands, browse the web, and coordinate subtasks.",
      ],
      multimodal:
        "Built for software work: codebase context, diffs, terminal, browser testing, and multi-file edits. Not a general-purpose consumer chatbot.",
      architecture:
        "VS Code–compatible fork with AI at the core (not a thin plugin). Tab predicts multi-line edits across files; Agent has native file and shell access; Plan Mode and Checkpoints support real codebase workflows.",
    },
    capabilities: [
      {
        title: "Agent workbench (Cursor 2.0+)",
        description:
          "Context-aware chat and Tab that understand your repo, long-running agents with planning, diffs, and branch/PR workflows. Cursor 2.0 introduced Composer and an agent-centered UI—less “VS Code with AI,” more “agent workbench.”",
      },
      {
        title: "Agents Window (Cursor 3.0)",
        description:
          "Shipped 2 April 2026 for running many agents in parallel and moving work between local, cloud, and SSH environments.",
      },
      {
        title: "Composer",
        description:
          "Multi-file edits driven by Cursor’s coding model, built for structural changes across a project.",
      },
      {
        title: "Rules (.cursor/rules/)",
        description:
          "Per-project custom rules that persist conventions, architecture, and “do not” constraints so every agent turn stays aligned.",
      },
      {
        title: "Plan Mode",
        description:
          "The AI creates a step-by-step plan before executing—essential for large or risky changes.",
      },
      {
        title: "Checkpoints",
        description:
          "Revert to any point in an agent’s work instead of untangling a messy multi-file diff by hand.",
      },
      {
        title: "Background Agents",
        description:
          "Run tasks asynchronously while you keep coding; strongest on higher tiers such as Ultra.",
      },
      {
        title: "Browser control",
        description:
          "A built-in browser so the agent can test web apps instead of only describing what to click.",
      },
      {
        title: "Hooks",
        description:
          "Custom pre- and post-execution scripts around agent runs for project-specific automation.",
      },
      {
        title: "MCP & in-editor PR review",
        description:
          "Native Model Context Protocol support for external tools, plus in-editor PR review and multi-file diff analysis.",
      },
    ],
    mostUsersMiss: [
      "Add project Rules under .cursor/rules/ for architecture, style, and hard constraints.",
      "Use Plan Mode before large refactors—don’t jump straight to Agent.",
      "Use Checkpoints so you can roll back agent work safely.",
      "Prefer @file / @folder context over pasting huge code blobs.",
      "Enable MCP for docs, tickets, browser, and other tools you already use.",
      "Run Background Agents for long jobs; keep Tab/inline for tight edits.",
      "Use Browser control to verify UI changes instead of guessing.",
      "Review diffs and PRs in-editor—treat the agent as a teammate, not autopilot.",
    ],
    pricing: [
      {
        plan: "Free (Hobby)",
        price: "$0",
        inclusions: "Limited completions and chat, 2-week Pro trial",
      },
      {
        plan: "Pro",
        price: "$20/mo",
        inclusions: "Unlimited completions, ~500 fast requests/mo, model selection",
      },
      {
        plan: "Ultra",
        price: "$200/mo",
        inclusions: "Highest limits, priority access, Background Agents",
      },
      {
        plan: "Business",
        price: "$40/user/mo",
        inclusions: "Team admin, centralized billing, usage analytics",
      },
    ],
    useCases: [
      {
        useCase: "Software development",
        how: "Deep familiarity with frameworks such as Next.js, Express, Django, and Rails—idiomatic code that follows each stack’s conventions",
      },
      {
        useCase: "Refactoring",
        how: "Describe a structural change in natural language and have Cursor implement it across dozens of files",
      },
      {
        useCase: "DevOps",
        how: "Generate and iterate complex infrastructure configurations with agent + terminal access",
      },
      {
        useCase: "Learning to code",
        how: "Best as AI acceleration for people who already have some coding experience; effective prompting has a learning curve",
      },
      {
        useCase: "Code review",
        how: "In-editor PR review and multi-file diff analysis",
      },
    ],
    useCasesNote:
      "2026 releases improved stability—the editor stays responsive during complex agent operations more reliably than earlier versions.",
    integrations: [
      "Full compatibility with the VS Code extension marketplace",
      "Selectable AI models including Claude, GPT (including GPT-5 High MAX), and Gemini",
      "Native MCP (Model Context Protocol) support",
      "Built-in Git workflows — branch, commit, and PR",
      "Integrated terminal with AI command suggestions",
      "Built-in browser for testing web apps",
      "SSH/remote — agents across local, cloud, and SSH environments",
    ],
    security: [
      "Code is sent to AI providers for processing (configurable by setup and plan)",
      "Privacy mode available so code is not stored or used for training",
      "SOC 2 compliance on Business tier",
      "Self-hosted / on-prem options emerging for enterprise",
      "Known trade-offs: performance issues on very large codebases, occasional AI mistakes, and stability friction on some enterprise-scale projects",
    ],
    strengths: [
      "Best-in-class AI code editor for many teams",
      "Multi-model support—choose the AI per task",
      "Full VS Code extension compatibility",
      "Agent mode for autonomous multi-file work",
      "Plan Mode and Checkpoints for controlled execution",
      "Dramatically improved stability in 2026 releases",
    ],
    weaknesses: [
      "Coding-focused—not a general-purpose consumer AI",
      "Usage-based credits pricing changes have been controversial",
      "Performance can suffer on very large codebases",
      "Learning curve for effective prompting and agent workflows",
      "Enterprise features still maturing",
    ],
    practiceTips: [
      "Name files in scope and the definition of done.",
      "Mention Rules, Plan Mode, MCP, or Browser when the workflow needs them.",
      "Ask for a short plan (or use Plan Mode) before multi-file edits.",
    ],
  },
  {
    id: "perplexity",
    name: "Perplexity",
    vendor: "Perplexity AI",
    tagline: "Cited answer engine — live web research, Comet browser, and multi-model Computer",
    summary:
      "Perplexity is an AI answer engine: ask a question, it searches the live web, reads top sources, and returns a short answer with inline citations. In 2026 it also includes Computer (an agent across 20+ models), Comet browser, Deep Research, Spaces, and Labs—so you get finished research work, not only chat.",
    technical: {
      models: [
        "Available models include Sonar 2 (Perplexity’s own), GPT-5.6 Terra, Gemini 3.7 Flash, Claude Sonnet 5, Kimi K3, GLM 5.3, Grok 4.6, and Nemotron 3 Ultra.",
        "Computer is an agent that turns a request into finished work across more than 20 AI models.",
        "By May 2026, Perplexity was answering about 1.5 billion questions a month.",
      ],
      multimodal:
        "Web-grounded answers with citations; file uploads (PDF, DOCX, and more); Voice Mode; Labs artifacts such as dashboards and mini-apps.",
      architecture:
        "Answer-engine core: live web retrieval + synthesis with inline citations. Extended by Comet (agentic browser), Deep Research, Spaces, connectors, and the Sonar API.",
    },
    capabilities: [
      {
        title: "Inline citations",
        description:
          "Every claim can point back to sources you can open and verify—best-in-class for fact-checking.",
      },
      {
        title: "Comet browser",
        description:
          "An agentic browser built around Perplexity, free as of early 2026. It can act on pages for you—not only answer questions about them.",
      },
      {
        title: "Deep Research & Pro Search",
        description:
          "Deep Research runs many searches, reads dozens of sources, and returns a longer report. Pro Search can read 300+ sources per query with inline citations.",
      },
      {
        title: "Spaces & Labs",
        description:
          "Spaces group threads and files around a project. Labs generate small artifacts—dashboards and mini-apps—from a prompt.",
      },
      {
        title: "Memory & personalization",
        description:
          "Improved memory engine with reported ~95% recall accuracy, plus response personalization settings for reusable research style.",
      },
      {
        title: "Scheduled searches",
        description:
          "Automated research briefs delivered on a schedule instead of re-running the same query by hand.",
      },
      {
        title: "Finance & SEC tools",
        description:
          "Finance heatmap with real-time explanations, analyst consensus ratings, SEC filing drill-downs, and advanced chart controls—unusual for a consumer answer engine.",
      },
      {
        title: "Connectors",
        description:
          "Pull live context from Gmail, Slack, and Google Drive into research conversations.",
      },
      {
        title: "Voice Mode & Custom Skills",
        description:
          "Speak instead of type. Custom Skills automate repetitive workflows so Perplexity becomes reusable research templates—not only one-off queries.",
      },
      {
        title: "Model Council",
        description:
          "Compare answers from several models side by side when you want a second (and third) opinion.",
      },
    ],
    mostUsersMiss: [
      "Use Spaces to organize threads and files around a real project.",
      "Run Deep Research or Pro Search instead of accepting the first short answer.",
      "Set up Scheduled Searches for recurring briefs.",
      "Connect Gmail, Slack, or Drive so research uses your work context.",
      "Build Custom Skills for prompts you repeat every week.",
      "Try Model Council when sources or models disagree.",
      "Use Comet when the job is to act on a page, not only read about it.",
      "Open Finance/SEC tools when the question is markets or filings—not generic chat.",
    ],
    pricing: [
      {
        plan: "Free",
        price: "$0",
        inclusions: "Unlimited searches, follow-ups, and AI answers with source citations (advanced features reserved for paid tiers)",
      },
      {
        plan: "Pro",
        price: "$20/mo",
        inclusions: "Deep Research, multi-model switching, file uploads, Voice Mode, Custom Skills, memory",
      },
      {
        plan: "Max",
        price: "$200/mo",
        inclusions: "All Pro features, unlimited access to the full model suite, unlimited Labs queries, early access, priority support",
      },
      {
        plan: "Enterprise",
        price: "Custom",
        inclusions: "Team management, SSO, audit logs, compliance features",
      },
    ],
    pricingNote:
      "Free covers everyday cited search; Pro and Max unlock Deep Research, multi-model tools, Labs, and automation.",
    useCases: [
      {
        useCase: "Research",
        how: "Pro Search with 300+ sources and citations; Deep Research for comprehensive reports",
      },
      {
        useCase: "Fact-checking",
        how: "Every claim cited with clickable sources—strongest fit for verification",
      },
      {
        useCase: "Business intelligence",
        how: "Finance heatmaps, SEC filings, scheduled briefs, Gmail/Slack/Drive connectors",
      },
      {
        useCase: "Education",
        how: "Source-backed answers that encourage verification; Spaces for study projects",
      },
      {
        useCase: "Everyday",
        how: "Trusted facts without a long verification rabbit hole",
      },
      {
        useCase: "Comparison shopping (models)",
        how: "Model Council to compare AI responses side by side",
      },
    ],
    integrations: [
      "Connectors — Gmail, Slack, and Google Drive",
      "Comet — AI-native browser expanding Perplexity beyond the answer box",
      "Sonar API — same web-grounded, cited-answer capability for developers",
      "Mobile — iOS and Android with voice search",
      "Desktop — Mac and Windows via Comet",
      "Microsoft partnership (January 2026) — three-year, $750M Azure and Foundry agreement for access to models from OpenAI, Anthropic, and xAI",
    ],
    security: [
      "February 2026: moved toward a subscription-first model and discontinued AI-integrated advertising",
      "Enterprise: SSO, audit logs, and data governance",
      "Privacy controls for search history and memory",
      "SOC 2 compliance on Enterprise",
      "Has faced legal scrutiny over content sourcing and attribution practices",
    ],
    strengths: [
      "Best-in-class citation and source transparency",
      "Multi-model support across 20+ models",
      "Comet — rare AI-native browser that can act on pages",
      "Deep Research exceptional for complex queries",
      "Connectors for enterprise data in research chats",
      "Finance and SEC tools unique in this category",
    ],
    weaknesses: [
      "Not a general-purpose creative AI—focused on search and research",
      "Advanced features gated behind Pro/Max even though basic Free search is strong",
      "Controversial content sourcing practices and publisher disputes",
      "Weaker than ChatGPT/Claude for long-form creative drafting",
      "Smaller ecosystem than ChatGPT or Gemini",
    ],
    practiceTips: [
      "Require citations and note which claims still need verification.",
      "Name Deep Research, Spaces, Connectors, or Model Council when they fit.",
      "Ask for disagreements between sources—not only consensus.",
    ],
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    vendor: "Microsoft",
    tagline: "Enterprise productivity AI — Microsoft Graph, M365 apps, GitHub, and Windows",
    summary:
      "Copilot’s advantage is living inside Word, Excel, Outlook, Teams, Windows, and GitHub—with Microsoft Graph grounding in your org’s emails, files, calendar, and chats. Prompts that name the file, meeting, or sheet win. Full value usually needs a Microsoft 365 stack.",
    technical: {
      models: [
        "Powered primarily by OpenAI models (GPT-4o and the GPT-5 series) with Microsoft optimizations.",
        "Also uses Microsoft’s Phi small language models for on-device and lightweight tasks.",
      ],
      multimodal:
        "Text, image generation (via DALL·E integration), image understanding, voice input, and file analysis across M365 and the web Copilot experience.",
      architecture:
        "Unique differentiator: Microsoft Graph pulls context from emails, files, calendar, Teams chats, and organizational data—so answers are grounded in work you already have permission to see.",
    },
    capabilities: [
      {
        title: "Copilot in Word",
        description:
          "Draft, rewrite, and summarize documents using organizational context when licensed.",
      },
      {
        title: "Copilot in Excel",
        description:
          "Natural-language data analysis, formula generation, and PivotTable creation on your sheets.",
      },
      {
        title: "Copilot in PowerPoint",
        description:
          "Generate full presentations from prompts or existing documents.",
      },
      {
        title: "Copilot in Outlook",
        description:
          "Email summarization, draft replies, and meeting prep from thread context.",
      },
      {
        title: "Copilot in Teams",
        description:
          "Meeting transcription, summaries, action items, and real-time translation.",
      },
      {
        title: "Copilot in OneNote",
        description:
          "Note organization and summarization inside your notebooks.",
      },
      {
        title: "Copilot Studio & agents",
        description:
          "Build custom copilots and agents without code, connected to enterprise data. Agents can run multi-step workflows across Microsoft 365.",
      },
      {
        title: "Microsoft 365 Copilot Chat",
        description:
          "Formerly Bing Chat Enterprise—grounded in web plus work data for org-aware chat.",
      },
      {
        title: "GitHub Copilot",
        description:
          "Code completion, chat, PR summaries, code review, agent mode for multi-file edits, Copilot Workspace for planning from issues, and IDE extensions (VS Code, JetBrains, Neovim, Visual Studio).",
      },
      {
        title: "Windows Copilot",
        description:
          "System-level assistant in Windows 11—adjust settings, summarize screen content, and launch apps.",
      },
    ],
    mostUsersMiss: [
      "Open the relevant file or meeting first, then prompt in that app’s Copilot.",
      "Use Copilot Studio to build a custom agent for a department workflow.",
      "In Excel, ask in natural language for the decision you need—not only a formula.",
      "In Teams, turn meetings into owners, dates, and action items automatically.",
      "Use M365 Copilot Chat with Graph grounding instead of a generic web chat.",
      "Connect Power Automate when the next step should run without you.",
      "In Outlook, draft from thread context rather than a blank compose box.",
      "For developers, use GitHub Copilot agent mode and Workspace—not only Tab completion.",
    ],
    pricing: [
      {
        plan: "Free (Copilot)",
        price: "$0",
        inclusions: "Basic chat, image generation, limited access via copilot.microsoft.com",
      },
      {
        plan: "Copilot Pro",
        price: "$20/user/mo",
        inclusions: "Priority access to latest models; Copilot in Microsoft 365 apps (requires an M365 subscription)",
      },
      {
        plan: "Microsoft 365 Copilot",
        price: "$30/user/mo",
        inclusions: "Full enterprise Copilot across M365 apps, Microsoft Graph grounding, Copilot Studio",
      },
      {
        plan: "GitHub Copilot Free",
        price: "$0",
        inclusions: "Limited completions and chat",
      },
      {
        plan: "GitHub Copilot Individual",
        price: "$10/mo",
        inclusions: "Unlimited completions, chat, multi-IDE support",
      },
      {
        plan: "GitHub Copilot Business",
        price: "$19/user/mo",
        inclusions: "Organization management and policy controls",
      },
      {
        plan: "GitHub Copilot Enterprise",
        price: "$39/user/mo",
        inclusions: "Knowledge bases, fine-tuning, PR summaries, code review",
      },
    ],
    pricingNote:
      "Full Microsoft 365 Copilot value usually sits on top of an existing M365 license—budget for the stack, not only the Copilot line item.",
    useCases: [
      {
        useCase: "Business / enterprise",
        how: "Deepest integration with Word, Excel, PowerPoint, Outlook, and Teams—Copilot’s primary market",
      },
      {
        useCase: "Coding",
        how: "GitHub Copilot remains one of the most widely adopted AI coding assistants",
      },
      {
        useCase: "Education",
        how: "Copilot in M365 Education, research assistance, and document creation",
      },
      {
        useCase: "Data analysis",
        how: "Excel Copilot for natural-language queries; Power BI integration",
      },
      {
        useCase: "IT administration",
        how: "Copilot for Security and Copilot in Azure for cloud management",
      },
      {
        useCase: "Everyday",
        how: "Windows Copilot for system tasks; free web chat for general questions",
      },
    ],
    integrations: [
      "Microsoft 365 — Word, Excel, PowerPoint, Outlook, Teams, OneNote, Planner, SharePoint, OneDrive",
      "Microsoft Graph — organizational knowledge connecting M365 data",
      "Azure — cloud management and Azure AI Studio",
      "Dynamics 365 — CRM, ERP, and customer service copilots",
      "Power Platform — Power Automate, Power Apps, Power BI",
      "GitHub — full developer lifecycle",
      "Windows 11 — system-level integration",
      "Copilot Studio — no-code custom agents",
      "Teams Toolkit and third-party connectors/plugins",
    ],
    security: [
      "Enterprise-grade by default on Microsoft’s trust infrastructure",
      "Data processed within Microsoft’s compliance boundary",
      "M365 Copilot does not train on customer data",
      "Inherits Microsoft 365 permissions—what you can see, Copilot can see",
      "SOC 2 Type II, ISO 27001, ISO 27018, FedRAMP, HIPAA, GDPR, CCPA",
      "Responsible AI with content filtering; Microsoft Purview for governance",
      "Copilot for Security taps Microsoft threat intelligence",
    ],
    strengths: [
      "Deepest enterprise integration across M365, Azure, and Dynamics",
      "Best-in-class enterprise security and compliance posture for many orgs",
      "GitHub Copilot market leadership in code completion",
      "Microsoft Graph grounding for personalized, contextual work answers",
      "Copilot Studio for custom no-code agents",
      "Wide device reach — Windows, web, mobile, Teams",
    ],
    weaknesses: [
      "Full value requires M365—expensive combined stack",
      "M365 Copilot quality is inconsistent and works best with well-organized data",
      "Weaker as a standalone general chat vs. ChatGPT or Claude",
      "Can feel locked into the Microsoft ecosystem",
      "Free web tier is limited compared with competitors",
      "Frontier innovation pace often slower than OpenAI or Anthropic",
    ],
    practiceTips: [
      "Name the Microsoft app and the artifact (email, sheet, deck, meeting).",
      "Ask for decisions, owners, and next steps when summarizing work.",
      "Mention Graph grounding, Copilot Studio, or GitHub agent mode when relevant.",
    ],
  },
  {
    id: "kimi",
    name: "Kimi",
    vendor: "Moonshot AI",
    tagline: "Long-context agents — Agent Swarm, Kimi Code, Claw, and open 3T-class models",
    summary:
      "Kimi is Moonshot AI’s flagship assistant: trillion-parameter MoE models, 1M+ token context, Agent Swarm, Kimi Code, Kimi Claw cloud automation, and Kimi Work for knowledge workers. Strong for ultra-long documents, coding, office deliverables, and cost-efficient API use—especially if you need open weights or Chinese-first capability.",
    technical: {
      models: [
        "On 16 July 2026, Moonshot AI released Kimi K3—its most powerful model and described as the world’s first open 3T-class model. Available via the Kimi App, kimi.com, Kimi Work, Kimi Code, and the Kimi API.",
        "In January 2026, Moonshot released Kimi K2.5—a 1-trillion-parameter Mixture-of-Experts model with 32 billion active parameters per request.",
        "On 20 April 2026, Moonshot released and open-sourced Kimi K2.6, strong in coding, long-horizon task execution, and Agent Swarm.",
        "In June 2026, Moonshot released Kimi K2.7 Code.",
      ],
      multimodal:
        "Fully multimodal: native image understanding and visual media generation, 50+ file formats, and support for 10+ languages.",
      architecture:
        "Flagship assistant often powered by K2.5-class MoE (about 1T total / 32B active) for frontier performance at lower cost. Context stretches to 1M+ tokens, with memory buffers reported up to about two million characters.",
    },
    capabilities: [
      {
        title: "Agent Swarm",
        description:
          "Spawn and coordinate multiple sub-agents so complex work runs in parallel instead of one slow chain of chat turns.",
      },
      {
        title: "Kimi Claw",
        description:
          "Zero-deployment cloud automation—no server or Docker. Launch a continuously running AI agent in about 30 seconds.",
      },
      {
        title: "Kimi Code",
        description:
          "Open-source, terminal-based AI coding assistant similar to Claude Code—write, debug, and optimize over long horizons.",
      },
      {
        title: "Kimi Work",
        description:
          "General-purpose local agent for knowledge workers (Mac and Windows). Built on Kimi Code: install Skills, run scheduled tasks, plus website/PPT skills and professional databases for finance, research, and legal work.",
      },
      {
        title: "Kimi Researcher",
        description:
          "Autonomous multi-step research agent available through the Kimi website and app.",
      },
      {
        title: "Office end-to-end",
        description:
          "Strong structured outputs for Word, Excel, and slides—tool-calling efficiency for real office deliverables, not only drafts.",
      },
      {
        title: "Web search",
        description:
          "Built-in web search to access and synthesize real-time information.",
      },
      {
        title: "MCP & OpenAI-compatible API",
        description:
          "Extend via Model Context Protocol. Deploy into existing apps through OpenAI-compatible endpoints on the Moonshot / Kimi Open Platform.",
      },
    ],
    mostUsersMiss: [
      "Use Agent Swarm when the job is multi-part—don’t run everything in one linear chat.",
      "Launch Kimi Claw for always-on cloud agents instead of babysitting a laptop session.",
      "Try Kimi Code in the terminal for long-horizon coding, not only the web chat box.",
      "Install Skills and scheduled tasks in Kimi Work for recurring knowledge work.",
      "Use Kimi Researcher for multi-step research on large document sets.",
      "Ask for end-to-end Word / Excel / PPT outputs instead of plain text summaries.",
      "Connect tools via MCP or the OpenAI-compatible API when embedding Kimi in your stack.",
      "For data control, consider open weights (K2.6 / K3) and self-hosting.",
    ],
    pricing: [
      {
        plan: "Free (Adagio)",
        price: "$0",
        inclusions:
          "Unlimited basic conversations on kimi.com; standard context; basic agent execution; document parsing (PDFs/CSVs)",
      },
      {
        plan: "Paid / Premium",
        price: "Subscription-based",
        inclusions: "Extended context, advanced agents, Kimi Claw cloud automation, priority access",
      },
      {
        plan: "API",
        price: "Usage-based",
        inclusions: "Competitive API pricing—often cited around roughly 1/5 of ChatGPT-class pricing",
      },
    ],
    useCases: [
      {
        useCase: "Coding",
        how: "Long-horizon write/debug/optimize; Kimi Code as a Claude Code–like terminal agent",
      },
      {
        useCase: "Office / business",
        how: "End-to-end Word, Excel, and PPT; Kimi Work with Skills and scheduled tasks",
      },
      {
        useCase: "Research",
        how: "Kimi Researcher plus 1M+ token context for massive documents",
      },
      {
        useCase: "Cloud automation",
        how: "Kimi Claw for always-online agents without infrastructure setup",
      },
      {
        useCase: "Education",
        how: "Long-context document analysis, 10+ languages, research agents",
      },
      {
        useCase: "Everyday",
        how: "Web search, chat, multimodal understanding, 50+ file formats",
      },
    ],
    integrations: [
      "Web, iOS, and Android apps",
      "Desktop via Kimi Work (Mac and Windows)",
      "OpenAI-compatible API via platform.moonshot.ai / Kimi Open Platform",
      "Native MCP support",
      "Open-source weights (K2.6, K3) for self-hosting",
    ],
    security: [
      "Moonshot AI is based in Beijing—data may be subject to Chinese data governance laws",
      "Open-source model weights enable self-hosting for stronger data sovereignty",
      "Privacy mode options for enterprise deployments",
      "Users outside China should review data routing and jurisdiction before sending sensitive work",
    ],
    strengths: [
      "Often strong on ultra-long documents, complex front-end code, and multi-agent execution",
      "Frontier-competitive MoE performance at a fraction of typical frontier cost",
      "Kimi Claw — zero-deployment cloud agents in about 30 seconds",
      "Open-source model weights (K2.6, K3)",
      "Especially compelling for Chinese-speaking users and cost-conscious developers",
    ],
    weaknesses: [
      "Chinese-first development—English experience may lag",
      "Less global brand recognition than ChatGPT or Claude",
      "Data jurisdiction concerns for many non-Chinese users",
      "Smaller third-party ecosystem than ChatGPT or Claude",
    ],
    practiceTips: [
      "State role, goal, and deliverable format (Word, Excel, PPT, or code).",
      "Name Agent Swarm, Kimi Code, Claw, or Researcher when the workflow needs them.",
      "For long docs, say you will use the full context window and ask for structured outputs.",
    ],
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    vendor: "DeepSeek AI",
    tagline: "Open-weight reasoning & coding — R1, V4 MoE, and MIT self-hosting",
    summary:
      "DeepSeek is a Chinese open-model lab known for frontier-competitive reasoning and coding at unusually low cost. Use R1 for hard reasoning, V4/V4-Pro for long-context coding and tools, distilled models for production efficiency, or self-host under the MIT license when data must stay on your infrastructure.",
    technical: {
      models: [
        "On 24 April 2026, DeepSeek released DeepSeek V4 and V4-Pro. V4-Pro has about 1.6 trillion total parameters (49B active); V4 Flash has about 284B parameters (13B active). Both support a 1M-token context window.",
        "DeepSeek-R1 is a massive ~671B-parameter MoE architecture built for superior reasoning (including R1-Zero and R1 with extended chain-of-thought, similar in spirit to OpenAI’s o-series).",
        "DeepSeek-Prover-V2 is an open-source model tailored for formal theorem proving in Lean 4.",
        "The DeepSeek-R1-Distill series offers smaller, efficient models distilled from R1 onto architectures such as Qwen and Llama for production and edge deployments.",
      ],
      multimodal:
        "Strong on text, code, math, and reasoning; also supports image processing and voice recognition in product surfaces. Multimodal depth is generally less developed than Gemini or GPT-class consumer suites.",
      architecture:
        "Mixture-of-Experts with sparse-attention and hybrid thinking innovations. V4 treats long context as a first-class capability (1M tokens). Weights released under the MIT License for local runs via Ollama, LM Studio, and similar tools.",
    },
    capabilities: [
      {
        title: "R1 reasoning series",
        description:
          "Extended chain-of-thought models (R1-Zero, R1) for advanced math, logic, and multi-step reasoning—use when shallow answers fail.",
      },
      {
        title: "Unified thinking + tools",
        description:
          "Integrates “thinking” directly into tool-use so reasoning and action happen in one loop instead of separate modes.",
      },
      {
        title: "V3 / V4 coding & tools",
        description:
          "V3 improved tool invocation, role-play, and conversation. V4-Pro ranks among the strongest open-weight coding models for general software work.",
      },
      {
        title: "Distilled production models",
        description:
          "R1-Distill variants (roughly 1.5B–70B class) prioritize efficiency for edge, on-device, and cost-sensitive production environments.",
      },
      {
        title: "DeepSeek-Prover-V2",
        description:
          "Specialized open model for formal theorem proving in Lean 4—aimed at researchers and formal-methods workflows.",
      },
      {
        title: "MIT self-hosting",
        description:
          "Download weights and run locally (Ollama, LM Studio, vLLM, Hugging Face)—no API cost and full data sovereignty on your infra.",
      },
      {
        title: "Ultra-low API pricing",
        description:
          "Usage-based OpenAI-compatible API for R1 and V3/V4—among the cheapest frontier-tier APIs globally.",
      },
      {
        title: "Wide model availability",
        description:
          "Selectable inside tools such as Cursor and Perplexity, plus major clouds and third-party stacks.",
      },
    ],
    mostUsersMiss: [
      "Switch to R1 (or a thinking mode) for hard math/logic instead of staying on a fast chat model.",
      "Use V4’s 1M context for large codebases or long documents—don’t truncate early.",
      "Self-host under MIT when privacy or jurisdiction rules out the hosted chat/API.",
      "Pick an R1-Distill model for production latency and cost, not always the largest R1.",
      "Lean on tool invocation / unified thinking when the job needs actions, not only text.",
      "Try Prover-V2 for formal Lean 4 proofs instead of generic chat.",
      "Compare DeepSeek inside Cursor or Perplexity as a model option before building new plumbing.",
      "Budget for jurisdiction: hosted traffic may route through Chinese servers.",
    ],
    pricing: [
      {
        plan: "Free (Web Chat)",
        price: "$0",
        inclusions: "DeepSeek chatbot at chat.deepseek.com — access to R1 and V3/V4-class models",
      },
      {
        plan: "API",
        price: "Usage-based (per token)",
        inclusions: "R1 and V3/V4 via API; extremely low cost among frontier-tier providers",
      },
      {
        plan: "Self-hosted",
        price: "Free (MIT license)",
        inclusions: "Download and run on your own infrastructure — no API fees",
      },
    ],
    pricingNote:
      "Aggressive pricing plus open weights is DeepSeek’s strategic edge—often framed as challenging higher-priced Western frontier APIs on cost/performance.",
    useCases: [
      {
        useCase: "Coding",
        how: "V3 for general coding, conversation, and tools; V4-Pro among top open-source coding models",
      },
      {
        useCase: "Mathematics & reasoning",
        how: "R1 series for complex math and logical problem-solving",
      },
      {
        useCase: "Research",
        how: "Strong reasoning APIs for sophisticated apps; Prover-V2 for formal theorem proving",
      },
      {
        useCase: "Self-hosted enterprise",
        how: "MIT license for private infrastructure—fit for data-sensitive organizations",
      },
      {
        useCase: "Edge / on-device",
        how: "Distilled models (about 1.5B–70B) for resource-constrained environments",
      },
      {
        useCase: "Business automation",
        how: "Used across software, marketing, healthcare, automation, and data analysis where cost matters",
      },
    ],
    integrations: [
      "Web chat — chat.deepseek.com",
      "OpenAI-compatible API endpoints",
      "Self-hosting — Ollama, LM Studio, vLLM, Hugging Face",
      "Major cloud platforms",
      "Selectable model option in Cursor, Perplexity, and many other AI tools",
      "Distilled variants on Qwen and Llama architectures",
    ],
    security: [
      "Open-source platform from a Chinese company—API/web app plus downloadable open weights",
      "Self-hosting under MIT enables full data sovereignty when run locally",
      "Hosted web/API traffic may route through Chinese servers—an enterprise concern for some orgs",
      "February 2026: Anthropic alleged distillation attacks by DeepSeek, Moonshot AI, and MiniMax—raising geopolitical and security debate",
      "No SOC 2 or HIPAA compliance advertised for the hosted service",
      "Open weights allow community security auditing",
    ],
    strengths: [
      "Cost/performance that has been described as upending parts of the AI market",
      "Fully open-source weights under MIT",
      "1M-token context on V4 Flash and Pro",
      "Extremely low API pricing",
      "V4 treats long context as a first-class open-weight capability",
      "R1 reasoning rivals leading closed reasoning models for many tasks",
      "Large self-hosting community",
    ],
    weaknesses: [
      "Chinese data jurisdiction concerns on hosted products",
      "No rich native consumer app ecosystem—primarily browser chat plus API/self-host",
      "Multimodal less developed than Gemini or GPT consumer suites",
      "Limited enterprise support and SLAs compared with Western vendors",
      "Geopolitical controversy and distillation accusations",
      "No polished voice mode or creative studio tools like Canvas/Artifacts competitors",
    ],
    practiceTips: [
      "Say whether you need R1 reasoning, V4 coding, or a distilled production model.",
      "For private data, state self-hosting / local inference as a constraint.",
      "Ask for step-by-step reasoning and tool use when the task is multi-step.",
    ],
  },
  {
    id: "glm",
    name: "GLM / Z.ai",
    vendor: "Zhipu AI",
    tagline: "Open-weight agents & coding — ZCode, AutoGLM, MCP, and MIT GLM-5",
    summary:
      "Zhipu AI (Z.ai) is China’s most valuable listed AI pure play (about US$62B as of August 2026; Hong Kong IPO 8 January 2026). GLM-5-series models power bilingual chat, long-horizon agents, ZCode IDE, AutoGLM phone automation, and OpenAI-compatible APIs—plus MIT open weights for self-hosting.",
    technical: {
      models: [
        "GLM-5 (February 2026): ~744B total MoE parameters (40B active), context up to ~200K tokens, pre-trained on about 28.5T tokens, MIT-licensed.",
        "GLM-5.1 (April 2026): updated long-horizon agentic-engineering model.",
        "GLM-5.2 (June 2026): context expanded to about 1M tokens (from ~200K on 5.1).",
        "GLM-5.3 (14 August 2026): same ~743B base as 5.2 with improved post-training—positioned for coding and cyber defense.",
      ],
      multimodal:
        "Strong agentic tool use, coding, and bilingual Chinese–English chat via ChatGLM / Qingyan. Consumer and API surfaces emphasize text, tools, and code; AutoGLM extends into mobile app control.",
      architecture:
        "2026 GLM architecture uses latent attention—compressing long-range context into latent vectors, then attending over those representations—with MoE layers in larger variants.",
    },
    capabilities: [
      {
        title: "ZCode",
        description:
          "AI coding IDE from Z.ai, released 2 July 2026 as a desktop app for Windows, macOS, and Linux.",
      },
      {
        title: "AutoGLM",
        description:
          "Phone agent that navigates apps such as WeChat and Meituan to finish multi-step mobile tasks on your behalf.",
      },
      {
        title: "Agentic tool use",
        description:
          "Call external APIs, write and execute code, and plan multi-step workflows without fragile hand-crafted wrappers.",
      },
      {
        title: "OpenAI-compatible API",
        description:
          "Z.ai / BigModel API supports GLM-5-series models, thinking mode, function/tool calling, streaming, context caching, structured/JSON output, and MCP.",
      },
      {
        title: "Cybersecurity focus",
        description:
          "In September 2026, CAISI found GLM 5.3 the most advanced among open-weight models for cybersecurity applications.",
      },
      {
        title: "ChatGLM / Qingyan",
        description:
          "Bilingual Chinese–English consumer chat on the GLM family. Free daily quota on chatglm.cn / chat.z.ai, with paid membership for heavier use.",
      },
      {
        title: "MIT self-hosting",
        description:
          "GLM-4.5 and the GLM-5 series ship under MIT—so the model in the app can also run on your own infrastructure.",
      },
      {
        title: "MaaS scale",
        description:
          "Over 7.4 million enterprise and developer users on the GLM MaaS platform as of 31 August 2026 (up ~144% from early 2026); paid daily actives up ~603%.",
      },
    ],
    mostUsersMiss: [
      "Use ZCode for coding workflows instead of only ChatGLM web chat.",
      "Try AutoGLM when the task is multi-step phone/app navigation.",
      "Turn on thinking mode + tool calling for agentic jobs.",
      "Use GLM-5.2/5.3’s long context (up to ~1M on 5.2+) for large engineering contexts.",
      "Self-host under MIT when data sovereignty matters.",
      "Point security teams at GLM-5.3 for open-weight cyber defense experiments.",
      "Build on the OpenAI-compatible API with MCP and context caching.",
      "Use bilingual prompts deliberately for Chinese–English cross-border work.",
    ],
    pricing: [
      {
        plan: "Free (Chat)",
        price: "$0",
        inclusions: "Daily conversation quota via chatglm.cn / chat.z.ai",
      },
      {
        plan: "Paid membership",
        price: "Subscription",
        inclusions: "Higher usage limits, advanced features, priority",
      },
      {
        plan: "API",
        price: "Usage-based",
        inclusions:
          "OpenAI-compatible REST via BigModel / Z.ai; Flash-tier models often free with a free token grant",
      },
      {
        plan: "Open-weight self-host",
        price: "Free (MIT)",
        inclusions: "GLM-4.5 and GLM-5 series for local / private deployment",
      },
    ],
    useCases: [
      {
        useCase: "Coding",
        how: "ZCode IDE; GLM-5.3 focused on coding and extended tool-using workflows",
      },
      {
        useCase: "Cybersecurity",
        how: "Leading open-weight model for many cybersecurity evaluations (GLM 5.3)",
      },
      {
        useCase: "Agentic workflows",
        how: "Benchmarks close to Claude Opus 4.5 and GPT-5.2 on key agentic and coding tasks",
      },
      {
        useCase: "Mobile automation",
        how: "AutoGLM phone agent for navigating apps and completing tasks",
      },
      {
        useCase: "Enterprise (China)",
        how: "High autonomy, long-term planning, document generation, low-cost inference",
      },
      {
        useCase: "Bilingual work",
        how: "Strong Chinese–English capabilities for cross-border business",
      },
    ],
    integrations: [
      "Zhipu / Z.ai / BigModel OpenAI-compatible API (tools, MCP, JSON, context caching)",
      "ChatGLM consumer chat product",
      "Hosted via Together AI, OpenRouter, and Chinese cloud partners",
      "Hugging Face open-weight releases",
      "ZCode desktop IDE (Windows, macOS, Linux)",
      "AutoGLM mobile phone agent",
      "Embed footprint in Chinese enterprise SaaS",
    ],
    security: [
      "Based in Beijing; IPO on the Hong Kong Stock Exchange",
      "MIT license enables full self-hosting for data sovereignty",
      "OpenAI-compatible API with enterprise access controls on the platform",
      "Chinese data governance laws apply to the hosted service",
      "Open weights support community auditing and open-source efficiency metrics",
      "Western compliance certifications (SOC 2, HIPAA) not documented for the hosted product",
    ],
    strengths: [
      "Major open-source AI force in 2026—especially for agents and coding",
      "Most valuable listed AI pure play in China (~US$62B)",
      "MIT-licensed open weights",
      "ZCode IDE for developers",
      "AutoGLM phone agent—rare mobile automation",
      "Top cybersecurity standing among open weights",
      "MCP support and OpenAI-compatible API",
    ],
    weaknesses: [
      "Less known outside China and developer communities",
      "Chinese data jurisdiction concerns on hosted services",
      "Consumer product less polished than ChatGPT",
      "English documentation can lag",
      "Compute resource shortages reported at times",
      "Smaller international ecosystem than Western platforms",
    ],
    practiceTips: [
      "Name ZCode, AutoGLM, thinking mode, or MCP when those features fit.",
      "State bilingual needs (Chinese/English) and deliverable format.",
      "For private data, require MIT self-host or on-prem inference.",
    ],
  },
  {
    id: "minimax",
    name: "MiniMax",
    vendor: "MiniMax",
    tagline: "Full multimodal stack — text, video, speech, music, coding, and agents",
    summary:
      "MiniMax builds multimodal models and consumer apps (Talkie, Xingye, Hailuo AI). Hong Kong IPO debut January 2026. Use it when you need one platform for language, video, speech, music, coding (MiniMax Code), and agent workflows—not only a text chatbot.",
    technical: {
      models: [
        "MiniMax-M2.5 (February 2026): SOTA or near-SOTA claims in programming, tool calling, search, and office productivity.",
        "MiniMax-M2.7 (March 2026): positioned around recursive self-improvement research and iteration.",
        "MiniMax-M3 (June 2026): latest M-series for agentic reasoning, tool use, coding, multimodal chat input, and long-context tasks.",
        "MiniMax-M3.1 Flash (October 2026): coding, agent tasks, computer interaction, and low-cost inference.",
        "MiniMax-H3 (July 2026): open general-purpose multimodal video model—text, image, video, and audio intent understanding.",
      ],
      multimodal:
        "As of February 2026, the Open Platform covered text, speech, video, image, and music—one of the broadest stacks among peers.",
      architecture:
        "Multimodal platform combining language, coding, video, speech, and music models with task planning, code execution, agents, and API automation. Advanced reasoning supports chain-of-thought contexts up to about 128k tokens.",
    },
    capabilities: [
      {
        title: "MiniMax Code",
        description:
          "Coding environment with computer use via M3’s native multimodal capabilities—bug fixing, frontend/backend work, and performance optimization approaching closed-source leaders.",
      },
      {
        title: "Mavis",
        description:
          "Upgraded agent branded as Mavis (“MiniMax as a Jarvis”)—an AI butler for multi-step personal and work tasks.",
      },
      {
        title: "Hailuo AI video",
        description:
          "Text-to-video and image-to-video generation at up to 1080p—often compared with Sora-class quality for creators.",
      },
      {
        title: "Speech & voice cloning",
        description:
          "High-quality speech across ~40 languages, high-concurrency APIs, fine-tuning, and ~5-second rapid voice cloning for characters, dubbing, and interfaces.",
      },
      {
        title: "Music generation",
        description:
          "MiniMax Music 2.5 improved controllability and section-level structure; Music 3.0 followed in mid-2026 with stronger realism.",
      },
      {
        title: "Creative + streaming API",
        description:
          "Text, image, video, speech, music, voice cloning, real-time streaming API, and advanced reasoning in one developer platform.",
      },
      {
        title: "Agentic office",
        description:
          "Strong on search and Office-suite style workflows; early usability reported in financial domain tasks.",
      },
      {
        title: "Consumer apps",
        description:
          "Talkie (international) and Xingye (China) for AI character interaction; Hailuo for video creators.",
      },
    ],
    mostUsersMiss: [
      "Use Hailuo for video instead of exporting stills from a text-only chatbot.",
      "Try 5-second voice cloning for characters, dubbing, or product voiceovers.",
      "Open MiniMax Code with computer use for coding agents—not only M-series chat.",
      "Use Mavis for multi-step “butler” workflows across tools.",
      "Generate music with section-level control when you need structured tracks.",
      "Pick M3.1 Flash when you need cheap, fast coding/agent inference.",
      "Wire Tool Use, Code Execution, and MCP (including browser) for agents.",
      "Combine modalities in one brief (script + voice + video) instead of hopping apps.",
    ],
    pricing: [
      {
        plan: "Free API tier",
        price: "$0 (limited)",
        inclusions: "Free M2 model API calls and basic access",
      },
      {
        plan: "API (usage-based)",
        price: "Per-token billing",
        inclusions: "API-call billing across modalities; very competitive pricing",
      },
      {
        plan: "Coding plan",
        price: "Subscription",
        inclusions:
          "Based on MiniMax-M2.5-highspeed—about ~100 TPS inference for coding workloads",
      },
      {
        plan: "Consumer apps",
        price: "Freemium",
        inclusions: "Talkie and Hailuo AI free tiers with premium upgrades",
      },
    ],
    useCases: [
      {
        useCase: "Video production",
        how: "Hailuo AI text-to-video / image-to-video at 1080p",
      },
      {
        useCase: "Music & audio",
        how: "Music 3.0 composition; speech synthesis in ~40 languages; 5-second voice cloning",
      },
      {
        useCase: "AI characters & social",
        how: "Talkie (international) and Xingye (China)",
      },
      {
        useCase: "Coding",
        how: "MiniMax Code with computer use; M3 approaching closed-source coding quality",
      },
      {
        useCase: "Office automation",
        how: "M2.5/M3 agentic office workflows at scale",
      },
      {
        useCase: "Content creation",
        how: "Full creative stack—text, image, video, speech, and music on one platform",
      },
    ],
    useCasesNote:
      "The strongest 2026 case for MiniMax is practical adoption across coding, office productivity, voice, video, and agent execution—not a single flagship chat UI.",
    integrations: [
      "platform.minimax.io — OpenAI-compatible API automation",
      "Tool use, code execution, MCP, and browser capabilities",
      "Consumer apps — Talkie, Xingye, Hailuo AI",
      "MiniMax Code IDE with computer use",
      "Select open weights and VIBE benchmarks for transparency",
      "Internal “AI-native organization” practices at MiniMax",
    ],
    security: [
      "Based in Shanghai; Hong Kong IPO January 2026",
      "Chinese data governance laws apply to hosted services",
      "Developer console with API-based billing",
      "February 2026: Anthropic flagged MiniMax with DeepSeek and Moonshot for alleged distillation attacks",
      "Open-source benchmarks (VIBE) for some transparency",
      "Western compliance certifications not documented",
    ],
    strengths: [
      "Most complete multimodal stack among many peers (text, image, video, speech, music)",
      "Hailuo AI video generation at a world-class tier for many creators",
      "5-second voice cloning and ~40-language speech",
      "Large AI character user bases via Talkie / Xingye",
      "Very competitive API pricing",
      "Music generation uncommon among general LLM platforms",
    ],
    weaknesses: [
      "Less known outside Asia",
      "Geopolitical controversy (distillation accusations)",
      "Chinese data jurisdiction on hosted products",
      "Core language model can trail absolute frontier closed models",
      "Enterprise compliance certifications lacking",
      "Documentation often Chinese-first",
    ],
    practiceTips: [
      "Name the modality you need (video, speech, music, code) in the first line.",
      "Mention MiniMax Code, Mavis, Hailuo, or MCP/browser when relevant.",
      "For voice, specify language, cloning, and delivery style up front.",
    ],
  },
  {
    id: "qwen",
    name: "Qwen",
    vendor: "Alibaba Cloud",
    tagline: "Most prolific open-weight family — agentic coding, 1M context, Apache 2.0",
    summary:
      "Alibaba’s Qwen line is the most prolific open-weight family in 2026: Apache 2.0 across most releases, MoE since late 2024, and an aggressive cadence near the top of open-weight benchmarks. Use free unlimited chat at chat.qwen.ai, Model Studio APIs, edge models on a single GPU, or self-host and fine-tune—especially for agentic coding and long-horizon work.",
    technical: {
      models: [
        "Qwen 3.5 (February 2026): open-weight ~397B-parameter model; can operate desktop and mobile applications.",
        "Qwen 3.5-Omni (April 2026): proprietary multimodal omni model.",
        "Qwen 3.6-Plus (April 2026): native multimodal—generate front-end pages and code from screenshots, design drafts, and text; ~1M-token context.",
        "Qwen 3.7-Max (May 2026): roughly 1-trillion-parameter flagship.",
        "Qwen 3.8-Max (August 2026): about 2.4 trillion parameters—among the most powerful models in the lineup.",
        "Qwen 3.8-27B (August 2026): strong at coding, professional work, research, and long-horizon agents—runs on a single GPU.",
      ],
      multimodal:
        "Native multimodal models (including 3.6-Plus and 3.5-Omni) for text, visuals, and code-from-screenshot. Qwen-Image-2512 for photorealistic image generation with strong text rendering; Qwen3-TTS for voice.",
      architecture:
        "MoE across a wide range—from dense edge models (~0.5B) to ~2.4T frontier models. Flagship context up to about 1M tokens. By May 2026, Alibaba Cloud reported 200,000+ Qwen-based derivatives on Hugging Face (up from 90,000+ in February 2025).",
    },
    capabilities: [
      {
        title: "Agentic coding",
        description:
          "2026 product focus: break down complex programming tasks, write and test code, and troubleshoot iteratively until completion (Qwen3-Coder and 3.6-Max Preview lean into multi-step coding).",
      },
      {
        title: "Long-horizon autonomy",
        description:
          "Qwen3.8-Max can code highly autonomously for extended periods. In one internal test it spent 16 days building and improving an AI coding tool—writing, testing, fixing, and refining with little human input.",
      },
      {
        title: "Multimodal code from designs",
        description:
          "Qwen 3.6-Plus generates front-end pages and code from screenshots, design drafts, and text prompts.",
      },
      {
        title: "On-device / edge models",
        description:
          "Qwen3.6-35B-A3B (~35B total / 3B active) is a local-deployment sweet spot—about 20–25 tokens/sec on a single RTX 4090. Smaller models go down to ~0.5B for laptops and phones.",
      },
      {
        title: "Desktop & mobile agents",
        description:
          "Qwen 3.5 can operate desktop and mobile applications—useful for agentic control beyond the chat box.",
      },
      {
        title: "Image generation & TTS",
        description:
          "Qwen-Image-2512 for photorealistic images and high-quality text in images; Qwen3-TTS for voice.",
      },
      {
        title: "Free unlimited web chat",
        description:
          "chat.qwen.ai offers free web access with no limits—unusual among frontier-class families.",
      },
      {
        title: "Apache 2.0 self-hosting",
        description:
          "Download, run, fine-tune, and deploy open-weight Qwen models on your own infrastructure under Apache 2.0—the most permissive major open-weight license.",
      },
    ],
    mostUsersMiss: [
      "Use agentic coding mode for multi-step build/test/fix loops—not one-shot snippets.",
      "Feed screenshots or design drafts into 3.6-Plus for front-end generation.",
      "Run edge models locally (35B-A3B or 27B) when privacy or cost rules out the cloud.",
      "Try desktop/mobile app control with Qwen 3.5-style agents.",
      "Use chat.qwen.ai’s unlimited free tier for everyday work before paying for API.",
      "Fine-tune or fork open weights—200K+ community derivatives exist for a reason.",
      "Pick Flash-Next pricing for long 1M-context agent workloads on a budget.",
      "Wire Qwen into Cursor, Claude Code, LangChain, or OpenClaw-style agents instead of only the web UI.",
    ],
    pricing: [
      {
        plan: "Free (Chat)",
        price: "$0",
        inclusions: "chat.qwen.ai — unlimited free access",
      },
      {
        plan: "API (Model Studio)",
        price: "Usage-based",
        inclusions:
          "Alibaba Cloud Model Studio—from free open-weight options to frontier API around $2.50 per million input tokens",
      },
      {
        plan: "Flash-Next (budget)",
        price: "~$0.16 / $0.47 per million tokens",
        inclusions: "Handles agent workloads with up to ~1M tokens of context",
      },
      {
        plan: "Open-weight self-host",
        price: "Free (Apache 2.0)",
        inclusions: "Download, run, fine-tune, and deploy on your own infrastructure",
      },
      {
        plan: "Cloud hosted",
        price: "Usage-based",
        inclusions: "Hosted versions on Alibaba’s servers via Model Studio / cloud",
      },
    ],
    useCases: [
      {
        useCase: "Coding",
        how: "Agentic coding focus—Qwen3-Coder and 3.6-Max Preview for multi-step programming workloads",
      },
      {
        useCase: "On-device AI",
        how: "Laptop and consumer hardware models; edge sizes from ~0.5B upward",
      },
      {
        useCase: "Enterprise (global)",
        how: "Credible non-US open-weight family for hardware and developer relationships in China and worldwide",
      },
      {
        useCase: "Research",
        how: "Coding, real-life work, research, long-horizon tasks, and visual intelligence",
      },
      {
        useCase: "Self-hosting / privacy",
        how: "Apache 2.0 plus 200,000+ community derivatives for private and custom deployments",
      },
      {
        useCase: "Competition with US models",
        how: "Qwen 3.6-Plus matches Claude Opus 4.5 on key programming and agent benchmarks in reported evaluations",
      },
    ],
    integrations: [
      "chat.qwen.ai — free unlimited chat",
      "Alibaba Cloud Model Studio — OpenAI-compatible API",
      "Hugging Face — Apache 2.0 open weights (200,000+ derivatives)",
      "Available as a model option in Cursor and other AI tools",
      "Compatible with OpenClaw-style agents, Claude Code, LangChain, and other frameworks",
      "On-device models for laptops, phones, and edge hardware",
      "Alibaba Cloud ecosystem — DingTalk and enterprise cloud services",
    ],
    security: [
      "Apache 2.0 allows commercial use, modification, and redistribution",
      "Self-hosting for full data sovereignty—data need not leave your infrastructure",
      "Alibaba Cloud enterprise features include security controls and access management",
      "Chinese company—hosted API subject to Chinese data laws",
      "Western compliance certifications not documented for the hosted service",
      "Community can audit open weights for security and bias",
    ],
    strengths: [
      "Most prolific open-weight family in 2026—200K+ Hugging Face derivatives",
      "Apache 2.0—most permissive major open-weight license",
      "Full range from ~0.5B edge to ~2.4T frontier",
      "Qwen 3.6 Flash competitive with Gemini 3.5 Flash at a fraction of the price in reported comparisons",
      "Demonstrated multi-day autonomous coding capability",
      "Free unlimited chat at chat.qwen.ai",
      "Single-GPU / laptop-class models (e.g. 27B)",
    ],
    weaknesses: [
      "Some proprietary flagship / Omni variants are not fully open-weight",
      "Chinese data jurisdiction for hosted API",
      "Consumer chat product less polished than ChatGPT",
      "Global enterprise support infrastructure less mature",
      "Key developer Junyang Lin departed in March 2026",
      "Less brand recognition outside the developer community",
    ],
    practiceTips: [
      "Say whether you need agentic coding, multimodal UI-from-screenshot, or edge/self-host.",
      "Name chat.qwen.ai, Model Studio, or Apache self-host constraints up front.",
      "For long jobs, request iterative write/test/fix loops and success criteria.",
    ],
  },
];

export function getPlatform(id: string) {
  return platforms.find((p) => p.id === id);
}

export const westernPlatformIds = [
  "chatgpt",
  "claude",
  "gemini",
  "cursor",
  "perplexity",
  "copilot",
] as const;

export const chinesePlatformIds = [
  "kimi",
  "deepseek",
  "glm",
  "minimax",
  "qwen",
] as const;

export function isChinesePlatform(id: string) {
  return (chinesePlatformIds as readonly string[]).includes(id);
}

export function platformsByEcosystem() {
  return {
    western: platforms.filter((p) => !isChinesePlatform(p.id)),
    chinese: platforms.filter((p) => isChinesePlatform(p.id)),
  };
}
