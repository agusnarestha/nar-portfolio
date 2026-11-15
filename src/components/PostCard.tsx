"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Tape from "./collage/Tape";
import Tag from "./collage/Tag";

type PostCardProps = {
  title: string;
  slug: string;
  description: string;
  pubDate: string;
  tags: string[];
};

const PostCard: React.FC<PostCardProps> = ({
  title,
  slug,
  description,
  pubDate,
  tags = [],
}) => {
  const [showAllTags, setShowAllTags] = useState(false);
  const reduceMotion = useReducedMotion();
  const displayedTags = showAllTags ? tags : tags.slice(0, 3);
  const hasMoreTags = tags.length > 3;

  const handleTagClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowAllTags(!showAllTags);
  };

  return (
    <motion.a
      href={`/blog/${slug}`}
      aria-label={title}
      initial={reduceMotion ? false : { opacity: 0, y: 12, rotate: -1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reduceMotion ? undefined : { y: -4, rotate: -1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative flex h-[280px] w-full flex-col border-2 border-ink bg-sheet p-4 shadow-paper"
    >
      <Tape
        tone="mint"
        rotate={-4}
        className="absolute -top-3 left-6 z-10 h-4 w-14"
      />

      <h3 className="mb-2 line-clamp-2 min-h-[3rem] font-display text-lg font-bold leading-6 tracking-tight text-ink decoration-cobalt decoration-2 underline-offset-2 group-hover:underline">
        {title}
      </h3>

      <p className="mb-3 line-clamp-2 flex-grow font-body text-sm text-ink-2">
        {description}
      </p>

      <div className="mb-3">
        <div className="flex flex-wrap gap-1.5">
          {displayedTags.map((tag, index) => (
            <Tag key={index} tone="butter">
              #{tag}
            </Tag>
          ))}
          {hasMoreTags && (
            <button
              onClick={handleTagClick}
              className="inline-flex flex-shrink-0 items-center border border-ink bg-sheet px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink transition-colors hover:bg-butter"
            >
              {showAllTags ? "Less" : `+${tags.length - 3}`}
            </button>
          )}
        </div>
      </div>

      <p className="mt-auto border-t border-dashed border-ink/30 pt-3 font-mono text-xs uppercase tracking-wide text-ink-2">
        {pubDate}
      </p>
    </motion.a>
  );
};

export default PostCard;
