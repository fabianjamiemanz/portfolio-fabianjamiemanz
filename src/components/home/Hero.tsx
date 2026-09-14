"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { EASE, DUR } from "@/lib/motion";
import styles from "./Hero.module.css";

const GREETING = ["Hi, my name is Fabian Jamie.", "But you can call me Jamie."];
const BEAT_MS = 1600;

const TITLE = [
  { text: "Digital Product", dim: false },
  { text: "Designer", dim: false },
  { text: "focused on human-centered", dim: true },
  { text: "experiences.", dim: true },
];

const KEY = "jamie:greeted";

export function Hero() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"title" | "greeting">("title");
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    let greeted = false;
    try {
      greeted = localStorage.getItem(KEY) === "1";
    } catch {
      /* no-op */
    }
    const mReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!greeted && !mReduce) setPhase("greeting");
  }, []);

  useEffect(() => {
    if (phase !== "greeting") return;
    const t = setTimeout(() => {
      if (beat < GREETING.length - 1) {
        setBeat((b) => b + 1);
      } else {
        try {
          localStorage.setItem(KEY, "1");
        } catch {
          /* no-op */
        }
        setPhase("title");
      }
    }, BEAT_MS);
    return () => clearTimeout(t);
  }, [phase, beat]);

  const show = phase === "title";

  // The resolved layout is always mounted (reserving its space), so nothing
  // is pushed. The greeting rides on top as an overlay; the title + support
  // reveal together as one coordinated sequence when it resolves.
  const lineAnim = (i: number) =>
    reduce
      ? { animate: { y: "0%" } }
      : {
          initial: { y: "110%" },
          animate: { y: show ? "0%" : "110%" },
          transition: { duration: DUR.slow, ease: EASE.editorial, delay: show ? i * 0.09 : 0 },
        };

  const softIn = (d: number) =>
    reduce
      ? { animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: show ? 1 : 0, y: show ? 0 : 16 },
          transition: { duration: DUR.med, ease: EASE.editorial, delay: show ? d : 0 },
        };

  return (
    <section className={`shell ${styles.hero}`} aria-label="Introduction">
      <h1 className={styles.headline}>
        <span className="sr-only">
          Fabian Jamie Manz — Digital Product Designer focused on human-centered
          experiences.
        </span>

        <span className={styles.titleWrap} aria-hidden="true">
          {TITLE.map((l, i) => (
            <span key={l.text} className={styles.lineMask}>
              <motion.span
                className={`${styles.lineInner} ${l.dim ? styles.dim : ""}`}
                {...lineAnim(i)}
              >
                {l.text}
              </motion.span>
            </span>
          ))}
        </span>

        <AnimatePresence>
          {!show && (
            <motion.span
              className={styles.greetingOverlay}
              aria-hidden="true"
              exit={{ opacity: 0, transition: { duration: 0.4, ease: EASE.editorial } }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={beat}
                  className={styles.greetingLine}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: EASE.editorial }}
                >
                  {GREETING[beat]}
                </motion.span>
              </AnimatePresence>
            </motion.span>
          )}
        </AnimatePresence>
      </h1>

      <motion.p className={styles.support} {...softIn(0.45)}>
        Blending behavioral design, UX/UI &amp; visual storytelling.
      </motion.p>

      <motion.div className={styles.bottom} {...softIn(0.6)}>
        <span className={`meta ${styles.scroll}`}>
          Scroll to explore <span className={styles.arrow}>↓</span>
        </span>
        <span className="meta">
          {site.location} — {site.year}
        </span>
      </motion.div>
    </section>
  );
}
