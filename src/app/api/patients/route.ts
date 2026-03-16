import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { requireSession } from "@/lib/api";
import { patients } from "@/lib/data";
import { requireRole } from "@/lib/rbac";
import { patientCreateSchema } from "@/lib/validators";

export async function GET(request: NextRequest) {
  const { session, response } = await requireSession(request);
  if (!session) return response!;

  const search = request.nextUrl.searchParams.get("q")?.toLowerCase();
  const result = search
    ? patients.filter((patient) =>
        [patient.name, patient.department, patient.status].some((field) =>
          field.toLowerCase().includes(search)
        )
      )
    : patients;

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
  const parsed = patientCreateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  const newRecord = {
    id: `p-${Date.now()}`,
    ...parsed.data
  };
  patients.unshift(newRecord);

  return NextResponse.json({ data: newRecord }, { status: 201 });
}
