import Link from "next/link";
import ProjectCard from "../ProjectCard";
import projectData from "@/data/projectData.json";
import Stamp from "../collage/Stamp";
import Tape from "../collage/Tape";

const RecentProjectSection = () => {
  const latestProjects = projectData.slice(0, 3);

  return (
    <div className="relative">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative inline-block border-2 border-ink bg-pink-light px-5 py-2 shadow-paper-sm">
          <Tape
            tone="yellow"
            rotate={-4}
            className="absolute -top-3 left-6 h-4 w-16"
          />
          <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
            Recent Project
          </h2>
        </div>
        <Link
          href="/project"
          className="inline-flex items-center gap-2 self-start border-2 border-ink bg-butter px-4 py-2 font-body text-sm font-medium text-ink shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5"
        >
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
          </svg>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Stamp tone="cobalt">
          {latestProjects.length} of {projectData.length}
        </Stamp>
        <span className="font-mono text-xs uppercase tracking-wide text-ink-2">
          projects on display
        </span>
      </div>

      <div className="my-8 -mx-4 flex gap-6 overflow-x-auto px-4 scrollbar-hide sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
        {latestProjects.map((item, index) => (
          <div
            key={index}
            className="w-[280px] flex-shrink-0 sm:w-[320px] lg:w-auto"
          >
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
  );
};

export default RecentProjectSection;
