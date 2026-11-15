"use client";

import React, { useId, useState } from "react";
import PaperSheet from "./collage/PaperSheet";
import Pushpin from "./collage/Pushpin";
import StatusBadge from "./collage/StatusBadge";
import Tag from "./collage/Tag";
import Tape from "./collage/Tape";
import { handCopy } from "@/lib/hand-copy";

export type Position = {
  job: string;
  date: string;
  duration?: string;
  description: string[];
};

export type TimelineCompanyProps = {
  company: string;
  positions: Position[];
};

type CompanyTone = "cobalt" | "mint" | "tomato";

const PositionCard: React.FC<Position & { isLast: boolean }> = ({
  job,
  date,
  duration,
  description,
  isLast,
}) => {
  const extractTechStack = (descriptions: string[]): string[] => {
    const techMap: { [key: string]: string } = {
      Laravel: "Laravel",
      "Nuxt.js": "Nuxt.js",
      Strapi: "Strapi",
      "Express.js": "Express.js",
      Wordpress: "WordPress",
      Figma: "Figma",
      PostgreSQL: "PostgreSQL",
      Bootstrap: "Bootstrap",
      Heroku: "Heroku",
      "Google Cloud": "GCP",
      BigQuery: "BigQuery",
      "n8n": "n8n",
    };

    const techs: string[] = [];
    descriptions.forEach((desc) => {
      Object.keys(techMap).forEach((tech) => {
        if (desc.includes(tech) && !techs.includes(techMap[tech])) {
          techs.push(techMap[tech]);
        }
      });
    });
    return techs;
  };

  const techStack = extractTechStack(description);
  const isCurrent = date.toLowerCase().includes("present");
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const hasMore = description.length > 2;
  const visibleDescription = expanded ? description : description.slice(0, 2);

  return (
    <div className="relative flex gap-3 sm:gap-4">
      <div className="flex flex-shrink-0 flex-col items-center">
        {!isLast && (
          <div className="mt-4 flex-1 border-l-2 border-dashed border-ink/25" />
        )}
      </div>

      <div className="relative flex-1 pb-6">
        <Pushpin
          rotate={-14}
          className="absolute -left-5 -top-5 z-20 h-10 w-10 drop-shadow-[0_2px_1px_rgba(21,22,26,0.25)]"
        />
        <PaperSheet className="p-4 pl-6 sm:p-5 sm:pl-7">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-display text-sm font-bold uppercase leading-tight tracking-tight text-ink sm:text-base lg:text-lg">
                {job}
              </h3>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wide text-ink-2 sm:text-xs">
                  {date}
                </span>
                {duration ? <Tag tone="paper">{duration}</Tag> : null}
                {isCurrent ? <StatusBadge>{handCopy.current}</StatusBadge> : null}
              </div>
            </div>
          </div>

          {description.length > 0 && (
            <>
              <ul
                id={listId}
                className="mt-3 space-y-1.5 border-t border-dashed border-ink/30 pt-3 sm:space-y-2"
              >
                {visibleDescription.map((line, index) => (
                  <li
                    key={index}
                    className="flex gap-2 text-xs leading-relaxed text-ink-2 sm:text-sm"
                  >
                    <span className="mt-0.5 flex-shrink-0 font-bold text-ink">
                      ▸
                    </span>
                    <span className="flex-1">{line}</span>
                  </li>
                ))}
              </ul>
              {hasMore && (
                <button
                  type="button"
                  onClick={() => setExpanded((value) => !value)}
                  aria-expanded={expanded}
                  aria-controls={listId}
                  className="mt-2 inline-flex items-center gap-1 font-hand text-sm text-ink-2 underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  {expanded
                    ? "show less"
                    : `read more (+${description.length - 2})`}
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      expanded ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              )}
            </>
          )}

          {techStack.length > 0 && (
            <div className="mt-3 border-t border-dashed border-ink/30 pt-3">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-ink-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <Tag key={tech} tone="butter">
                    {tech}
                  </Tag>
                ))}
              </div>
            </div>
          )}
        </PaperSheet>
      </div>
    </div>
  );
};

const Timeline: React.FC<TimelineCompanyProps> = ({ company, positions }) => {
  const companyTones: { [key: string]: CompanyTone } = {
    "Bali Mandira Beach Resort & Spa": "cobalt",
    "Humic Research Center": "mint",
  };
  const companyTone = companyTones[company] || "tomato";
  const headerClass =
    companyTone === "cobalt"
      ? "bg-cobalt text-white"
      : companyTone === "mint"
        ? "bg-mint text-ink"
        : "bg-tomato text-white";

  return (
    <div className="mb-10">
      <div className="mb-5 ml-7 sm:ml-9">
        <div
          className={`relative inline-flex max-w-full items-center gap-2 border-2 border-ink px-4 py-2 shadow-paper-sm sm:px-5 ${headerClass}`}
        >
          <Tape
            tone="pink"
            rotate={-5}
            className="absolute -top-3 left-5 h-4 w-14"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5"
          >
            <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
            <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
          </svg>
          <span className="break-words font-display text-xs font-bold uppercase tracking-tight sm:text-sm">
            {company}
          </span>
          {positions.length > 1 && (
            <Tag tone="paper">{positions.length} roles</Tag>
          )}
        </div>
      </div>

      <div>
        {positions.map((position, index) => (
          <PositionCard
            key={index}
            {...position}
            isLast={index === positions.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
