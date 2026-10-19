"use client";

import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/?scroll=about" },
  { label: "Project", href: "/project" },
  { label: "Blog", href: "/blog" },
];

const socialLinks = [
  {
    href: "https://github.com/agusnarestha",
    label: "GitHub",
    color: "#f97316",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/agusnarestha",
    label: "LinkedIn",
    color: "#06b6d4",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/agusnarestha",
    label: "Instagram",
    color: "#ec4899",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="-mx-4 sm:-mx-8 mt-20 sm:mt-24 relative">
      {/* Zigzag decorative top border */}
      <div className="zigzag-top border-t-[3px] border-black">
        <div className="bg-[#fef3c7]">
          {/* Main footer content */}
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-10">
            {/* Top row: CTA + Back to Top */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              {/* CTA Card */}
              <motion.div
                className="neo-card bg-white border-[3px] border-black shadow-[6px_6px_0_#000000] p-5 flex-1 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex-shrink-0 bg-[#22c55e] border-[3px] border-black flex items-center justify-center shadow-[3px_3px_0_#000000]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 7h-9" />
                      <path d="M14 17H5" />
                      <circle cx="17" cy="17" r="3" />
                      <circle cx="7" cy="7" r="3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-base uppercase tracking-tight mb-1">
                      Let&apos;s Work Together
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Got a project in mind? I&apos;m open to new opportunities and collaborations.
                    </p>
                    <a
                      href="mailto:agusnaresthaa@gmail.com"
                      className="inline-flex items-center gap-2 bg-[#fbbf24] border-[3px] border-black px-4 py-2 font-display font-bold text-sm uppercase shadow-[4px_4px_0_#000000] hover:shadow-[1px_1px_0_#000000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Get In Touch
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Back to top button */}
              <motion.button
                onClick={scrollToTop}
                className="hidden md:flex flex-col items-center gap-2 bg-white border-[3px] border-black px-4 py-3 font-display font-bold text-xs uppercase tracking-wide shadow-[4px_4px_0_#000000] hover:shadow-[1px_1px_0_#000000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 cursor-pointer self-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m12 8.414-5.293 5.293-1.414-1.414L12 5.586l6.707 6.707-1.414 1.414z" />
                </svg>
                Back to Top
              </motion.button>
            </div>

            {/* Middle row: Nav + Social */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
              {/* Navigation */}
              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-widest text-gray-500 mb-3">
                  Navigation
                </h4>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="font-display font-bold text-sm uppercase tracking-wide hover:underline decoration-2 underline-offset-4 transition-all"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-widest text-gray-500 mb-3">
                  Follow Me
                </h4>
                <div className="flex flex-row gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 flex items-center justify-center border-[3px] border-black shadow-[4px_4px_0_#000000] hover:shadow-[1px_1px_0_#000000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
                      style={{ backgroundColor: social.color }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Status + Info */}
              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-widest text-gray-500 mb-3">
                  Status
                </h4>
                <div className="inline-flex items-center gap-2 bg-[#dcfce7] border-[3px] border-black px-3 py-1.5 shadow-[3px_3px_0_#000000]">
                  <span className="w-2.5 h-2.5 bg-[#22c55e] rounded-full border-2 border-black animate-pulse" />
                  <span className="font-mono font-bold text-xs uppercase">Open to Work</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t-[3px] border-black mb-4" />

            {/* Bottom row: Copyright + Tech */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <motion.p
                className="font-display font-bold text-[11px] sm:text-xs uppercase tracking-widest text-center sm:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                © {new Date().getFullYear()} Agus Narestha · Made With ❤️
              </motion.p>

              <div className="flex items-center gap-2 justify-center sm:justify-end">
                <span className="font-mono text-[10px] text-gray-500 uppercase">Built with</span>
                {[
                  { label: "Next.js", color: "#000" },
                  { label: "Tailwind", color: "#06b6d4" },
                ].map((tech) => (
                  <span
                    key={tech.label}
                    className="border-2 border-black font-mono font-bold text-[10px] px-1.5 py-0.5 text-white"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile back to top */}
        <div className="md:hidden px-4 pb-6">
          <button
            onClick={scrollToTop}
            className="w-full flex items-center justify-center gap-2 bg-white border-[3px] border-black px-4 py-3 font-display font-bold text-xs uppercase tracking-wide shadow-[4px_4px_0_#000000] hover:shadow-[1px_1px_0_#000000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="m12 8.414-5.293 5.293-1.414-1.414L12 5.586l6.707 6.707-1.414 1.414z" />
            </svg>
            Back to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
