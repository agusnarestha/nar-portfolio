import React from "react";

export type TornTone = "cobalt" | "butter" | "sky" | "pink";

const toneConfig: Record<TornTone, { fill: string; bg: string }> = {
  cobalt: { fill: "#2446F2", bg: "bg-cobalt" },
  butter: { fill: "#FFF7B8", bg: "bg-butter" },
  sky: { fill: "#D3E2FF", bg: "bg-sky" },
  pink: { fill: "#FFD9EC", bg: "bg-pink-light" },
};

const TEAR_HEIGHTS = [12, 7, 16, 9, 14, 19, 10, 6, 15, 11, 8, 17, 13, 9, 18, 7];
const STEPS = 72;
const STEP_WIDTH = 1200 / (STEPS - 1);

const tornPath =
  Array.from({ length: STEPS }, (_, index) => {
    const y = TEAR_HEIGHTS[index % TEAR_HEIGHTS.length];
    return `${index === 0 ? "M" : "L"}${Math.round(index * STEP_WIDTH)},${y}`;
  }).join(" ") + " L1200,48 L0,48 Z";

export function TornEdge({
  tone = "cobalt",
  className = "",
}: {
  tone?: TornTone;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-10 w-full drop-shadow-[0_1px_0_rgba(21,22,26,0.12)] sm:h-12 ${className}`}
    >
      <path d={tornPath} fill="#FFFFFF" transform="translate(0 -3)" />
      <path d={tornPath} fill={toneConfig[tone].fill} />
    </svg>
  );
}

type TornBandProps = {
  tone?: TornTone;
  children: React.ReactNode;
  className?: string;
};

export default function TornBand({
  tone = "cobalt",
  children,
  className = "",
}: TornBandProps) {
  return (
    <div className={`relative ${className}`}>
      <TornEdge tone={tone} />
      <div className={toneConfig[tone].bg}>
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-4 sm:px-8 sm:pb-16 sm:pt-6 [&>div]:mt-0">
          {children}
        </div>
      </div>
    </div>
  );
}
