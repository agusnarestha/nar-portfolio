import Timeline from "../Timeline";
import timelineData from "@/data/timelineData.json";

const AboutSection = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white px-6 md:px-60">
      <div className="space-y-6 border-l-2 border-dashed">
        {timelineData.map((item, index) => (
          <Timeline
            key={index}
            job={item.job}
            company={item.company}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
