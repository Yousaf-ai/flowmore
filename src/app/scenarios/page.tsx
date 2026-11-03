import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { PageHero, PageShell } from "@/components/ui/page-shell";
import { getPlatform } from "@/content/platforms";
import { scenarios } from "@/content/scenarios";

export const metadata: Metadata = {
  title: "Scenarios",
  description: "Practise real prompts for work, study, and life.",
};

export default function ScenariosPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Real tasks"
        title="Scenarios"
        description="Pick a real task. Write prompts, watch the quality bar, and improve until the prompt earns the platform’s full leverage."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {scenarios.map((s) => {
          const platform = s.platformId !== "any" ? getPlatform(s.platformId) : null;
          return (
            <li key={s.id}>
              <Card href={`/scenarios/${s.id}`} className="h-full">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="section-label">{s.category}</span>
                  <span className="text-xs text-[var(--text-secondary)]" aria-hidden>
                    ·
                  </span>
                  <span className="text-xs font-medium text-[var(--text-secondary)]">
                    {platform?.name ?? "Any platform"}
                  </span>
                </div>
                <h2 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {s.description}
                </p>
              </Card>
            </li>
          );
        })}
      </ul>
    </PageShell>
  );
}
