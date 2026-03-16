import { SignJWT, jwtVerify } from "jose";

export type Role = "super-admin" | "provider" | "analytics";

export interface SessionPayload {
  sub: string;
  role: Role;
  name: string;
  email: string;
  [key: string]: string;
}

const secret = new TextEncoder().encode(
  process.env.CRM_JWT_SECRET ?? "dev-secret-change-me"
);

export async function signSession(payload: SessionPayload, expiresIn = "8h") {
  return new SignJWT(payload as Record<string, string>)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secret);
}

export async function verifySession(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

export function cookieOptions() {
  const isProd = process.env.NODE_ENV === "production";
  return {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 8
  };
}