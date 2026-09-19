import type { Metadata } from "next";
import { PracticeChat } from "@/components/practice-chat";

export const metadata: Metadata = {
  title: "Sandbox",
  description: "Free prompt practice with a live quality bar.",
};

type Props = { searchParams: Promise<{ platform?: string }> };

export default async function SandboxPage({ searchParams }: Props) {
  const { platform } = await searchParams;

  return (
    <PracticeChat
      mode="sandbox"
      title="Sandbox"
      subtitle="Free practice. Optional platform tips when you pick one."
      allowPlatformSelect
      initialPlatformId={platform ?? null}
    />
  );
}
