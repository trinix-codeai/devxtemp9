import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession } from "./src/lib/auth";
import { canAccess } from "./src/lib/rbac";

const publicApi = ["/api/health", "/api/auth/login", "/api/auth/logout"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (publicApi.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  const token = request.cookies.get("crm_token")?.value;
  if (!token) {
    return handleUnauthorized(request);
  }

  const session = await verifySession(token);
  if (!session) {
    return handleUnauthorized(request);
  }

  if (pathname.startsWith("/super-admin") && !canAccess(session.role, "super-admin")) {
    return handleForbidden(request);
  }

  if (pathname.startsWith("/provider") && !canAccess(session.role, "provider")) {
    return handleForbidden(request);
  }

  if (pathname.startsWith("/analytics") && !canAccess(session.role, "analytics")) {
    return handleForbidden(request);
  }

  return NextResponse.next();
}

function handleUnauthorized(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}

function handleForbidden(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/super-admin/:path*", "/provider/:path*", "/analytics/:path*", "/api/:path*"]
};
