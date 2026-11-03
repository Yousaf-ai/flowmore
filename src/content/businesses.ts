export type BusinessExample = {
  title: string;
  body: string;
  platforms?: string[];
};

export type BusinessSection = {
  id: string;
  heading: string;
  intro?: string;
  examples: BusinessExample[];
};

export type StatRow = { metric: string; figure: string };

export type ComboRow = { combination: string; useCase: string };

export type CategoryRow = {
  category: string;
  description: string;
  platforms: string;
};

export type DeptRow = {
  department: string;
  platforms: string;
  how: string;
};

export type IndustryRow = {
  industry: string;
  region: string;
  platforms: string;
  transformation: string;
};

export type ChinaBizRow = {
  type: string;
  platforms: string;
  description: string;
};

export type ChinaEnterpriseRow = {
  company: string;
  platform: string;
  transformation: string;
};

export type UnderusedRow = {
  platform: string;
  href: string;
  items: string;
};

/** PART 1 — New digital businesses created with Western platforms */
export const createdWestern: BusinessSection[] = [
  {
    id: "micro-saas",
    heading: "Micro-SaaS products (solo founders / small teams)",
    intro:
      "Individuals are shipping revenue-generating software with AI coding and APIs—often without a traditional engineering team.",
    examples: [
      {
        title: "Cursor-built / Cursor-linked products",
        body: "ProvenStartups tracked 46 Cursor-built or Cursor-linked projects, including 29 solo-run products. Among 13 with a clean monthly figure, the median was about $14K/mo (range about $2K–$440K/mo).",
        platforms: ["cursor"],
      },
      {
        title: "ChatGPT API micro-tools",
        body: "Examples include tools that rewrite emails for non-native speakers (about $9–$19/month), built with the ChatGPT API and no-code connectors.",
        platforms: ["chatgpt"],
      },
      {
        title: "Natural-language internal tools",
        body: "Non-developers build forms, CRM syncs, and internal apps in Cursor Composer by describing the job in plain English and iterating until it works.",
        platforms: ["cursor"],
      },
    ],
  },
  {
    id: "claude-startups",
    heading: "AI-native startups built on Claude",
    examples: [
      {
        title: "Claude Code product builders",
        body: "Startups including HumanLayer, Ambral, and Vulcan Technologies have used Claude Code to build products, according to Anthropic.",
        platforms: ["claude"],
      },
      {
        title: "Claude-powered product companies",
        body: "Notable examples include Notability (study tools that improve with Claude releases) and case-study companies such as Cognition, Gamma, and Harvey.",
        platforms: ["claude"],
      },
      {
        title: "Claude Startups / Startup Stack",
        body: "Anthropic expanded Claude Startups to early-stage founders in India (eligible startups up to about $7,000 in products and credits). The Claude Startup Stack bundles offers from Linear, Lovable, ElevenLabs, Granola, Hex, and others—discounts and credits worth up to about $45,000.",
        platforms: ["claude"],
      },
    ],
  },
  {
    id: "dev-tools",
    heading: "AI-powered code editors & developer tools",
    examples: [
      {
        title: "Cursor (Anysphere)",
        body: "Cofounders raised about $2.3B at a reported ~$29.3B valuation. Used by millions of developers across roughly 50,000 teams at enterprises like Nvidia, Adobe, Uber, Shopify, and PayPal, with more than $1B annualized revenue reported.",
        platforms: ["cursor"],
      },
      {
        title: "Entire",
        body: "Launched February 2026 by former GitHub CEO Thomas Dohmke with about $60M funding for AI agents that write code autonomously.",
        platforms: ["cursor"],
      },
    ],
  },
  {
    id: "content-agencies",
    heading: "AI-powered content agencies & ghostwriting",
    examples: [
      {
        title: "Ghostwriting & social content shops",
        body: "Operators sell LinkedIn/blog/newsletter ghostwriting—ChatGPT for first drafts, humans for polish. Fully managed social calendars, captions, hashtags, and graphic briefs are produced at speed with ChatGPT.",
        platforms: ["chatgpt"],
      },
      {
        title: "SEO content agencies",
        body: "Agencies combine ChatGPT with Surfer SEO or NeuronWriter for ideation, meta tags, internal linking, and schema—often 3–5× more output per client hour.",
        platforms: ["chatgpt"],
      },
    ],
  },
  {
    id: "newsletters",
    heading: "Newsletter management businesses",
    examples: [
      {
        title: "Client newsletter operations",
        body: "Entrepreneurs run topic curation, drafting, editing, and Beehiiv/Substack/ConvertKit scheduling—powered by ChatGPT end to end.",
        platforms: ["chatgpt"],
      },
    ],
  },
  {
    id: "education",
    heading: "AI tutoring & education businesses",
    examples: [
      {
        title: "Course and tutoring services",
        body: "Educators generate lesson plans, quiz banks, study guides, and outlines at high speed—selling tutoring or content services to teachers and e-learning businesses.",
        platforms: ["chatgpt", "claude", "gemini"],
      },
      {
        title: "D-ID education content",
        body: "D-ID used ChatGPT to create AI-related courses, attracting over 10 million users in 2024 and generating millions in digital education revenue.",
        platforms: ["chatgpt"],
      },
    ],
  },
  {
    id: "ecommerce-copy",
    heading: "E-commerce description & copy services",
    examples: [
      {
        title: "Etsy / marketplace generators",
        body: "Product-description tools for sellers built in Glide or Softr with GPT via OpenAI API + Make.com, Stripe for pay-per-use or subscriptions.",
        platforms: ["chatgpt"],
      },
      {
        title: "CodeZap",
        body: "Used ChatGPT to develop Shopify apps for over 1,000 businesses.",
        platforms: ["chatgpt"],
      },
    ],
  },
  {
    id: "podcast",
    heading: "Podcast production services",
    examples: [
      {
        title: "Show-notes businesses",
        body: "Upload audio → Whisper (AssemblyAI/Descript) → ChatGPT for notes, summaries, and curriculum outlines.",
        platforms: ["chatgpt"],
      },
    ],
  },
  {
    id: "consulting",
    heading: "AI / ChatGPT consulting firms",
    examples: [
      {
        title: "Cognitivescale",
        body: "Used ChatGPT to advise over 200 businesses and reportedly generated about $50M in revenue by 2024. Many companies want AI but don’t know where to start—creating demand for platform-fluent consultants.",
        platforms: ["chatgpt"],
      },
    ],
  },
  {
    id: "geo",
    heading: "AI visibility / GEO (Generative Engine Optimization) agencies",
    intro:
      "An entirely new industry: optimizing businesses to be recommended inside AI answers—not only classic SEO.",
    examples: [
      {
        title: "Consumer discovery shift",
        body: "Consumer use of ChatGPT, Gemini, and Perplexity to find local businesses grew from about 6% to 45% in one year.",
        platforms: ["chatgpt", "gemini", "perplexity"],
      },
      {
        title: "GEO product companies",
        body: "LightSite AI, Peec AI, Geoptie, and Otterly AI help businesses monitor and optimize visibility across AI search platforms—a category that did not exist before these tools.",
        platforms: ["chatgpt", "gemini", "perplexity"],
      },
    ],
  },
  {
    id: "automation",
    heading: "AI workflow automation businesses",
    examples: [
      {
        title: "SEO automation pipelines",
        body: "Example stack: keyword → Make.com → Semrush API → Frase.io brief → ChatGPT draft → WordPress staging → Slack. One operator reported ~70% less content production time, scaling from 5 to 50+ client sites without hiring.",
        platforms: ["chatgpt"],
      },
    ],
  },
  {
    id: "travel",
    heading: "AI travel planning services",
    examples: [
      {
        title: "Itinerary businesses & Expedia",
        body: "Travel operators use ChatGPT for personalized itineraries. Through ChatGPT, Expedia offers a sophisticated virtual travel agent that streamlines planning.",
        platforms: ["chatgpt"],
      },
    ],
  },
  {
    id: "weddings",
    heading: "AI wedding & event services",
    examples: [
      {
        title: "Personalized vows / speeches",
        body: "Niche services collect details via Typeform, generate with GPT through Zapier, deliver via Canva, and charge through Payhip or Ko-fi.",
        platforms: ["chatgpt"],
      },
    ],
  },
  {
    id: "personal-assistants",
    heading: "AI personal assistants",
    examples: [
      {
        title: "X.ai / Amy",
        body: "Dennis Mortensen’s X.ai built Amy (ChatGPT-based) and sold for millions—helping set a wave of personal productivity tools.",
        platforms: ["chatgpt"],
      },
    ],
  },
  {
    id: "youth",
    heading: "Child-founded & early-builder businesses",
    examples: [
      {
        title: "Custom stuffed animals (corporate gifting)",
        body: "Quincy and Jackson Fuller (ages 8 and 10) used ChatGPT for product descriptions, email templates, and packaging ideas—about five-figure revenue and ~5,000 units shipped.",
        platforms: ["chatgpt"],
      },
      {
        title: "45-minute chatbot",
        body: "Ricky Robinett (Cloudflare) shared that his eight-year-old daughter built a chatbot in about 45 minutes using Cursor.",
        platforms: ["cursor"],
      },
    ],
  },
  {
    id: "shopping",
    heading: "AI-powered shopping & commerce",
    examples: [
      {
        title: "In-answer comparison tables",
        body: "ChatGPT, Perplexity, and Gemini shipped shopping/comparison surfaces in 2026—product tables inside answers that decide purchases.",
        platforms: ["chatgpt", "perplexity", "gemini"],
      },
      {
        title: "Holiday shopping behavior",
        body: "Salesforce’s 2026 Holiday Predictions found half of shoppers use an AI assistant somewhere in the journey; 74% trust AI product recommendations.",
        platforms: ["chatgpt", "perplexity", "gemini"],
      },
    ],
  },
  {
    id: "api-saas",
    heading: "API-integrated SaaS products",
    examples: [
      {
        title: "Industry SaaS on OpenAI APIs",
        body: "Builders ship e-commerce and healthcare tools on OpenAI APIs. Live examples of ChatGPT-integrated experiences include Jasper AI, Duolingo, and Instacart.",
        platforms: ["chatgpt"],
      },
    ],
  },
  {
    id: "comet",
    heading: "Perplexity Comet — AI-native browser category",
    examples: [
      {
        title: "Agentic browser businesses",
        body: "Comet created a browser that can act on pages—not only answer about them. Agencies and operators now build workflows around that paradigm.",
        platforms: ["perplexity"],
      },
    ],
  },
];

