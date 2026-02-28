"use client";

import React, { useState } from "react";
import HeaderButton from "./HeaderButton";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white border-b-2 border-black shadow-[0_2px_0px_0px_#000]">
      {/* Logo */}
      <div className="text-2xl">
        <span
          className="text-2xl font-black uppercase tracking-tight
            border-2 border-black px-3 py-1
            bg-[#3cc4ce]
            shadow-[3px_3px_0_#000]
            inline-block"
        >
          Nar.
        </span>
      </div>

      {/* Hamburger (mobile) */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-10 h-10 border-2 border-black bg-white shadow-[3px_3px_0_#000] hover:shadow-[1px_1px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-100"
          aria-label="Open menu"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <div
        className={`${isOpen ? "block" : "hidden"
          } fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-[#fffbe6] border-2 border-black lg:relative lg:bg-transparent lg:border-none lg:shadow-none lg:w-auto lg:h-auto lg:block`}
      >
        {/* Close button (mobile) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 lg:hidden w-10 h-10 border-2 border-black bg-white shadow-[3px_3px_0_#000] hover:shadow-[1px_1px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-100 flex items-center justify-center"
          aria-label="Close menu"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>

        <ul className="flex flex-col lg:flex-row items-center justify-center space-y-6 h-full lg:space-y-0 lg:space-x-3 lg:h-auto">
          <HeaderButton label="Home" color="#3cc4ce" href="/" />
          <HeaderButton
            label="About"
            color="#e6b448"
            href="/?scroll=about"
            onClick={(e) => {
              const pathname = window.location.pathname;
              if (pathname === "/") {
                e.preventDefault();
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
          <HeaderButton label="Project" color="#df548e" href="/project" />
          <HeaderButton label="Blog" color="#a8e6a3" href="/blog" />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
