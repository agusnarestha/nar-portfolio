type PushpinProps = {
  className?: string;
  rotate?: number;
};

export default function Pushpin({
  className = "",
  rotate = -8,
}: PushpinProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none inline-block ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <svg
        viewBox="0 0 40 44"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 27L20 41"
          stroke="#444A57"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.3"
        />
        <path
          d="M20 25L20 39"
          stroke="#69707F"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect
          x="15.5"
          y="21"
          width="9"
          height="5"
          rx="2.5"
          fill="#C4CAD5"
          stroke="#15161A"
          strokeWidth="1.2"
        />
        <ellipse cx="21" cy="19" rx="10" ry="8" fill="#C2341A" opacity="0.5" />
        <path
          d="M20 2c-7.2 0-12 5.2-12 12 0 6.9 5.4 12 12 12s12-5.1 12-12c0-6.8-4.8-12-12-12Z"
          fill="#FF5130"
          stroke="#15161A"
          strokeWidth="1.5"
        />
        <path
          d="M13.5 8.8c-1.6 2-2.4 4.3-2.4 6.8"
          stroke="#FFE1DA"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.9"
        />
        <circle cx="14.5" cy="9.5" r="1.8" fill="#FFF7B8" opacity="0.9" />
      </svg>
    </span>
  );
}
