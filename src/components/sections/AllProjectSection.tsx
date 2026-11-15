import ProjectCard from "../ProjectCard";
import projectData from "@/data/projectData.json";
import Tape from "../collage/Tape";

const AllProjectSection = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-8">
      <div className="relative mt-24 max-[768px]:mt-28">
        <div className="relative">
          <div className="relative mb-6 inline-block border-2 border-ink bg-pink-light px-5 py-2 shadow-paper-sm">
            <Tape
              tone="mint"
              rotate={-4}
              className="absolute -top-3 left-6 h-4 w-16"
            />
            <h1 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
              All Projects
            </h1>
          </div>
          <p className="mb-2 mt-3 max-w-2xl font-body text-[17px] leading-relaxed text-ink-2 max-[375px]:text-[15px] max-[425px]:text-[16px] max-[600px]:text-[17px]">
            Take a look at the projects I&apos;ve completed, featuring both
            private and open-source work.
          </p>
          <hr className="border-t-2 border-dashed border-ink/30" />
        </div>
      </div>
      <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
