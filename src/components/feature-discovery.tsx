"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlatformChipPicker } from "@/components/ui/platform-select";
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
  const progress = steps.length ? ((index + 1) / steps.length) * 100 : 0;

  function selectPlatform(id: string) {
    setPlatformId(id);
    setIndex(0);
  }

  return (
    <div className="space-y-8">
      <PlatformChipPicker value={platformId} onChange={selectPlatform} />

      <div className="fm-panel overflow-hidden">
        <div className="px-6 pt-5 sm:px-8 sm:pt-7">
          <div className="fm-track">
            <div className="fm-track-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="biz-kicker">
              {step?.kind === "miss" ? "Most users miss this" : "Key feature"} · {platform.name}
            </p>
            <p className="text-xs tabular-nums text-[var(--text-secondary)]">
              {index + 1} / {steps.length}
            </p>
          </div>
          <h2 className="biz-title mt-3" style={{ fontSize: "1.5rem" }}>
            {step?.title}
          </h2>
          <p className="biz-body mt-4" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
            {step?.body}
          </p>

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
                <Button href={`/sandbox?platform=${platform.id}`}>
                  Practise on {platform.name}
                </Button>
                <Button href={`/platforms/${platform.id}`} variant="secondary">
                  Full platform guide
                </Button>
              </>
            )}
          </div>
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
              "h-2 rounded-full transition-[width,background-color] duration-200",
              i === index
                ? "w-6 bg-[var(--accent)]"
                : "w-2 bg-[var(--surface-2)] hover:bg-[var(--text-secondary)]",
            )}
          />
        ))}
      </div>
    </div>
  );
}
