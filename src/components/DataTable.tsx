interface PatientRow {
  name: string;
  mrn: string;
  status: string;
  department: string;
  balance: string;
  risk: string;
}

const rows: PatientRow[] = [
  {
    name: "Ava Thompson",
    mrn: "MRN-20491",
    status: "Post-op follow-up",
    department: "Orthopedics",
    balance: "$1,240",
    risk: "Medium"
  },
  {
    name: "Luis Ramirez",
    mrn: "MRN-20477",
    status: "Inpatient - Day 3",
    department: "Cardiology",
    balance: "$980",
    risk: "High"
  },
  {
    name: "Nia West",
    mrn: "MRN-20462",
    status: "Outpatient checkup",
    department: "Pulmonology",
    balance: "$320",
    risk: "Low"
  },
  {
    name: "Dev Patel",
    mrn: "MRN-20430",
    status: "Pre-admission",
    department: "Neurosurgery",
    balance: "$2,810",
    risk: "High"
  }
];

export function DataTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white/90 shadow-card">
      <table className="w-full text-left text-sm">
        <thead className="bg-ink/5 text-xs uppercase tracking-[0.2em] text-ink/50">
          <tr>
            <th className="px-5 py-3">Patient</th>
            <th className="px-5 py-3">MRN</th>
            <th className="px-5 py-3">Status</th>
            <th className="px-5 py-3">Department</th>
            <th className="px-5 py-3">Balance</th>
            <th className="px-5 py-3">Risk</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.mrn} className="border-t border-ink/5">
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full bg-ink/10" />
                  <div>
                    <p className="font-medium text-ink">{row.name}</p>
                    <p className="text-xs text-ink/50">Last touchpoint 2d ago</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-4 text-ink/70">{row.mrn}</td>
              <td className="px-5 py-4 text-ink/70">{row.status}</td>
              <td className="px-5 py-4 text-ink/70">{row.department}</td>
              <td className="px-5 py-4 font-medium text-ink">{row.balance}</td>
              <td className="px-5 py-4">
                <span className="rounded-full bg-ink/10 px-3 py-1 text-xs text-ink/60">
                  {row.risk}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
