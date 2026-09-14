"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Cursor.module.css";

/* A minimal white circular cursor. It never carries text and never
   replaces a native affordance — it's purely a refinement on fine-pointer
   devices, disabled for touch and reduced-motion users. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const state = useRef({ x: 0, y: 0, tx: 0, ty: 0, raf: 0 });

  // Decide whether the custom cursor should exist at all.
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine && !reduce) setEnabled(true);
  }, []);

  // Wire up movement/interaction once the element is actually in the DOM.
  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    document.body.classList.add("custom-cursor-active");
    const s = state.current;

    const loop = () => {
      s.tx += (s.x - s.tx) * 0.2;
      s.ty += (s.y - s.ty) * 0.2;
      el.style.transform = `translate3d(${s.tx - 7}px, ${s.ty - 7}px, 0)`;
      s.raf = requestAnimationFrame(loop);
    };
    s.raf = requestAnimationFrame(loop);

    const move = (e: PointerEvent) => {
      s.x = e.clientX;
      s.y = e.clientY;
      el.classList.remove(styles.hidden);
    };
    const leave = () => el.classList.add(styles.hidden);
    const down = () => el.classList.add(styles.down);
    const up = () => el.classList.remove(styles.down);

    const isInteractive = (t: EventTarget | null) =>
      t instanceof Element &&
      !!t.closest("a, button, [role='button'], input, label, [data-cursor]");

    const over = (e: PointerEvent) => {
      if (isInteractive(e.target)) el.classList.add(styles.interactive);
    };
    const out = (e: PointerEvent) => {
      if (isInteractive(e.target)) el.classList.remove(styles.interactive);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerout", out, { passive: true });
    document.addEventListener("pointerdown", down);
    document.addEventListener("pointerup", up);
    window.addEventListener("blur", leave);
    document.addEventListener("mouseleave", leave);

    return () => {
      cancelAnimationFrame(s.raf);
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerout", out);
      document.removeEventListener("pointerdown", down);
      document.removeEventListener("pointerup", up);
      window.removeEventListener("blur", leave);
      document.removeEventListener("mouseleave", leave);
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={ref} className={`${styles.cursor} ${styles.hidden}`} aria-hidden="true" />;
}