/** PART 2 — Existing businesses improved (Western) */
export const improvedEnterprise: BusinessExample[] = [
  {
    title: "PwC — Microsoft Copilot (100+ countries)",
    body: "Deployed Copilot for 285,000+ people—creating 1M+ hours of capacity and 20M+ Copilot actions in April 2026 alone. One of the world’s largest deployments.",
    platforms: ["copilot"],
  },
  {
    title: "EY — Microsoft 365 Copilot",
    body: "Deployed to 150,000 employees with about 15% productivity gain; expanding Frontier Suite across 400,000+ people.",
    platforms: ["copilot"],
  },
  {
    title: "Publicis Groupe — Copilot",
    body: "April 2026 enterprise-wide rollout to 114,000 employees—surfacing insights from email and SharePoint, shortening research cycles.",
    platforms: ["copilot"],
  },
  {
    title: "Atos Group — Copilot (54 countries)",
    body: "56,000 employees—from consultants to frontline—early adopter of Microsoft 365 E7 Frontier Suite.",
    platforms: ["copilot"],
  },
  {
    title: "Insight Enterprises — Copilot",
    body: "Reported about 93% productivity gain in sales, finance, and HR functions.",
    platforms: ["copilot"],
  },
  {
    title: "Presidio — Copilot",
    body: "About 1,200 hours saved per month on average; 70 new business opportunities created.",
    platforms: ["copilot"],
  },
  {
    title: "Accenture & Avanade — Copilot practice",
    body: "Launched a Copilot business transformation practice with Microsoft co-investment in capabilities, solutions, and training.",
    platforms: ["copilot"],
  },
  {
    title: "Moderna — ChatGPT Enterprise",
    body: "Built 750+ custom GPTs, including tools like Dose ID GPT for vaccine dosage exploration.",
    platforms: ["chatgpt"],
  },
  {
    title: "BBVA — ChatGPT",
    body: "Spanish bank expanded ChatGPT so staff can translate, summarize, write reports, and ask finance/law questions.",
    platforms: ["chatgpt"],
  },
  {
    title: "KPMG — secure AI assistant",
    body: "Closed-system assistant processing hundreds of thousands of internal prompts for proposals, experts, and efficiency—without sacrificing privacy.",
    platforms: ["chatgpt"],
  },
  {
    title: "Octopus Energy — GPT support",
    body: "GPT-powered chatbots handle about 44% of customer inquiries across billing and account management.",
    platforms: ["chatgpt"],
  },
  {
    title: "ChatGPT Enterprise customers",
    body: "Accenture, Morgan Stanley, T-Mobile, Uber, Lowe’s; OpenAI also named Amgen, Cisco, Booking.com, and Target among business customers around a Nov 2025 milestone of 1M business accounts. Additional global names include TCS, Infosys, Cognizant, Capgemini, Wipro, HCLTech, Siemens, Mahindra, and Reliance.",
    platforms: ["chatgpt"],
  },
  {
    title: "Salesforce + ChatGPT",
    body: "Agentforce Sales inside ChatGPT—query CRM, update opportunities, delegate prospecting with Trust Layer governance.",
    platforms: ["chatgpt"],
  },
  {
    title: "HubSpot + ChatGPT",
    body: "Connector (June 2025) lets agents query full CRM history, tickets, and touchpoints—and push actions back.",
    platforms: ["chatgpt"],
  },
  {
    title: "Freshworks & Cheggmate",
    body: "Freshworks used ChatGPT to accelerate software development. Cheggmate integrated ChatGPT for faster student support.",
    platforms: ["chatgpt"],
  },
  {
    title: "Zoom — Claude federation",
    body: "Zoom Ventures invested in Anthropic; Zoom routes tasks across Zoom LLM, Claude, and other models.",
    platforms: ["claude"],
  },
  {
    title: "Crowdin — Claude localization agent",
    body: "Localization-manager automation explicitly Claude-based.",
    platforms: ["claude"],
  },
  {
    title: "Healthcare partners — Claude summaries",
    body: "Clinical document processing ~70% faster from intake to summary with HIPAA-oriented clinician-level output.",
    platforms: ["claude"],
  },
  {
    title: "Klaviyo — Claude MCP",
    body: "Remote MCP server (August 2025) connects marketing data into Claude for all customers.",
    platforms: ["claude"],
  },
  {
    title: "Warp — Claude agents",
    body: "Building self-improving agents on Claude; featured in Anthropic’s startup program.",
    platforms: ["claude"],
  },
  {
    title: "Cursor — Fortune 500 & Coinbase",
    body: "About 64% of Fortune 500 companies use Cursor; 50,000+ enterprises; 100M+ lines of enterprise code per day. By February 2025 every Coinbase engineer had used Cursor—refactors and new codebases in days instead of months.",
    platforms: ["cursor"],
  },
  {
    title: "Cursor across industry",
    body: "Daily use at OpenAI, Instacart, Spotify, Uber, MLB; also Samsung, Replicate, Midjourney, Shopify, and Perplexity engineers.",
    platforms: ["cursor"],
  },
  {
    title: "Cursor for non-developers",
    body: "Marketing teams build weekly multi-platform reporting scripts in Composer without prior coding. PMs prototype UI, automate PRDs/Jira, and reply with accurate technical language.",
    platforms: ["cursor"],
  },
  {
    title: "Perplexity — research ROI",
    body: "Reports of ~1,953% annual ROI for research-intensive roles; ~30 minutes saved daily; ~40% faster research cycles and ~60% less retrieval time. Competitive research often drops from 2–3 hours to 15–20 minutes; market sizing from 4–6 hours to 45–60 minutes; diligence prep from 3–4 hours to 30–45 minutes per company. M&A research once taking 15–20 hours per deal collapses dramatically.",
    platforms: ["perplexity"],
  },
  {
    title: "Gemini — Workspace enterprises",
    body: "Gemini Enterprise positioned for building/running agents across Workspace. March 2026 updates improved Docs, Sheets, Slides, and Drive assistance; manufacturing and logistics benefit from deep integration.",
    platforms: ["gemini"],
  },
  {
    title: "Banco Popular Dominicano — Copilot",
    body: "Largest private-sector bank in the Dominican Republic moved operational risk from sample-based reviews to continuous AI-powered supervision.",
    platforms: ["copilot"],
  },
  {
    title: "Marks & Spencer — Copilot",
    body: "1,000+ stores across 20 countries—enterprise digital transformation for operational agility and in-store experience.",
    platforms: ["copilot"],
  },
  {
    title: "Barclays — Copilot",
    body: "Microsoft 365 Copilot for enterprise productivity.",
    platforms: ["copilot"],
  },
  {
    title: "Vodafone legal — Copilot",
    body: "Faster contract review; about $3M USD estimated annual savings via staff capacity creation.",
    platforms: ["copilot"],
  },
  {
    title: "St. Luke’s Health Network — Security Copilot",
    body: "About 200 hours/month saved on phishing alert triage.",
    platforms: ["copilot"],
  },
  {
    title: "British Heart Foundation — Copilot",
    body: "Pilot saved about 30 minutes/day per user on knowledge-intensive tasks.",
    platforms: ["copilot"],
  },
  {
    title: "Cactus Life Sciences — Copilot",
    body: "Modernized scientific workflows with Copilot and agents under strict pharma data security.",
    platforms: ["copilot"],
  },
  {
    title: "Enerjisa Üretim — Copilot",
    body: "Streamlined meeting summaries, document reformatting, and reports—cutting admin load after heavy meeting days.",
    platforms: ["copilot"],
  },
  {
    title: "Chow Tai Fook — Copilot agents",
    body: "Hundreds of AI agents for hyper-personalized omnichannel experiences—improvements of up to about 57%.",
    platforms: ["copilot"],
  },
  {
    title: "Copilot cross-enterprise outcomes",
    body: "Reported results include ~95% faster lead times, >37% reduction in finance operating costs, and up to ~90% less manual work on key processes. Microsoft 365 Copilot crossed 20M+ paid enterprise seats; 60%+ of Fortune 500 actively use it; as of April 2026, 60%+ of Fortune 500 operate at least 10,000 seats.",
    platforms: ["copilot"],
  },
];

