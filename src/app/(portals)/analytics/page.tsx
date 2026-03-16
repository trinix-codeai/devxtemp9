import { PortalShell } from "@/components/PortalShell";
import { SectionHeader } from "@/components/SectionHeader";
import { InsightCard } from "@/components/InsightCard";
import { FlowBarChart, RevenueAreaChart } from "@/components/ChartPanel";
import { Activity, ChartPie, MessageCircle, Users } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <PortalShell
      portal="analytics"
      title="Analytics Dashboard"
      subtitle="Population health, operational performance, and revenue insights."
    >
      <section className="grid gap-6 lg:grid-cols-4">
        <InsightCard
          title="Patient Volume"
          value="4,218"
          change="+9.4% MoM"
          icon={Users}
          tone="brand"
        />
        <InsightCard
          title="Revenue"
          value="$6.2M"
          change="+7.2% MoM"
          icon={ChartPie}
          tone="mint"
        />
        <InsightCard
          title="Avg. Wait"
          value="14 min"
          change="-2.1 min"
          icon={Activity}
          tone="warning"
        />
        <InsightCard
          title="Satisfaction"
          value="4.7"
          change="+0.3 vs last quarter"
          icon={MessageCircle}
          tone="brand"
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <RevenueAreaChart />
        <FlowBarChart />
      </section>

      <section id="clinical" className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Clinical Analytics"
            title="Diagnosis trends"
            subtitle="Most common conditions and outcomes by department."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "CHF exacerbation", value: "18%", trend: "Readmission 6%" },
              { label: "Type 2 Diabetes", value: "14%", trend: "A1C control 72%" },
              { label: "COPD", value: "9%", trend: "LOS 3.4 days" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-ink">{item.label}</p>
                  <p className="text-xs text-ink/50">{item.trend}</p>
                </div>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Outcomes"
            title="Quality metrics"
            subtitle="Risk-adjusted measures and alerts."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Readmission rate", value: "7.2%" },
              { label: "Mortality index", value: "0.89" },
              { label: "LOS variance", value: "-0.4 days" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="operational" className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Operations"
            title="No-show patterns"
            subtitle="By doctor, time of day, and clinic."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Morning clinics", value: "4.1%" },
              { label: "Evening clinics", value: "7.9%" },
              { label: "Telehealth", value: "3.2%" }
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
            eyebrow="Resource"
            title="Utilization"
            subtitle="Bed occupancy and equipment usage."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Bed occupancy", value: "81%" },
              { label: "OR utilization", value: "74%" },
              { label: "Imaging uptime", value: "96%" }
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
            eyebrow="Emergency"
            title="ED flow"
            subtitle="Arrival patterns and LWBS."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Avg. ED wait", value: "21 min" },
              { label: "LWBS rate", value: "1.8%" },
              { label: "Admissions", value: "42 today" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="financial" className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Financial"
            title="Claims analytics"
            subtitle="Denial drivers and clean claim rate."
          />
          <div className="mt-6 grid gap-4 text-sm text-ink/70">
            {[
              { label: "Clean claim rate", value: "92%" },
              { label: "Top denial", value: "Authorization" },
              { label: "Days in A/R", value: "28" },
              { label: "Collection effectiveness", value: "94%" }
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
            eyebrow="Cost"
            title="Service line margin"
            subtitle="Labor and supply cost trends."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Cardiology", value: "+18%" },
              { label: "Orthopedics", value: "+12%" },
              { label: "Oncology", value: "+9%" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Experience"
            title="Touchpoint scores"
            subtitle="Top satisfaction drivers."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Registration", value: "4.6" },
              { label: "Nursing", value: "4.8" },
              { label: "Physician", value: "4.9" }
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
            eyebrow="Feedback"
            title="Sentiment"
            subtitle="Patient comments trending."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Compassion", value: "76% positive" },
              { label: "Wait time", value: "64% neutral" },
              { label: "Billing clarity", value: "58% positive" }
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
            eyebrow="Loyalty"
            title="Retention"
            subtitle="Return visits and referrals."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Return visit rate", value: "62%" },
              { label: "Referral share", value: "28%" },
              { label: "Net promoter", value: "+42" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="population" className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
          <SectionHeader
            eyebrow="Population Health"
            title="Chronic care registries"
            subtitle="Care gaps and outreach coverage."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Diabetes registry", value: "1,820 patients" },
              { label: "Hypertension", value: "2,430 patients" },
              { label: "Care gaps", value: "12% unresolved" }
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
            eyebrow="Preventive"
            title="Screening compliance"
            subtitle="Wellness and vaccination coverage."
          />
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {[
              { label: "Annual wellness", value: "76%" },
              { label: "Vaccinations", value: "88%" },
              { label: "Cancer screening", value: "64%" }
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span>{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reports" className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-card">
        <SectionHeader
          eyebrow="Custom Reports"
          title="Report builder"
          subtitle="Drag-and-drop dimensions, schedule exports, and share dashboards."
          action={
            <button className="rounded-full bg-ink px-4 py-2 text-sm text-white">Create report</button>
          }
        />
        <div className="mt-6 grid gap-4 text-sm text-ink/70 sm:grid-cols-3">
          {[
            { label: "Denial trends", value: "Saved report" },
            { label: "Service line margin", value: "Scheduled weekly" },
            { label: "No-show analytics", value: "Exported CSV" }
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-ink/10 bg-ink/5 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/40">{item.label}</p>
              <p className="mt-1 text-sm text-ink/70">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </PortalShell>
  );
}
