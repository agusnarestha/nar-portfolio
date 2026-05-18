import ProjectCard from "../ProjectCard";
import projectData from "@/data/projectData.json";

const RecentProjectSection = () => {
  const latestProjects = projectData.slice(0, 3);

  return (
    <div>
      {/* Heading row */}
      <div className="flex items-center justify-between mb-2">
        <h1
          className="neo-badge text-3xl bg-[#df548e] text-white
            max-[325px]:text-base max-[365px]:text-[19px] max-[395px]:text-xl max-[430px]:text-2xl max-[540px]:text-[25px]"
        >
          Recent Project
        </h1>
        <a
          href="/project"
          className="neo-btn"
        >
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 24 24">
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
          </svg>
        </a>
      </div>

      <div className="my-9 -mx-4 sm:-mx-8 px-4 sm:px-8 lg:mx-0 lg:px-0 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
        <div className="flex lg:grid lg:grid-cols-3 gap-5 w-max lg:w-auto">
          {latestProjects.map((item, index) => (
            <div key={index} className="w-[280px] sm:w-[320px] lg:w-auto flex-shrink-0">
              <ProjectCard
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                linkProject={item.linkProject}
                categories={item.categories}
                technologies={item.technologies}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjectSection;
