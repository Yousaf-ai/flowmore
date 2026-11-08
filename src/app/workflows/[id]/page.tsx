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

      <p className="fm-well home-block px-4 py-3 text-sm leading-relaxed text-[var(--text)]" style={{ marginTop: "2rem" }}>
        <span className="font-medium">Outcome: </span>
        {workflow.outcome}
      </p>

      <ol className="home-block space-y-4">
        {workflow.steps.map((step, i) => (
          <li key={`${step.feature}-${i}`} className="biz-glass !p-5">
            <p className="biz-kicker">
              Step {i + 1} · {step.feature}
            </p>
            <p className="biz-body mt-2">{step.action}</p>
          </li>
        ))}
      </ol>

      <div className="home-actions">
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
