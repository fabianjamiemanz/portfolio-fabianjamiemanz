import type { Variants, Transition } from "framer-motion";

/* One motion language, reused everywhere. */
export const EASE = {
  editorial: [0.22, 1, 0.36, 1] as const,
  inout: [0.65, 0, 0.35, 1] as const,
  out: [0.16, 1, 0.3, 1] as const,
};

export const DUR = {
  fast: 0.35,
  med: 0.6,
  slow: 0.9,
};

export const springSoft: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 30,
  mass: 0.8,
};

/* Scroll-reveal: text and elements rise gently into place. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.med, ease: EASE.editorial },
  },
};

export const revealStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

/* Masked reveal for imagery. */
export const maskReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", scale: 1.04 },
  show: {
    clipPath: "inset(0% 0 0 0)",
    scale: 1,
    transition: { duration: DUR.slow, ease: EASE.editorial },
  },
};

/* Route enter transition. */
export const pageEnter: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.med, ease: EASE.editorial },
  },
};
