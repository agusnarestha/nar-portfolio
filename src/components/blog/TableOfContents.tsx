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
        <h2 className="mb-4 border-b border-dashed border-ink/30 pb-3 font-display text-sm font-bold uppercase tracking-widest text-ink">
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
                className={`block border-l-2 py-1.5 transition-all duration-150
                  ${isActive
                    ? "border-cobalt bg-highlight pl-3 font-medium text-ink"
                    : "border-transparent pl-3 text-ink-2 hover:border-ink/30 hover:text-ink"
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
