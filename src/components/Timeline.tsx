const events = [
  {
    title: "Inquiry received",
    detail: "Web form submitted for cardiology consult",
    time: "08:15 AM",
    status: "Lead"
  },
  {
    title: "Appointment scheduled",
    detail: "Initial visit confirmed with Dr. Mehta",
    time: "09:40 AM",
    status: "Scheduled"
  },
  {
    title: "Diagnostics complete",
    detail: "Echo + labs uploaded to EHR",
    time: "11:05 AM",
    status: "In treatment"
  },
  {
    title: "Claim submitted",
    detail: "Insurance pre-auth completed",
    time: "01:10 PM",
    status: "Revenue"
  }
];

export function Timeline() {
  return (
    <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={event.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="h-3 w-3 rounded-full bg-brand" />
              {index !== events.length - 1 ? (
                <span className="mt-1 h-full w-px bg-ink/10" />
              ) : null}
            </div>
            <div>
              <p className="text-sm font-medium text-ink">{event.title}</p>
              <p className="text-xs text-ink/50">{event.detail}</p>
              <div className="mt-2 flex items-center gap-2 text-xs text-ink/40">
                <span>{event.time}</span>
                <span className="rounded-full bg-ink/5 px-2 py-1">{event.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
