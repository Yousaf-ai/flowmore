import { getPlatform } from "@/content/platforms";
import { getScenario } from "@/content/scenarios";

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

function buildPracticeReply(input: {
  lastUser: string;
  platformName?: string;
  tips: string[];
  scenarioGoal?: string;
  starterContext?: string;
  score?: number;
}): string {
  const lines = [
    "Here’s a practice response focused on helping you take the platform further—not just answering the surface ask.",
    "",
    `You asked: “${input.lastUser.slice(0, 280)}${input.lastUser.length > 280 ? "…" : ""}”`,
    "",
  ];

  if (input.scenarioGoal) {
    lines.push(`Scenario goal: ${input.scenarioGoal}`);
  }
  if (input.starterContext) {
    lines.push(`Situation held in mind: ${input.starterContext}`);
  }
  if (typeof input.score === "number") {
    lines.push(`Prompt quality on this turn: ${input.score}/100. Use ↑ above the input to tighten it.`);
  }

  lines.push("", "A stronger way to run this on your platform:");
  if (input.platformName) {
    lines.push(`1. Stay inside ${input.platformName} features—don’t treat it like a blank chatbot.`);
  } else {
    lines.push("1. Pick the platform you’ll actually use and name its features in the prompt.");
  }
  input.tips.slice(0, 3).forEach((t, i) => lines.push(`${i + 2}. ${t}`));
  lines.push(
    "",
    "Draft answer you might expect after a stronger prompt:",
    "• Clear deliverable matching your stated format",
    "• Assumptions listed up front",
    "• Next actions you can take in the product (save template, open Project, attach files, enable a tool)",
    "",
    "Revise with ↑, then send again to see the score move.",
  );

  return lines.join("\n");
}

async function streamText(text: string) {
  const encoder = new TextEncoder();
  return new ReadableStream({
    async start(controller) {
      const chunkSize = 24;
      for (let i = 0; i < text.length; i += chunkSize) {
        controller.enqueue(encoder.encode(text.slice(i, i + chunkSize)));
        await new Promise((r) => setTimeout(r, 12));
      }
      controller.close();
    },
  });
}

export async function POST(req: Request) {
  let body: {
    messages?: ChatMessage[];
    platformId?: string | null;
    scenarioId?: string | null;
    scenarioGoal?: string | null;
    starterContext?: string | null;
    mode?: string;
    ratingScore?: number;
  };

  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const messages = body.messages ?? [];
  const lastUser = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
  const platform = body.platformId ? getPlatform(body.platformId) : undefined;
  const scenario = body.scenarioId ? getScenario(body.scenarioId) : undefined;

  const apiKey = process.env.OPENAI_API_KEY || process.env.AI_GATEWAY_API_KEY;

  if (apiKey && lastUser) {
    try {
      const { streamText: aiStream } = await import("ai");
      const { createOpenAI } = await import("@ai-sdk/openai");
      const openai = createOpenAI({ apiKey });

      const system = `You are flowmore practice mode. Help the user practise prompting and using AI platforms to fuller advantage.
Platform: ${platform?.name ?? "any"}
Platform practice tips: ${(platform?.practiceTips ?? []).join("; ")}
Capabilities to weave in when relevant: ${(platform?.capabilities ?? []).map((c) => c.title).join(", ")}
Mode: ${body.mode ?? "sandbox"}
Scenario goal: ${body.scenarioGoal ?? scenario?.goal ?? "n/a"}
Starter context: ${body.starterContext ?? scenario?.starterContext ?? "n/a"}
Be concise, practical, and show what a strong platform-aware reply looks like. Remind them to use the quality bar ↑ to improve prompts. Do not pretend to be a coach curriculum.`;

      const result = aiStream({
        model: openai(process.env.OPENAI_MODEL || "gpt-4o-mini"),
        system,
        messages: messages
          .filter((m) => m.role === "user" || m.role === "assistant")
          .map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
      });

      return result.toTextStreamResponse();
    } catch {
      // fall through to local stream
    }
  }

  const text = buildPracticeReply({
    lastUser,
    platformName: platform?.name,
    tips: platform?.practiceTips ?? [
      "State role, goal, audience, constraints, and format.",
      "Name the platform feature you will use next.",
      "Ask for a reusable template when the task repeats.",
    ],
    scenarioGoal: body.scenarioGoal ?? scenario?.goal,
    starterContext: body.starterContext ?? scenario?.starterContext,
    score: body.ratingScore,
  });

  return new Response(await streamText(text), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