export const departmentRows: DeptRow[] = [
  {
    department: "Sales",
    platforms: "Copilot + ChatGPT",
    how: "Teams + Dynamics 365 Copilot cut admin between customer interactions—meeting summaries, CRM updates, proposal drafts.",
  },
  {
    department: "HR",
    platforms: "Copilot",
    how: "Drafts complete, bias-reduced job postings from bullet points—often from an hour to minutes.",
  },
  {
    department: "Legal",
    platforms: "Copilot + Claude",
    how: "Contract review, document analysis, compliance checks.",
  },
  {
    department: "Finance",
    platforms: "Copilot + ChatGPT",
    how: "Pivot tables, pattern/anomaly detection, and written explanations so teams focus on decisions.",
  },
  {
    department: "IT / Security",
    platforms: "Copilot",
    how: "Copilot Studio agents for invoice routing, ticket triage, compliance checks, and onboarding.",
  },
  {
    department: "Marketing",
    platforms: "All major platforms",
    how: "Content, SEO, social, Claude Design, email campaigns.",
  },
  {
    department: "Engineering",
    platforms: "Cursor + Claude + Copilot",
    how: "Shorter sprints and ambitious refactors that were previously too slow.",
  },
  {
    department: "Research",
    platforms: "Perplexity + Gemini + ChatGPT",
    how: "Deep Research agents for market intelligence, competitive analysis, and diligence.",
  },
  {
    department: "Meetings",
    platforms: "Copilot",
    how: "Teams summaries, decisions, and action owners automatically.",
  },
  {
    department: "Customer support",
    platforms: "ChatGPT + Claude",
    how: "Example: Octopus Energy handles ~44% of inquiries via GPT chatbots.",
  },
];

