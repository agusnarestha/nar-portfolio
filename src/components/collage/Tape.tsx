type TapeTone = "yellow" | "pink" | "mint" | "sky" | "clear";

type TapeProps = {
  tone?: TapeTone;
  rotate?: number;
  className?: string;
};

export default function Tape({
  tone = "yellow",
  rotate = -3,
  className = "",
}: TapeProps) {
  return (
    <span
      aria-hidden="true"
      className={`tape tape-${tone} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    />
  );
}
