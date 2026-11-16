"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import HeaderButton from "./HeaderButton";
import Tape from "@/components/collage/Tape";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/?scroll=about" },
  { label: "Project", href: "/project" },
  { label: "Blog", href: "/blog" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (label: string) => {
    if (label === "Project") return pathname.startsWith("/project");
    if (label === "Blog") return pathname.startsWith("/blog");
    if (label === "Home") return pathname === "/";
    return false;
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b-2 border-ink px-4 py-3 transition-all duration-300 sm:px-6 ${
        scrolled ? "bg-paper/90 backdrop-blur-md" : "bg-paper"
      }`}
    >
      <Link href="/" aria-label="Agus Narestha home">
        <span className="relative inline-block border-2 border-ink bg-butter px-3 py-1.5 font-display text-2xl font-extrabold uppercase tracking-tight shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5">
          <Tape
            tone="pink"
            rotate={-5}
            className="absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2"
          />
          Nar.
        </span>
      </Link>

      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-11 w-11 items-center justify-center border-2 border-ink bg-sheet shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5"
          aria-label="Open menu"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="hidden lg:block">
        <ul className="flex flex-row items-center gap-2">
          {navItems.map((item) => (
            <HeaderButton
              key={item.label}
              label={item.label}
              href={item.href}
              active={isActive(item.label)}
              onClick={(e) => {
                if (item.label === "About" && pathname === "/") {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({
                    behavior: reduceMotion ? "auto" : "smooth",
                  });
                }
              }}
            />
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 h-screen w-full border-b-2 border-ink bg-paper lg:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border-2 border-ink bg-sheet shadow-paper-sm"
              aria-label="Close menu"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>

            <ul className="flex h-full flex-col items-center justify-center gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="inline-block w-[200px] border-2 border-ink bg-sheet px-8 py-3 text-center font-display text-lg font-bold uppercase tracking-wide shadow-paper transition-transform duration-150 hover:-translate-y-0.5 hover:bg-butter"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
