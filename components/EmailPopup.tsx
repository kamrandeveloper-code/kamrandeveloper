"use client";

import EmailCompose from "@/components/EmailCompose";
import { developer } from "@/data/developer";

interface Props {
  onClose: () => void;
}

export default function EmailPopup({ onClose }: Props) {
  return (
    <div className="w-full max-w-md rounded-2xl shadow-2xl shadow-black/25 border border-border bg-surface overflow-hidden">

      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="font-display font-semibold text-text text-sm">New Message</span>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-muted hover:text-text hover:bg-bg transition-all duration-150 touch-manipulation"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* To: field */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-border/60">
        <span className="text-xs font-semibold text-muted uppercase tracking-wider w-6 shrink-0">To</span>
        <span className="text-sm text-text/70">{developer.email}</span>
      </div>

      {/* Form */}
      <div className="p-5">
        <EmailCompose onSuccess={onClose} />
      </div>
    </div>
  );
}
