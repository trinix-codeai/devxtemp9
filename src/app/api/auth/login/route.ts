import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { signSession, cookieOptions } from "@/lib/auth";
import { demoUsers } from "@/lib/data";
import { loginSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  const user = demoUsers.find(
    (candidate) => candidate.email === parsed.data.email && candidate.password === parsed.data.password
  );

  if (!user) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
  }

  const token = await signSession({
    sub: user.sub,
    name: user.name,
    email: user.email,
    role: user.role
  });

  const cookieStore = await cookies();
  cookieStore.set("crm_token", token, cookieOptions());

  return NextResponse.json({
    user: {
      id: user.sub,
      name: user.name,
      email: user.email,
      role: user.role
    }
  });
}
