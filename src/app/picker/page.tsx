import type { Metadata } from "next";
import { PlatformPicker } from "@/components/platform-picker";
import { PageHero, PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Platform Picker",
  description: "Quiz that recommends which AI platform fits your workflow.",
};

export default function PickerPage() {
  return (
    <PageShell narrow>
      <PageHero
        eyebrow="Match your workflow"
        title="Platform Picker"
        description="Answer a few questions. Get a recommended platform—and nearby alternatives—matched to your workflow, not the loudest brand."
      />
      <div className="mt-12">
        <PlatformPicker />
      </div>
    </PageShell>
  );
}
