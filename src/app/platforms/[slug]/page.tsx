import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getPlatform, platforms } from "@/content/platforms";
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
    title: platform.name,
    description: platform.tagline,
  };
}

export default async function PlatformDetailPage({ params }: Props) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) notFound();

  const related = scenariosForPlatform(platform.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-[var(--accent)]">Platform</p>
        <h1 className="mt-2 text-display text-[var(--text)]">{platform.name}</h1>
        <p className="text-body-lg mt-4">{platform.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`/sandbox?platform=${platform.id}`}>Sandbox for {platform.name}</Button>
          <Button href="/scenarios" variant="secondary">
            Browse scenarios
          </Button>
        </div>
      </header>

      <section className="mt-16">
        <h2 className="text-title text-[var(--text)]">Capability map</h2>
        <p className="mt-2 max-w-xl text-sm text-[var(--text-secondary)]">
          Features that unlock real advantage—not a changelog.
        </p>
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
      </section>

      <section className="mt-16">
        <h2 className="text-title text-[var(--text)]">What most users miss</h2>
        <ul className="mt-6 max-w-2xl space-y-3">
          {platform.mostUsersMiss.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] shadow-[var(--shadow)] before:mt-1.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-title text-[var(--text)]">Practise next</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {related.map((s) => (
            <li key={s.id}>
              <Card href={`/scenarios/${s.id}`} className="h-full">
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-secondary)]">
                  {s.category}
                </p>
                <h3 className="mt-2 font-semibold tracking-[-0.02em] text-[var(--text)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{s.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
