const tasks = [
  {
    title: "Finalize discharge summary",
    detail: "Room 412 • Dr. Lewis",
    due: "Due in 2 hrs"
  },
  {
    title: "Approve lab order panel",
    detail: "Hematology • Queue 5",
    due: "Pending"
  },
  {
    title: "Review imaging results",
    detail: "CT scan • MRN-20477",
    due: "Critical"
  }
];

export function TaskList() {
  return (
    <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.title} className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-ink">{task.title}</p>
              <p className="text-xs text-ink/50">{task.detail}</p>
            </div>
            <span className="rounded-full bg-warning/15 px-2 py-1 text-xs text-warning">
              {task.due}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
