import React from "react";

type HeaderButtonProps = {
  label: string;
  color: string;
  href: string;
};

const HeaderButton: React.FC<HeaderButtonProps> = ({ label, color, href }) => {
  return (
    <li className="">
      <a
        href={href}
        style={{
          backgroundColor: color,
          marginBottom: "-3px",
          display: "inline-block",
          textAlign: "center",
        }}
        className={`px-8 py-2 border-2 border-black rounded shadow-custom text-black hover:shadow-customhover lg:w-auto w-[150px]`}
      >
        {label}
      </a>
    </li>
  );
};

export default HeaderButton;
