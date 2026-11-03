import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero, PageShell } from "@/components/ui/page-shell";
import { getPlatform } from "@/content/platforms";
import { workflows } from "@/content/workflows";

export const metadata: Metadata = {
  title: "Workflow Builder",
  description: "Chain AI platform features into end-to-end workflows.",
};

export default function WorkflowsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Feature chains"
        title="Workflow Builder"
        description="Don’t stop at one clever prompt. Chain features—Projects → Deep Research → Canvas—into a complete workflow, then practise the first prompt."
        actions={
          <>
            <Button href="/practice">Score a prompt</Button>
            <Button href="/power-user" variant="secondary">
              Power-user rules
            </Button>
          </>
        }
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {workflows.map((w) => {
          const platform = getPlatform(w.platformId);
          return (
            <li key={w.id}>
              <Card href={`/workflows/${w.id}`} className="h-full">
                <p className="section-label">
                  {platform?.name ?? w.platformId} · {w.steps.length} steps
                </p>
                <h2 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">
                  {w.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {w.description}
                </p>
                <p className="mt-5 text-sm font-medium text-[var(--accent)]">Open workflow →</p>
              </Card>
            </li>
          );
        })}
      </ul>
    </PageShell>
  );
}
