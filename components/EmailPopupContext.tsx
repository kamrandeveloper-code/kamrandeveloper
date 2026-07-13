"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import EmailPopup from "@/components/EmailPopup";

interface EmailPopupContextValue {
  openPopup: () => void;
  closePopup: () => void;
}

const EmailPopupContext = createContext<EmailPopupContextValue | null>(null);

export function EmailPopupProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <EmailPopupContext.Provider
      value={{ openPopup: () => setOpen(true), closePopup: () => setOpen(false) }}
    >
      {children}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <EmailPopup onClose={() => setOpen(false)} />
        </div>
      )}
    </EmailPopupContext.Provider>
  );
}

export function useEmailPopup() {
  const ctx = useContext(EmailPopupContext);
  if (!ctx) throw new Error("useEmailPopup must be used within EmailPopupProvider");
  return ctx;
}
