import Timeline from "../Timeline";
import timelineData from "@/data/timelineData.json";

const ExperienceSection = () => {
  const calculateDuration = (dateString: string) => {
    // Expected formats: "September 2023 - Present" or "July - August 2021"
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
      if (parts.length === 2) {
        // "September 2023"
        return new Date(parseInt(parts[1]), monthsMap[parts[0]]);
      } else if (parts.length === 1 && isEnd) {
        // Handle "August" in "July - August 2021" -> infer year from start date? 
        // Actually, usually "July - August 2021" means both are 2021.
        return null;
      }
      // "August 2021"
      return new Date(parseInt(parts[1]), monthsMap[parts[0]]);
    };

    // Special handling for "July - August 2021" case where start doesn't have year
    let start, end;

    if (startDateStr.split(" ").length === 1 && endDateStr.split(" ").length === 2 && endDateStr.toLowerCase() !== 'present') {
      // "July - August 2021"
      const endParts = endDateStr.split(" ");
      const year = parseInt(endParts[1]);
      start = new Date(year, monthsMap[startDateStr.trim()]);
      end = new Date(year, monthsMap[endParts[0]]);
    } else {
      start = parseDate(startDateStr);
      end = parseDate(endDateStr, true);
    }

    if (!start || !end) return "";

    // Calculation
    let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1; // +1 to include start month

    if (months < 0) return "";

    const years = Math.floor(months / 12);
    const complexMonths = months % 12;

    let duration = "";
    if (years > 0) duration += `${years} yr${years > 1 ? "s" : ""} `;
    if (complexMonths > 0) duration += `${complexMonths} mos`;

    // Trim and add Parens
    duration = duration.trim();
    return duration;
  };

  return (
    <div className="max-[480px]:px-8 mt-24 max-[768px]:mt-28">
      <h1 className="font-bold text-4xl mb-2 mt-1 max-[325px]:text-base max-[365px]:text-[19px] max-[395px]:text-xl max-[430px]:text-2xl max-[540px]:text-[25px]">
        Experience
      </h1>
      <hr className="border-[#d1d5db]"></hr>
      <div className="flex bg-white mt-9 max-[768px]:mt-5">
        <div className="lg:space-y-6 border-l-2 border-dashed">
          {timelineData.map((item, index) => (
            <Timeline
              key={index}
              job={item.job}
              company={item.company}
              date={item.date}
              duration={calculateDuration(item.date)}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
