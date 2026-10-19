import ProjectCard from "../ProjectCard";
import projectData from "@/data/projectData.json";
import { motion } from "framer-motion";

const RecentProjectSection = () => {
  const latestProjects = projectData.slice(0, 3);

  return (
    <div className="relative">
      {/* Decorative floating shapes */}
      <div className="absolute -top-6 -left-4 pointer-events-none z-0 hidden sm:block">
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <polygon points="10,10 50,10 50,50 10,50" fill="none" stroke="#ec4899" strokeWidth="3" opacity="0.4" />
          <line x1="20" y1="20" x2="40" y2="20" stroke="#ec4899" strokeWidth="2" opacity="0.4" />
          <line x1="20" y1="30" x2="35" y2="30" stroke="#ec4899" strokeWidth="2" opacity="0.4" />
          <line x1="20" y1="40" x2="40" y2="40" stroke="#ec4899" strokeWidth="2" opacity="0.4" />
        </motion.svg>
      </div>
      <div className="absolute -bottom-4 -right-4 pointer-events-none z-0 hidden sm:block">
        <motion.svg
          width="50" height="50" viewBox="0 0 50 50" fill="none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="25" cy="25" r="20" fill="#fbbf24" stroke="#000" strokeWidth="3" opacity="0.4" />
        </motion.svg>
      </div>

      {/* Heading row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 relative z-10">
        <h1
          className="neo-badge text-3xl bg-[#ec4899] text-white
            max-[325px]:text-base max-[365px]:text-[19px] max-[395px]:text-xl max-[430px]:text-2xl max-[540px]:text-[25px]"
        >
          Recent Project
        </h1>
        <a
          href="/project"
          className="neo-btn bg-[#fbbf24] self-start"
        >
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 24 24">
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
          </svg>
        </a>
      </div>

      {/* Project count indicator */}
      <div className="flex items-center gap-2 mb-5 relative z-10">
        <div className="flex -space-x-2">
          {latestProjects.map((_, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full border-2 border-black bg-[#ec4899] flex items-center justify-center"
              style={{ zIndex: 3 - i }}
            >
              <span className="text-white font-mono font-bold text-[8px]">{i + 1}</span>
            </div>
          ))}
        </div>
        <span className="font-mono font-bold text-xs text-gray-600 uppercase">
          {latestProjects.length} of {projectData.length} projects
        </span>
      </div>

      <div className="my-9 -mx-4 sm:-mx-8 px-4 sm:px-8 lg:mx-0 lg:px-0 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
        <div className="flex lg:grid lg:grid-cols-3 gap-6 w-max lg:w-auto">
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
