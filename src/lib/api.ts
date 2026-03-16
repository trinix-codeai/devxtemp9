import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { verifySession } from "@/lib/auth";

export async function requireSession(request: NextRequest) {
  const token = request.cookies.get("crm_token")?.value;
  if (!token) {
    return { session: null, response: NextResponse.json({ error: "unauthorized" }, { status: 401 }) };
  }
  const session = await verifySession(token);
  if (!session) {
    return { session: null, response: NextResponse.json({ error: "unauthorized" }, { status: 401 }) };
  }
  return { session, response: null };
}
