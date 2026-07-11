import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME } from "@/lib/admin-cookie";

export async function POST() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE_NAME);
  return Response.json({ ok: true });
}
