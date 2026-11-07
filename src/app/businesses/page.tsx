import type { Metadata } from "next";
import Link from "next/link";
import {
  chinaCombos,
  chinaCreated,
  chinaImproved,
  chinaUnderused,
  createdWestern,
  departmentRows,
  improvedEnterprise,
  industryRows,
  keyStats,
  newCategories,
  westernCombos,
  type BusinessExample,
  type BusinessSection,
} from "@/content/businesses";
import { getPlatform } from "@/content/platforms";

export const metadata: Metadata = {
  title: "AI digital businesses — complete report",
  description:
    "How ChatGPT, Claude, Gemini, Cursor, Perplexity, Microsoft Copilot, and Chinese AI platforms create and transform businesses worldwide.",
};

function Chips({ ids }: { ids?: string[] }) {
  if (!ids?.length) return null;
  return (
    <div className="biz-chips">
      {ids.map((id) => {
        const p = getPlatform(id);
        if (!p) return null;
        return (
          <Link key={id} href={`/platforms/${id}`} className="biz-chip">
            {p.name}
          </Link>
        );
      })}
    </div>
  );
}

function GlassCard({ ex }: { ex: BusinessExample }) {
  return (
    <article className="biz-glass">
      <h3 className="biz-title">{ex.title}</h3>
      <p className="biz-body">{ex.body}</p>
      <Chips ids={ex.platforms} />
    </article>
  );
}

