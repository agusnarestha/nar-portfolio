import React from "react";

type TimelineProps = {
  company: string;
  job: string;
  date: string;
  description: string;
};

const Timeline: React.FC<TimelineProps> = ({
  company,
  job,
  date,
  description,
}) => {
  return (
    <div className="relative w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-[#3cc4ce]"
      >
        <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold text-lg text-[#3cc4ce]">{job}.</h4>
        <h3 className="mt-1 block text-base font-semibold">{company}</h3>
        <span className="mt-1 block text-sm font-semibold">{date}</span>
        <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
          {description}.
        </p>
      </div>
    </div>
  );
};

export default Timeline;
