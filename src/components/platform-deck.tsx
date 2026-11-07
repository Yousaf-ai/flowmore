"use client";

import { useMemo, useState } from "react";
import { CardDeck, type DeckCard } from "@/components/ui/card-deck";
import { cn } from "@/lib/cn";

export type HomePlatform = {
  id: string;
  name: string;
  vendor: string;
  tagline: string;
  ecosystem: "western" | "chinese";
};

const filters = [
  { id: "all", label: "All" },
  { id: "western", label: "Western" },
  { id: "chinese", label: "Chinese" },
] as const;

type FilterId = (typeof filters)[number]["id"];

export function PlatformDeck({
  platforms,
  heading,
  headingId,
  labelledBy,
}: {
  platforms: HomePlatform[];
  heading?: string;
  headingId?: string;
  labelledBy?: string;
}) {
  const [filter, setFilter] = useState<FilterId>("all");
  const labelId = headingId ?? labelledBy ?? "platform-deck";

  const cards = useMemo<DeckCard[]>(() => {
    return platforms
      .filter((platform) => filter === "all" || platform.ecosystem === filter)
      .map((platform) => ({
        id: platform.id,
        kicker: platform.vendor || (platform.ecosystem === "chinese" ? "Chinese" : "Western"),
        title: platform.name,
        body: platform.tagline,
        href: `/platforms/${platform.id}`,
        action: "Open platform",
      }));
  }, [filter, platforms]);

  return (
    <section className="home-block" aria-labelledby={labelId}>
      <div className="home-block-head">
        {heading ? (
          <h2 id={labelId} className="home-heading">
            {heading}
          </h2>
        ) : null}
        <div className={cn("home-chips", heading && "is-end")} role="group" aria-label="Filter platforms">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              className={cn("home-chip", filter === item.id && "is-on")}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <CardDeck cards={cards} label="platform" labelledBy={labelId} />
    </section>
  );
}
