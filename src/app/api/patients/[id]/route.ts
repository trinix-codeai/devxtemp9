import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { requireSession } from "@/lib/api";
import { patients } from "@/lib/data";
import { requireRole } from "@/lib/rbac";
import { patientCreateSchema } from "@/lib/validators";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { session, response } = await requireSession(request);
  if (!session) return response!;

  const record = patients.find((patient) => patient.id === params.id);
  if (!record) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
  return NextResponse.json({ data: record });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { session, response } = await requireSession(request);
  if (!session) return response!;

  const roleCheck = requireRole(session, ["super-admin", "provider"]);
  if (!roleCheck.ok) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const body = await request.json().catch(() => null);
  const parsed = patientCreateSchema.partial().safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  const recordIndex = patients.findIndex((patient) => patient.id === params.id);
  if (recordIndex === -1) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  patients[recordIndex] = {
    ...patients[recordIndex],
    ...parsed.data
  };

  return NextResponse.json({ data: patients[recordIndex] });
}
