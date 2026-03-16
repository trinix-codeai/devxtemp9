import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export const patientCreateSchema = z.object({
  name: z.string().min(2),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  department: z.string().min(2),
  status: z.string().min(2),
  balance: z.number().nonnegative(),
  risk: z.enum(["Low", "Medium", "High"])
});

export const appointmentCreateSchema = z.object({
  patientId: z.string().min(3),
  provider: z.string().min(2),
  scheduledAt: z.string().datetime(),
  status: z.enum(["scheduled", "confirmed", "arrived", "no-show", "cancelled"]),
  reason: z.string().min(3)
});
