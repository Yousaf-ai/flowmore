import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PracticeChat } from "@/components/practice-chat";
import { getPlatform } from "@/content/platforms";
import { getScenario, scenarios } from "@/content/scenarios";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return scenarios.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const scenario = getScenario(id);
  if (!scenario) return { title: "Scenario" };
  return { title: scenario.title, description: scenario.description };
}

export default async function ScenarioPracticePage({ params }: Props) {
  const { id } = await params;
  const scenario = getScenario(id);
  if (!scenario) notFound();

  const platform =
    scenario.platformId !== "any" ? getPlatform(scenario.platformId) : undefined;

  return (
    <PracticeChat
      mode="scenario"
      title={scenario.title}
      subtitle={`${scenario.category} · ${platform?.name ?? "Any platform"} · ${scenario.goal}`}
      platformId={scenario.platformId === "any" ? null : scenario.platformId}
      scenarioId={scenario.id}
      scenarioGoal={scenario.goal}
      starterContext={scenario.starterContext}
      allowPlatformSelect={scenario.platformId === "any"}
    />
  );
}
