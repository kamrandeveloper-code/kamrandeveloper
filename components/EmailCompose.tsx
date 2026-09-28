"use client";

import { useRef, useState } from "react";
import { developer } from "@/data/developer";

type Status = "idle" | "sending" | "sent";

interface Props {
  onSuccess?: () => void;
}

export default function EmailCompose({ onSuccess }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<{ message: string; mailto: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    setError(null);
    const data = new FormData(formRef.current);
    const name = String(data.get("from_name") ?? "");
    const message = String(data.get("message") ?? "");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("from_name"),
          email: data.get("from_email"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message);
      }
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => {
        setStatus("idle");
        onSuccess?.();
      }, 2500);
    } catch (err) {
      // Keep what the visitor typed and offer a prefilled email so the message isn't lost.
      const subject = encodeURIComponent(`Project inquiry from ${name}`);
      setError({
        message:
          (err instanceof Error && err.message) ||
          "Sorry, the message couldn't be sent right now. Please email me directly instead.",
        mailto: `mailto:${developer.email}?subject=${subject}&body=${encodeURIComponent(message)}`,
      });
      setStatus("idle");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSend} className="flex flex-col gap-3">
      {/* Name */}
      <div>
        <label htmlFor="from_name" className="sr-only">Your name</label>
        <input
          id="from_name"
          type="text"
          name="from_name"
          placeholder="Your name"
          required
          autoComplete="name"
          aria-required="true"
          aria-describedby="name-help"
          className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-bg text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
        />
        <p id="name-help" className="sr-only">Enter your full name so I know who to reply to.</p>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="from_email" className="sr-only">Your email</label>
        <input
          id="from_email"
          type="email"
          name="from_email"
          placeholder="Your email"
          required
          autoComplete="email"
          aria-required="true"
          aria-describedby="email-help"
          className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-bg text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
        />
        <p id="email-help" className="sr-only">Enter your email address so I can reply to you.</p>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="sr-only">Your message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message…"
          required
          rows={5}
          autoComplete="off"
          aria-required="true"
          aria-describedby="message-help"
          className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-bg text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors resize-none"
        />
        <p id="message-help" className="sr-only">Describe your project, challenges, and what you need help with.</p>
      </div>

      {error && (
        <div role="alert" className="text-sm rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2.5 text-text">
          <p>{error.message}</p>
          <a href={error.mailto} className="mt-1 inline-block font-semibold text-accent hover:underline">
            Email {developer.email} →
          </a>
        </div>
      )}

      {/* Status region for screen readers */}
      <div role="status" aria-live="polite" className="sr-only">
        {status === "sending" && "Sending your message..."}
        {status === "sent" && "Message sent successfully."}
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="w-full py-3 rounded-lg bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {status === "sending" && (
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
        )}
        {status === "idle" && "Send Message"}
        {status === "sending" && "Sending…"}
        {status === "sent" && "✓ Message sent!"}
      </button>
    </form>
  );
}