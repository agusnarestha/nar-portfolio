import React from "react";
import { motion } from "framer-motion";

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
      <motion.a
        href={href}
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="inline-block px-6 py-2.5 border-[3px] border-black font-display font-bold text-black text-sm uppercase tracking-wide
          shadow-[6px_6px_0px_0px_#000000]
          hover:shadow-[2px_2px_0px_0px_#000000]
          hover:translate-x-[4px] hover:translate-y-[4px]
          transition-all duration-150
          lg:w-auto w-[150px] text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {label}
      </motion.a>
    </li>
  );
};

export default HeaderButton;
