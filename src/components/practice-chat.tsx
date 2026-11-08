"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { PromptQualityBar } from "@/components/prompt-quality-bar";
import { ImproveSheet } from "@/components/improve-sheet";
import { PlatformSelect } from "@/components/ui/platform-select";
import type { PromptRating } from "@/lib/rate-prompt";
import { cn } from "@/lib/cn";

export type PracticeMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
};

type Props = {
  mode: "sandbox" | "scenario";
  title: string;
  subtitle?: string;
  platformId?: string | null;
  scenarioId?: string | null;
  scenarioGoal?: string | null;
  starterContext?: string | null;
  allowPlatformSelect?: boolean;
  initialPlatformId?: string | null;
};

export function PracticeChat({
  mode,
  title,
  subtitle,
  platformId: lockedPlatformId,
  scenarioId,
  scenarioGoal,
  starterContext,
  allowPlatformSelect,
  initialPlatformId,
}: Props) {
  const [platformId, setPlatformId] = useState<string | "any">(
    (lockedPlatformId as string) || initialPlatformId || "any",
  );
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<PracticeMessage[]>([]);
  const [rating, setRating] = useState<PromptRating | null>(null);
  const [ratingLoading, setRatingLoading] = useState(false);
  const [improveOpen, setImproveOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, improveOpen]);

  const effectivePlatform = lockedPlatformId || (platformId === "any" ? null : platformId);

  const rate = useCallback(
    async (prompt: string) => {
      setRatingLoading(true);
      try {
        const res = await fetch("/api/rate-prompt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt,
            platformId: effectivePlatform,
            scenarioId,
            scenarioGoal,
          }),
        });
        if (!res.ok) throw new Error("rate failed");
        const data = (await res.json()) as PromptRating;
        setRating(data);
        return data;
      } catch {
        setRating(null);
        return null;
      } finally {
        setRatingLoading(false);
      }
    },
    [effectivePlatform, scenarioGoal, scenarioId],
  );

  async function send() {
    const prompt = input.trim();
    if (!prompt || sending) return;

    const userMsg: PracticeMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: prompt,
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setSending(true);
    setImproveOpen(false);

    const rated = await rate(prompt);

    const assistantId = crypto.randomUUID();
    setMessages((m) => [...m, { id: assistantId, role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(({ role, content }) => ({ role, content })),
          platformId: effectivePlatform,
          scenarioId,
          scenarioGoal,
          starterContext,
          mode,
          ratingScore: rated?.score,
        }),
      });

      if (!res.ok || !res.body) {
        const fallback =
          "Practice reply unavailable right now. Check your prompt score above, open ↑ for improvements, and try again.";
        setMessages((m) =>
          m.map((msg) => (msg.id === assistantId ? { ...msg, content: fallback } : msg)),
        );
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        const text = acc;
        setMessages((m) =>
          m.map((msg) => (msg.id === assistantId ? { ...msg, content: text } : msg)),
        );
      }
    } catch {
      setMessages((m) =>
        m.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content:
                  "Something went wrong streaming the reply. Your prompt was still rated — use ↑ to improve it.",
              }
            : msg,
        ),
      );
    } finally {
      setSending(false);
      textareaRef.current?.focus();
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send();
    }
  }

  return (
    <div className="home">
      <div className="biz-inner" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="flex min-h-[calc(100dvh-8rem)] flex-col">
          <div className="fm-panel px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-3">
              <div>
                <p className="biz-kicker">{mode === "sandbox" ? "Sandbox" : "Scenario"}</p>
                <h1 className="biz-title mt-1" style={{ fontSize: "1.6rem" }}>
                  {title}
                </h1>
                {subtitle && <p className="biz-body mt-1">{subtitle}</p>}
              </div>

              {starterContext && (
                <div className="fm-well px-4 py-3 text-sm text-[var(--text)]">
                  <span className="font-medium">Situation: </span>
                  {starterContext}
                </div>
              )}

              {allowPlatformSelect && !lockedPlatformId && (
                <PlatformSelect
                  label="Practising for"
                  value={platformId}
                  includeAny
                  onChange={(id) => setPlatformId(id as string | "any")}
                />
              )}
            </div>
          </div>

          <div className="mx-auto flex w-full flex-1 flex-col">
            <div className="flex-1 space-y-4 py-6" aria-live="polite">
              {messages.length === 0 && (
                <p className="fm-well px-5 py-8 text-center text-sm text-[var(--text-secondary)]">
                  Write a prompt below. Your quality score appears in the bar above the input — tap ↑ to
                  see how to improve.
                </p>
              )}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "max-w-[92%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "ml-auto bg-[var(--accent)] text-[var(--accent-fg)]"
                      : "fm-panel mr-auto text-[var(--text)]",
                  )}
                >
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide opacity-70">
                    {msg.role === "user" ? "You" : "flowmore"}
                  </p>
                  <div className="whitespace-pre-wrap">{msg.content || (sending ? "…" : "")}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            <div className="sticky bottom-0 space-y-3 pb-2 pt-2">
              <ImproveSheet
                open={improveOpen}
                rating={rating}
                onClose={() => setImproveOpen(false)}
                onUseImproved={(p) => {
                  setInput(p);
                  setImproveOpen(false);
                  textareaRef.current?.focus();
                }}
              />

              <PromptQualityBar
                score={rating?.score ?? null}
                loading={ratingLoading}
                improveOpen={improveOpen}
                onImprove={() => setImproveOpen((v) => !v)}
              />

              <div className="fm-input flex items-end gap-2 p-2">
                <label className="sr-only" htmlFor="practice-input">
                  Your prompt
                </label>
                <textarea
                  id="practice-input"
                  ref={textareaRef}
                  rows={2}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Type your prompt…"
                  className="max-h-40 min-h-[52px] flex-1 resize-y border-0 bg-transparent px-3 py-2.5 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-secondary)]"
                />
                <button
                  type="button"
                  onClick={() => void send()}
                  disabled={sending || !input.trim()}
                  aria-label="Send prompt"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-fg)] transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-90 active:scale-[0.96] disabled:opacity-40"
                >
                  <Send className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
