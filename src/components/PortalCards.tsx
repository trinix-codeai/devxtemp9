"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, ChartPie, ShieldCheck, Stethoscope } from "lucide-react";

const portals = [
  {
    title: "Super Admin",
    description: "Institution-wide governance, billing, compliance, and resource orchestration.",
    href: "/super-admin",
    icon: ShieldCheck,
    accent: "from-brand/10 via-white to-white"
  },
  {
    title: "Healthcare Provider",
    description: "Daily clinical workflows, consults, EHR access, and patient coordination.",
    href: "/provider",
    icon: Stethoscope,
    accent: "from-mint/20 via-white to-white"
  },
  {
    title: "Analytics Dashboard",
    description: "Operational intelligence, revenue insights, and population health trends.",
    href: "/analytics",
    icon: ChartPie,
    accent: "from-warning/20 via-white to-white"
  }
];

export function PortalCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {portals.map((portal, index) => {
        const Icon = portal.icon;
        return (
          <motion.div
            key={portal.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <Link
              href={portal.href}
              className={`group block h-full rounded-3xl border border-ink/10 bg-gradient-to-br ${portal.accent} p-6 shadow-card transition hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-ink/10 p-3 text-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-ink/40">Portal</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">{portal.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{portal.description}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-ink/70">
                <Activity className="h-4 w-4" />
                <span>Live demo view</span>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
