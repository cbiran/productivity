"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function EmailSummaryPage() {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSummarize() {
    setLoading(true);
    try {
      const res = await fetch("/api/email/summarize", { method: "POST" });
      const data = await res.json();
      setSummary(data.summary);
    } catch {
      setSummary("Failed to fetch summary. Check your configuration.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-bold">Email Summary</h2>
      <p className="text-muted-foreground">
        Summarize your recent emails into key action items and highlights.
      </p>
      <Button onClick={handleSummarize} disabled={loading}>
        {loading ? "Summarizing..." : "Summarize Recent Emails"}
      </Button>
      {summary && (
        <div className="rounded-lg border p-4 whitespace-pre-wrap text-sm">
          {summary}
        </div>
      )}
    </div>
  );
}