export const industryRows: IndustryRow[] = [
  {
    industry: "Banking / finance",
    region: "Spain (BBVA), UK (Barclays), Dominican Republic, global (Morgan Stanley)",
    platforms: "ChatGPT, Copilot",
    transformation: "Translation, risk, wealth tools, compliance",
  },
  {
    industry: "Consulting",
    region: "Global (PwC, EY, KPMG, Accenture)",
    platforms: "Copilot, ChatGPT",
    transformation: "1M+ hours freed/month-scale capacity; ~15% productivity; high ops efficiency",
  },
  {
    industry: "Biotech / pharma",
    region: "USA (Moderna), global (Cactus Life Sciences)",
    platforms: "ChatGPT, Copilot",
    transformation: "750+ custom GPTs; scientific workflow modernization",
  },
  {
    industry: "Retail",
    region: "UK (M&S), Hong Kong (Chow Tai Fook), USA (Lowe’s, Target)",
    platforms: "Copilot, ChatGPT",
    transformation: "Store ops, personalization, customer experience",
  },
  {
    industry: "Energy",
    region: "UK (Octopus), Turkey (Enerjisa)",
    platforms: "ChatGPT, Copilot",
    transformation: "~44% inquiries automated; meeting/report optimization",
  },
  {
    industry: "Technology",
    region: "Global (Samsung, Nvidia, Adobe, Shopify)",
    platforms: "Cursor, Claude, ChatGPT",
    transformation: "Code acceleration and AI-native product workflows",
  },
  {
    industry: "Telecom",
    region: "USA (T-Mobile), global (Vodafone)",
    platforms: "ChatGPT, Copilot",
    transformation: "Support; legal review (~$3M savings example)",
  },
  {
    industry: "Healthcare",
    region: "USA (St. Luke’s), global partners",
    platforms: "Claude, Copilot",
    transformation: "Records ~70% faster; security triage hours saved",
  },
  {
    industry: "Advertising",
    region: "Global (Publicis)",
    platforms: "Copilot",
    transformation: "114,000 employees using AI for insights and creative ops",
  },
  {
    industry: "Education",
    region: "Global",
    platforms: "ChatGPT, Claude, Gemini",
    transformation: "Tutoring, courses, study tools, research",
  },
  {
    industry: "Travel",
    region: "Global (Expedia, Booking.com)",
    platforms: "ChatGPT",
    transformation: "Virtual agents and itinerary planning",
  },
  {
    industry: "Fintech",
    region: "USA (Coinbase, PayPal)",
    platforms: "Cursor",
    transformation: "Full engineering adoption; days vs months for refactors",
  },
  {
    industry: "Media / content",
    region: "Global",
    platforms: "ChatGPT, Claude, Perplexity",
    transformation: "Newsletters, SEO agencies, social management",
  },
  {
    industry: "Logistics / manufacturing",
    region: "Global",
    platforms: "Gemini",
    transformation: "Workspace-integrated operational efficiency",
  },
  {
    industry: "Nonprofit",
    region: "UK (British Heart Foundation)",
    platforms: "Copilot",
    transformation: "~30 min/day saved per user on knowledge tasks",
  },
  {
    industry: "Sports",
    region: "USA (MLB)",
    platforms: "Cursor",
    transformation: "Software development workflows",
  },
];

