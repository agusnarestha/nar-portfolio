import React from "react";

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

const PositionEntry: React.FC<Position & { isLast: boolean }> = ({
  job,
  date,
  duration,
  description,
  isLast,
}) => {
  return (
    <div className={`relative pl-6 ${!isLast ? "pb-6" : ""}`}>
      {/* Vertical connector line */}
      {!isLast && (
        <span className="absolute left-[9px] top-5 bottom-0 w-0.5 bg-gray-300" />
      )}

      {/* Dot */}
      <span className="absolute left-0 top-1 w-5 h-5 rounded-full bg-[#3cc4ce] border-2 border-black flex-shrink-0 block" />

      <div>
        <h4 className="font-extrabold text-base leading-snug">{job}</h4>
        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span className="text-xs font-bold text-gray-600">{date}</span>
          {duration && (
            <span className="text-xs font-bold text-gray-400">· {duration}</span>
          )}
        </div>
        <ul className="mt-2 text-sm text-gray-500 list-disc pl-4 space-y-0.5">
          {description.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Timeline: React.FC<TimelineCompanyProps> = ({ company, positions }) => {
  return (
    <div className="mb-8">
      {/* Neobrutalism company header card */}
      <div
        className="
          inline-flex items-center gap-2.5
          bg-[#3cc4ce] text-black
          border-2 border-black
          px-4 py-2 mb-5
          shadow-[4px_4px_0px_0px_#000]
          font-extrabold text-sm tracking-tight
          uppercase
        "
      >
        {/* Briefcase icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 flex-shrink-0"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
        {company}
        {positions.length > 1 && (
          <span className="ml-1 bg-black text-white text-[10px] font-black px-1.5 py-0.5 leading-none">
            ×{positions.length}
          </span>
        )}
      </div>

      {/* Positions */}
      <div className="ml-1">
        {positions.map((position, index) => (
          <PositionEntry
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
