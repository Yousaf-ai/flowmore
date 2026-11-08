import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  PageHero,
  PageShell,
  Section,
  SectionHeading,
} from "@/components/ui/page-shell";
import { getPlatform, platformsByEcosystem } from "@/content/platforms";
import { scenarios } from "@/content/scenarios";

export const metadata: Metadata = {
  title: "Prompt Quality Score",
  description:
    "Write a prompt for a real task, get a live quality score, and improve it with ↑ tips—across every Flowmore platform.",
};

export default function PracticeHubPage() {
  const { western, chinese } = platformsByEcosystem();
  const groups = [
    { label: "Western platforms", items: western },
    { label: "Chinese platforms", items: chinese },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow="Prompt Quality Score"
        title="Practise prompts that score higher"
        description="Pick a task → write a prompt → see the quality bar fill → tap ↑ for tips and a stronger rewrite. Works across every platform on Flowmore."
        actions={
          <>
            <Button href="/sandbox">Open free sandbox</Button>
            <Button href="/scenarios" variant="secondary">
              All scenarios
            </Button>
          </>
        }
      />

      <Section>
        <SectionHeading title="How it works" />
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { n: "1", t: "Get a task", d: "Choose sandbox or a scenario with a real situation." },
            {
              n: "2",
              t: "Write a prompt",
              d: "Send it. The quality bar scores clarity, context, goal, format, and platform leverage.",
            },
            {
              n: "3",
              t: "Improve with ↑",
              d: "Open tips + an improved rewrite, then resubmit and watch the score move.",
            },
          ].map((s) => (
            <li key={s.n} className="biz-glass !p-5">
              <p className="biz-kicker">Step {s.n}</p>
              <h3 className="biz-title mt-2">{s.t}</h3>
              <p className="biz-body mt-2">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {groups.map((group) => (
        <Section key={group.label}>
          <SectionHeading title={`Practise · ${group.label}`} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((platform) => {
              const list = scenarios.filter((s) => s.platformId === platform.id).slice(0, 2);
              return (
                <li key={platform.id}>
                  <Card className="h-full">
                    <h3 className="biz-title" style={{ fontSize: "1.05rem" }}>
                      {platform.name}
                    </h3>
                    <p className="biz-body mt-1">{platform.tagline}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button
                        href={`/sandbox?platform=${platform.id}`}
                        className="!px-4 !py-2 text-xs"
                      >
                        Sandbox
                      </Button>
                      {list.map((s) => (
                        <Button
                          key={s.id}
                          href={`/scenarios/${s.id}`}
                          variant="secondary"
                          className="!px-4 !py-2 text-xs"
                        >
                          {s.title}
                        </Button>
                      ))}
                      {list.length === 0 && (
                        <Button
                          href={`/platforms/${platform.id}`}
                          variant="secondary"
                          className="!px-4 !py-2 text-xs"
                        >
                          Capability map
                        </Button>
                      )}
                    </div>
                  </Card>
                </li>
              );
            })}
          </ul>
        </Section>
      ))}

      <Section>
        <SectionHeading title="Any-platform starters" />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {scenarios
            .filter((s) => s.platformId === "any")
            .map((s) => {
              const p = s.platformId !== "any" ? getPlatform(s.platformId) : null;
              return (
                <li key={s.id}>
                  <Card href={`/scenarios/${s.id}`}>
                    <p className="biz-kicker">
                      {s.category}
                      {p ? ` · ${p.name}` : " · Any platform"}
                    </p>
                    <h3 className="biz-title mt-2" style={{ fontSize: "1.05rem" }}>
                      {s.title}
                    </h3>
                    <p className="biz-body mt-1">{s.description}</p>
                  </Card>
                </li>
              );
            })}
        </ul>
      </Section>
    </PageShell>
  );
}
