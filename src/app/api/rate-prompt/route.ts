import { getPlatform } from "@/content/platforms";
import { getScenario } from "@/content/scenarios";
import { ratePromptLocal, type PromptRating } from "@/lib/rate-prompt";

export async function POST(req: Request) {
  let body: {
    prompt?: string;
    platformId?: string | null;
    scenarioId?: string | null;
    scenarioGoal?: string | null;
  };

  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const prompt = body.prompt?.trim() ?? "";
  if (!prompt) {
    return Response.json({ error: "Prompt required" }, { status: 400 });
  }

  const scenario = body.scenarioId ? getScenario(body.scenarioId) : undefined;
  const platform = body.platformId ? getPlatform(body.platformId) : undefined;

  let rating: PromptRating = ratePromptLocal({
    prompt,
    platformId: body.platformId,
    scenarioGoal: body.scenarioGoal ?? scenario?.goal,
    raterHints: scenario?.raterHints,
  });

  // Optional AI refinement when a key is present
  const apiKey = process.env.OPENAI_API_KEY || process.env.AI_GATEWAY_API_KEY;
  if (apiKey) {
    try {
      const { generateObject } = await import("ai");
      const { createOpenAI } = await import("@ai-sdk/openai");
      const { z } = await import("zod");

      const openai = createOpenAI({ apiKey });
      const schema = z.object({
        score: z.number().min(0).max(100),
        dimensions: z.object({
          clarity: z.number(),
          context: z.number(),
          goal: z.number(),
          constraints: z.number(),
          format: z.number(),
          platformLeverage: z.number(),
        }),
        tips: z.array(z.string()).max(4),
        improvedPrompt: z.string(),
      });

      const { object } = await generateObject({
        model: openai(process.env.OPENAI_MODEL || "gpt-4o-mini"),
        schema,
        prompt: `Rate this user prompt for practising AI platforms.
Platform: ${platform?.name ?? "any"}
Platform tips: ${(platform?.practiceTips ?? []).join("; ")}
Scenario goal: ${body.scenarioGoal ?? scenario?.goal ?? "n/a"}
Rater hints: ${(scenario?.raterHints ?? []).join("; ")}

User prompt:
"""
${prompt}
"""

Score 0-100. Tips must be actionable and mention platform features when a platform is set. Provide an improvedPrompt rewrite.`,
      });

      rating = object as PromptRating;
    } catch {
      // keep local rating
    }
  }

  return Response.json(rating);
}
