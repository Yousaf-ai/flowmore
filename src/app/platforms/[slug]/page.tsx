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
            <p className="biz-title" style={{ fontSize: "1.05rem", margin: 0 }}>
              {platform.tagline}
            </p>
            <p className="biz-body" style={{ marginTop: "0.75rem" }}>
              {platform.summary}
            </p>
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
                <p className="biz-kicker">Models</p>
                <ul className="mt-3 max-w-3xl space-y-3">
                  {tech.models.map((line) => (
                    <li key={line} className="fm-well px-4 py-3 text-sm leading-relaxed text-[var(--text)]">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tech.multimodal && (
              <div>
                <p className="biz-kicker">Multimodal support</p>
                <p className="biz-body mt-3 max-w-3xl">{tech.multimodal}</p>
              </div>
            )}
            {tech.architecture && (
              <div>
                <p className="biz-kicker">Architecture</p>
                <p className="biz-body mt-3 max-w-3xl">{tech.architecture}</p>
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
                <h3 className="biz-title" style={{ fontSize: "1.05rem" }}>{cap.title}</h3>
                <p className="biz-body mt-2">{cap.description}</p>
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
              className="fm-well flex gap-3 px-4 py-3 text-sm leading-relaxed text-[var(--text)] before:mt-1.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:content-['']"
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
              <li key={item} className="fm-well px-4 py-3 text-sm leading-relaxed text-[var(--text)]">
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
              <li key={item} className="fm-well px-4 py-3 text-sm leading-relaxed text-[var(--text)]">
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
                <h3 className="biz-title" style={{ fontSize: "1.05rem" }}>Strengths</h3>
                <ul className="mt-4 space-y-2">
                  {platform.strengths.map((item) => (
                    <li
                      key={item}
                      className="biz-body flex gap-2 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:content-['']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            )}
            {platform.weaknesses && platform.weaknesses.length > 0 && (
              <Card>
                <h3 className="biz-title" style={{ fontSize: "1.05rem" }}>Weaknesses</h3>
                <ul className="mt-4 space-y-2">
                  {platform.weaknesses.map((item) => (
                    <li
                      key={item}
                      className="biz-body flex gap-2 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[var(--text-secondary)] before:content-['']"
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
                <p className="biz-kicker">{s.category}</p>
                <h3 className="biz-title mt-2" style={{ fontSize: "1.05rem" }}>
                  {s.title}
                </h3>
                <p className="biz-body mt-2">{s.description}</p>
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
