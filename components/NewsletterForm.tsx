"use client";

import { useRef, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    const data = new FormData(formRef.current);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.get("email") }),
      });
      if (!res.ok) throw new Error("Failed to subscribe");
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-2.5">
      <label htmlFor="newsletter-email" className="sr-only">Your email</label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        placeholder="you@example.com"
        required
        autoComplete="email"
        className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-bg text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
      />
      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="w-full px-4 py-2.5 rounded-lg bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold transition-all duration-200 disabled:opacity-60"
      >
        {status === "sending" && "Subscribing…"}
        {status === "sent" && "✓ Subscribed"}
        {status === "error" && "Try again"}
        {status === "idle" && "Subscribe"}
      </button>
      <div role="status" aria-live="polite" className="sr-only">
        {status === "sending" && "Subscribing..."}
        {status === "sent" && "Subscribed successfully."}
        {status === "error" && "Failed to subscribe. Please try again."}
      </div>
    </form>
  );
}
