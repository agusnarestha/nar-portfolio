import React from "react";

type HeaderButtonProps = {
  label: string;
  color: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const HeaderButton: React.FC<HeaderButtonProps> = ({
  label,
  color,
  href,
  onClick,
}) => {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="inline-block px-6 py-2 border-2 border-black font-bold text-black text-sm uppercase tracking-wide
          shadow-[4px_4px_0px_0px_#000]
          hover:shadow-[2px_2px_0px_0px_#000]
          hover:translate-x-[2px] hover:translate-y-[2px]
          transition-all duration-100
          lg:w-auto w-[150px] text-center"
      >
        {label}
      </a>
    </li>
  );
};

export default HeaderButton;
