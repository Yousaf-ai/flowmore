"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";

export type DeckCard = {
  id: string;
  kicker: string;
  title: string;
  body?: string;
  href?: string;
  action?: string;
  lines?: { label: string; value: string }[];
};

export function CardDeck({
  cards,
  label,
  labelledBy,
}: {
  cards: DeckCard[];
  label: string;
  labelledBy: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const signature = cards.map((card) => card.id).join("|");

  const measure = useCallback(() => {
    const el = scrollerRef.current;
    if (!el || cards.length === 0) return;
    const width = el.clientWidth;
    if (width === 0) return;
    const next = Math.round(el.scrollLeft / width);
    setIndex(Math.min(cards.length - 1, Math.max(0, next)));
  }, [cards.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    setIndex(0);
  }, [signature]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", measure, { passive: true });
    el.addEventListener("scrollend", measure);
    return () => {
      el.removeEventListener("scroll", measure);
      el.removeEventListener("scrollend", measure);
    };
  }, [measure]);

  function go(direction: -1 | 1) {
    const el = scrollerRef.current;
    if (!el || cards.length === 0) return;
    const next = (index + direction + cards.length) % cards.length;
    const wraps =
      (index === 0 && direction === -1) || (index === cards.length - 1 && direction === 1);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({
      left: next * el.clientWidth,
      behavior: wraps || reduce ? "auto" : "smooth",
    });
    setIndex(next);
  }

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  }

  const current = cards[index];

  return (
    <div className="home-deck">
      <div
        className="home-well"
        role="region"
        aria-roledescription="carousel"
        aria-labelledby={labelledBy}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div ref={scrollerRef} className="home-track">
          {cards.map((card, i) => (
            <div
              key={card.id}
              className="home-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${cards.length}`}
              inert={i !== index}
            >
              <article className="home-glass">
                <p className="home-kicker">{card.kicker}</p>
                <h3 className={card.lines ? "home-card-title is-compact" : "home-card-title"}>
                  {card.title}
                </h3>
                {card.lines ? (
                  <ul className="home-card-lines">
                    {card.lines.map((line, lineIndex) => (
                      <li key={`${line.label}-${lineIndex}`}>
                        <span>{line.label}</span>
                        <span>{line.value}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  card.body && <p className="home-card-body">{card.body}</p>
                )}
                {card.href && (
                  <Link href={card.href} className="home-card-link">
                    {card.action}
                    <ChevronRight className="h-4 w-4" aria-hidden />
                  </Link>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="home-deck-controls">
        <button type="button" className="home-arrow" onClick={() => go(-1)} aria-label={`Previous ${label}`}>
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <p className="home-count" aria-live="polite">
          {current ? (
            <>
              <span className="home-count-index">
                {index + 1} / {cards.length}
              </span>
              <span className="home-count-name">{current.title}</span>
            </>
          ) : (
            "None"
          )}
        </p>
        <button type="button" className="home-arrow" onClick={() => go(1)} aria-label={`Next ${label}`}>
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
