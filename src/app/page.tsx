import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "flowmore — use AI correctly",
  description:
    "A practical guide to ChatGPT, Claude, Gemini, Cursor, Perplexity, Copilot, and the Chinese AI platforms. Compare them, see how they build businesses, and practise taking them further.",
};

const sections = [
  {
    href: "/platforms",
    kicker: "Browse",
    title: "Platforms",
    body: "Capability maps for 11 platforms—ChatGPT, Claude, Gemini, Cursor, Perplexity, Copilot, plus Kimi, DeepSeek, GLM, MiniMax, and Qwen.",
  },
  {
    href: "/compare",
    kicker: "Compare",
    title: "Compare",
    body: "Side-by-side features, pricing, West vs China, and the features most users miss.",
  },
  {
    href: "/businesses",
    kicker: "Report",
    title: "Businesses",
    body: "How Western and Chinese AI platforms create and transform businesses worldwide—by department, industry, and combination.",
  },
  {
    href: "/workflows",
    kicker: "Build",
    title: "Workflows",
    body: "Chain features into end-to-end flows—like Projects → Deep Research → Canvas.",
  },
  {
    href: "/discover",
    kicker: "Discover",
    title: "Hidden features",
    body: "Interactive walkthroughs of the features most users never turn on.",
  },
  {
    href: "/picker",
    kicker: "Match",
    title: "Platform picker",
    body: "A short quiz that recommends the best platform for your workflow.",
  },
  {
    href: "/scenarios",
    kicker: "Practise",
    title: "Scenarios",
    body: "Real tasks with before-and-after prompts so you see what good looks like.",
  },
  {
    href: "/power-user",
    kicker: "Mix",
    title: "Power user",
    body: "When to use which platform for maximum efficiency—and what to avoid.",
  },
  {
    href: "/practice",
    kicker: "Score",
    title: "Prompt Quality Score",
    body: "Write a prompt, get a live score, then improve it with concrete tips.",
  },
  {
    href: "/sandbox",
    kicker: "Try",
    title: "Sandbox",
    body: "Run prompts against the live models and compare answers side by side.",
  },
];

export default function HomePage() {
  return (
    <div className="home">
      <div className="home-inner">
        <header className="home-hero">
          <h1 className="home-title">flowmore</h1>
          <p className="biz-lead">
            A practical guide to using AI correctly. Compare every major platform, see how they
            build and transform businesses, then practise taking them further than basic chat.
          </p>
          <div className="home-actions">
            <Link href="/platforms" className="home-cta home-cta-flat">
              Browse platforms
            </Link>
            <Link href="/practice" className="home-cta home-cta-raised">
              Score a prompt
            </Link>
          </div>
        </header>

        <section className="home-block" style={{ marginTop: "2.5rem" }}>
          <p className="home-heading">What&apos;s inside</p>
          <div className="biz-grid" style={{ marginTop: "1rem" }}>
            {sections.map((s) => (
              <Link key={s.href} href={s.href} className="biz-glass" style={{ textDecoration: "none" }}>
                <p className="biz-kicker">{s.kicker}</p>
                <h2 className="biz-title" style={{ fontSize: "1.15rem" }}>
                  {s.title}
                </h2>
                <p className="biz-body">{s.body}</p>
                <span className="home-card-link" style={{ paddingTop: "0.75rem" }}>
                  Open
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
