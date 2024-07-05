import ProjectCard from "../ProjectCard";
import projectData from "@/data/projectData.json";

const AllProjectSection = () => {
  return (
    <div>
      <div className="relative max-w-6xl mx-auto mt-24 max-[768px]:mt-28 dark:text-[#E4E6EB] dark:fill-[#E4E6EB] aos-init aos-animate">
        <div className="relative max-[480px]:px-8">
          <div className="flex items-center">
            <h1 className="font-bold text-[#121212] text-4xl mt-1 max-[375px]:text-2xl max-[425px]:text-[22px] max-[600px]:text-[26px]">
              Project
            </h1>
          </div>
          <p className="mt-3 text-[17px] mb-2 text-[#525252] max-[375px]:text-[15px] max-[425px]:text-[16px] max-[600px]:text-[17px]">
            Take a look at the projects I've completed, featuring both private
            and open-source work.
          </p>
          <hr className="border-[#d1d5db]"></hr>
        </div>
      </div>
      <div className="mt-9 gap-5 grid grid-cols-3 max-[768px]:mt-5 max-[480px]:px-8 max-[992px]:grid-cols-2 max-[768px]:grid-cols-2 max-[600px]:grid-cols-1">
        {projectData.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            linkProject={item.linkProject}
            categories={item.categories}
            technologies={item.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProjectSection;
