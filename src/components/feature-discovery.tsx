"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { platforms } from "@/content/platforms";
import { cn } from "@/lib/cn";

export function FeatureDiscovery() {
  const [platformId, setPlatformId] = useState(platforms[0]?.id ?? "chatgpt");
  const [index, setIndex] = useState(0);

  const platform = useMemo(
    () => platforms.find((p) => p.id === platformId) ?? platforms[0],
    [platformId],
  );

  const steps = useMemo(() => {
    const misses = platform.mostUsersMiss.map((text, i) => ({
      kind: "miss" as const,
      title: `Hidden move ${i + 1}`,
      body: text,
    }));
    const caps = platform.capabilities.slice(0, 4).map((c) => ({
      kind: "feature" as const,
      title: c.title,
      body: c.description,
    }));
    // Interleave: miss, feature, miss, feature...
    const out: { kind: "miss" | "feature"; title: string; body: string }[] = [];
    const max = Math.max(misses.length, caps.length);
    for (let i = 0; i < max; i++) {
      if (misses[i]) out.push(misses[i]);
      if (caps[i]) out.push(caps[i]);
    }
    return out.slice(0, 8);
  }, [platform]);

  const step = steps[index] ?? steps[0];
  const atEnd = index >= steps.length - 1;

  function selectPlatform(id: string) {
    setPlatformId(id);
    setIndex(0);
  }

  return (
    <div className="space-y-8">
      <div>
        <label htmlFor="discover-platform" className="text-sm font-medium text-[var(--text-secondary)]">
          Platform
        </label>
        <select
          id="discover-platform"
          value={platformId}
          onChange={(e) => selectPlatform(e.target.value)}
          className="mt-2 h-11 w-full max-w-md rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 text-[var(--text)] shadow-[var(--shadow)]"
        >
          {platforms.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
              {p.vendor ? ` · ${p.vendor}` : ""}
            </option>
          ))}
        </select>
      </div>

      <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--accent)]">
            {step?.kind === "miss" ? "Most users miss this" : "Key feature"}
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            {index + 1} / {steps.length}
          </p>
        </div>
        <h2 className="mt-3 text-title text-[var(--text)]">{step?.title}</h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">{step?.body}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            type="button"
            variant="secondary"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
          >
            Back
          </Button>
          {!atEnd ? (
            <Button type="button" onClick={() => setIndex((i) => i + 1)}>
              Next discovery
            </Button>
          ) : (
            <>
              <Button href={`/sandbox?platform=${platform.id}`}>Practise on {platform.name}</Button>
              <Button href={`/platforms/${platform.id}`} variant="secondary">
                Full platform guide
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2" aria-label="Step indicators">
        {steps.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to step ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors duration-200",
              i === index ? "bg-[var(--accent)]" : "bg-[var(--surface-2)] hover:bg-[var(--text-secondary)]",
            )}
          />
        ))}
      </div>
    </div>
  );
}
