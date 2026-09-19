import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { platforms } from "@/content/platforms";

export const metadata: Metadata = {
  title: "Platforms",
  description: "Pick an AI platform and see how to take it further.",
};

export default function PlatformsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="text-display text-[var(--text)]">Platforms</h1>
        <p className="text-body-lg mt-4">
          Choose the tool you already use. Learn what most people miss, then practise prompts that
          unlock it.
        </p>
      </header>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {platforms.map((p) => (
          <li key={p.id}>
            <Card href={`/platforms/${p.id}`} className="h-full">
              <h2 className="text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">
                {p.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {p.tagline}
              </p>
              <p className="mt-4 text-sm font-medium text-[var(--accent)]">Open capability map →</p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
