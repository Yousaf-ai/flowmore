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
    <div className="flex items-center gap-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 shadow-[var(--shadow)]">
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-[var(--text-secondary)]">{label}</span>
          <span className="text-xs font-semibold tabular-nums text-[var(--text)]" aria-live="polite">
            {loading ? "…" : score === null ? "—" : `${score}`}
          </span>
        </div>
        <div
          className="h-2 overflow-hidden rounded-full bg-[var(--surface-2)]"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={score ?? 0}
          aria-label="Prompt quality score"
        >
          <div
            className={cn(
              "h-full rounded-full bg-[var(--accent)] transition-[width] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
              loading && "opacity-70",
            )}
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
          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] transition-[transform,background-color,opacity] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[var(--accent-muted)] hover:text-[var(--accent)] active:scale-[0.96] disabled:opacity-40",
          improveOpen && "bg-[var(--accent-muted)] text-[var(--accent)]",
        )}
      >
        <ArrowUp className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}
