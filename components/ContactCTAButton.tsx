"use client";

import type { ButtonHTMLAttributes } from "react";
import { useEmailPopup } from "@/components/EmailPopupContext";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function ContactCTAButton({ onClick, type, ...props }: Props) {
  const { openPopup } = useEmailPopup();

  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        openPopup();
      }}
      {...props}
    />
  );
}
