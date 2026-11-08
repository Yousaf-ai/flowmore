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

      <ul className="home-block grid gap-4">
        {powerUserRules.map((rule) => (
          <li key={rule.id}>
            <Card className="!overflow-hidden !p-0">
              <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
                <div className="fm-well !rounded-none p-5 md:border-b-0" style={{ boxShadow: "none" }}>
                  <p className="biz-kicker">Situation</p>
                  <p className="biz-title mt-2" style={{ fontSize: "1.05rem" }}>
                    {rule.situation}
                  </p>
                </div>
                <div className="p-5">
                  <p className="biz-kicker">Use</p>
                  <p className="biz-title mt-2" style={{ fontSize: "1.05rem" }}>
                    {rule.use}
                  </p>
                  <p className="biz-body mt-2">{rule.why}</p>
                  {rule.avoid && (
                    <p className="biz-body mt-3">
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
