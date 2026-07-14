"use client";

import { useState } from "react";
import type { Project } from "@/lib/api";
import CopyButton from "./CopyButton";

type DemoPopupProps = {
  demo: NonNullable<Project["demo"]>;
};

export default function DemoPopup({ demo }: DemoPopupProps) {
  const [demoOpen, setDemoOpen] = useState(false);

  function handleOpen(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDemoOpen(true);
  }

  function handleClose(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDemoOpen(false);
  }

  function handleLaunchClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.stopPropagation();
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted hover:text-accent border border-border hover:border-accent/50 rounded-full px-2.5 py-1 transition-all duration-200 touch-manipulation"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Try Demo
      </button>

      {demoOpen && (
        <div className="absolute inset-0 bg-bg/96 backdrop-blur-[2px] rounded-2xl flex items-center justify-center p-6 z-20">
          <div className="w-full max-w-[264px]">
            <div className="flex items-center justify-between mb-4">
              <p className="font-display font-bold text-text text-sm">Try the Demo</p>
              <button
                onClick={handleClose}
                className="w-6 h-6 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-text transition-colors touch-manipulation"
                aria-label="Close"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-3">
              <label className="block text-[11px] font-semibold text-muted uppercase tracking-wider mb-1">
                Email
              </label>
              <div className="flex items-center gap-1.5 bg-surface border border-border rounded-lg px-3 py-2">
                <span className="text-xs text-text flex-1 font-mono truncate">{demo.email}</span>
                <CopyButton text={demo.email} />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-[11px] font-semibold text-muted uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="flex items-center gap-1.5 bg-surface border border-border rounded-lg px-3 py-2">
                <span className="text-xs text-text flex-1 font-mono">{demo.password}</span>
                <CopyButton text={demo.password} />
              </div>
            </div>

            <a
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLaunchClick}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-[var(--color-accent-hover)] text-white text-sm font-semibold rounded-xl transition-colors"
            >
              Launch Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}