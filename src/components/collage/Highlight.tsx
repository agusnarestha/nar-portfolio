import React from "react";

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
  return (
    <mark className={`highlight bg-transparent ${toneClasses[tone]} ${className}`}>
      {children}
    </mark>
  );
}
