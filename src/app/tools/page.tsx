import type { Metadata } from "next";
import {
  Briefcase,
  Compass,
  GitBranch,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHero, PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Platform picker, hidden feature discovery, workflow builder, power-user rules, businesses report, and prompt quality practice.",
};

const tools = [
  {
    href: "/practice",
    icon: Sparkles,
    title: "Prompt Quality Score",
    body: "Pick a task, write a prompt, get a live score, then improve with ↑ tips.",
  },
  {
    href: "/discover",
    icon: Compass,
    title: "Hidden Feature Discovery",
    body: "Interactive walkthroughs of features most users never turn on.",
  },
  {
    href: "/picker",
    icon: Target,
    title: "Platform Picker",
    body: "Short quiz that recommends the best platform for your workflow.",
  },
  {
    href: "/workflows",
    icon: Workflow,
    title: "Workflow Builder",
    body: "Chain features into end-to-end flows—like Projects → Deep Research → Canvas.",
  },
  {
    href: "/power-user",
    icon: GitBranch,
    title: "Cross-Platform Power User",
    body: "When to use which platform for maximum efficiency—and what to avoid.",
  },
  {
    href: "/businesses",
    icon: Briefcase,
    title: "AI digital businesses",
    body: "Complete report on businesses created and transformed by Western and Chinese AI platforms.",
  },
];

export default function ToolsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Practice toolkit"
        title="Tools"
        description="Six ways to go beyond basic chat—pick a path and practise until the platform pays off."
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {tools.map((t) => (
          <li key={t.href}>
            <Card href={t.href} className="h-full">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
                <t.icon className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">
                {t.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{t.body}</p>
            </Card>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
