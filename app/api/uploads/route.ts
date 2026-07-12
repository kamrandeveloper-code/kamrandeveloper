import { adminFetch } from "@/lib/admin-auth";

/**
 * Client-callable upload proxy: the rich text editor (a client component)
 * can't read the httpOnly admin cookie itself, so it posts here and this
 * route forwards the file to the .NET backend with the JWT attached.
 */
export async function POST(request: Request) {
  const formData = await request.formData().catch(() => null);
  if (!formData) {
    return Response.json({ message: "Invalid upload." }, { status: 400 });
  }

  const res = await adminFetch("/api/uploads", { method: "POST", body: formData });
  const data = await res.json().catch(() => null);
  return Response.json(data ?? { message: "Upload failed." }, { status: res.status });
}
