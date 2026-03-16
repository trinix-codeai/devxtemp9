const queue = [
  {
    name: "Samira Clark",
    reason: "Hypertension follow-up",
    time: "08:30 AM",
    eta: "In 10 min"
  },
  {
    name: "Jun Park",
    reason: "Diabetes review",
    time: "09:10 AM",
    eta: "Arrived"
  },
  {
    name: "Omar Ali",
    reason: "Post-op wound check",
    time: "09:40 AM",
    eta: "In 25 min"
  }
];

export function QueueList() {
  return (
    <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
      <div className="space-y-4">
        {queue.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-ink">{item.name}</p>
              <p className="text-xs text-ink/50">{item.reason}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-ink/60">{item.time}</p>
              <span className="rounded-full bg-mint/15 px-2 py-1 text-xs text-mint">{item.eta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
