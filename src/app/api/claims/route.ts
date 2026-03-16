import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { requireSession } from "@/lib/api";
import { claims } from "@/lib/data";
import { requireRole } from "@/lib/rbac";

export async function GET(request: NextRequest) {
  const { session, response } = await requireSession(request);
  if (!session) return response!;

  const roleCheck = requireRole(session, ["super-admin", "analytics"]);
  if (!roleCheck.ok) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const patientId = request.nextUrl.searchParams.get("patientId");
  const result = patientId
    ? claims.filter((claim) => claim.patientId === patientId)
    : claims;

  return NextResponse.json({ data: result });
}
