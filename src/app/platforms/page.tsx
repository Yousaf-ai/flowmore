import type { Metadata } from "next";
import Link from "next/link";
import { PlatformDeck, type HomePlatform } from "@/components/platform-deck";
import { isChinesePlatform, platforms } from "@/content/platforms";

export const metadata: Metadata = {
  title: "Platforms",
  description:
    "Capability maps for ChatGPT, Claude, Gemini, Cursor, Perplexity, Copilot, Kimi, DeepSeek, GLM, MiniMax, and Qwen.",
};

export default function PlatformsPage() {
  const cards: HomePlatform[] = platforms.map((platform) => ({
    id: platform.id,
    name: platform.name,
    vendor: platform.vendor ?? "",
    tagline: platform.tagline,
    ecosystem: isChinesePlatform(platform.id) ? "chinese" : "western",
  }));

  return (
    <div className="home">
      <div className="home-inner">
        <header className="home-hero">
          <h1 id="platforms-title" className="home-title">
            Platforms
          </h1>
          <div className="home-actions">
            <Link href="/compare" className="home-cta home-cta-flat">
              Compare
            </Link>
            <Link href="/picker" className="home-cta home-cta-raised">
              Find your platform
            </Link>
          </div>
        </header>
        <PlatformDeck platforms={cards} labelledBy="platforms-title" />
      </div>
    </div>
  );
}