import Tape from "./Tape";

type TapeTone = "yellow" | "pink" | "mint" | "sky";

type TapeDividerProps = {
  tone?: TapeTone;
  flip?: boolean;
  className?: string;
};

export default function TapeDivider({
  tone = "yellow",
  flip = false,
  className = "",
}: TapeDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex h-7 items-center justify-center ${className}`}
    >
      <span className="absolute inset-x-0 top-1/2 border-t border-dashed border-ink/25" />
      <Tape
        tone={tone}
        rotate={flip ? 2 : -2}
        className="relative h-4 w-32 sm:w-44"
      />
    </div>
  );
}
