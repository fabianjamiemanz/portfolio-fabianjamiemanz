"use client";

import { useReducedMotion } from "framer-motion";
import styles from "./Figure.module.css";

/* A looping, muted video that fills the frame's media area.
   Autoplays for motion-OK users; for reduced-motion users it shows the
   first frame with native controls so playback is opt-in (never hover-gated). */
export function FrameVideo({
  src,
  label,
  ratio,
}: {
  src: string;
  label: string;
  ratio: string;
}) {
  const reduce = useReducedMotion();
  return (
    <video
      className={styles.video}
      style={{ aspectRatio: ratio }}
      src={src}
      autoPlay={!reduce}
      loop
      muted
      playsInline
      controls={!!reduce}
      preload="metadata"
      aria-label={label}
    />
  );
}
