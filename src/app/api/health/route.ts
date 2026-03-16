import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "hospital-crm",
    timestamp: new Date().toISOString()
  });
}
