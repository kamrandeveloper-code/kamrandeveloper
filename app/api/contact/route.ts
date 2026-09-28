const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:5081";

export async function POST(request: Request) {
  const body = await request.text();

  try {
    const res = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    const data = await res.text();
    return new Response(data, {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return Response.json(
      { message: "Sorry, the message couldn't be sent right now. Please email me directly instead." },
      { status: 502 },
    );
  }
}
