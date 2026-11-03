import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PageHero, PageShell } from "@/components/ui/page-shell";
import { getPlatform } from "@/content/platforms";
import { getWorkflow, workflows } from "@/content/workflows";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return workflows.map((w) => ({ id: w.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const workflow = getWorkflow(id);
  if (!workflow) return { title: "Workflow" };
  return { title: workflow.title, description: workflow.description };
}

export default async function WorkflowDetailPage({ params }: Props) {
  const { id } = await params;
  const workflow = getWorkflow(id);
  if (!workflow) notFound();

  const platform = getPlatform(workflow.platformId);

  return (
    <PageShell narrow>
      <PageHero
        eyebrow={`${platform?.name ?? workflow.platformId} · Workflow`}
        title={workflow.title}
        description={workflow.description}
        actions={
          <>
            <Button href={`/sandbox?platform=${workflow.platformId}`}>
              Practise first prompt
            </Button>
            <Button href={`/platforms/${workflow.platformId}`} variant="secondary">
              Platform guide
            </Button>
          </>
        }
      />

      <p className="mt-8 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm leading-relaxed text-[var(--text)] shadow-[var(--shadow)]">
        <span className="font-medium">Outcome: </span>
        {workflow.outcome}
      </p>

      <ol className="mt-10 space-y-4">
        {workflow.steps.map((step, i) => (
          <li
            key={`${step.feature}-${i}`}
            className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]"
          >
            <p className="section-label !text-[var(--accent)]">
              Step {i + 1} · {step.feature}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">{step.action}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/workflows" variant="secondary">
          All workflows
        </Button>
        <Button href="/practice" variant="secondary">
          Prompt Quality Score
        </Button>
      </div>
    </PageShell>
  );
}
