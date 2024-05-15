import React from "react";

type HeaderButtonProps = {
  label: string;
  color: string;
};

const HeaderButton: React.FC<HeaderButtonProps> = ({ label, color }) => {
  return (
    <li className="">
      <a
        href="#"
        style={{
          backgroundColor: color,
          marginBottom: "-3px",
        }}
        className={`px-8 py-2 border-2 border-black rounded shadow-custom text-black hover:shadow-customhover`}
      >
        {label}
      </a>
    </li>
  );
};

export default HeaderButton;
