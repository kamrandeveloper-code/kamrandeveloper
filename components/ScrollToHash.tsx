"use client";

import { useEffect } from "react";

/**
 * Scrolls to the element matching the current URL hash once the page has
 * settled — native hash scrolling can land in the wrong place when the
 * article's images haven't finished loading yet and shift the layout.
 */
export default function ScrollToHash() {
  useEffect(() => {
    function scrollToHash() {
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const timer = setTimeout(scrollToHash, 150);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return null;
}
