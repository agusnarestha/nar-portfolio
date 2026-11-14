import React from "react";
import Link from "next/link";

type HeaderButtonProps = {
  label: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  active?: boolean;
};

const HeaderButton: React.FC<HeaderButtonProps> = ({
  label,
  href,
  onClick,
  active = false,
}) => {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={`inline-block border-2 border-ink px-4 py-1.5 font-body text-sm font-medium tracking-wide transition-all duration-150 hover:-translate-y-0.5 hover:bg-butter ${
          active ? "bg-highlight" : "bg-sheet"
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

export default HeaderButton;
