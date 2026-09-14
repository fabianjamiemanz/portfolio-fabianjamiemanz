import Image from "next/image";
import type { Media } from "@/content/types";
import styles from "./PhotoCollage.module.css";

/* Expanding-panels collage: hovering a photo widens it while the others
   slide aside. Pure CSS (flex-grow transition) — no JS. */
export function PhotoCollage({ items }: { items: Media[] }) {
  return (
    <div className={styles.collage}>
      {items.map((m) => (
        <div key={m.src} className={styles.panel} title={m.label ?? m.alt}>
          {m.placeholder ? null : (
            <Image
              className={styles.img}
              src={m.src}
              alt={m.alt}
              fill
              sizes="(max-width: 760px) 33vw, 20vw"
            />
          )}
        </div>
      ))}
    </div>
  );
}
