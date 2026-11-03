import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import {
  ChipNav,
  PageHero,
  PageShell,
  Section,
  SectionHeading,
} from "@/components/ui/page-shell";
import { getPlatform, isChinesePlatform, platforms } from "@/content/platforms";
import { scenariosForPlatform } from "@/content/scenarios";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) return { title: "Platform" };
  return {
    title: platform.vendor ? `${platform.name} by ${platform.vendor}` : platform.name,
    description: platform.tagline,
  };
}

export default async function PlatformDetailPage({ params }: Props) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) notFound();

  const related = scenariosForPlatform(platform.id).slice(0, 3);
  const tech = platform.technical;
  const ecosystem = isChinesePlatform(platform.id) ? "Chinese ecosystem" : "Western ecosystem";

  const toc = [
    tech ? { href: "#technical", label: "Technical" } : null,
    { href: "#features", label: "Key features" },
    { href: "#miss", label: "Most users miss" },
    platform.pricing?.length ? { href: "#pricing", label: "Pricing" } : null,
    platform.useCases?.length ? { href: "#use-cases", label: "Use cases" } : null,
    platform.integrations?.length ? { href: "#integrations", label: "Integrations" } : null,
    platform.security?.length ? { href: "#security", label: "Security" } : null,
    platform.strengths?.length || platform.weaknesses?.length
      ? { href: "#strengths", label: "Strengths" }
      : null,
    { href: "#practise", label: "Practise" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <PageShell>
      <PageHero
        eyebrow={`${platform.vendor ? `${platform.vendor} · ` : ""}${ecosystem}`}
        title={platform.name}
        description={
          <>
            <p className="font-medium tracking-[-0.02em] text-[var(--text)]">{platform.tagline}</p>
            <p className="mt-3">{platform.summary}</p>
          </>
        }
        actions={
          <>
            <Button href={`/sandbox?platform=${platform.id}`}>
              Sandbox for {platform.name}
            </Button>
            <Button href="/scenarios" variant="secondary">
              Browse scenarios
            </Button>
            <Button href="/compare" variant="secondary">
              Compare
            </Button>
          </>
        }
      />

      <ChipNav items={toc} />

      {tech && (
        <Section id="technical">
          <SectionHeading title="Technical capabilities" />
          <div className="mt-8 space-y-8">
            {tech.models && tech.models.length > 0 && (
              <div>
                <p className="section-label">Models</p>
                <ul className="mt-3 max-w-3xl space-y-3">
                  {tech.models.map((line) => (
                    <li
                      key={line}
                      className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm leading-relaxed text-[var(--text)] shadow-[var(--shadow)]"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tech.multimodal && (
              <div>
                <p className="section-label">Multimodal support</p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text)]">
                  {tech.multimodal}
                </p>
              </div>
            )}
            {tech.architecture && (
              <div>
                <p className="section-label">Architecture</p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text)]">
                  {tech.architecture}
                </p>
              </div>
            )}
          </div>
        </Section>
      )}

      <Section id="features">
        <SectionHeading
          title="Key features"
          description="Features that unlock real advantage—not a changelog dump."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {platform.capabilities.map((cap) => (
            <li key={cap.title}>
              <Card className="h-full">
                <h3 className="font-semibold tracking-[-0.02em] text-[var(--text)]">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {cap.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="miss">
        <SectionHeading title="What most users miss" />
        <ul className="mt-6 max-w-2xl space-y-3">
          {platform.mostUsersMiss.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm leading-relaxed text-[var(--text)] shadow-[var(--shadow)] before:mt-1.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {platform.pricing && platform.pricing.length > 0 && (
        <Section id="pricing">
          <SectionHeading title="Pricing tiers" description={platform.pricingNote} />
          <DataTable
            headers={["Plan", "Price", "Key inclusions"]}
            rows={platform.pricing.map((row) => [row.plan, row.price, row.inclusions])}
            minWidth="36rem"
          />
        </Section>
      )}

      {platform.useCases && platform.useCases.length > 0 && (
        <Section id="use-cases">
          <SectionHeading title="Use-case breakdown" description={platform.useCasesNote} />
          <DataTable
            headers={["Use case", "How it serves it"]}
            rows={platform.useCases.map((row) => [row.useCase, row.how])}
            minWidth="32rem"
          />
        </Section>
      )}

      {platform.integrations && platform.integrations.length > 0 && (
        <Section id="integrations">
          <SectionHeading title="Integrations & ecosystem" />
          <ul className="mt-6 max-w-3xl space-y-3">
            {platform.integrations.map((item) => (
              <li
                key={item}
                className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm leading-relaxed text-[var(--text)] shadow-[var(--shadow)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {platform.security && platform.security.length > 0 && (
        <Section id="security">
          <SectionHeading title="Security & privacy" />
          <ul className="mt-6 max-w-3xl space-y-3">
            {platform.security.map((item) => (
              <li
                key={item}
                className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm leading-relaxed text-[var(--text)] shadow-[var(--shadow)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {(platform.strengths?.length || platform.weaknesses?.length) && (
        <Section id="strengths">
          <SectionHeading title="Strengths & weaknesses" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {platform.strengths && platform.strengths.length > 0 && (
              <Card>
                <h3 className="font-semibold tracking-[-0.02em] text-[var(--text)]">Strengths</h3>
                <ul className="mt-4 space-y-2">
                  {platform.strengths.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-[var(--text-secondary)] before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:content-['']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            )}
            {platform.weaknesses && platform.weaknesses.length > 0 && (
              <Card>
                <h3 className="font-semibold tracking-[-0.02em] text-[var(--text)]">Weaknesses</h3>
                <ul className="mt-4 space-y-2">
                  {platform.weaknesses.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-[var(--text-secondary)] before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[var(--text-secondary)] before:content-['']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>
        </Section>
      )}

      <Section id="practise">
        <SectionHeading title="Practise next" />
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {related.map((s) => (
            <li key={s.id}>
              <Card href={`/scenarios/${s.id}`} className="h-full">
                <p className="section-label">{s.category}</p>
                <h3 className="mt-2 font-semibold tracking-[-0.02em] text-[var(--text)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {s.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
        {related.length === 0 && (
          <div className="mt-6">
            <Button href="/sandbox">Open free sandbox</Button>
          </div>
        )}
      </Section>
    </PageShell>
  );
}
