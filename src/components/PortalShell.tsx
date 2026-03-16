"use client";

import type { PropsWithChildren, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Activity,
  Bell,
  CalendarClock,
  ChartPie,
  ClipboardList,
  CreditCard,
  FileText,
  HeartPulse,
  LayoutGrid,
  MessageCircle,
  Pill,
  Search,
  Settings,
  ShieldCheck,
  Stethoscope,
  Users,
  Building2
} from "lucide-react";

const navByPortal = {
  "super-admin": [
    { label: "Executive", href: "/super-admin", icon: LayoutGrid },
    { label: "Patients", href: "/super-admin#patients", icon: Users },
    { label: "Providers", href: "/super-admin#providers", icon: Stethoscope },
    { label: "Scheduling", href: "/super-admin#scheduling", icon: CalendarClock },
    { label: "Billing", href: "/super-admin#billing", icon: CreditCard },
    { label: "Inventory", href: "/super-admin#inventory", icon: Pill },
    { label: "Compliance", href: "/super-admin#compliance", icon: ShieldCheck },
    { label: "Outreach", href: "/super-admin#outreach", icon: MessageCircle }
  ],
  provider: [
    { label: "My Day", href: "/provider", icon: LayoutGrid },
    { label: "My Patients", href: "/provider#patients", icon: HeartPulse },
    { label: "Consultations", href: "/provider#consultations", icon: ClipboardList },
    { label: "EHR", href: "/provider#ehr", icon: FileText },
    { label: "Schedule", href: "/provider#schedule", icon: CalendarClock },
    { label: "Messaging", href: "/provider#messaging", icon: MessageCircle },
    { label: "Billing", href: "/provider#billing", icon: CreditCard }
  ],
  analytics: [
    { label: "Overview", href: "/analytics", icon: ChartPie },
    { label: "Clinical", href: "/analytics#clinical", icon: HeartPulse },
    { label: "Operational", href: "/analytics#operational", icon: Activity },
    { label: "Financial", href: "/analytics#financial", icon: CreditCard },
    { label: "Experience", href: "/analytics#experience", icon: MessageCircle },
    { label: "Population", href: "/analytics#population", icon: Users },
    { label: "Reports", href: "/analytics#reports", icon: FileText }
  ]
} as const;

const portalMeta = {
  "super-admin": {
    label: "Aster Health System",
    subtitle: "Institutional command center"
  },
  provider: {
    label: "Provider Workspace",
    subtitle: "Daily clinical workflow"
  },
  analytics: {
    label: "Insights Hub",
    subtitle: "Operational intelligence"
  }
} as const;

type PortalKey = keyof typeof navByPortal;

interface PortalShellProps extends PropsWithChildren {
  portal: PortalKey;
  title: string;
  subtitle: string;
  actions?: ReactNode;
}

export function PortalShell({ portal, title, subtitle, actions, children }: PortalShellProps) {
  const pathname = usePathname();
  const navItems = navByPortal[portal];
  const portalInfo = portalMeta[portal];

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[280px_1fr]">
      <aside className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 opacity-70 bg-portal-glow" />
        <div className="relative flex h-full flex-col gap-6 border-r border-white/10 px-6 py-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white/10 p-2 shadow-inset">
              <Building2 className="h-full w-full text-mint" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Portal</p>
              <h1 className="text-lg font-semibold text-white">{portalInfo.label}</h1>
              <p className="text-xs text-white/60">{portalInfo.subtitle}</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href.split("#")[0];
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2 text-white/70 transition hover:bg-white/10 hover:text-white",
                    isActive && "bg-white/15 text-white"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
            <div className="flex items-center justify-between">
              <span>Security Status</span>
              <span className="rounded-full bg-mint/20 px-2 py-1 text-[10px] uppercase text-mint">Stable</span>
            </div>
            <p className="mt-2 text-white/60">2-factor enabled, HIPAA guardrails active.</p>
          </div>
        </div>
      </aside>

      <div className="flex min-h-screen flex-col">
        <header className="flex flex-col gap-4 border-b border-ink/10 bg-white/70 px-8 py-6 backdrop-blur">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ink/50">{portal}</p>
              <h2 className="text-2xl font-semibold text-ink">{title}</h2>
              <p className="text-sm text-ink/60">{subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {actions}
              <button className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink shadow-soft">
                <Bell className="h-4 w-4" />
                Alerts
              </button>
              <div className="flex items-center gap-3 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink">
                <span className="h-8 w-8 rounded-full bg-ink/10" />
                <div>
                  <p className="text-xs text-ink/50">Signed in</p>
                  <p className="text-sm font-medium">Dr. Mira Patel</p>
                </div>
                <Settings className="h-4 w-4 text-ink/40" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink/60">
              <Search className="h-4 w-4" />
              <input
                className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
                placeholder="Search patients, claims, appointments..."
              />
            </div>
            <button className="rounded-full bg-ink px-5 py-2 text-sm text-white shadow-soft">Create</button>
          </div>
        </header>

        <main className="flex-1 px-8 py-8">
          <div className="space-y-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
