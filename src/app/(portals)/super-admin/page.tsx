import { PortalShell } from "@/components/PortalShell";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCard } from "@/components/StatCard";
import { DataTable } from "@/components/DataTable";
import { Timeline } from "@/components/Timeline";
import {
  BadgeDollarSign,
  Bed,
  ShieldAlert,
  Users
} from "lucide-react";

export default function SuperAdminPage() {
  return (
    <PortalShell
      portal="super-admin"
      title="Executive Command Center"
      subtitle="Real-time oversight of patients, providers, finance, and compliance."
    >
      <section className="grid gap-6 lg:grid-cols-4">
        <StatCard
          label="Total Patients"
          value="128,420"
          delta="+4.1% active treatment" 
          tone="brand"
          icon={Users}
          caption="Across 4 facilities"
        />
        <StatCard
          label="Occupancy"
          value="82%"
          delta="+6% vs last week"
          tone="mint"
          icon={Bed}
          caption="1,348 beds in use"
        />
        <StatCard
          label="Revenue MTD"
          value="$18.6M"
          delta="$1.2M collected today"
          tone="warning"
          icon={BadgeDollarSign}
          caption="Collections on track"
        />
        <StatCard
          label="Compliance"
          value="98.9%"
          delta="3 alerts pending review"
          tone="danger"
          icon={ShieldAlert}
          caption="Audit coverage"
        />
      </section>

      <section id="patients" className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4">
          <SectionHeader
            eyebrow="Master Patient Index"
            title="Patient 360° view"
            subtitle="Unified medical, financial, and engagement context."
          />
          <DataTable />
        </div>
        <div className="space-y-4">
          <SectionHeader
            eyebrow="Lifecycle"
            title="Patient journey timeline"
            subtitle="Latest interactions across outreach, care, and billing."
          />
          <Timeline />
        </div>
      </section>

      <section id="billing" className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Revenue Cycle"
            title="Claims status"
            subtitle="Clean claim rate 92%, 8% in appeal."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Submitted", value: "1,420" },
              { label: "Paid", value: "1,104" },
              { label: "Denied", value: "116" },
              { label: "Appeal", value: "82" }
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
            eyebrow="Accounts Receivable"
            title="A/R aging"
            subtitle="$4.2M outstanding with 18% > 90 days."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "0-30 days", value: "$1.9M" },
              { label: "31-60 days", value: "$1.1M" },
              { label: "61-90 days", value: "$0.5M" },
              { label: "> 90 days", value: "$0.7M" }
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
            eyebrow="Resource Use"
            title="Pharmacy & supply"
            subtitle="Critical items with low stock or expiry risk."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "ICU sedatives", value: "5 days" },
              { label: "Cardiac stents", value: "12 units" },
              { label: "PPE inventory", value: "23%" },
              { label: "Insulin pens", value: "2 days" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="providers" className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Provider Performance"
            title="Doctor productivity"
            subtitle="Visits, satisfaction, and revenue contribution."
          />
          <div className="mt-6 grid gap-4 text-sm text-ink/70">
            {[
              { name: "Dr. Singh", metric: "42 visits", score: "4.9" },
              { name: "Dr. Kapoor", metric: "38 visits", score: "4.7" },
              { name: "Dr. Chen", metric: "35 visits", score: "4.8" }
            ].map((doc) => (
              <div key={doc.name} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-ink">{doc.name}</p>
                  <p className="text-xs text-ink/50">{doc.metric}</p>
                </div>
                <span className="rounded-full bg-mint/15 px-3 py-1 text-xs text-mint">
                  {doc.score}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Scheduling"
            title="Care access snapshot"
            subtitle="Wait time trends and high-demand clinics."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Avg. wait time", value: "18 min" },
              { label: "No-show rate", value: "6.2%" },
              { label: "Surgery backlog", value: "12 cases" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compliance" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Audit Trail"
            title="Security events"
            subtitle="High priority events requiring review."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              {
                label: "After-hours EHR export",
                detail: "Oncology staff • 2:14 AM",
                status: "Investigate"
              },
              {
                label: "Access request denied",
                detail: "Billing contractor • 9:45 AM",
                status: "Reviewed"
              },
              {
                label: "Consent update",
                detail: "Patient portal • 11:02 AM",
                status: "Logged"
              }
            ].map((event) => (
              <div key={event.label} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-ink">{event.label}</p>
                  <p className="text-xs text-ink/50">{event.detail}</p>
                </div>
                <span className="rounded-full bg-ink/10 px-3 py-1 text-xs text-ink/60">
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Outreach"
            title="Retention campaigns"
            subtitle="Automated patient recall and referral tracking."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Cardiac follow-ups", value: "84% scheduled" },
              { label: "Diabetes care gaps", value: "312 patients" },
              { label: "Referral partners", value: "38 active" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inventory" className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Inventory"
            title="High velocity meds"
            subtitle="Reorder alerts triggered in 24 hours."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Heparin", value: "45 vials" },
              { label: "Amoxicillin", value: "120 units" },
              { label: "Propofol", value: "18 vials" }
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
            eyebrow="Supplies"
            title="OR kits"
            subtitle="Sterile pack usage and turnover."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Ortho kits", value: "6 remaining" },
              { label: "Neuro kits", value: "4 remaining" },
              { label: "Cardiac kits", value: "9 remaining" }
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
            eyebrow="Utilization"
            title="Equipment status"
            subtitle="Critical devices out for maintenance."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "MRI-02", value: "Calibration" },
              { label: "Ventilators", value: "92% ready" },
              { label: "Dialysis", value: "1 offline" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="scheduling" className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="System Calendar"
            title="Central scheduling overview"
            subtitle="Live appointments and room utilization."
          />
          <div className="mt-6 grid gap-4 text-sm text-ink/70">
            {[
              { label: "OR utilization", value: "78%" },
              { label: "ICU admissions", value: "12 today" },
              { label: "Avg. wait by dept", value: "Radiology 16m" }
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
            eyebrow="Tasks"
            title="Automation rules"
            subtitle="Reminder workflows and no-show prevention."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "24-hr reminders", value: "Active" },
              { label: "Follow-up outreach", value: "1,240 queued" },
              { label: "Waitlist offers", value: "98 sent" }
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
