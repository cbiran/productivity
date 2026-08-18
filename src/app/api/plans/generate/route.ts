import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

export async function POST(request: Request) {
  const { preferences } = await request.json();

  const { text } = await generateText({
    model: anthropic("claude-sonnet-4-20250514"),
    prompt: `Generate a detailed weekend plan based on these preferences: "${preferences}". Include specific suggestions for Saturday and Sunday, with timing, locations (if you can infer the city), and brief descriptions. Format it clearly with headers.`,
  });

  return Response.json({ plan: text });
}
