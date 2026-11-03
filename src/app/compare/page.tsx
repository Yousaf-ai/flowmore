import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import {
  ChipNav,
  CtaBand,
  PageHero,
  PageShell,
  Section,
  SectionHeading,
} from "@/components/ui/page-shell";
import {
  chineseFeatureComparison,
  chinesePricingComparison,
  featureComparison,
  pricingComparison,
  underusedFeatures,
  westVsChina,
} from "@/content/comparison";

export const metadata: Metadata = {
  title: "Compare platforms",
  description:
    "Side-by-side comparison across Western and Chinese AI platforms—features, pricing, and what most users miss.",
};

export default function ComparePage() {
  const toc = [
    { href: "#features", label: "All features" },
    { href: "#pricing", label: "All pricing" },
    { href: "#chinese-features", label: "Chinese features" },
    { href: "#chinese-pricing", label: "Chinese pricing" },
    { href: "#west-vs-china", label: "West vs China" },
    { href: "#underused", label: "Underused features" },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow="Side by side"
        title="Compare platforms"
        description="Strengths, features, and pricing across all Flowmore platforms—Western and Chinese—so you pick the right tool, then practise taking it further."
        actions={
          <>
            <Button href="/platforms">Browse platforms</Button>
            <Button href="/sandbox" variant="secondary">
              Open sandbox
            </Button>
          </>
        }
      />

      <ChipNav items={toc} />

      <Section id="features">
        <SectionHeading title="All platforms — features" />
        <DataTable
          stickyFirst
          minWidth="48rem"
          headers={["Feature", ...featureComparison.columns]}
          rows={featureComparison.rows.map((r) => [r.feature ?? "", ...r.values])}
        />
      </Section>

      <Section id="pricing">
        <SectionHeading title="All platforms — pricing" />
        <DataTable
          stickyFirst
          minWidth="48rem"
          headers={["Tier", ...pricingComparison.columns]}
          rows={pricingComparison.rows.map((r) => [r.tier ?? "", ...r.values])}
        />
      </Section>

      <Section id="chinese-features">
        <SectionHeading
          title="Chinese platforms — features"
          description="Kimi, DeepSeek, GLM (Z.ai), MiniMax, and Qwen side by side."
        />
        <DataTable
          stickyFirst
          minWidth="40rem"
          headers={["Feature", ...chineseFeatureComparison.columns]}
          rows={chineseFeatureComparison.rows.map((r) => [r.feature ?? "", ...r.values])}
        />
      </Section>

      <Section id="chinese-pricing">
        <SectionHeading title="Chinese platforms — pricing" />
        <DataTable
          stickyFirst
          minWidth="40rem"
          headers={["Tier", ...chinesePricingComparison.columns]}
          rows={chinesePricingComparison.rows.map((r) => [r.tier ?? "", ...r.values])}
        />
      </Section>

      <Section id="west-vs-china">
        <SectionHeading
          title="Western vs Chinese"
          description="Where each ecosystem tends to lead—and the practical trade-offs."
        />
        <DataTable
          minWidth="40rem"
          headers={["Dimension", "Western leaders", "Chinese leaders", "Key difference"]}
          rows={westVsChina.map((r) => [
            r.dimension,
            r.western,
            r.chinese,
            r.difference,
          ])}
        />
      </Section>

      <Section id="underused">
        <SectionHeading
          title="What most users miss"
          description="Underused features that unlock each platform."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {underusedFeatures.map((item) => (
            <li key={item.platform}>
              <Card href={item.href} className="h-full">
                <h3 className="font-semibold tracking-[-0.02em] text-[var(--text)]">
                  {item.platform}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.items}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Practise next"
        description="Pick a platform, write a stronger prompt, and watch the quality bar move."
        actions={
          <>
            <Button href="/scenarios">Browse scenarios</Button>
            <Button href="/sandbox" variant="secondary">
              Open sandbox
            </Button>
          </>
        }
      />
      <p className="mt-6 text-center text-xs text-[var(--text-secondary)]">
        Looking for a specific stack? Start from{" "}
        <Link href="/platforms" className="text-[var(--accent)] no-underline hover:underline">
          platforms
        </Link>
        .
      </p>
    </PageShell>
  );
}
