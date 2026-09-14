"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./StickyCaseNav.module.css";

/* Small, unobtrusive orientation for a case study:
   NEON · 02 / 04 · ← WORK. Appears after the hero. */
export function StickyCaseNav({
  title,
  number,
  total,
}: {
  title: string;
  number: string;
  total: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y >= document.body.scrollHeight - 320;
      setVisible(y > window.innerHeight * 0.6 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`${styles.bar} ${visible ? styles.visible : ""}`}
      aria-hidden={!visible}
    >
      <span className={styles.title}>{title}</span>
      <span className={styles.sep}>·</span>
      <span className={styles.count}>
        {number} / {String(total).padStart(2, "0")}
      </span>
      <span className={styles.sep}>·</span>
      <Link href="/work" className={styles.back}>
        ← Work
      </Link>
    </div>
  );
}
