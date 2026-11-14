"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const toneClasses = {
  tomato: "stamp-tomato",
  mint: "stamp-mint",
  cobalt: "stamp-cobalt",
} as const;

type StampProps = {
  children: React.ReactNode;
  tone?: keyof typeof toneClasses;
  rotate?: number;
  className?: string;
};

export default function Stamp({
  children,
  tone = "tomato",
  rotate = -3,
  className = "",
}: StampProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={`stamp ${toneClasses[tone]} ${className}`}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, scale: 1.35, rotate: rotate - 3 }
      }
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}
