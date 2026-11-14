"use client";

import React from "react";
import Link from "next/link";
import Stamp from "../collage/Stamp";
import Tape from "../collage/Tape";
import TornDivider from "../collage/TornDivider";
import HandNote from "../collage/HandNote";
import { handCopy } from "@/lib/hand-copy";

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
    tone: "bg-sheet",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/agusnarestha",
    label: "LinkedIn",
    tone: "bg-sky",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/agusnarestha",
    label: "Instagram",
    tone: "bg-pink-light",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
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
    <div className="relative mt-20 sm:mt-24">
      <TornDivider />
      <div className="border-t-2 border-ink bg-butter">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-10">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="relative max-w-lg flex-1 border-2 border-ink bg-sheet p-4 shadow-paper sm:p-5">
              <Tape
                tone="pink"
                rotate={-4}
                className="absolute -top-3 left-6 h-4 w-16"
              />
              <div className="absolute right-4 top-4 rotate-3">
                <Stamp tone="cobalt">postcard</Stamp>
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="w-10 flex-shrink-0 border-2 border-ink bg-cobalt p-2 shadow-paper-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 7h-9" />
                    <path d="M14 17H5" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 font-display text-sm font-extrabold uppercase tracking-tight text-ink sm:text-base">
                    Let&apos;s Work Together
                  </h3>
                  <p className="mb-3 font-body text-xs leading-relaxed text-ink-2 sm:text-sm">
                    Got a project in mind? I&apos;m open to new opportunities
                    and collaborations.
                  </p>
                  <a
                    href="mailto:agusnaresthaa@gmail.com"
                    className="inline-flex items-center gap-2 border-2 border-ink bg-cobalt px-3 py-2 font-body text-xs font-medium uppercase tracking-wide text-white shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5 sm:px-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="hidden flex-col items-center gap-2 self-center border-2 border-ink bg-sheet px-4 py-3 font-display text-xs font-bold uppercase tracking-wide text-ink shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5 md:flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m12 8.414-5.293 5.293-1.414-1.414L12 5.586l6.707 6.707-1.414 1.414z" />
              </svg>
              Back to Top
            </button>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-3">
                Navigation
              </h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-body text-sm font-medium text-ink underline-offset-4 transition-all hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-3">
                Follow Me
              </h4>
              <div className="flex flex-row gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex h-10 w-10 items-center justify-center border-2 border-ink text-ink shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5 ${social.tone}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-3">
                Status
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                <Stamp tone="mint">Open to Work</Stamp>
                <HandNote rotate={-3} className="text-sm">
                  {handCopy.footer}
                </HandNote>
              </div>
            </div>
          </div>

          <div className="mb-4 border-t border-dashed border-ink/30" />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-center font-mono text-[11px] uppercase tracking-widest text-ink-2 sm:text-left sm:text-xs">
              © {new Date().getFullYear()} Agus Narestha · Made With ❤️
            </p>

            <div className="flex items-center justify-center gap-2 sm:justify-end">
              <span className="font-mono text-[10px] uppercase text-ink-3">
                Built with
              </span>
              {[
                { label: "Next.js", tone: "bg-ink text-sheet" },
                { label: "Tailwind", tone: "bg-sky text-ink" },
              ].map((tech) => (
                <span
                  key={tech.label}
                  className={`border border-ink px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase ${tech.tone}`}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-6 md:hidden">
          <button
            onClick={scrollToTop}
            className="flex w-full items-center justify-center gap-2 border-2 border-ink bg-sheet px-4 py-3 font-display text-xs font-bold uppercase tracking-wide text-ink shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
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
