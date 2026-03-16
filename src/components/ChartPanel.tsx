"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const revenueData = [
  { name: "Mon", value: 320 },
  { name: "Tue", value: 410 },
  { name: "Wed", value: 380 },
  { name: "Thu", value: 520 },
  { name: "Fri", value: 610 },
  { name: "Sat", value: 470 },
  { name: "Sun", value: 530 }
];

const flowData = [
  { name: "Week 1", value: 62 },
  { name: "Week 2", value: 68 },
  { name: "Week 3", value: 59 },
  { name: "Week 4", value: 72 }
];

export function RevenueAreaChart() {
  return (
    <div className="h-56 rounded-3xl border border-ink/10 bg-white/90 p-5 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ink/40">Revenue</p>
          <h4 className="text-lg font-semibold text-ink">$3.4M this week</h4>
          <p className="text-xs text-ink/50">+12% vs last week</p>
        </div>
        <span className="rounded-full bg-mint/15 px-3 py-1 text-xs text-mint">Realtime</span>
      </div>
      <div className="mt-4 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1f6feb" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#1f6feb" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={10} />
            <YAxis hide />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#1f6feb" fill="url(#colorRevenue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function FlowBarChart() {
  return (
    <div className="h-56 rounded-3xl border border-ink/10 bg-white/90 p-5 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ink/40">Patient Flow</p>
          <h4 className="text-lg font-semibold text-ink">68% capacity used</h4>
          <p className="text-xs text-ink/50">Optimized staffing target 72%</p>
        </div>
        <span className="rounded-full bg-brand/15 px-3 py-1 text-xs text-brand">Ward</span>
      </div>
      <div className="mt-4 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={flowData}>
            <CartesianGrid vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={10} />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="value" fill="#5ec2b7" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