/** PART 3 — Multi-platform combinations */
export const westernCombos: ComboRow[] = [
  {
    combination: "ChatGPT + Cursor",
    useCase: "Architect in ChatGPT → build in Cursor",
  },
  {
    combination: "Perplexity + Claude",
    useCase: "Cited research in Perplexity → deep analysis and long documents in Claude",
  },
  {
    combination: "Cursor + Claude Code",
    useCase:
      "Developers switch between tools—tracked projects often mention multiple AI coding stacks (ChatGPT, Claude Code, Cursor among the most cited).",
  },
  {
    combination: "Gemini + Copilot",
    useCase: "Gemini for Google Workspace shops; Copilot for Microsoft shops—some enterprises run both",
  },
  {
    combination: "ChatGPT + Perplexity + Gemini",
    useCase:
      "Local-business discovery via AI rose from ~6% to ~45%—brands optimize visibility across all three",
  },
  {
    combination: "Strategic multi-platform",
    useCase:
      "Gemini for complex reasoning/automation; Perplexity for real-time research and citations; ChatGPT for broad workspace tasks",
  },
  {
    combination: "Copilot + ChatGPT API",
    useCase: "GPT models already power Microsoft Copilot across Outlook, Teams, Word, and Excel",
  },
];

/** PART 4 — New business categories */
export const newCategories: CategoryRow[] = [
  {
    category: "GEO (Generative Engine Optimization)",
    description:
      "With no single AI search winner, optimizing for one engine means missing traffic—presence across multiple AI answer surfaces is required.",
    platforms: "All major answer platforms",
  },
  {
    category: "Prompt engineering consultancy",
    description: "Firms paid to improve how companies prompt and govern AI usage.",
    platforms: "All",
  },
  {
    category: "Custom GPT / Skills marketplace",
    description: "Building and selling reusable AI configurations.",
    platforms: "ChatGPT, Claude",
  },
  {
    category: "AI agent development",
    description: "Autonomous agents for enterprise workflows.",
    platforms: "Claude, Copilot Studio, ChatGPT",
  },
  {
    category: "AI-native browsers",
    description: "Comet created a browser category that acts on pages for users.",
    platforms: "Perplexity",
  },
  {
    category: "AI code review services",
    description:
      "Tools like Bugbot act as automated senior engineers doing first-pass review on every commit for Cursor teams.",
    platforms: "Cursor",
  },
  {
    category: "AI monitoring & observability",
    description:
      "Native Anthropic integrations and dedicated Claude Code monitoring products for observing AI-powered apps.",
    platforms: "Claude",
  },
  {
    category: "MCP integration services",
    description: "Building Model Context Protocol connectors for enterprises.",
    platforms: "Claude, Cursor, Copilot",
  },
  {
    category: "AI shopping engines",
    description:
      "Comparison tables inside answers that judge products on purchase attributes.",
    platforms: "ChatGPT, Perplexity, Gemini",
  },
  {
    category: "No-code AI app building",
    description: "Non-developers shipping production apps through AI.",
    platforms: "Cursor, ChatGPT, Copilot Studio",
  },
];

