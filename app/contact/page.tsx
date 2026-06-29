"use client";

import { useState } from "react";
import Link from "next/link";
import { developer } from "@/data/developer";
import EmailPopup from "@/components/EmailPopup";
import EmailCompose from "@/components/EmailCompose";

export default function ContactPage() {
  const [emailOpen, setEmailOpen] = useState(false);

  return (
    <main className="min-h-screen bg-bg pt-28 pb-24 overflow-x-hidden">

      {/* Email popup modal */}
      {emailOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onMouseDown={(e) => { if (e.target === e.currentTarget) setEmailOpen(false); }}
        >
          <EmailPopup onClose={() => setEmailOpen(false)} />
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Hero ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-text">Available for new projects</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-text leading-[1.1] mb-5">
              Let&apos;s build software that{" "}
              <span className="text-accent">fits your business.</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Tell me about your business, your challenges, and what you want to build.
              I&apos;ll recommend the best solution — no jargon, no sales pitch.
            </p>
            <button
              onClick={() => setEmailOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-[var(--color-accent-hover)] text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-accent/20"
            >
              Tell me about your project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right: illustration */}
          <div className="flex items-center justify-center lg:justify-end">
            <ContactIllustration />
          </div>
        </div>

        {/* ── 2-column content ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: contact methods */}
          <div>
            <h2 className="font-display font-bold text-xl text-text mb-6">
              Choose your preferred way to connect
            </h2>
            <div className="space-y-3">

              {/* WhatsApp */}
              <a
                href={developer.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-[#25D366]/5 border border-[#25D366]/20 rounded-2xl hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-200 group"
              >
                <div className="w-11 h-11 bg-[#25D366]/15 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-text group-hover:text-[#25D366] transition-colors text-sm">
                    WhatsApp
                  </p>
                  <p className="text-muted text-xs mt-0.5">Fastest — usually replies within hours</p>
                </div>
                <span className="text-[11px] font-bold text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-full shrink-0">
                  Recommended
                </span>
              </a>

              {/* Email */}
              <button
                onClick={() => setEmailOpen(true)}
                className="w-full flex items-center gap-4 p-5 bg-surface border border-border rounded-2xl hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 group text-left"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-text group-hover:text-accent transition-colors text-sm">
                    Email
                  </p>
                  <p className="text-muted text-xs mt-0.5">{developer.email}</p>
                </div>
                <svg className="w-4 h-4 text-muted group-hover:text-accent transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* LinkedIn */}
              <a
                href={developer.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-surface border border-border rounded-2xl hover:border-accent/40 transition-all duration-200 group"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-text group-hover:text-accent transition-colors text-sm">LinkedIn</p>
                  <p className="text-muted text-xs mt-0.5">Connect professionally</p>
                </div>
                <svg className="w-4 h-4 text-muted group-hover:text-accent transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href={developer.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-surface border border-border rounded-2xl hover:border-accent/40 transition-all duration-200 group"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-text group-hover:text-accent transition-colors text-sm">GitHub</p>
                  <p className="text-muted text-xs mt-0.5">View my work</p>
                </div>
                <svg className="w-4 h-4 text-muted group-hover:text-accent transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: tips */}
          <div className="space-y-5">
            <div className="bg-surface border border-border rounded-2xl p-7">
              <h2 className="font-display font-bold text-text text-base mb-6">
                Before you reach out
              </h2>
              <ul className="space-y-5">
                {[
                  {
                    label: "Your business",
                    detail: "What you do and the problem you're trying to solve",
                  },
                  {
                    label: "Current situation",
                    detail: "What you're using now — spreadsheets, manual work, existing tools",
                  },
                  {
                    label: "Scale",
                    detail: "Roughly how many people will use the system",
                  },
                  {
                    label: "Timeline & budget",
                    detail: "Any deadlines or budget range you have in mind",
                  },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-text">{item.label}</p>
                      <p className="text-xs text-muted mt-0.5">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/5 border border-accent/15 rounded-2xl p-7">
              <h2 className="font-display font-bold text-text text-base mb-5">What happens next</h2>
              <ol className="space-y-4">
                {[
                  "I reply within 24 hours with initial thoughts",
                  "A short call to clarify requirements",
                  "A clear proposal: scope, timeline, and price",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-muted">
                    <span className="w-5 h-5 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex items-center justify-between px-1">
              <p className="text-sm text-muted">Not sure what to build?</p>
              <Link href="/services" className="text-sm font-semibold text-accent hover:underline">
                Browse services →
              </Link>
            </div>
          </div>

        </div>

        {/* ── CTA banner ── */}
        <div className="mt-16 bg-accent rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.07),transparent)]" />
          <div className="relative">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
              Let&apos;s build something great together.
            </h2>
            <p className="text-white/70 text-sm mb-6">Pick a channel above and send a message — I&apos;ll take it from there.</p>
            <button
              onClick={() => setEmailOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-white/90 text-accent font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-black/10 text-sm"
            >
              Send a message now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Inline email form ── */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: context */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">Or write directly</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text leading-tight mb-5">
              Send me a message
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Prefer to write it all out? Use the form and I&apos;ll reply within 24 hours with my thoughts on your project.
            </p>
            <ul className="space-y-4">
              {[
                { icon: "⚡", text: "Reply within 24 hours" },
                { icon: "🎯", text: "Specific feedback on your project idea" },
                { icon: "🔒", text: "Your details stay private" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm text-muted">
                  <span className="text-base">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="bg-surface border border-border rounded-2xl p-7">
            <EmailCompose />
          </div>
        </div>

      </div>
    </main>
  );
}

function ContactIllustration() {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[420px] h-auto"
      aria-hidden="true"
    >
      {/* Background glow */}
      <ellipse cx="210" cy="200" rx="160" ry="120" fill="var(--color-accent)" fillOpacity="0.05" />

      {/* Desk surface */}
      <rect x="60" y="258" width="300" height="10" rx="5" fill="currentColor" fillOpacity="0.06" />

      {/* Laptop base */}
      <rect x="95" y="242" width="230" height="20" rx="6" fill="currentColor" fillOpacity="0.10" />

      {/* Laptop hinge */}
      <rect x="175" y="238" width="70" height="6" rx="3" fill="currentColor" fillOpacity="0.08" />

      {/* Laptop screen shell */}
      <rect x="102" y="108" width="216" height="134" rx="12" fill="currentColor" fillOpacity="0.07" />

      {/* Screen bezel */}
      <rect x="108" y="114" width="204" height="122" rx="9" fill="currentColor" fillOpacity="0.05" />

      {/* Screen display area */}
      <rect x="112" y="118" width="196" height="114" rx="7" fill="var(--color-accent)" fillOpacity="0.04" />

      {/* Code / editor lines on screen */}
      <rect x="126" y="133" width="64" height="5" rx="2.5" fill="var(--color-accent)" fillOpacity="0.55" />
      <rect x="198" y="133" width="40" height="5" rx="2.5" fill="currentColor" fillOpacity="0.12" />
      <rect x="126" y="147" width="88" height="4" rx="2" fill="currentColor" fillOpacity="0.14" />
      <rect x="126" y="160" width="52" height="4" rx="2" fill="currentColor" fillOpacity="0.10" />
      <rect x="134" y="173" width="76" height="4" rx="2" fill="var(--color-accent)" fillOpacity="0.3" />
      <rect x="134" y="186" width="48" height="4" rx="2" fill="currentColor" fillOpacity="0.12" />
      <rect x="126" y="199" width="72" height="4" rx="2" fill="currentColor" fillOpacity="0.10" />
      <rect x="134" y="212" width="56" height="4" rx="2" fill="var(--color-accent)" fillOpacity="0.2" />

      {/* Browser-like top bar on screen */}
      <rect x="112" y="118" width="196" height="12" rx="7" fill="currentColor" fillOpacity="0.06" />
      <circle cx="122" cy="124" r="2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="130" cy="124" r="2.5" fill="currentColor" fillOpacity="0.12" />
      <circle cx="138" cy="124" r="2.5" fill="currentColor" fillOpacity="0.10" />

      {/* Chat bubble — incoming (top right) */}
      <rect x="268" y="72" width="128" height="54" rx="14" fill="var(--color-accent)" fillOpacity="0.10" />
      <rect x="268" y="72" width="128" height="54" rx="14" stroke="var(--color-accent)" strokeWidth="1.5" strokeOpacity="0.2" />
      {/* Bubble lines */}
      <rect x="282" y="89" width="72" height="4.5" rx="2.25" fill="currentColor" fillOpacity="0.18" />
      <rect x="282" y="101" width="52" height="4.5" rx="2.25" fill="currentColor" fillOpacity="0.12" />
      {/* Bubble tail */}
      <path d="M280 126 L268 140 L292 126" fill="var(--color-accent)" fillOpacity="0.10" />

      {/* Envelope badge (bottom right, decorative) */}
      <rect x="314" y="196" width="66" height="50" rx="10" fill="var(--color-accent)" fillOpacity="0.08" stroke="var(--color-accent)" strokeWidth="1.5" strokeOpacity="0.18" />
      <path d="M314 208 L347 228 L380 208" stroke="var(--color-accent)" strokeWidth="1.5" strokeOpacity="0.35" strokeLinecap="round" strokeLinejoin="round" />

      {/* Chat bubble — outgoing (left side) */}
      <rect x="24" y="60" width="110" height="52" rx="14" fill="currentColor" fillOpacity="0.05" />
      <rect x="24" y="60" width="110" height="52" rx="14" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.10" />
      <rect x="38" y="77" width="60" height="4.5" rx="2.25" fill="currentColor" fillOpacity="0.14" />
      <rect x="38" y="89" width="44" height="4.5" rx="2.25" fill="currentColor" fillOpacity="0.10" />
      <path d="M124 112 L136 126 L112 112" fill="currentColor" fillOpacity="0.05" />

      {/* Floating dots — top right cluster */}
      <circle cx="254" cy="56" r="5" fill="var(--color-accent)" fillOpacity="0.45" />
      <circle cx="270" cy="66" r="3.5" fill="var(--color-accent)" fillOpacity="0.28" />
      <circle cx="242" cy="70" r="3" fill="var(--color-accent)" fillOpacity="0.18" />

      {/* Floating dots — left cluster */}
      <circle cx="36" cy="170" r="3.5" fill="currentColor" fillOpacity="0.08" />
      <circle cx="48" cy="183" r="2.5" fill="currentColor" fillOpacity="0.06" />

      {/* Star sparkle — top right */}
      <path d="M386 88 L388 82 L390 88 L396 90 L390 92 L388 98 L386 92 L380 90 Z" fill="var(--color-accent)" fillOpacity="0.35" />

      {/* Star sparkle — bottom left */}
      <path d="M22 222 L23.5 217 L25 222 L30 223.5 L25 225 L23.5 230 L22 225 L17 223.5 Z" fill="currentColor" fillOpacity="0.10" />

      {/* Horizontal rule decorative line */}
      <line x1="60" y1="296" x2="360" y2="296" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
    </svg>
  );
}
