"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Tape from "./collage/Tape";
import Tag from "./collage/Tag";

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
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      aria-label={title}
      href={linkProject}
      initial={reduceMotion ? false : { opacity: 0, y: 12, rotate: -1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reduceMotion ? undefined : { y: -4, rotate: -1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative flex h-full min-h-[400px] flex-col border-2 border-ink bg-sheet p-3 shadow-paper"
    >
      <Tape
        tone="yellow"
        rotate={-4}
        className="absolute -top-3 left-1/2 z-10 h-5 w-20 -translate-x-1/2"
      />

      <div className="relative aspect-[16/10] w-full overflow-hidden border border-ink/20 bg-paper">
        <Image
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          src={imageUrl}
          alt={title}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-200 group-hover:bg-ink/50 group-hover:opacity-100">
          <span className="border-2 border-ink bg-butter px-3 py-1 font-hand text-lg text-ink shadow-paper-sm">
            view project →
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-3">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {categories.map((category) => (
            <Tag key={category} tone="pink">
              #{category}
            </Tag>
          ))}
        </div>

        <h2 className="mb-1 font-display text-base font-bold leading-tight tracking-tight text-ink decoration-cobalt decoration-2 underline-offset-2 group-hover:underline">
          {title}
        </h2>

        <p className="mb-3 line-clamp-2 flex-grow font-body text-sm text-ink-2">
          {description}
        </p>

        <div className="flex flex-row gap-2 border-t border-dashed border-ink/30 pt-3">
          {technologies.map((technology) => (
            <Image
              key={technology}
              alt={technology}
              height={20}
              width={20}
              src={`https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/${technology}.svg`}
            />
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
