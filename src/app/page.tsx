import Link from "next/link";
import { PortalCards } from "@/components/PortalCards";
import { ShieldCheck, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ink/50">
              <ShieldCheck className="h-4 w-4 text-brand" />
              HIPAA-ready workflow
            </div>
            <h1 className="mt-6 text-4xl font-semibold text-ink sm:text-5xl">
              Aster Hospital CRM
            </h1>
            <p className="mt-4 text-lg text-ink/70">
              One platform to orchestrate patient journeys, clinical care, revenue cycles, and system-wide analytics.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/super-admin"
                className="rounded-full bg-ink px-6 py-3 text-sm text-white shadow-soft"
              >
                Launch Super Admin
              </Link>
              <button className="rounded-full border border-ink/15 bg-white px-6 py-3 text-sm text-ink">
                Explore system map
              </button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Patient records", value: "4.8M" },
                { label: "Claim resolution", value: "92%" },
                { label: "Avg. wait time", value: "12 min" }
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-ink/10 bg-white/80 p-4 shadow-soft">
                  <p className="text-xs uppercase tracking-[0.3em] text-ink/40">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-ink">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-0 top-0 h-32 w-32 animate-floaty rounded-full bg-brand/15 blur-2xl" />
            <div className="rounded-3xl border border-ink/10 bg-white/85 p-8 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-ink/40">Live pulse</p>
                  <h2 className="mt-3 text-2xl font-semibold text-ink">System readiness</h2>
                </div>
                <span className="rounded-full bg-mint/20 px-3 py-1 text-xs text-mint">All green</span>
              </div>
              <ul className="mt-6 space-y-4 text-sm text-ink/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                  1,284 active appointments across 14 departments
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-mint" />
                  98.7% clean claim rate over the last 7 days
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-warning" />
                  23 discharge summaries pending sign-off
                </li>
              </ul>
              <div className="mt-6 flex items-center gap-2 rounded-2xl border border-ink/10 bg-ink/5 px-4 py-3 text-xs text-ink/60">
                <Sparkles className="h-4 w-4 text-brand" />
                Automation suggestions ready for review
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ink/40">Portals</p>
              <h2 className="mt-2 text-3xl font-semibold text-ink">Choose your workspace</h2>
            </div>
          </div>
          <div className="mt-8">
            <PortalCards />
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-ink/10 bg-white/85 p-6 shadow-card">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/40">Compliance</p>
            <h3 className="mt-2 text-2xl font-semibold text-ink">Governed by design</h3>
            <p className="mt-3 text-sm text-ink/60">
              Audit trails, role-based access, and encryption baked into every patient interaction.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-ink/60">
              <span className="rounded-full border border-ink/15 bg-white px-3 py-1">HIPAA controls</span>
              <span className="rounded-full border border-ink/15 bg-white px-3 py-1">Consent logs</span>
              <span className="rounded-full border border-ink/15 bg-white px-3 py-1">Anomaly alerts</span>
            </div>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white/85 p-6 shadow-card">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/40">Integrations</p>
            <h3 className="mt-2 text-2xl font-semibold text-ink">Connected care ecosystem</h3>
            <p className="mt-3 text-sm text-ink/60">
              FHIR/HL7 adapters for Epic, Cerner, LIS, pharmacy, and payment gateways.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-ink/60">
              <span className="rounded-full border border-ink/15 bg-white px-3 py-1">Epic</span>
              <span className="rounded-full border border-ink/15 bg-white px-3 py-1">Cerner</span>
              <span className="rounded-full border border-ink/15 bg-white px-3 py-1">Athenahealth</span>
              <span className="rounded-full border border-ink/15 bg-white px-3 py-1">Twilio</span>
              <span className="rounded-full border border-ink/15 bg-white px-3 py-1">Stripe</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
