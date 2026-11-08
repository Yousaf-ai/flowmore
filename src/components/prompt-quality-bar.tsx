"use client";

import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  score: number | null;
  loading?: boolean;
  onImprove: () => void;
  improveOpen?: boolean;
};

export function PromptQualityBar({ score, loading, onImprove, improveOpen }: Props) {
  const value = score ?? 0;
  const label =
    score === null
      ? "Prompt quality"
      : score >= 80
        ? "Strong prompt"
        : score >= 55
          ? "Decent — can improve"
          : "Needs work";

  return (
    <div className="fm-panel flex items-center gap-3 px-3.5 py-2.5">
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-[var(--text-secondary)]">{label}</span>
          <span className="text-xs font-semibold tabular-nums text-[var(--text)]" aria-live="polite">
            {loading ? "…" : score === null ? "—" : `${score}`}
          </span>
        </div>
        <div
          className="fm-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={score ?? 0}
          aria-label="Prompt quality score"
        >
          <div
            className={cn("fm-track-fill", loading && "opacity-70")}
            style={{ width: `${value}%` }}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={onImprove}
        disabled={score === null && !loading}
        aria-expanded={improveOpen}
        aria-label="See how to improve your prompt"
        className={cn(
          "fm-btn fm-btn-secondary inline-flex h-10 w-10 shrink-0 !p-0",
          improveOpen && "!bg-[var(--accent-muted)] !text-[var(--accent)]",
        )}
      >
        <ArrowUp className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}
