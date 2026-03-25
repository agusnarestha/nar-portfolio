"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import TableOfContents from "./TableOfContents";

interface MobileTableOfContentsProps {
  content: string;
}

const MobileTableOfContents = ({ content }: MobileTableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="lg:hidden mb-8">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3
          bg-white border-2 border-black font-black text-xs uppercase tracking-widest
          shadow-[4px_4px_0_#000]
          hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]
          active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
          transition-all duration-100
          `}
      >
        <span className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Table of Contents
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Expandable content */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          ref={contentRef}
          className="bg-white border-2 border-black p-4 mt-[-4px]
            shadow-[4px_4px_0_#000]"
        >
          <TableOfContents
            content={content}
            onHeadingClick={handleClose}
            showTitle={false}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileTableOfContents;
