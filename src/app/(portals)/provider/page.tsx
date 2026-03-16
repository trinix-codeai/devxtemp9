import { PortalShell } from "@/components/PortalShell";
import { SectionHeader } from "@/components/SectionHeader";
import { QueueList } from "@/components/QueueList";
import { TaskList } from "@/components/TaskList";
import { StatCard } from "@/components/StatCard";
import { ClipboardCheck, HeartPulse, Stethoscope, TestTube } from "lucide-react";

export default function ProviderPage() {
  return (
    <PortalShell
      portal="provider"
      title="Provider Workspace"
      subtitle="Your patients, consults, and clinical tasks for today."
    >
      <section className="grid gap-6 lg:grid-cols-4">
        <StatCard
          label="Today Visits"
          value="18"
          delta="3 walk-ins added"
          icon={Stethoscope}
          tone="brand"
          caption="Shift 7:00 AM - 4:00 PM"
        />
        <StatCard
          label="Critical Results"
          value="4"
          delta="2 pending review"
          icon={TestTube}
          tone="warning"
          caption="Lab + imaging"
        />
        <StatCard
          label="Follow-ups"
          value="12"
          delta="5 overdue"
          icon={ClipboardCheck}
          tone="danger"
          caption="Care coordination"
        />
        <StatCard
          label="Patient NPS"
          value="4.8"
          delta="Top 10% of dept"
          icon={HeartPulse}
          tone="mint"
          caption="Last 30 days"
        />
      </section>

      <section id="patients" className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <SectionHeader
            eyebrow="Patient Queue"
            title="Waiting room"
            subtitle="Live queue with estimated wait times."
          />
          <QueueList />
        </div>
        <div className="space-y-4">
          <SectionHeader
            eyebrow="Task List"
            title="Clinical tasks"
            subtitle="Priority items requiring action."
          />
          <TaskList />
        </div>
      </section>

      <section id="consultations" className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Consultation"
            title="SOAP note workspace"
            subtitle="Structured visit documentation with coding support."
          />
          <div className="mt-6 grid gap-4 text-sm text-ink/70">
            {[
              { label: "Subjective", value: "Shortness of breath, fatigue" },
              { label: "Objective", value: "BP 138/86, HR 92" },
              { label: "Assessment", value: "Likely CHF exacerbation" },
              { label: "Plan", value: "Adjust diuretics, labs ordered" }
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-ink/10 bg-ink/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-ink/40">{item.label}</p>
                <p className="mt-1 text-sm text-ink/70">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Orders"
            title="Active orders"
            subtitle="Labs, imaging, and prescriptions."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "CMP + BNP", value: "Processing" },
              { label: "Chest X-ray", value: "Scheduled 10:15 AM" },
              { label: "Furosemide 20mg", value: "eRx sent" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ehr" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="EHR"
            title="Patient summary"
            subtitle="Recent visits, allergies, and medications."
          />
          <div className="mt-6 grid gap-4 text-sm text-ink/70">
            <div className="rounded-2xl border border-ink/10 bg-ink/5 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/40">Allergies</p>
              <p className="mt-1 text-sm text-ink/70">Penicillin, Shellfish</p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-ink/5 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/40">Chronic care</p>
              <p className="mt-1 text-sm text-ink/70">Type 2 Diabetes, Hypertension</p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-ink/5 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/40">Medications</p>
              <p className="mt-1 text-sm text-ink/70">Metformin, Lisinopril</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Care Coordination"
            title="Referrals & team"
            subtitle="Assigned specialists and follow-up needs."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Cardiology", value: "Referral sent" },
              { label: "Dietitian", value: "Visit scheduled" },
              { label: "Home health", value: "Pending approval" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Schedule"
            title="Next appointments"
            subtitle="Day view with quick actions."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "10:00 AM", value: "Samira Clark" },
              { label: "10:40 AM", value: "Jun Park" },
              { label: "11:30 AM", value: "Omar Ali" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Messaging"
            title="Secure inbox"
            subtitle="Recent patient messages."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Medication question", value: "Ava Thompson" },
              { label: "Follow-up request", value: "Luis Ramirez" },
              { label: "Test results", value: "Nia West" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div id="billing" className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Billing Assistant"
            title="Charge capture"
            subtitle="Services recorded for today."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "CPT 99214", value: "5 visits" },
              { label: "CPT 93000", value: "2 ECG" },
              { label: "Copays collected", value: "$1,220" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PortalShell>
  );
}
