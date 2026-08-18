"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function WeekendPlannerPage() {
  const [preferences, setPreferences] = useState("");
  const [plan, setPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    try {
      const res = await fetch("/api/plans/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preferences }),
      });
      const data = await res.json();
      setPlan(data.plan);
    } catch {
      setPlan("Failed to generate plan. Check your configuration.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl font-bold">Weekend Planner</h2>
      <p className="text-muted-foreground">
        Tell me what you like and I&apos;ll suggest a weekend plan.
      </p>
      <textarea
        className="w-full rounded-lg border p-3 text-sm min-h-[100px] bg-background"
        placeholder="E.g., I like hiking, good food, and live music. Budget: moderate. Location: Bangkok."
        value={preferences}
        onChange={(e) => setPreferences(e.target.value)}
      />
      <Button onClick={handleGenerate} disabled={loading || !preferences.trim()}>
        {loading ? "Planning..." : "Generate Weekend Plan"}
      </Button>
      {plan && (
        <div className="rounded-lg border p-4 whitespace-pre-wrap text-sm">
          {plan}
        </div>
      )}
    </div>
  );
}