/** PART 5 — Key statistics */
export const keyStats: StatRow[] = [
  { metric: "ChatGPT Enterprise / business accounts", figure: "~1 million business accounts (Nov 2025 milestone)" },
  { metric: "Microsoft 365 Copilot seats", figure: "20M+ paid enterprise seats (April 2026)" },
  { metric: "Cursor Fortune 500 adoption", figure: "~64% of Fortune 500" },
  { metric: "Cursor daily enterprise code", figure: "100M+ lines per day" },
  { metric: "Cursor revenue", figure: "$1B+ annualized revenue reported" },
  { metric: "Perplexity scale", figure: "~780M monthly queries; ~45M monthly active users" },
  { metric: "Perplexity ARR", figure: "$200M+ ARR by late 2025; reports of $450M+ by early 2026" },
  { metric: "PwC Copilot capacity", figure: "1M+ hours freed in April 2026 alone" },
  { metric: "AI for local business discovery", figure: "~45% of consumers (up from ~6% a year earlier)" },
  { metric: "AI shopping adoption", figure: "~50% of shoppers use AI in the journey; ~74% trust AI recommendations" },
];

/** Chinese platforms — businesses created */
export const chinaCreated: ChinaBizRow[] = [
  {
    type: "Self-hosted AI startups",
    platforms: "DeepSeek, Qwen, GLM",
    description:
      "Thousands of startups run DeepSeek R1 or Qwen on private infra. 200,000+ Qwen derivatives on Hugging Face.",
  },
  {
    type: "AI character / social apps",
    platforms: "MiniMax",
    description: "Talkie (international) among top AI companion apps; Xingye for China.",
  },
  {
    type: "Video production studios",
    platforms: "MiniMax (Hailuo AI)",
    description: "Text-to-video production competing with Runway/Sora-class tools.",
  },
  {
    type: "AI music services",
    platforms: "MiniMax",
    description: "Music 3.0 for composition, vocals, and production businesses.",
  },
  {
    type: "Voice cloning / dubbing",
    platforms: "MiniMax",
    description: "5-second cloning across ~40 languages for dubbing, podcasts, accessibility.",
  },
  {
    type: "AI coding agencies",
    platforms: "Kimi, GLM, Qwen",
    description: "Kimi Code, ZCode, and Qwen Coder for client work at lower cost.",
  },
  {
    type: "Cloud automation services",
    platforms: "Kimi (Claw)",
    description: "Always-online client agents without infrastructure setup.",
  },
  {
    type: "Cybersecurity firms",
    platforms: "GLM",
    description: "GLM-5.3 cybersecurity focus for security consulting and testing.",
  },
  {
    type: "Edge AI products",
    platforms: "Qwen",
    description: "0.5B–27B models for consumer electronics, IoT, and embedded AI.",
  },
  {
    type: "AI research tools",
    platforms: "DeepSeek, Kimi",
    description: "DeepSeek Prover for math research; Kimi Researcher for autonomous research.",
  },
  {
    type: "Localization & translation",
    platforms: "GLM, Qwen, Kimi",
    description: "Strong Chinese–English bilingual businesses across Asia.",
  },
];

