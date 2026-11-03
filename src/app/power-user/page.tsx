import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero, PageShell } from "@/components/ui/page-shell";
import { powerUserRules } from "@/content/power-user";

export const metadata: Metadata = {
  title: "Cross-Platform Power User",
  description: "When to use which AI platform for maximum efficiency.",
};

export default function PowerUserPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Decision rules"
        title="Cross-Platform Power User"
        description="Maximum efficiency means picking the right tool for the job—and knowing when to chain specialists instead of forcing one model to do everything."
        actions={
          <>
            <Button href="/picker">Take the Platform Picker</Button>
            <Button href="/compare" variant="secondary">
              Full compare tables
            </Button>
            <Button href="/businesses" variant="secondary">
              Businesses report
            </Button>
          </>
        }
      />

      <ul className="mt-12 grid gap-4">
        {powerUserRules.map((rule) => (
          <li key={rule.id}>
            <Card className="!overflow-hidden !p-0">
              <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
                <div className="border-b border-[var(--border)] bg-[var(--surface-2)] p-5 md:border-b-0 md:border-r">
                  <p className="section-label">Situation</p>
                  <p className="mt-2 font-semibold tracking-[-0.02em] text-[var(--text)]">
                    {rule.situation}
                  </p>
                </div>
                <div className="p-5">
                  <p className="section-label !text-[var(--accent)]">Use</p>
                  <p className="mt-2 font-semibold tracking-[-0.02em] text-[var(--text)]">
                    {rule.use}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {rule.why}
                  </p>
                  {rule.avoid && (
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                      <span className="font-medium text-[var(--text)]">Avoid: </span>
                      {rule.avoid}
                    </p>
                  )}
                  <div className="mt-4">
                    <Button
                      href={`/platforms/${rule.platformId}`}
                      variant="secondary"
                      className="!px-4 !py-2 text-xs"
                    >
                      Open guide
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
