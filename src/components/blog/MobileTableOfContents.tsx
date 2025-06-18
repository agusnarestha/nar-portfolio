"use client";

import { useState } from "react";
import TableOfContents from "./TableOfContents";

interface MobileTableOfContentsProps {
  content: string;
}

const MobileTableOfContents = ({ content }: MobileTableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-black dark:border-white font-medium"
      >
        <span className="text-gray-900 dark:text-white">Table of Contents</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-900 dark:text-white transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
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
      <div
        className={`mt-2 transition-all duration-200 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-black dark:border-white">
          <TableOfContents content={content} />
        </div>
      </div>
    </div>
  );
};

export default MobileTableOfContents;
