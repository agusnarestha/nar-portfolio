"use client";

import React, { useState, useEffect } from "react";
import HeaderButton from "./HeaderButton";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stagger children for mobile menu
  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4
        border-b-[3px] border-black transition-all duration-300
        ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_3px_0px_0px_#000000]"
          : "bg-white shadow-[0_3px_0px_0px_#000000]"
        }`}
    >
      {/* Logo */}
      <div className="text-2xl">
        <a href="/">
          <motion.span
            className="text-2xl font-display font-bold uppercase tracking-tight
              border-[3px] border-black px-3 py-1.5
              bg-[#fbbf24]
              shadow-[6px_6px_0_#000000]
              inline-block cursor-pointer"
            whileHover={{ rotate: -5, scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Nar.
          </motion.span>
        </a>
      </div>

      {/* Hamburger (mobile) */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-12 h-12 border-[3px] border-black bg-white shadow-[6px_6px_0_#000000] hover:shadow-[2px_2px_0_#000000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150"
          aria-label="Open menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Desktop nav links */}
      <div className="hidden lg:block">
        <ul className="flex flex-row items-center space-x-4">
          <HeaderButton label="Home" color="#fbbf24" href="/" />
          <HeaderButton
            label="About"
            color="#3b82f6"
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
          <HeaderButton label="Project" color="#ec4899" href="/project" />
          <HeaderButton label="Blog" color="#22c55e" href="/blog" />
        </ul>
      </div>

      {/* Mobile menu overlay with staggered animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-[#fef9c3] border-[3px] border-black lg:hidden z-50"
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 w-12 h-12 border-[3px] border-black bg-white shadow-[6px_6px_0_#000000] hover:shadow-[2px_2px_0_#000000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </motion.button>

            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center justify-center space-y-6 h-full"
            >
              {[
                { label: "Home", color: "#fbbf24", href: "/" },
                { label: "About", color: "#3b82f6", href: "/?scroll=about" },
                { label: "Project", color: "#ec4899", href: "/project" },
                { label: "Blog", color: "#22c55e", href: "/blog" },
              ].map((item) => (
                <motion.li key={item.label} variants={menuItemVariants}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{ backgroundColor: item.color }}
                    className="inline-block px-8 py-4 border-[3px] border-black font-display font-bold text-black text-lg uppercase tracking-wide
                      shadow-[6px_6px_0px_0px_#000000]
                      hover:shadow-[2px_2px_0px_0px_#000000]
                      hover:translate-x-[4px] hover:translate-y-[4px]
                      transition-all duration-150
                      w-[200px] text-center"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