export const chinaImproved: ChinaEnterpriseRow[] = [
  {
    company: "Chinese tech giants",
    platform: "All major Chinese platforms",
    transformation: "Alibaba, Tencent, Baidu, ByteDance use these models internally and offer them to clients.",
  },
  {
    company: "Chinese financial services",
    platform: "GLM, DeepSeek",
    transformation: "Self-hosted models for compliance-sensitive analysis.",
  },
  {
    company: "Manufacturing (China)",
    platform: "Qwen, GLM",
    transformation: "Factory automation, QC, and supply chain with on-prem AI.",
  },
  {
    company: "Healthcare (Asia)",
    platform: "DeepSeek, Qwen",
    transformation: "Research, drug discovery, clinical docs on self-hosted models.",
  },
  {
    company: "E-commerce (global)",
    platform: "Qwen, MiniMax",
    transformation: "Descriptions, support, and recommendations in Alibaba’s AI ecosystem.",
  },
  {
    company: "Education (Asia)",
    platform: "Kimi, Qwen",
    transformation: "Tutoring and study tools across China, Japan, and Southeast Asia.",
  },
  {
    company: "Content creation (global)",
    platform: "MiniMax, Kimi",
    transformation: "Video, music, voice, and text via Hailuo and Talkie.",
  },
  {
    company: "Developer community (global)",
    platform: "DeepSeek, Qwen",
    transformation: "Huge self-host and derivative ecosystems powering thousands of projects.",
  },
  {
    company: "Automotive (China)",
    platform: "Qwen, GLM",
    transformation: "In-car assistants and AV research with edge-deployable models.",
  },
  {
    company: "Government / public sector (China)",
    platform: "GLM, Qwen, DeepSeek",
    transformation: "Smart city, public services, and document processing.",
  },
];

