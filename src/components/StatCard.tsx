import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  delta: string;
  tone?: "mint" | "brand" | "warning" | "danger";
  icon: LucideIcon;
  caption?: string;
}

const toneStyles = {
  mint: "bg-mint/15 text-mint",
  brand: "bg-brand/15 text-brand",
  warning: "bg-warning/15 text-warning",
  danger: "bg-danger/15 text-danger"
};

export function StatCard({ label, value, delta, tone = "brand", icon: Icon, caption }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-white/80 p-5 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ink/40">{label}</p>
          <h3 className="mt-2 text-2xl font-semibold text-ink">{value}</h3>
          <p className="mt-1 text-sm text-ink/60">{caption}</p>
        </div>
        <div className={cn("rounded-2xl p-3", toneStyles[tone])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-sm text-ink/60">{delta}</p>
    </div>
  );
}
