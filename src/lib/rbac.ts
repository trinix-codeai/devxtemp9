import type { Role, SessionPayload } from "@/lib/auth";

const accessMatrix: Record<string, Role[]> = {
  "super-admin": ["super-admin"],
  provider: ["provider", "super-admin"],
  analytics: ["analytics", "super-admin"]
};

export function canAccess(role: Role, portal: keyof typeof accessMatrix) {
  return accessMatrix[portal].includes(role);
}

export function requireRole(session: SessionPayload, allowed: Role[]) {
  if (!allowed.includes(session.role)) {
    return { ok: false as const, reason: "forbidden" };
  }
  return { ok: true as const };
}
