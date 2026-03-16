import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { requireSession } from "@/lib/api";

export async function GET(request: NextRequest) {
  const { session, response } = await requireSession(request);
  if (!session) {
    return response!;
  }

  return NextResponse.json({ user: session });
}
