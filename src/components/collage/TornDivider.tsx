type TornDividerProps = {
  flip?: boolean;
  className?: string;
};

export default function TornDivider({
  flip = false,
  className = "",
}: TornDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`torn-divider ${flip ? "torn-divider-flip" : ""} ${className}`}
    />
  );
}
