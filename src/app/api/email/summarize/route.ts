import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

export async function POST() {
  // TODO: Replace with actual Gmail API integration
  const mockEmails = `
1. From: team@company.com - Subject: Q3 Planning Meeting Tomorrow at 10am
2. From: boss@company.com - Subject: Review the new proposal draft by Friday
3. From: finance@company.com - Subject: Expense report approved
4. From: hr@company.com - Subject: Annual leave balance reminder - 12 days remaining
5. From: client@external.com - Subject: Follow up on last week's discussion
  `.trim();

  const { text } = await generateText({
    model: anthropic("claude-sonnet-4-20250514"),
    prompt: `Summarize these emails into: 1) Action items (things I need to do), 2) FYI (things to know but no action needed), 3) Calendar (upcoming events). Be concise.\n\nEmails:\n${mockEmails}`,
  });

  return Response.json({ summary: text });
}
