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

const PositionCard: React.FC<Position & { companyColor: string; isLast: boolean }> = ({
  job,
  date,
  duration,
  description,
  companyColor,
  isLast,
}) => {
  const extractTechStack = (descriptions: string[]): string[] => {
    const techMap: { [key: string]: string } = {
      'Laravel': 'Laravel',
      'Nuxt.js': 'Nuxt.js',
      'Strapi': 'Strapi',
      'Express.js': 'Express.js',
      'Wordpress': 'WordPress',
      'Figma': 'Figma',
      'PostgreSQL': 'PostgreSQL',
      'Bootstrap': 'Bootstrap',
      'Heroku': 'Heroku',
      'Google Cloud': 'GCP',
      'BigQuery': 'BigQuery',
      'n8n': 'n8n',
    };

    const techs: string[] = [];
    descriptions.forEach(desc => {
      Object.keys(techMap).forEach(tech => {
        if (desc.includes(tech) && !techs.includes(techMap[tech])) {
          techs.push(techMap[tech]);
        }
      });
    });
    return techs;
  };

  const techStack = extractTechStack(description);

  return (
    <div className="relative flex gap-3 sm:gap-4">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Dot */}
        <div
          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[3px] border-black flex-shrink-0 mt-5 z-10"
          style={{ backgroundColor: companyColor }}
        />
        {/* Vertical line */}
        {!isLast && (
          <div className="w-[3px] bg-black flex-1 mt-1 mb-0" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-6">
        <div className="neo-card bg-white border-[3px] border-black shadow-[5px_5px_0_#000000] sm:shadow-[6px_6px_0_#000000] overflow-hidden relative">
          {/* Bottom-right corner bracket */}
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-[3px] border-r-[3px] border-black pointer-events-none z-10" />

          {/* Accent bar at top */}
          <div className="h-1.5 w-full sm:h-2" style={{ backgroundColor: companyColor }} />

          <div className="p-3 sm:p-5">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2 mb-2">
              <h4 className="font-display font-bold text-sm sm:text-base lg:text-lg uppercase tracking-tight leading-tight">
                {job}
              </h4>
              <span className="inline-flex items-center bg-black text-white font-mono font-bold text-[10px] sm:text-xs px-2 py-1 border-2 border-black self-start flex-shrink-0">
                {date}
              </span>
            </div>

            {/* Duration */}
            {duration && (
              <div className="mb-2 sm:mb-3">
                <span className="inline-block bg-gray-100 border-2 border-black font-mono font-bold text-[10px] sm:text-xs px-2 py-0.5 sm:py-1">
                  {duration}
                </span>
              </div>
            )}

            {/* Description */}
            {description.length > 0 && (
              <ul className="mb-3 sm:mb-4 space-y-1.5 sm:space-y-2">
                {description.map((line, index) => (
                  <li key={index} className="flex gap-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <span className="font-bold mt-0.5 flex-shrink-0 text-black">▸</span>
                    <span className="flex-1">{line}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tech stack */}
            {techStack.length > 0 && (
              <div className="border-t-[3px] border-black pt-2 sm:pt-3 mt-2 sm:mt-3">
                <p className="text-[10px] sm:text-xs font-mono font-bold text-gray-600 uppercase mb-1.5 sm:mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#fbbf24] border-2 border-black font-mono font-bold text-[10px] sm:text-xs px-2 py-0.5 sm:py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC<TimelineCompanyProps> = ({ company, positions }) => {
  const companyColors: { [key: string]: string } = {
    'Bali Mandira Beach Resort & Spa': '#3b82f6',
    'Humic Research Center': '#22c55e',
  };
  const companyColor = companyColors[company] || '#06b6d4';

  return (
    <div className="mb-10">
      {/* Company header */}
      <div className="mb-5 ml-7 sm:ml-9">
        <div
          className="
            inline-flex items-center gap-2
            text-white
            border-[3px] border-black
            px-3 py-2 sm:px-5 sm:py-3
            shadow-[4px_4px_0px_0px_#000000] sm:shadow-[6px_6px_0px_0px_#000000]
            font-display font-bold text-xs sm:text-sm tracking-tight
            uppercase
            max-w-full
          "
          style={{ backgroundColor: companyColor }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
          >
            <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
            <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
          </svg>
          <span className="break-words">{company}</span>
          {positions.length > 1 && (
            <span className="ml-1 bg-black text-white text-[10px] sm:text-xs font-mono font-bold px-1.5 sm:px-2 py-0.5 leading-none border-2 border-white flex-shrink-0">
              {positions.length} roles
            </span>
          )}
        </div>
      </div>

      {/* Position cards with timeline */}
      <div>
        {positions.map((position, index) => (
          <PositionCard
            key={index}
            {...position}
            companyColor={companyColor}
            isLast={index === positions.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
