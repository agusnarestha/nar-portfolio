import ProjectCard from "../ProjectCard";
import projectData from "@/data/projectData.json";

const AllProjectSection = () => {
  return (
    <div>
      <div className="relative max-w-6xl mx-auto mt-8 max-[768px]:mt-28 dark:text-[#E4E6EB] dark:fill-[#E4E6EB] aos-init aos-animate">
        <div className="relative">
          <div className="flex items-center">
            <svg
              className="w-11 text-[#121212] max-[375px]:w-9 max-[425px]:w-9 max-[600px]:w-10"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73zm-2.36 8.75L15 14.67a1 1 0 0 0-.27.9 6.81 6.81 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.61 6.61 0 0 1 17.5 4a14.51 14.51 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93z"></path>
              <circle cx="15.73" cy="8.3" r="2"></circle>
              <path d="M5 16c-2 1-2 5-2 5a7.81 7.81 0 0 0 5-2z"></path>
            </svg>
            <h1 className="font-bold text-[#121212] text-4xl mt-1 ml-2 max-[375px]:text-2xl max-[425px]:text-[22px] max-[600px]:text-[26px]">
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
