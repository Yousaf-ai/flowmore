import { ArrowRight, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { platforms } from "@/content/platforms";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--accent-muted),_transparent_55%)]"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pb-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[var(--accent)]">flowmore</p>
            <h1 className="mt-3 text-display text-[var(--text)]">
              Take any AI platform further
            </h1>
            <p className="text-body-lg mt-5 max-w-xl">
              Millions of people use AI tools at a fraction of their power. flowmore shows what
              each platform can do—and lets you practise prompts until you actually use it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/platforms">
                Choose a platform
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/sandbox" variant="secondary">
                Open sandbox
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.slice(0, 3).map((p) => (
              <Card key={p.id} href={`/platforms/${p.id}`} className="p-5">
                <h2 className="text-base font-semibold tracking-[-0.02em] text-[var(--text)]">
                  {p.name}
                </h2>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{p.tagline}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
              <Target className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="mt-4 text-title text-[var(--text)]">See what you are missing</h2>
            <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
              Companies ship updates and videos most people never watch. Each platform page maps
              the features that unlock real advantage—Projects, Artifacts, MCP, Gems, Copilot in
              Excel—and what most users still skip.
            </p>
          </div>
          <div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
              <Sparkles className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="mt-4 text-title text-[var(--text)]">Practise with a live score</h2>
            <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
              In sandbox or scenarios, a quality bar sits above the chat input. Tap the up arrow
              for concrete tips and a stronger rewrite—then send again and watch the score move.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-title text-[var(--text)]">Start with a scenario</h2>
          <p className="mx-auto mt-3 max-w-lg text-[var(--text-secondary)]">
            Real tasks for work, study, and life—tagged to the platforms people already use.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/scenarios">Browse scenarios</Button>
            <Button href="/platforms" variant="secondary">
              All platforms
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
