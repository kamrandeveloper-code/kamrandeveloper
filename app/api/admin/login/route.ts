import { cookies } from "next/headers";
import { API_BASE_URL } from "@/lib/admin-auth";
import { ADMIN_COOKIE_NAME } from "@/lib/admin-cookie";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const username = typeof body?.username === "string" ? body.username : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (!username || !password) {
    return Response.json({ message: "Username and password are required." }, { status: 400 });
  }

  const backendRes = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    cache: "no-store",
  });

  if (!backendRes.ok) {
    const message = backendRes.status === 401 ? "Invalid username or password." : "Login failed.";
    return Response.json({ message }, { status: backendRes.status });
  }

  const data = (await backendRes.json()) as { token: string; expiresAt: string };
  const store = await cookies();
  store.set(ADMIN_COOKIE_NAME, data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(data.expiresAt),
  });

  return Response.json({ ok: true });
}
