import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero, PageShell, Section, SectionHeading } from "@/components/ui/page-shell";
import { platformsByEcosystem } from "@/content/platforms";

export const metadata: Metadata = {
  title: "Platforms",
  description:
    "Capability maps for ChatGPT, Claude, Gemini, Cursor, Perplexity, Copilot, Kimi, DeepSeek, GLM, MiniMax, and Qwen.",
};

function PlatformGrid({
  items,
}: {
  items: ReturnType<typeof platformsByEcosystem>["western"];
}) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <li key={p.id}>
          <Card href={`/platforms/${p.id}`} className="h-full">
            {p.vendor && <p className="section-label">{p.vendor}</p>}
            <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">
              {p.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{p.tagline}</p>
            <p className="mt-5 text-sm font-medium text-[var(--accent)]">Open capability map →</p>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default function PlatformsPage() {
  const { western, chinese } = platformsByEcosystem();

  return (
    <PageShell>
      <PageHero
        eyebrow="11 platforms"
        title="Platforms"
        description="Choose the tool you already use. Learn what most people miss, then practise prompts that unlock it—across Western and Chinese AI stacks."
        actions={
          <>
            <Button href="/compare">Compare all</Button>
            <Button href="/picker" variant="secondary">
              Platform picker
            </Button>
          </>
        }
      />

      <Section>
        <SectionHeading
          title="Western platforms"
          description="ChatGPT, Claude, Gemini, Cursor, Perplexity, and Microsoft Copilot."
        />
        <PlatformGrid items={western} />
      </Section>

      <Section>
        <SectionHeading
          title="Chinese platforms"
          description="Kimi, DeepSeek, GLM / Z.ai, MiniMax, and Qwen—open-weight, multimodal, and agent-heavy stacks."
        />
        <PlatformGrid items={chinese} />
      </Section>
    </PageShell>
  );
}
