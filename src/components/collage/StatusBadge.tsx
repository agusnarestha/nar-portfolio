import React from "react";

type StatusTone = "mint" | "cobalt" | "tomato";

const toneClasses: Record<StatusTone, { text: string; dot: string }> = {
  mint: { text: "text-mint-dark", dot: "bg-mint-dark" },
  cobalt: { text: "text-cobalt", dot: "bg-cobalt" },
  tomato: { text: "text-tomato-dark", dot: "bg-tomato" },
};

type StatusBadgeProps = {
  children: React.ReactNode;
  tone?: StatusTone;
  pulse?: boolean;
  className?: string;
};

export default function StatusBadge({
  children,
  tone = "mint",
  pulse = true,
  className = "",
}: StatusBadgeProps) {
  const { text, dot } = toneClasses[tone];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-wide ${text} ${className}`}
    >
      <span className="relative flex h-2 w-2 items-center justify-center">
        {pulse && (
          <span
            className={`absolute h-2 w-2 rounded-full ${dot} opacity-40 motion-safe:animate-ping`}
          />
        )}
        <span className={`relative h-2 w-2 rounded-full ${dot}`} />
      </span>
      {children}
    </span>
  );
}
