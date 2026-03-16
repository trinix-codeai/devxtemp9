import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { requireSession } from "@/lib/api";
import { appointments } from "@/lib/data";
import { requireRole } from "@/lib/rbac";
import { appointmentCreateSchema } from "@/lib/validators";

export async function GET(request: NextRequest) {
  const { session, response } = await requireSession(request);
  if (!session) return response!;

  const patientId = request.nextUrl.searchParams.get("patientId");
  const result = patientId
    ? appointments.filter((appt) => appt.patientId === patientId)
    : appointments;

  return NextResponse.json({ data: result });
}

export async function POST(request: NextRequest) {
  const { session, response } = await requireSession(request);
  if (!session) return response!;

  const roleCheck = requireRole(session, ["super-admin", "provider"]);
  if (!roleCheck.ok) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const body = await request.json().catch(() => null);
  const parsed = appointmentCreateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  const newRecord = {
    id: `a-${Date.now()}`,
    ...parsed.data
  };
  appointments.unshift(newRecord);

  return NextResponse.json({ data: newRecord }, { status: 201 });
}
