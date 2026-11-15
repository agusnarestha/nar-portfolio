import React from "react";

const toneClasses = {
  butter: "bg-butter",
  pink: "bg-pink-light",
  mint: "bg-mint-light",
  sky: "bg-sky",
  paper: "bg-paper",
} as const;

type TagProps = {
  children: React.ReactNode;
  tone?: keyof typeof toneClasses;
  className?: string;
};

export default function Tag({
  children,
  tone = "butter",
  className = "",
}: TagProps) {
  return (
    <span
      className={`inline-flex items-center border border-ink px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
