"use client";

import { useState } from "react";

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
  const displayedTags = showAllTags ? tags : tags.slice(0, 3);
  const hasMoreTags = tags.length > 3;

  const handleTagClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowAllTags(!showAllTags);
  };

  return (
    <a
      href={`/blog/${slug}`}
      aria-label={title}
      className="
        neo-card relative h-[280px] flex flex-col w-full
        bg-white border-[3px] border-black
        shadow-[8px_8px_0_#000000]
        cursor-pointer overflow-hidden
        group
      "
    >
      {/* Corner bracket */}
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-[3px] border-r-[3px] border-black pointer-events-none z-10" />

      {/* Color accent top bar — grows on hover */}
      <div className="h-2 w-full bg-[#06b6d4] accent-bar" />

      <div className="p-5 flex flex-col h-full">
        {/* Title */}
        <h1 className="text-black text-lg font-display font-bold leading-6 mb-2 line-clamp-2 min-h-[3rem] uppercase tracking-tight group-hover:underline decoration-[#06b6d4] decoration-[3px] underline-offset-2">
          {title}
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="mb-3">
          <div className="flex gap-1.5 flex-wrap">
            {displayedTags.map((tag, index) => (
              <span
                key={index}
                className="flex-shrink-0 bg-[#fbbf24] border-[2px] border-black text-black font-mono font-bold text-[10px] uppercase px-2 py-0.5 whitespace-nowrap"
              >
                #{tag}
              </span>
            ))}
            {hasMoreTags && (
              <button
                onClick={handleTagClick}
                className="flex-shrink-0 bg-black text-white font-mono font-bold text-[10px] uppercase px-2 py-0.5 border-[2px] border-black whitespace-nowrap hover:bg-gray-800 transition-colors"
              >
                {showAllTags ? "Less" : `+${tags.length - 3}`}
              </button>
            )}
          </div>
        </div>

        {/* Date */}
        <p className="text-xs font-mono font-bold text-gray-600 uppercase tracking-wide mt-auto">
          {pubDate}
        </p>
      </div>
    </a>
  );
};

export default PostCard;
