"use client";

import Link from "next/link";
import { CardDeck, type DeckCard } from "@/components/ui/card-deck";
import { PlatformDeck, type HomePlatform } from "@/components/platform-deck";

export type { HomePlatform };

const tools: DeckCard[] = [
  {
    id: "practice",
    kicker: "Practise",
    title: "Prompt Quality Score",
    body: "Pick a task, write a prompt, get a live score, then improve it.",
    href: "/practice",
    action: "Score a prompt",
  },
  {
    id: "discover",
    kicker: "Discover",
    title: "Hidden Feature Discovery",
    body: "Walk through features most people never turn on.",
    href: "/discover",
    action: "Start discovery",
  },
  {
    id: "picker",
    kicker: "Match",
    title: "Platform Picker",
    body: "A short quiz that recommends a platform for the job.",
    href: "/picker",
    action: "Find a platform",
  },
  {
    id: "workflows",
    kicker: "Build",
    title: "Workflow Builder",
    body: "Chain features into one flow, such as Projects, research, then a document.",
    href: "/workflows",
    action: "Open workflows",
  },
  {
    id: "power-user",
    kicker: "Mix",
    title: "Cross-Platform Power User",
    body: "When to stay with one platform, when to switch, and what to skip.",
    href: "/power-user",
    action: "Open guide",
  },
  {
    id: "businesses",
    kicker: "Report",
    title: "AI digital businesses",
    body: "Businesses these Western and Chinese platforms have created or changed.",
    href: "/businesses",
    action: "Read the report",
  },
];

export function HomeExperience({ platforms }: { platforms: HomePlatform[] }) {
  return (
    <div className="home">
      <div className="home-inner">
        <header className="home-hero">
          <h1 className="home-title">Take any AI platform further</h1>
          <div className="home-actions">
            <Link href="/picker" className="home-cta home-cta-flat">
              Find your platform
            </Link>
            <Link href="/practice" className="home-cta home-cta-raised">
              Score a prompt
            </Link>
          </div>
        </header>

        <PlatformDeck platforms={platforms} heading="Platforms" headingId="home-platforms" />

        <section className="home-block" aria-labelledby="home-tools">
          <h2 id="home-tools" className="home-heading">
            Tools
          </h2>
          <CardDeck cards={tools} label="tool" labelledBy="home-tools" />
        </section>
      </div>
    </div>
  );
}
