"use client";

import { useState } from "react";
import Image from "next/image";

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
    <div className="relative h-[280px] border-[1px] group border-[#e5e5e5] rounded-xl overflow-hidden cursor-pointer transition-all duration-[.5s] hover:scale-[1.03] dark:border-[#404040] flex flex-col w-full">
      <a aria-label="slug" href={`/blog/${slug}`} className="h-full flex flex-col">
        <div className="BackgroundHoverT absolute z-[4] h-full w-full bg-black bg-opacity-[0.7] opacity-0 transition-opacity duration-[.5s] group-hover:opacity-80" />
        <div className="bg-[#fafafa] dark:bg-[#1a1a1a] h-full w-full relative z-[6] p-5 flex flex-col">
          {/* Title - max 2 lines */}
          <h1 className="text-[#121212] dark:text-[#fafafa] text-lg font-semibold leading-6 mb-2 transition-all duration-[.5s] group-hover:underline line-clamp-2 min-h-[3rem]">
            {title}
          </h1>

          {/* Description - max 2 lines */}
          <p className="text-sm text-[#404040] dark:text-[#a3a3a3] mb-3 line-clamp-2 flex-grow">
            {description}
          </p>

          {/* Tags - expandable */}
          <div className="mb-3">
            <div className="flex gap-2 text-[11px] text-white flex-wrap">
              {displayedTags.map((tag, index) => (
                <span
                  key={index}
                  className="flex-shrink-0 bg-[#525252] dark:bg-[#404040] py-1 px-3 rounded-full border border-[#666] whitespace-nowrap"
                >
                  #{tag}
                </span>
              ))}
              {hasMoreTags && (
                <button
                  onClick={handleTagClick}
                  className="flex-shrink-0 bg-[#737373] hover:bg-[#525252] dark:bg-[#525252] dark:hover:bg-[#404040] py-1 px-3 rounded-full border border-[#666] whitespace-nowrap transition-colors duration-200 text-white"
                >
                  {showAllTags ? "Show less" : `+${tags.length - 3} more`}
                </button>
              )}
            </div>
          </div>

          {/* Date */}
          <p className="text-xs text-[#737373] dark:text-[#a3a3a3] mt-auto">
            {pubDate}
          </p>
        </div>
      </a>
    </div>
  );
};

export default PostCard;
