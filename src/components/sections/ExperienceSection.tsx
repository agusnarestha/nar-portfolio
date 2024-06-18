import Timeline from "../Timeline";
import timelineData from "@/data/timelineData.json";

const ExperienceSection = () => {
  return (
    <div className="max-[480px]:px-8 mt-24 max-[768px]:mt-28 h-screen">
      <h1 className="font-bold text-4xl mt-1 max-[325px]:text-base max-[365px]:text-[19px] max-[395px]:text-xl max-[430px]:text-2xl max-[540px]:text-[25px]">
        Experience
      </h1>
      <p className="mt-3 text-[17px] mb-2 text-[#525252] max-[375px]:text-[15px] max-[425px]:text-[16px] max-[600px]:text-[17px]">
        Take a look at my Experience
      </p>
      <hr className="border-[#d1d5db]"></hr>
      <div className="flex items-center justify-center bg-white mt-9 max-[768px]:mt-5">
        <div className="lg:space-y-6 border-l-2 border-dashed">
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
    </div>
  );
};

export default ExperienceSection;
