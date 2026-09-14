"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, DUR } from "@/lib/motion";

/* App-router template re-mounts on navigation — used for a subtle,
   consistent route-enter fade. Reduced motion renders immediately. */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DUR.med, ease: EASE.editorial }}
    >
      {children}
    </motion.div>
  );
}
