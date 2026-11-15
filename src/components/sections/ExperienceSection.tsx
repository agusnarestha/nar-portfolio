"use client";

import Timeline from "../Timeline";
import timelineData from "@/data/timelineData.json";
import Tape from "../collage/Tape";

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
    <div className="relative mt-20 max-[768px]:mt-24">
      <div className="relative mb-8 inline-block border-2 border-ink bg-mint-light px-5 py-2 shadow-paper-sm">
        <Tape
          tone="sky"
          rotate={-4}
          className="absolute -top-3 left-6 h-4 w-16"
        />
        <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
          Experience
        </h2>
      </div>

      <div className="relative z-10 w-full p-0">
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
