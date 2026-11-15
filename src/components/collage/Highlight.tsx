"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const toneClasses = {
  yellow: "highlight-yellow",
  pink: "highlight-pink",
  mint: "highlight-mint",
  sky: "highlight-sky",
} as const;

type HighlightProps = {
  children: React.ReactNode;
  tone?: keyof typeof toneClasses;
  className?: string;
};

export default function Highlight({
  children,
  tone = "yellow",
  className = "",
}: HighlightProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.mark
      className={`highlight bg-transparent ${toneClasses[tone]} ${className}`}
      initial={reduceMotion ? false : { backgroundSize: "0% 100%" }}
      whileInView={{ backgroundSize: "100% 100%" }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ backgroundRepeat: "no-repeat" }}
    >
      {children}
    </motion.mark>
  );
}
