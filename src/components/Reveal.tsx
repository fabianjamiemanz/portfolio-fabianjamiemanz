"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { reveal, revealStagger } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Stagger children that are themselves <Reveal.Item> or motion items. */
  stagger?: boolean;
  as?: "div" | "section" | "li" | "ul" | "figure";
  amount?: number;
  style?: React.CSSProperties;
  /** Forwarded data-* attributes (e.g. data-cols). */
  [key: `data-${string}`]: string | number | undefined;
};

export function Reveal({
  children,
  className,
  stagger,
  as = "div",
  amount = 0.25,
  style,
  ...rest
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    const Tag = as as React.ElementType;
    return (
      <Tag className={className} style={style} {...rest}>
        {children}
      </Tag>
    );
  }

  const variants: Variants = stagger ? revealStagger : reveal;

  return (
    <MotionTag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** A child item for use inside a staggered Reveal. */
export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "figure";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  if (reduce) {
    const Tag = as as React.ElementType;
    return <Tag className={className}>{children}</Tag>;
  }
  return (
    <MotionTag className={className} variants={reveal}>
      {children}
    </MotionTag>
  );
}
