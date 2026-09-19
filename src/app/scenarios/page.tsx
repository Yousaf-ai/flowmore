import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { getPlatform } from "@/content/platforms";
import { scenarios } from "@/content/scenarios";

export const metadata: Metadata = {
  title: "Scenarios",
  description: "Practise real prompts for work, study, and life.",
};

export default function ScenariosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-display text-[var(--text)]">Scenarios</h1>
        <p className="text-body-lg mt-4">
          Pick a real task. Write prompts, watch the quality bar, and improve until the prompt
          earns the platform’s full leverage.
        </p>
      </header>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {scenarios.map((s) => {
          const platform = s.platformId !== "any" ? getPlatform(s.platformId) : null;
          return (
            <li key={s.id}>
              <Card href={`/scenarios/${s.id}`} className="h-full">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[var(--text-secondary)]">
                  <span>{s.category}</span>
                  <span aria-hidden>·</span>
                  <span>{platform?.name ?? "Any platform"}</span>
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
    </div>
  );
}
