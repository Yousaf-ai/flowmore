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
        <div className="fm-panel p-6 sm:p-7">
          <p className="biz-kicker">Your best match</p>
          <h2 className="biz-title mt-2" style={{ fontSize: "1.75rem" }}>
            {top?.platform?.name}
          </h2>
          <p className="biz-body mt-2">{top?.platform?.tagline}</p>
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
          <h3 className="biz-kicker">Also strong for you</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {ranked.slice(1, 4).map((r) => (
              <li key={r.id}>
                <Card href={`/platforms/${r.id}`} className="h-full !p-4">
                  <p className="biz-title">{r.platform?.name}</p>
                  <p className="biz-body mt-1">{r.platform?.tagline}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>

        <p className="biz-body">
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
      <div>
        <div className="mb-2 flex items-center justify-between gap-4">
          <p className="biz-kicker">
            Question {step + 1} of {pickerQuestions.length}
          </p>
          <p className="text-xs tabular-nums text-[var(--text-secondary)]">
            {Math.round((step / pickerQuestions.length) * 100)}%
          </p>
        </div>
        <div
          className="fm-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={pickerQuestions.length}
          aria-valuenow={step}
        >
          <div
            className="fm-track-fill"
            style={{ width: `${(step / pickerQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="biz-title" style={{ fontSize: "1.5rem" }}>
        {question.prompt}
      </h2>

      <ul className="grid gap-3">
        {question.options.map((opt) => (
          <li key={opt.id}>
            <button
              type="button"
              onClick={() => choose(opt.id)}
              className={cn("fm-option", selectedForStep === opt.id && "is-on")}
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
