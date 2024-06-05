import ProjectCard from "../ProjectCard";
import projectData from "@/data/projectData.json";

const RecentProjectSection = () => {
  const latestProjects = projectData.slice(0, 3);

  return (
    <div>
      <div className="flex text-center items-center justify-between max-[480px]:px-8">
        <div className="flex">
          <svg
            className="w-11 max-[325px]:w-6 max-[365px]:w-7 max-[430px]:w-8 max-[540px]:w-9"
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
          <h1 className="font-bold text-4xl mt-1 ml-2 max-[325px]:text-base max-[365px]:text-[19px] max-[395px]:text-xl max-[430px]:text-2xl max-[540px]:text-[25px]">
            Recent Project
          </h1>
        </div>
        <a
          href="/project"
          className="flex text-center justify-center gap-1 transition-all duration-300 mt-1 max-[375px]:hover:gap-2 hover:gap-3 group"
        >
          <h1 className="font-medium text-base text-[#525252] max-[325px]:text-[11px] max-[380px]:text-[12px] max-[430px]:text-[13px] max-[540px]:text-[14px] dark:text-[#a3a3a3] group-hover:dark:text-[#d4d4d4]">
            View All
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 fill-[#525252] max-[325px]:w-[16px] max-[380px]:w-[18px] max-[430px]:w-[20px] max-[540px]:w-[21px] dark:fill-[#a3a3a3] group-hover:dark:fill-[#d4d4d4]"
            viewBox="0 0 24 24"
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
          </svg>
        </a>
      </div>
      <div className="mt-9 gap-5 grid grid-cols-3 max-[768px]:mt-5 max-[480px]:px-8 max-[992px]:grid-cols-2 max-[768px]:grid-cols-2 max-[600px]:grid-cols-1">
        {latestProjects.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            linkProject={item.linkProject}
            categories={item.categories}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentProjectSection;
