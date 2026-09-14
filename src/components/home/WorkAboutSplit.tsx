"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./WorkAboutSplit.module.css";

type Side = "work" | "about" | null;

export function WorkAboutSplit() {
  const router = useRouter();
  const [hovered, setHovered] = useState<Side>(null);

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <section className={styles.split} aria-label="Choose a path">
      <div className={styles.divider} aria-hidden="true" />

      <a
        href="/work"
        onClick={go("/work")}
        className={styles.side}
        data-dim={hovered === "about"}
        onMouseEnter={() => setHovered("work")}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered("work")}
        onBlur={() => setHovered(null)}
      >
        <span className={`meta ${styles.index}`}>The work — four projects</span>
        <span className={styles.word}>WORK</span>
        <span className={styles.desc}>
          Brand, neuroinclusive product design, mobile UX and concept work.
        </span>
        <span className={`meta ${styles.cue}`}>Enter →</span>
      </a>

      <a
        href="/about"
        onClick={go("/about")}
        className={styles.side}
        data-dim={hovered === "work"}
        onMouseEnter={() => setHovered("about")}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered("about")}
        onBlur={() => setHovered(null)}
      >
        <span className={`meta ${styles.index}`}>The person behind it</span>
        <span className={styles.word}>ABOUT</span>
        <span className={styles.desc}>
          From a childhood love of Minis to behavioural design. The short version.
        </span>
        <span className={`meta ${styles.cue}`}>Enter →</span>
      </a>
    </section>
  );
}
