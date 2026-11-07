import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DataTable, StatGrid } from "@/components/ui/data-table";
import {
  ChipNav,
  CtaBand,
  PageHero,
  PageShell,
  Section,
  SectionHeading,
} from "@/components/ui/page-shell";
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
import { getPlatform, platforms } from "@/content/platforms";

export const metadata: Metadata = {
  title: "AI digital businesses — complete report",
  description:
    "How ChatGPT, Claude, Gemini, Cursor, Perplexity, Microsoft Copilot, and Chinese AI platforms create and transform businesses worldwide.",
};

function PlatformChips({ ids }: { ids?: string[] }) {
  if (!ids?.length) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {ids.map((id) => {
        const p = getPlatform(id);
        if (!p) return null;
        return (
          <Link
            key={id}
            href={`/platforms/${id}`}
            className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1 text-xs font-medium text-[var(--text)] no-underline transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
          >
            {p.name}
          </Link>
        );
      })}
    </div>
  );
}

function ExampleCard({ ex }: { ex: BusinessExample }) {
  return (
    <Card className="h-full">
      <h4 className="font-semibold tracking-[-0.02em] text-[var(--text)]">{ex.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{ex.body}</p>
      <PlatformChips ids={ex.platforms} />
    </Card>
  );
}

/** Themed clusters for Part 1 — keeps every subsection, groups for scannability */
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
    <div>
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">
        {cluster.label}
      </h3>
      <div className="mt-5 space-y-10">
        {sections.map((section) => (
          <div key={section.id}>
            <p className="section-label">{section.heading}</p>
            {section.intro && (
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
                {section.intro}
              </p>
            )}
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {section.examples.map((ex) => (
                <li key={ex.title}>
                  <ExampleCard ex={ex} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Part 2 — group enterprise examples by primary platform */
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
    <div>
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">
        {label}{" "}
        <span className="ml-1 text-sm font-normal text-[var(--text-secondary)]">
          · {items.length} {items.length === 1 ? "case" : "cases"}
        </span>
      </h3>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {items.map((ex) => (
          <li key={ex.title}>
            <ExampleCard ex={ex} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BusinessesPage() {
  const glance = keyStats.slice(0, 3);

  const toc = [
    { href: "#created", label: "Part 1 · New businesses" },
    { href: "#improved", label: "Part 2 · Improved" },
    { href: "#departments", label: "By department" },
    { href: "#industries", label: "By industry" },
    { href: "#combos", label: "Part 3 · Combos" },
    { href: "#new-categories", label: "Part 4 · Categories" },
    { href: "#stats", label: "Part 5 · Stats" },
    { href: "#chinese", label: "Chinese platforms" },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow="Flowmore report"
        title="Digital businesses created & improved by AI"
        description="How ChatGPT, Claude, Gemini, Cursor, Perplexity, Microsoft Copilot—and Chinese platforms like Kimi, DeepSeek, GLM, MiniMax, and Qwen—are building and transforming businesses worldwide."
        actions={
          <>
            <Button href="/picker">Find your platform</Button>
            <Button href="/workflows" variant="secondary">
              Workflow builder
            </Button>
            <Button href="/practice" variant="secondary">
              Practise prompts
            </Button>
          </>
        }
      />

      {/* At-a-glance — teaser; full stats live in Part 5 */}
      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {glance.map((s) => (
          <div
            key={s.metric}
            className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-4 py-4 shadow-[var(--shadow)]"
          >
            <p className="section-label">{s.metric}</p>
            <p className="mt-2 text-sm font-semibold leading-snug tracking-[-0.02em] text-[var(--text)]">
              {s.figure}
            </p>
          </div>
        ))}
      </div>

      <ChipNav items={toc} label="Report sections" />

      {/* PART 1 */}
      <Section id="created">
        <SectionHeading
          title="Part 1 — New digital businesses"
          description="Entirely new products, agencies, and categories powered by Western AI platforms—grouped by theme. Nothing is omitted."
        />
        <div className="mt-10 space-y-14">
          {createdClusters.map((cluster) => (
            <CreatedCluster key={cluster.id} cluster={cluster} />
          ))}
        </div>
      </Section>

      {/* PART 2 */}
      <Section id="improved">
        <SectionHeading
          title="Part 2 — Existing businesses improved"
          description="Global enterprise deployments and productivity transformations, grouped by the platform at the core."
        />
        <div className="mt-10 space-y-12">
          {improvedGroups.map((g) => (
            <ImprovedGroup key={g.id} groupId={g.id} label={g.label} />
          ))}
        </div>
      </Section>

      <Section id="departments">
        <SectionHeading title="By department / business function" />
        <DataTable
          headers={["Department", "Platform(s)", "How it transforms work"]}
          rows={departmentRows.map((r) => [r.department, r.platforms, r.how])}
        />
      </Section>

      <Section id="industries">
        <SectionHeading title="By industry worldwide" />
        <DataTable
          headers={["Industry", "Region", "Platforms", "Transformation"]}
          rows={industryRows.map((r) => [
            r.industry,
            r.region,
            r.platforms,
            r.transformation,
          ])}
          minWidth="44rem"
        />
      </Section>

      <Section id="combos">
        <SectionHeading
          title="Part 3 — Multi-platform combinations"
          description="Power users combine platforms instead of forcing one model to do every job."
        />
        <DataTable
          headers={["Combination", "Business use case"]}
          rows={westernCombos.map((r) => [r.combination, r.useCase])}
        />
      </Section>

      <Section id="new-categories">
        <SectionHeading
          title="Part 4 — New business categories"
          description="Categories that largely did not exist before 2023."
        />
        <DataTable
          headers={["New category", "Description", "Platform(s)"]}
          rows={newCategories.map((r) => [r.category, r.description, r.platforms])}
          minWidth="40rem"
        />
      </Section>

      <Section id="stats">
        <SectionHeading
          title="Part 5 — Key statistics"
          description="Scale signals across enterprise seats, coding, research, shopping, and local discovery."
        />
        <StatGrid items={keyStats} />
      </Section>

      <Section id="chinese">
        <SectionHeading
          title="Chinese AI platforms — created & improved"
          description="Kimi, DeepSeek, GLM (Z.ai), MiniMax, and Qwen power a parallel ecosystem of open-weight, multimodal, and self-hosted businesses."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {platforms
            .filter((p) =>
              ["kimi", "deepseek", "glm", "minimax", "qwen"].includes(p.id),
            )
            .map((p) => (
              <Link
                key={p.id}
                href={`/platforms/${p.id}`}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1 text-xs font-medium text-[var(--text)] no-underline transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
              >
                {p.name}
              </Link>
            ))}
        </div>

        <h3 className="mt-10 text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">
          Businesses built on these platforms
        </h3>
        <DataTable
          headers={["Business type", "Platform(s)", "Description"]}
          rows={chinaCreated.map((r) => [r.type, r.platforms, r.description])}
          minWidth="40rem"
        />

        <h3 className="mt-12 text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">
          Enterprises improved by these platforms
        </h3>
        <DataTable
          headers={["Company / industry", "Platform", "Transformation"]}
          rows={chinaImproved.map((r) => [r.company, r.platform, r.transformation])}
          minWidth="40rem"
        />

        <h3 className="mt-12 text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">
          Chinese + Western combinations
        </h3>
        <DataTable
          headers={["Combination", "Use case"]}
          rows={chinaCombos.map((r) => [r.combination, r.useCase])}
        />

        <h3 className="mt-12 text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">
          What most users miss on Chinese platforms
        </h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {chinaUnderused.map((item) => (
            <li key={item.platform}>
              <Card href={item.href} className="h-full">
                <h4 className="font-semibold tracking-[-0.02em] text-[var(--text)]">
                  {item.platform}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.items}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Turn these patterns into practice"
        description="The businesses that win treat AI as operations—Projects, agents, Skills, GEO, and self-host choices—not a one-time chat."
        actions={
          <>
            <Button href="/workflows">Build a workflow</Button>
            <Button href="/power-user" variant="secondary">
              Power-user rules
            </Button>
            <Button href="/compare" variant="secondary">
              Compare platforms
            </Button>
          </>
        }
      />
    </PageShell>
  );
}
