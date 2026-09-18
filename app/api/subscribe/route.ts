const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:5081";

export async function POST(request: Request) {
  const body = await request.text();

  const res = await fetch(`${API_BASE_URL}/api/subscribers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });

  const data = await res.text();
  return new Response(data, {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
