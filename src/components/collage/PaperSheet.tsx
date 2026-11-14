import React from "react";

const toneClasses = {
  sheet: "bg-sheet",
  butter: "bg-butter",
  sky: "bg-sky",
  pink: "bg-pink-light",
  mint: "bg-mint-light",
} as const;

type PaperSheetProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: keyof typeof toneClasses;
  rotate?: number;
};

export default function PaperSheet({
  children,
  tone = "sheet",
  rotate = 0,
  className = "",
  style,
  ...rest
}: PaperSheetProps) {
  return (
    <div
      {...rest}
      className={`relative border-2 border-ink shadow-paper ${toneClasses[tone]} ${className}`}
      style={{
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
