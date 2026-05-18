import ProjectCard from "../ProjectCard";
import projectData from "@/data/projectData.json";

const AllProjectSection = () => {
  return (
    <div>
      <div className="relative max-w-6xl mx-auto mt-24 max-[768px]:mt-28">
        <div className="relative">
          {/* Neobrutalism heading — matching other sections */}
          <div className="mb-6">
            <h1
              className="neo-badge text-3xl bg-[#df548e] text-white
                max-[325px]:text-base max-[365px]:text-[19px] max-[395px]:text-xl max-[430px]:text-2xl max-[540px]:text-[25px]"
            >
              All Projects
            </h1>
          </div>
          <p className="mt-3 text-[17px] mb-2 text-[#525252] max-[375px]:text-[15px] max-[425px]:text-[16px] max-[600px]:text-[17px]">
            Take a look at the projects I&apos;ve completed, featuring both private
            and open-source work.
          </p>
          <hr className="border-[#d1d5db]" />
        </div>
      </div>
      <div className="mt-9 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
