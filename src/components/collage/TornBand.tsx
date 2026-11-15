import React from "react";

export type TornTone = "cobalt" | "butter" | "sky" | "pink";
type TornBase = TornTone | "paper" | "grid";

const toneConfig: Record<TornTone, { fill: string; bg: string }> = {
  cobalt: { fill: "#2446F2", bg: "bg-cobalt" },
  butter: { fill: "#FFF7B8", bg: "bg-butter" },
  sky: { fill: "#D3E2FF", bg: "bg-sky" },
  pink: { fill: "#FFD9EC", bg: "bg-pink-light" },
};

const baseFill: Record<TornBase, string> = {
  paper: "#EDF0F4",
  grid: "#F8FBFF",
  cobalt: "#2446F2",
  butter: "#FFF7B8",
  sky: "#D3E2FF",
  pink: "#FFD9EC",
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
  from = "paper",
  className = "",
}: {
  tone?: TornTone;
  from?: TornBase;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-10 w-full sm:h-12 ${className}`}
    >
      <rect width="1200" height="48" fill={baseFill[from]} />
      <path d={tornPath} fill="#FFFFFF" transform="translate(0 -3)" />
      <path d={tornPath} fill={toneConfig[tone].fill} />
    </svg>
  );
}

type TornBandProps = {
  tone?: TornTone;
  from?: TornBase;
  children: React.ReactNode;
  className?: string;
};

export default function TornBand({
  tone = "cobalt",
  from = "paper",
  children,
  className = "",
}: TornBandProps) {
  return (
    <div className={`relative ${className}`}>
      <TornEdge tone={tone} from={from} />
      <div className={toneConfig[tone].bg}>
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-4 sm:px-8 sm:pb-16 sm:pt-6 [&>div]:mt-0">
          {children}
        </div>
      </div>
    </div>
  );
}
