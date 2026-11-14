import React from "react";

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
  return (
    <span
      className={`stamp ${toneClasses[tone]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
