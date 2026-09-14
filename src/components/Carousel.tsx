"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Slide } from "@/content/photos";
import styles from "./Carousel.module.css";

/* Auto-advancing crossfade carousel. Pauses when the tab is hidden or the
   element is scrolled out of view. For reduced-motion users it doesn't
   auto-advance — the dots stay as manual controls. */
export function Carousel({
  slides,
  interval = 4200,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  // Pause when off-screen.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance.
  useEffect(() => {
    if (reduce || !inView) return;
    const id = setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [reduce, inView, interval, slides.length]);

  return (
    <div className={styles.wrap} ref={ref}>
      <div
        className={styles.frame}
        role="group"
        aria-roledescription="carousel"
        aria-label="Photography by Jamie"
      >
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={styles.slide}
            data-active={i === index}
            aria-hidden={i !== index}
          >
            <Image
              className={styles.img}
              src={s.src}
              alt={s.alt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className={styles.bar}>
        <span className={styles.location} aria-live="polite">
          {slides[index].location}
        </span>
        <div className={styles.dots}>
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              className={styles.dot}
              data-active={i === index}
              aria-label={`Show photo ${i + 1} of ${slides.length}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              data-cursor
            />
          ))}
        </div>
      </div>
    </div>
  );
}
