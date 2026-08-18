export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Welcome back</h2>
      <p className="text-muted-foreground">
        Your personal productivity dashboard. Choose a tool from the sidebar.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="/email-summary"
          className="rounded-lg border p-6 hover:bg-muted/50 transition-colors"
        >
          <h3 className="font-semibold mb-1">📧 Email Summary</h3>
          <p className="text-sm text-muted-foreground">
            Get an AI-powered summary of your recent emails and action items.
          </p>
        </a>
        <a
          href="/weekend-planner"
          className="rounded-lg border p-6 hover:bg-muted/50 transition-colors"
        >
          <h3 className="font-semibold mb-1">🗓️ Weekend Planner</h3>
          <p className="text-sm text-muted-foreground">
            Generate personalized weekend plans based on your preferences.
          </p>
        </a>
      </div>
    </div>
  );
}
