import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  tone?: "brand" | "mint" | "warning";
}

const toneMap = {
  brand: "border-brand/30 bg-brand/5 text-brand",
  mint: "border-mint/30 bg-mint/5 text-mint",
  warning: "border-warning/30 bg-warning/10 text-warning"
};

export function InsightCard({ title, value, change, icon: Icon, tone = "brand" }: InsightCardProps) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-white/90 p-5 shadow-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ink/40">{title}</p>
          <p className="mt-3 text-2xl font-semibold text-ink">{value}</p>
          <p className="mt-1 text-sm text-ink/60">{change}</p>
        </div>
        <div className={cn("rounded-2xl border p-3", toneMap[tone])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
