import {
  ArrowRight,
  Briefcase,
  Compass,
  GitBranch,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatGrid } from "@/components/ui/data-table";
import { SectionHeading } from "@/components/ui/page-shell";
import { keyStats } from "@/content/businesses";
import { platformsByEcosystem } from "@/content/platforms";

export default function HomePage() {
  const { western, chinese } = platformsByEcosystem();
  const highlightStats = keyStats.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pb-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[var(--accent)]">flowmore</p>
            <h1 className="mt-3 text-display text-[var(--text)]">
              Take any AI platform further
            </h1>
            <p className="text-body-lg mt-5 max-w-xl">
              Millions of people use AI tools at a fraction of their power. flowmore maps what
              each platform can really do—Western and Chinese—then lets you practise prompts and
              workflows until you use it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/picker">
                Find your platform
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/practice" variant="secondary">
                Score a prompt
              </Button>
              <Button href="/businesses" variant="secondary">
                Businesses report
              </Button>
            </div>
          </div>

          <div>
            <p className="section-label">Western platforms</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {western.map((p) => (
                <li key={p.id}>
                  <Card href={`/platforms/${p.id}`} className="h-full !p-5">
                    {p.vendor && (
                      <p className="text-xs text-[var(--text-secondary)]">{p.vendor}</p>
                    )}
                    <h2 className="mt-1 text-base font-semibold tracking-[-0.02em] text-[var(--text)]">
                      {p.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {p.tagline}
                    </p>
                  </Card>
                </li>
              ))}
            </ul>
            <p className="section-label mt-10">Chinese platforms</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {chinese.map((p) => (
                <li key={p.id}>
                  <Card href={`/platforms/${p.id}`} className="h-full !p-5">
                    {p.vendor && (
                      <p className="text-xs text-[var(--text-secondary)]">{p.vendor}</p>
                    )}
                    <h2 className="mt-1 text-base font-semibold tracking-[-0.02em] text-[var(--text)]">
                      {p.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {p.tagline}
                    </p>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)]/80 py-20 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="Five ways to go further"
            description="Not a course—interactive tools that make platform power obvious."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/practice",
                icon: Sparkles,
                title: "Prompt Quality Score",
                body: "Task → prompt → live score → ↑ improve.",
              },
              {
                href: "/discover",
                icon: Compass,
                title: "Hidden Feature Discovery",
                body: "Walk through features most users never find.",
              },
              {
                href: "/picker",
                icon: Target,
                title: "Platform Picker",
                body: "Quiz that matches a platform to your workflow.",
              },
              {
                href: "/workflows",
                icon: Workflow,
                title: "Workflow Builder",
                body: "Chain features into end-to-end research and shipping flows.",
              },
              {
                href: "/power-user",
                icon: GitBranch,
                title: "Cross-Platform Power User",
                body: "When to use which tool—and when to mix them.",
              },
              {
                href: "/businesses",
                icon: Briefcase,
                title: "AI digital businesses",
                body: "Complete report: businesses created and transformed by these platforms worldwide.",
              },
            ].map((item) => (
              <li key={item.href}>
                <Card href={item.href} className="h-full">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-semibold tracking-[-0.02em] text-[var(--text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.body}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              title="What AI is already changing"
              description="Snapshot metrics from the Flowmore businesses report—enterprise seats, coding output, shopping, and discovery."
            />
            <Button href="/businesses" variant="secondary" className="shrink-0 self-start sm:self-auto">
              Full report
            </Button>
          </div>
          <StatGrid items={highlightStats} />
        </div>
      </section>

      <section className="border-t border-[var(--border)] py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-title text-[var(--text)]">Or jump straight in</h2>
          <p className="mx-auto mt-3 max-w-lg text-[var(--text-secondary)]">
            Browse all platforms, compare them side by side, or open the free sandbox.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/platforms">All platforms</Button>
            <Button href="/compare" variant="secondary">
              Compare
            </Button>
            <Button href="/sandbox" variant="secondary">
              Sandbox
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