function CompareTable({
  headers,
  rows,
  minWidth = "40rem",
}: {
  headers: string[];
  rows: string[][];
  minWidth?: string;
}) {
  return (
    <div className="compare-table">
      <table style={{ minWidth }}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={`${row[0]}-${i}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Part 1 — themed clusters (all 18 subsections kept) */
const createdClusters: { id: string; label: string; sections: string[] }[] = [
  {
    id: "software",
    label: "Software & developer tools",
    sections: ["micro-saas", "claude-startups", "dev-tools", "api-saas"],
  },
  {
    id: "content-media",
    label: "Content, media & education",
    sections: ["content-agencies", "newsletters", "podcast", "education"],
  },
  {
    id: "commerce",
    label: "Commerce & shopping",
    sections: ["ecommerce-copy", "shopping"],
  },
  {
    id: "consulting-geo",
    label: "Consulting, GEO & automation",
    sections: ["consulting", "geo", "automation"],
  },
  {
    id: "personal-niche",
    label: "Personal & niche services",
    sections: ["travel", "weddings", "personal-assistants", "youth"],
  },
  {
    id: "new-platforms",
    label: "New platform categories",
    sections: ["comet"],
  },
];

function CreatedCluster({
  cluster,
}: {
  cluster: (typeof createdClusters)[number];
}) {
  const sections = cluster.sections
    .map((id) => createdWestern.find((s) => s.id === id))
    .filter((s): s is BusinessSection => Boolean(s));
  if (sections.length === 0) return null;
  return (
    <div className="biz-cluster">
      <p className="biz-kicker">{cluster.label}</p>
      {sections.map((section) => (
        <div key={section.id} className="biz-sub">
          <p className="biz-sub-kicker">{section.heading}</p>
          {section.intro && <p className="biz-sub-intro">{section.intro}</p>}
          <div className="biz-grid">
            {section.examples.map((ex) => (
              <GlassCard key={ex.title} ex={ex} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Part 2 — group enterprise examples by core platform */
const improvedGroups = [
  { id: "copilot", label: "Microsoft Copilot deployments" },
  { id: "chatgpt", label: "ChatGPT Enterprise" },
  { id: "claude", label: "Claude" },
  { id: "cursor", label: "Cursor" },
  { id: "perplexity", label: "Perplexity" },
  { id: "gemini", label: "Gemini" },
] as const;

function ImprovedGroup({ groupId, label }: { groupId: string; label: string }) {
  const items = improvedEnterprise.filter((ex) => ex.platforms?.[0] === groupId);
  if (items.length === 0) return null;
  return (
    <div className="biz-group">
      <div className="biz-group-head">
        <p className="biz-kicker">{label}</p>
        <span className="biz-group-count">
          {items.length} {items.length === 1 ? "case" : "cases"}
        </span>
      </div>
      <div className="biz-grid">
        {items.map((ex) => (
          <GlassCard key={ex.title} ex={ex} />
        ))}
      </div>
    </div>
  );
}

const toc = [
  { href: "#created", label: "Part 1 · New" },
  { href: "#improved", label: "Part 2 · Improved" },
  { href: "#departments", label: "Departments" },
  { href: "#industries", label: "Industries" },
  { href: "#combos", label: "Part 3 · Combos" },
  { href: "#new-categories", label: "Part 4 · Categories" },
  { href: "#stats", label: "Part 5 · Stats" },
  { href: "#chinese", label: "Chinese" },
];

export default function BusinessesPage() {
  const glance = keyStats.slice(0, 3);
  const chineseIds = ["kimi", "deepseek", "glm", "minimax", "qwen"];

  return (
    <div className="home compare-page">
      <div className="biz-inner">
        <header className="home-hero">
          <h1 className="home-title">Digital businesses created &amp; improved by AI</h1>
          <p className="biz-lead">
            How ChatGPT, Claude, Gemini, Cursor, Perplexity, Microsoft Copilot—and Chinese
            platforms like Kimi, DeepSeek, GLM, MiniMax, and Qwen—are building and transforming
            businesses worldwide.
          </p>
          <div className="home-actions">
            <Link href="/picker" className="home-cta home-cta-flat">
              Find your platform
            </Link>
            <Link href="/workflows" className="home-cta home-cta-raised">
              Workflow builder
            </Link>
          </div>
        </header>

        {/* At-a-glance — teaser; full stats in Part 5 */}
        <div className="biz-grid biz-grid-3" style={{ marginTop: "2rem" }}>
          {glance.map((s) => (
            <div key={s.metric} className="biz-stat">
              <p className="biz-stat-label">{s.metric}</p>
              <p className="biz-stat-figure">{s.figure}</p>
            </div>
          ))}
        </div>

        <nav className="home-chips compare-nav" aria-label="Report sections">
          {toc.map((item) => (
            <a key={item.href} href={item.href} className="home-chip">
              {item.label}
            </a>
          ))}
        </nav>

        {/* PART 1 */}
        <section id="created" className="compare-section">
          <h2 className="home-heading">Part 1 — New digital businesses</h2>
          <p className="biz-sub-intro">
            Entirely new products, agencies, and categories powered by Western AI
            platforms—grouped by theme. Nothing is omitted.
          </p>
          {createdClusters.map((cluster) => (
            <CreatedCluster key={cluster.id} cluster={cluster} />
          ))}
        </section>

        {/* PART 2 */}
        <section id="improved" className="compare-section">
          <h2 className="home-heading">Part 2 — Existing businesses improved</h2>
          <p className="biz-sub-intro">
            Global enterprise deployments and productivity transformations, grouped by the
            platform at the core.
          </p>
          {improvedGroups.map((g) => (
            <ImprovedGroup key={g.id} groupId={g.id} label={g.label} />
          ))}
        </section>

        <section id="departments" className="compare-section">
          <h2 className="home-heading">By department / business function</h2>
          <CompareTable
            headers={["Department", "Platform(s)", "How it transforms work"]}
            rows={departmentRows.map((r) => [r.department, r.platforms, r.how])}
          />
        </section>

        <section id="industries" className="compare-section">
          <h2 className="home-heading">By industry worldwide</h2>
          <CompareTable
            minWidth="44rem"
            headers={["Industry", "Region", "Platforms", "Transformation"]}
            rows={industryRows.map((r) => [
              r.industry,
              r.region,
              r.platforms,
              r.transformation,
            ])}
          />
        </section>

        <section id="combos" className="compare-section">
          <h2 className="home-heading">Part 3 — Multi-platform combinations</h2>
          <p className="biz-sub-intro">
            Power users combine platforms instead of forcing one model to do every job.
          </p>
          <CompareTable
            headers={["Combination", "Business use case"]}
            rows={westernCombos.map((r) => [r.combination, r.useCase])}
          />
        </section>

        <section id="new-categories" className="compare-section">
          <h2 className="home-heading">Part 4 — New business categories</h2>
          <p className="biz-sub-intro">
            Categories that largely did not exist before 2023.
          </p>
          <CompareTable
            minWidth="40rem"
            headers={["New category", "Description", "Platform(s)"]}
            rows={newCategories.map((r) => [r.category, r.description, r.platforms])}
          />
        </section>

        <section id="stats" className="compare-section">
          <h2 className="home-heading">Part 5 — Key statistics</h2>
          <p className="biz-sub-intro">
            Scale signals across enterprise seats, coding, research, shopping, and local
            discovery.
          </p>
          <div className="biz-grid biz-grid-3">
            {keyStats.map((s) => (
              <div key={s.metric} className="biz-stat">
                <p className="biz-stat-label">{s.metric}</p>
                <p className="biz-stat-figure">{s.figure}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="chinese" className="compare-section">
          <h2 className="home-heading">Chinese AI platforms — created &amp; improved</h2>
          <p className="biz-sub-intro">
            Kimi, DeepSeek, GLM (Z.ai), MiniMax, and Qwen power a parallel ecosystem of
            open-weight, multimodal, and self-hosted businesses.
          </p>

          <div className="biz-chips" style={{ marginTop: "0.5rem" }}>
            {chineseIds.map((id) => {
              const p = getPlatform(id);
              if (!p) return null;
              return (
                <Link key={id} href={`/platforms/${id}`} className="biz-chip">
                  {p.name}
                </Link>
              );
            })}
          </div>

          <p className="biz-subhead">Businesses built on these platforms</p>
          <CompareTable
            minWidth="40rem"
            headers={["Business type", "Platform(s)", "Description"]}
            rows={chinaCreated.map((r) => [r.type, r.platforms, r.description])}
          />

          <p className="biz-subhead">Enterprises improved by these platforms</p>
          <CompareTable
            minWidth="40rem"
            headers={["Company / industry", "Platform", "Transformation"]}
            rows={chinaImproved.map((r) => [r.company, r.platform, r.transformation])}
          />

          <p className="biz-subhead">Chinese + Western combinations</p>
          <CompareTable
            headers={["Combination", "Use case"]}
            rows={chinaCombos.map((r) => [r.combination, r.useCase])}
          />

          <p className="biz-subhead">What most users miss on Chinese platforms</p>
          <div className="biz-grid">
            {chinaUnderused.map((item) => (
              <Link key={item.platform} href={item.href} className="biz-glass" style={{ textDecoration: "none" }}>
                <h3 className="biz-title">{item.platform}</h3>
                <p className="biz-body">{item.items}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="biz-cta">
          <h2 className="biz-cta-title">Turn these patterns into practice</h2>
          <p className="biz-cta-body">
            The businesses that win treat AI as operations—Projects, agents, Skills, GEO, and
            self-host choices—not a one-time chat.
          </p>
          <div className="biz-cta-actions">
            <Link href="/workflows" className="home-cta home-cta-flat">
              Build a workflow
            </Link>
            <Link href="/power-user" className="home-cta home-cta-raised">
              Power-user rules
            </Link>
            <Link href="/compare" className="home-cta home-cta-raised">
              Compare platforms
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
