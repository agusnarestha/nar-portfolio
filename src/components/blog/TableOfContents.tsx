"use client";

import { useEffect, useState, useCallback } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  onHeadingClick?: () => void;
  showTitle?: boolean;
}

function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const matches = Array.from(content.matchAll(headingRegex));
  return matches.map((match) => ({
    level: match[1].length,
    text: match[2],
    id: match[2].toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  }));
}

export default function TableOfContents({
  content,
  onHeadingClick,
  showTitle = true,
}: TableOfContentsProps) {
  const [headings] = useState<Heading[]>(() => extractHeadings(content));
  const [activeId, setActiveId] = useState<string>("");

  const handleClick = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        // Update active state immediately for responsiveness
        setActiveId(id);
      }
      onHeadingClick?.();
    },
    [onHeadingClick]
  );

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -75% 0px" }
    );

    // Small delay to ensure headings are rendered in the DOM
    const timer = setTimeout(() => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) observer.observe(element);
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [headings]);

  if (headings.length === 0) return null;

  // Find the minimum heading level for proper indent calculation
  const minLevel = Math.min(...headings.map((h) => h.level));

  return (
    <nav aria-label="Table of contents">
      {showTitle && (
        <h2 className="font-black text-sm uppercase tracking-widest mb-4 pb-3 border-b-2 border-black">
          Table of Contents
        </h2>
      )}
      <ul className="space-y-0.5 text-sm">
        {headings.map((heading) => {
          const indent = heading.level - minLevel;
          const isActive = activeId === heading.id;

          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`block py-1.5 border-l-[3px] transition-all duration-150
                  ${isActive
                    ? "border-[#e6b448] bg-[#fffbe6] text-black font-bold pl-3"
                    : "border-transparent text-[#525252] hover:text-black hover:border-[#ccc] pl-3"
                  }`}
                style={{ paddingLeft: `${indent * 0.75 + 0.75}rem` }}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
