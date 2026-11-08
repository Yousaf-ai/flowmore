import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Platform picker, hidden feature discovery, workflow builder, power-user rules, businesses report, and prompt quality practice.",
};

const tools = [
  {
    id: "practice",
    kicker: "Practise",
    title: "Prompt Quality Score",
    body: "Pick a task, write a prompt, get a live score, then improve it with ↑ tips.",
    href: "/practice",
    action: "Score a prompt",
  },
  {
    id: "discover",
    kicker: "Discover",
    title: "Hidden Feature Discovery",
    body: "Interactive walkthroughs of features most users never turn on.",
    href: "/discover",
    action: "Start discovery",
  },
  {
    id: "picker",
    kicker: "Match",
    title: "Platform Picker",
    body: "Short quiz that recommends the best platform for your workflow.",
    href: "/picker",
    action: "Find a platform",
  },
  {
    id: "workflows",
    kicker: "Build",
    title: "Workflow Builder",
    body: "Chain features into end-to-end flows—like Projects → Deep Research → Canvas.",
    href: "/workflows",
    action: "Open workflows",
  },
  {
    id: "power-user",
    kicker: "Mix",
    title: "Cross-Platform Power User",
    body: "When to use which platform for maximum efficiency—and what to avoid.",
    href: "/power-user",
    action: "Open guide",
  },
  {
    id: "businesses",
    kicker: "Report",
    title: "AI digital businesses",
    body: "Complete report on businesses created and transformed by Western and Chinese AI platforms.",
    href: "/businesses",
    action: "Read the report",
  },
];

export default function ToolsPage() {
  return (
    <div className="home compare-page">
      <div className="biz-inner">
        <header className="home-hero">
          <h1 className="home-title">Tools</h1>
          <p className="biz-lead">
            Six ways to go beyond basic chat—pick a path and practise until the platform pays off.
          </p>
          <div className="home-actions">
            <Link href="/picker" className="home-cta home-cta-flat">
              Find your platform
            </Link>
            <Link href="/practice" className="home-cta home-cta-raised">
              Score a prompt
            </Link>
          </div>
        </header>

        <div className="biz-grid" style={{ marginTop: "2.25rem" }}>
          {tools.map((t) => (
            <Link key={t.id} href={t.href} className="biz-glass" style={{ textDecoration: "none" }}>
              <p className="biz-kicker">{t.kicker}</p>
              <h2 className="biz-title" style={{ fontSize: "1.15rem" }}>
                {t.title}
              </h2>
              <p className="biz-body">{t.body}</p>
              <span className="home-card-link" style={{ paddingTop: "0.75rem" }}>
                {t.action}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
