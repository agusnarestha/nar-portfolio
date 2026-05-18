import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  linkProject: string;
  categories: string[];
  technologies: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  linkProject,
  categories = [],
  technologies = [],
}) => {
  return (
    <a
      aria-label={title}
      href={linkProject}
      className="
        neo-card relative h-[385px] flex flex-col
        border-2 border-black bg-white
        shadow-[5px_5px_0_#1a1a1a]
        cursor-pointer overflow-hidden
        group
      "
    >
      {/* Image area */}
      <div className="relative h-44 w-full overflow-hidden border-b-2 border-black flex-shrink-0">
        <Image
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={imageUrl}
          alt={title}
          width={385}
          height={176}
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-display font-black uppercase text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-white px-3 py-1">
            View Project →
          </span>
        </div>
      </div>

      {/* Accent bar that grows on hover */}
      <div className="h-1 w-full bg-[#df548e] accent-bar" />

      {/* Content area */}
      <div className="bg-white flex-1 p-4 flex flex-col">
        {/* Categories */}
        <div className="flex gap-1.5 flex-wrap mb-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="bg-[#df548e] border border-black text-white font-mono font-bold text-[10px] uppercase px-2 py-0.5 whitespace-nowrap"
            >
              #{category}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-[#121212] text-base font-display font-black uppercase tracking-tight leading-tight mb-1 group-hover:underline decoration-[#df548e] decoration-2 underline-offset-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-[#525252] line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Tech icons */}
        <div className="flex flex-row gap-2 mt-3 pt-3 border-t border-black/20">
          {technologies.map((technology, index) => (
            <Image
              key={index}
              alt={technology}
              height="20"
              width="20"
              src={`https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/${technology}.svg`}
            />
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
