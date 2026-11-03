"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { platforms } from "@/content/platforms";
import { pickerQuestions, scorePickerAnswers } from "@/content/picker";
import { cn } from "@/lib/cn";

export function PlatformPicker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const question = pickerQuestions[step];
  const done = step >= pickerQuestions.length;

  const ranked = useMemo(() => {
    if (!done) return [];
    return scorePickerAnswers(answers)
      .map((r) => ({ ...r, platform: platforms.find((p) => p.id === r.id) }))
      .filter((r) => r.platform);
  }, [answers, done]);

  function choose(optionId: string) {
    const next = [...answers];
    // replace answer for current step if revisiting
    const q = pickerQuestions[step];
    const without = next.filter((id) => !q.options.some((o) => o.id === id));
    without.push(optionId);
    setAnswers(without);
    setStep((s) => s + 1);
  }

  function reset() {
    setAnswers([]);
    setStep(0);
  }

  if (done) {
    const top = ranked[0];
    return (
      <div className="space-y-8">
        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--accent)]">
            Your best match
          </p>
          <h2 className="mt-2 text-title text-[var(--text)]">{top?.platform?.name}</h2>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">{top?.platform?.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`/platforms/${top?.platform?.id}`}>Open platform guide</Button>
            <Button href={`/sandbox?platform=${top?.platform?.id}`} variant="secondary">
              Practise in sandbox
            </Button>
            <Button type="button" variant="ghost" onClick={reset}>
              Retake quiz
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
            Also strong for you
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {ranked.slice(1, 4).map((r) => (
              <li key={r.id}>
                <Card href={`/platforms/${r.id}`} className="h-full p-4">
                  <p className="font-semibold tracking-[-0.02em] text-[var(--text)]">
                    {r.platform?.name}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{r.platform?.tagline}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          Next: try a{" "}
          <Link href="/workflows" className="text-[var(--accent)] no-underline hover:underline">
            workflow
          </Link>{" "}
          or{" "}
          <Link href="/power-user" className="text-[var(--accent)] no-underline hover:underline">
            power-user rules
          </Link>{" "}
          for when to mix platforms.
        </p>
      </div>
    );
  }

  const selectedForStep = question.options.find((o) => answers.includes(o.id))?.id;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-secondary)]">
          Question {step + 1} of {pickerQuestions.length}
        </p>
        <div
          className="h-1.5 w-32 overflow-hidden rounded-full bg-[var(--surface-2)]"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={pickerQuestions.length}
          aria-valuenow={step}
        >
          <div
            className="h-full rounded-full bg-[var(--accent)] transition-[width] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ width: `${(step / pickerQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="text-title text-[var(--text)]">{question.prompt}</h2>

      <ul className="grid gap-3">
        {question.options.map((opt) => (
          <li key={opt.id}>
            <button
              type="button"
              onClick={() => choose(opt.id)}
              className={cn(
                "w-full rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-left text-sm font-medium text-[var(--text)] shadow-[var(--shadow)] transition-[transform,border-color,background-color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface-2)] active:scale-[0.99]",
                selectedForStep === opt.id && "border-[var(--accent)] bg-[var(--accent-muted)]",
              )}
            >
              {opt.label}
            </button>
          </li>
        ))}
      </ul>

      {step > 0 && (
        <Button type="button" variant="ghost" onClick={() => setStep((s) => s - 1)}>
          Back
        </Button>
      )}
    </div>
  );
}
