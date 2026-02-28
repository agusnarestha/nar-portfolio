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
        relative h-[280px] flex flex-col w-full
        bg-white border-2 border-black
        shadow-[5px_5px_0_#000]
        hover:shadow-[2px_2px_0_#000]
        hover:translate-x-[3px] hover:translate-y-[3px]
        transition-all duration-100
        cursor-pointer overflow-hidden
      "
    >
      {/* Color accent top bar */}
      <div className="h-1.5 w-full bg-[#3cc4ce]" />

      <div className="p-5 flex flex-col h-full">
        {/* Title */}
        <h1 className="text-[#121212] text-lg font-black leading-6 mb-2 line-clamp-2 min-h-[3rem] uppercase tracking-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="text-sm text-[#404040] mb-3 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Tags */}
        <div className="mb-3">
          <div className="flex gap-1.5 flex-wrap">
            {displayedTags.map((tag, index) => (
              <span
                key={index}
                className="flex-shrink-0 bg-[#e6b448] border border-black text-black font-bold text-[10px] uppercase px-2 py-0.5 whitespace-nowrap"
              >
                #{tag}
              </span>
            ))}
            {hasMoreTags && (
              <button
                onClick={handleTagClick}
                className="flex-shrink-0 bg-black text-white font-bold text-[10px] uppercase px-2 py-0.5 border border-black whitespace-nowrap hover:bg-[#333] transition-colors"
              >
                {showAllTags ? "Less" : `+${tags.length - 3}`}
              </button>
            )}
          </div>
        </div>

        {/* Date */}
        <p className="text-xs font-bold text-[#737373] uppercase tracking-wide mt-auto">
          {pubDate}
        </p>
      </div>
    </a>
  );
};

export default PostCard;
