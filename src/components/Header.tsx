"use client";

import React, { useState } from "react";
import HeaderButton from "./HeaderButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 md flex items-center justify-between p-6">
      <div className="text-2xl">
        <span className="text-3xl font-bold">Nar.</span>
      </div>
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-white lg:relative lg:bg-transparent lg:w-auto lg:block`}
      >
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <HeaderButton label="Home" color="#3cc4ce" />
          <HeaderButton label="About" color="#e6b448" />
          <HeaderButton label="Portfolio" color="#df548e" />
          <HeaderButton label="Contact" color="#2e8b57" />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
