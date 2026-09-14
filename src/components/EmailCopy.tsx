"use client";

import { useState, useRef } from "react";
import { site } from "@/content/site";

/* Click to copy the email address. Feedback is small and inline —
   no toast. Falls back to a mailto link semantics via title. */
export function EmailCopy({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      // Fallback for browsers without clipboard permission.
      const ta = document.createElement("textarea");
      ta.value = site.email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* no-op */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={className}
      aria-live="polite"
      data-cursor
    >
      <span aria-hidden={copied}>{children ?? site.email}</span>
      {copied && <span className="sr-only">Email address copied</span>}
      {copied && (
        <span aria-hidden="true" data-copied>
          {" "}
          Copied.
        </span>
      )}
    </button>
  );
}
