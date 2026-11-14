import React from "react";

type HandNoteProps = {
  children: React.ReactNode;
  rotate?: number;
  tone?: "ink" | "light";
  className?: string;
};

export default function HandNote({
  children,
  rotate = -2,
  tone = "ink",
  className = "",
}: HandNoteProps) {
  const toneClass = tone === "light" ? "text-sheet" : "text-ink-2";

  return (
    <span
      className={`inline-block font-hand ${toneClass} ${className}`}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      {children}
    </span>
  );
}
