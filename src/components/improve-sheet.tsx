"use client";

import { Button } from "@/components/ui/button";
import type { PromptRating } from "@/lib/rate-prompt";

type Props = {
  open: boolean;
  rating: PromptRating | null;
  onClose: () => void;
  onUseImproved: (prompt: string) => void;
};

export function ImproveSheet({ open, rating, onClose, onUseImproved }: Props) {
  if (!open) return null;

  return (
    <div
      className="mb-3 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]"
      role="region"
      aria-label="Improve your prompt"
    >
      <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold tracking-[-0.02em] text-[var(--text)]">
            Improve this prompt
          </h2>
          <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
            Short tips, then a stronger rewrite you can apply.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full px-3 py-1 text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
        >
          Close
        </button>
      </div>

      <div className="space-y-4 px-4 py-4">
        {!rating ? (
          <p className="text-sm text-[var(--text-secondary)]">Send a prompt to get improvement tips.</p>
        ) : (
          <>
            <ul className="space-y-2">
              {rating.tips.map((tip) => (
                <li
                  key={tip}
                  className="flex gap-2 text-sm text-[var(--text)] before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:content-['']"
                >
                  {tip}
                </li>
              ))}
            </ul>

            <div className="rounded-[var(--radius)] bg-[var(--surface-2)] p-3">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--text-secondary)]">
                Improved prompt
              </p>
              <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-[var(--text)]">
                {rating.improvedPrompt}
              </pre>
            </div>

            <Button
              type="button"
              onClick={() => onUseImproved(rating.improvedPrompt)}
              className="w-full sm:w-auto"
            >
              Use improved prompt
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
