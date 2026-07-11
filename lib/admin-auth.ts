import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME } from "@/lib/admin-cookie";

const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:5081";
export { ADMIN_COOKIE_NAME };

export async function getAdminToken(): Promise<string | null> {
  const store = await cookies();
  return store.get(ADMIN_COOKIE_NAME)?.value ?? null;
}

/**
 * Proxies a request to the .NET backend, attaching the admin JWT from the
 * httpOnly cookie as a Bearer token. Returns a 401 Response directly if no
 * cookie is present, so callers can just pass the result straight through.
 */
export async function adminFetch(path: string, init?: RequestInit): Promise<Response> {
  const token = await getAdminToken();
  if (!token) {
    return Response.json({ message: "Not authenticated." }, { status: 401 });
  }

  return fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      ...(init?.headers ?? {}),
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
}

export { API_BASE_URL };
