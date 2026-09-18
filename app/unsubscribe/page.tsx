import Link from "next/link";

const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:5081";

interface Props {
  searchParams: Promise<{ token?: string }>;
}

export default async function UnsubscribePage({ searchParams }: Props) {
  const { token } = await searchParams;

  let success = false;
  if (token) {
    const res = await fetch(`${API_BASE_URL}/api/subscribers/unsubscribe?token=${encodeURIComponent(token)}`, {
      cache: "no-store",
    });
    success = res.ok;
  }

  return (
    <main className="min-h-screen bg-bg flex items-center justify-center px-4 py-24">
      <div className="max-w-md w-full text-center bg-surface border border-border rounded-2xl p-10">
        <h1 className="font-display font-bold text-2xl text-text mb-3">
          {success ? "You're unsubscribed" : "Unsubscribe link invalid"}
        </h1>
        <p className="text-muted text-sm leading-relaxed mb-8">
          {success
            ? "You won't receive any more newsletter emails. You can resubscribe any time from the footer."
            : "This link is missing or no longer valid. If you're still receiving emails you didn't want, reply to any newsletter email and let me know."}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold text-sm rounded-xl transition-all duration-200"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
