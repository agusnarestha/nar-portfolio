"use client";

import { useEffect, useState } from "react";

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const matches = Array.from(content.matchAll(headingRegex));
    const extractedHeadings = matches.map((match) => ({
      level: match[1].length,
      text: match[2],
      id: match[2].toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    }));
    setHeadings(extractedHeadings);

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    // Observe all headings
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <nav className="toc">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        Table of Contents
      </h2>
      <ul className="space-y-2 text-sm sm:text-base">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: `${(heading.level - 1) * 1}rem` }}
            className="transition-colors duration-200"
          >
            <a
              href={`#${heading.id}`}
              className={`block py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                activeId === heading.id
                  ? "text-blue-600 dark:text-blue-400 font-medium bg-gray-100 dark:bg-gray-700"
                  : "text-gray-600 dark:text-gray-300"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
