"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Media } from "@/content/types";
import styles from "./PhotoScatter.module.css";

/* Hand-placed scatter positions (%), sizes (%) and rotations (deg).
   Deliberately uneven — no grid. */
const POS = [
  { l: 3, t: 6, w: 14, r: -5 },
  { l: 19, t: 15, w: 12, r: 4 },
  { l: 33, t: 3, w: 15, r: -3 },
  { l: 49, t: 13, w: 12, r: 6 },
  { l: 63, t: 4, w: 14, r: -4 },
  { l: 79, t: 13, w: 13, r: 5 },
  { l: 6, t: 50, w: 13, r: 4 },
  { l: 22, t: 57, w: 12, r: -6 },
  { l: 40, t: 49, w: 14, r: 3 },
  { l: 58, t: 56, w: 13, r: -3 },
  { l: 75, t: 50, w: 14, r: 5 },
];

export function PhotoScatter({ items }: { items: Media[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const go = (d: number) =>
    setOpen((o) => (o === null ? o : (o + d + items.length) % items.length));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <div className={styles.scatter}>
        {items.map((m, i) => {
          const p = POS[i % POS.length];
          const style = {
            "--l": `${p.l}%`,
            "--t": `${p.t}%`,
            "--w": `${p.w}%`,
            "--r": `${p.r}deg`,
          } as CSSProperties;
          return (
            <button
              key={m.src}
              className={styles.item}
              style={style}
              onClick={() => setOpen(i)}
              aria-label={`Open photo: ${m.alt}`}
              data-cursor
            >
              <Image
                className={styles.thumb}
                src={m.src}
                alt={m.alt}
                width={m.w}
                height={m.h}
                sizes="18vw"
              />
            </button>
          );
        })}
      </div>

      {open !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photography"
          onClick={() => setOpen(null)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <button
            className={styles.close}
            onClick={() => setOpen(null)}
            aria-label="Close"
            data-cursor
          >
            CLOSE ✕
          </button>
          <button
            className={`${styles.nav} ${styles.prev}`}
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Previous photo"
            data-cursor
          >
            ←
          </button>
          <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
            <Image
              className={styles.lightImg}
              src={items[open].src}
              alt={items[open].alt}
              width={items[open].w}
              height={items[open].h}
              sizes="92vw"
              priority
            />
          </figure>
          <button
            className={`${styles.nav} ${styles.next}`}
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Next photo"
            data-cursor
          >
            →
          </button>
          <span className={styles.counter}>
            {open + 1} / {items.length}
          </span>
        </div>
      )}
    </>
  );
}
