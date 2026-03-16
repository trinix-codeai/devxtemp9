import type { Role, SessionPayload } from "@/lib/auth";

export const demoUsers: Array<SessionPayload & { password: string }> = [
  {
    sub: "u-1001",
    name: "Dr. Mira Patel",
    email: "mira.patel@aster.demo",
    role: "provider",
    password: "provider123"
  },
  {
    sub: "u-1002",
    name: "Jordan Reyes",
    email: "jordan.reyes@aster.demo",
    role: "super-admin",
    password: "admin123"
  },
  {
    sub: "u-1003",
    name: "Leena Sharma",
    email: "leena.sharma@aster.demo",
    role: "analytics",
    password: "analytics123"
  }
];

export interface PatientRecord {
  id: string;
  name: string;
  dob: string;
  department: string;
  status: string;
  balance: number;
  risk: "Low" | "Medium" | "High";
}

export const patients: PatientRecord[] = [
  {
    id: "p-20491",
    name: "Ava Thompson",
    dob: "1985-04-12",
    department: "Orthopedics",
    status: "Post-op follow-up",
    balance: 1240,
    risk: "Medium"
  },
  {
    id: "p-20477",
    name: "Luis Ramirez",
    dob: "1972-09-30",
    department: "Cardiology",
    status: "Inpatient - Day 3",
    balance: 980,
    risk: "High"
  },
  {
    id: "p-20462",
    name: "Nia West",
    dob: "1993-01-18",
    department: "Pulmonology",
    status: "Outpatient checkup",
    balance: 320,
    risk: "Low"
  }
];

export interface AppointmentRecord {
  id: string;
  patientId: string;
  provider: string;
  scheduledAt: string;
  status: "scheduled" | "confirmed" | "arrived" | "no-show" | "cancelled";
  reason: string;
}

export const appointments: AppointmentRecord[] = [
  {
    id: "a-803",
    patientId: "p-20491",
    provider: "Dr. Mira Patel",
    scheduledAt: "2026-03-06T10:00:00.000Z",
    status: "confirmed",
    reason: "Post-op check"
  },
  {
    id: "a-804",
    patientId: "p-20477",
    provider: "Dr. Lewis",
    scheduledAt: "2026-03-06T10:40:00.000Z",
    status: "arrived",
    reason: "Cardiology consult"
  }
];

export interface ClaimRecord {
  id: string;
  patientId: string;
  payer: string;
  amount: number;
  status: "submitted" | "paid" | "denied" | "appealed";
}

export const claims: ClaimRecord[] = [
  {
    id: "c-552",
    patientId: "p-20477",
    payer: "Blue Horizon",
    amount: 1820,
    status: "submitted"
  },
  {
    id: "c-553",
    patientId: "p-20491",
    payer: "United Mutual",
    amount: 920,
    status: "paid"
  }
];
