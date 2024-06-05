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
    <div className="relative h-[385px] border-[1px] group border-[#e5e5e5] rounded-xl overflow-hidden cursor-pointer transition-all duration-[.5s] hover:scale-[1.03] dark:border-[#404040]">
      <a aria-label="linkproject" href={linkProject}>
        <div className="BackgroundHoverT absolute z-[4] h-full w-full bg-black bg-opacity-[0.7] opacity-0 transition-opacity duration-[.5s] group-hover:opacity-80" />
        <div className="flex flex-col items-center">
          <div className="absolute z-0 h-full w-full" />
          <Image
            className="absolute z-[1] transition-all rounded-xl group-hover:blur-[5px] duration-700 ease-in-out scale-100 blur-0 grayscale-0"
            src={imageUrl}
            alt="imgproject"
            width={385}
            height={385}
            loading="lazy"
          />
          <div className="font-poppins absolute gap-3 top-[20%] flex z-[4] opacity-0 transition-opacity duration-[.5s] group-hover:opacity-100">
            <h1 className="text-white">View Project</h1>
            <Image
              className=""
              src="icon/arrow-right-light.svg"
              alt=""
              width={15}
              height={15}
            />
          </div>
        </div>
        <div className="bg-[#fafafa] h-full w-full absolute z-[6] mt-44 px-4 pr-1">
          <div className="flex gap-2 text-[11px] text-white pt-4">
            {categories.map((category, index) => (
              <h1
                key={index}
                className="flex justify-center bg-[#525252] py-[2px] px-[10px] rounded-xl  border "
              >
                #{category}
              </h1>
            ))}
          </div>
          <div className="mt-2">
            <div className="text-[#121212] leading-10 text-lg font-medium transition-all duration-[.5s] group-hover:underline">
              <h1>{title}</h1>
            </div>
            <p className="text-sm text-[#404040] mt-1 dark:text-[#a3a3a3]">
              {description}
            </p>
          </div>
          <div className="relative">
            <div className="flex flex-row">
              {technologies.map((technology, index) => (
                <Image
                  className="mr-3 mt-5"
                  key={index}
                  alt=""
                  height="24"
                  width="24"
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/${technology}.svg`}
                />
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
