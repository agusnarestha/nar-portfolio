"use client";

import Timeline from "../Timeline";
import timelineData from "@/data/timelineData.json";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const calculateDuration = (dateString: string) => {
    const parts = dateString.split(" - ");
    if (parts.length !== 2) return "";

    const startDateStr = parts[0];
    const endDateStr = parts[1];

    const monthsMap: { [key: string]: number } = {
      January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
      July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
    };

    const parseDate = (str: string, isEnd: boolean = false) => {
      if (str.toLowerCase() === "present") return new Date();
      const parts = str.trim().split(" ");
      if (parts.length === 2) return new Date(parseInt(parts[1]), monthsMap[parts[0]]);
      else if (parts.length === 1 && isEnd) return null;
      return new Date(parseInt(parts[1]), monthsMap[parts[0]]);
    };

    let start, end;
    if (startDateStr.split(" ").length === 1 && endDateStr.split(" ").length === 2 && endDateStr.toLowerCase() !== 'present') {
      const endParts = endDateStr.split(" ");
      const year = parseInt(endParts[1]);
      start = new Date(year, monthsMap[startDateStr.trim()]);
      end = new Date(year, monthsMap[endParts[0]]);
    } else {
      start = parseDate(startDateStr);
      end = parseDate(endDateStr, true);
    }

    if (!start || !end) return "";

    let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
    if (months < 0) return "";

    const years = Math.floor(months / 12);
    const complexMonths = months % 12;

    let duration = "";
    if (years > 0) duration += `${years} yr${years > 1 ? "s" : ""} `;
    if (complexMonths > 0) duration += `${complexMonths} mos`;
    return duration.trim();
  };

  return (
    <div className="mt-24 max-[768px]:mt-28 relative">
      {/* Decorative floating shapes */}
      <div className="absolute -top-6 -right-4 pointer-events-none z-0 hidden sm:block">
        <motion.svg
          width="70" height="70" viewBox="0 0 70 70" fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <rect x="10" y="10" width="50" height="50" rx="3" fill="none" stroke="#84cc16" strokeWidth="3" opacity="0.4" strokeDasharray="8 4" />
        </motion.svg>
      </div>
      <div className="absolute -bottom-4 -left-6 pointer-events-none z-0 hidden sm:block">
        <motion.svg
          width="50" height="50" viewBox="0 0 50 50" fill="none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <polygon points="25,5 45,45 5,45" fill="#3b82f6" stroke="#000" strokeWidth="3" opacity="0.4" />
        </motion.svg>
      </div>

      {/* Neo-brutalism section heading */}
      <div className="mb-6 relative z-10">
        <h1
          className="neo-badge text-3xl bg-[#84cc16]
            max-[325px]:text-base max-[365px]:text-[19px] max-[395px]:text-xl max-[430px]:text-2xl max-[540px]:text-[25px]"
        >
          Experience
        </h1>
      </div>

      <div className="flex backdrop-blur-sm w-full p-4 rounded-sm relative z-10">
        <div className="w-full space-y-2">
          {timelineData.map((item, index) => (
            <Timeline
              key={index}
              company={item.company}
              positions={item.positions.map((pos) => ({
                ...pos,
                duration: calculateDuration(pos.date),
              }))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
