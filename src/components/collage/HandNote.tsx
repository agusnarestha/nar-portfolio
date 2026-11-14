import React from "react";

type HandNoteProps = {
  children: React.ReactNode;
  rotate?: number;
  className?: string;
};

export default function HandNote({
  children,
  rotate = -2,
  className = "",
}: HandNoteProps) {
  return (
    <span
      className={`inline-block font-hand text-ink-2 ${className}`}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      {children}
    </span>
  );
}