export const chinaCombos: ComboRow[] = [
  {
    combination: "DeepSeek + Cursor",
    useCase: "Self-host DeepSeek for privacy → use as the model inside Cursor",
  },
  {
    combination: "Qwen + Claude Code",
    useCase: "Qwen with agent frameworks including Claude Code for long-horizon tasks",
  },
  {
    combination: "Kimi + Perplexity",
    useCase: "Kimi as a selectable model inside Perplexity for multi-model research",
  },
  {
    combination: "GLM + Together AI / OpenRouter",
    useCase: "Access Zhipu models through Western hosting infrastructure",
  },
  {
    combination: "DeepSeek R1 + Ollama + Cursor",
    useCase: "Fully local AI coding—zero data leaves the machine",
  },
  {
    combination: "Qwen on-device + cloud",
    useCase: "Edge locally, cloud for heavy tasks—hybrid architecture",
  },
  {
    combination: "MiniMax Speech + ChatGPT/Claude",
    useCase: "MiniMax for voice synthesis; Western platforms for text intelligence",
  },
];

export const chinaUnderused: UnderusedRow[] = [
  {
    platform: "Kimi",
    href: "/platforms/kimi",
    items:
      "Kimi Claw (30-second cloud agents), Agent Swarm, Kimi Code, Kimi Work, Researcher, MCP",
  },
  {
    platform: "DeepSeek",
    href: "/platforms/deepseek",
    items:
      "Ollama/LM Studio self-host, R1 reasoning visibility, V4 thinking+tools, distilled production models",
  },
  {
    platform: "GLM",
    href: "/platforms/glm",
    items: "AutoGLM phone agent, ZCode, cybersecurity, MCP, free Flash API, MIT self-host",
  },
  {
    platform: "MiniMax",
    href: "/platforms/minimax",
    items:
      "Full multimodal stack, 5-second voice cloning, Mavis, Hailuo video, Music 3.0, computer use",
  },
  {
    platform: "Qwen",
    href: "/platforms/qwen",
    items:
      "Unlimited chat.qwen.ai, Apache 2.0 self-host, 200K+ derivatives, laptop 27B, multi-day autonomous coding",
  },
];
