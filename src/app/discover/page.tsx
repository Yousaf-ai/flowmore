import type { Metadata } from "next";
import { FeatureDiscovery } from "@/components/feature-discovery";
import { PageHero, PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Hidden Feature Discovery",
  description:
    "Interactive walkthroughs of AI platform features most users never discover.",
};

export default function DiscoverPage() {
  return (
    <PageShell narrow>
      <PageHero
        eyebrow="Guided walkthrough"
        title="Hidden Feature Discovery"
        description="Companies ship features in release notes and videos. This walkthrough shows what most people still miss—one step at a time—then sends you to practise."
      />
      <div className="mt-12">
        <FeatureDiscovery />
      </div>
    </PageShell>
  );
}
