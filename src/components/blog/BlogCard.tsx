import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      className="
        group relative bg-white border-2 border-black
        shadow-[5px_5px_0_#000]
        hover:shadow-[2px_2px_0_#000]
        hover:translate-x-[3px] hover:translate-y-[3px]
        transition-all duration-100
        overflow-hidden flex flex-col
      "
    >
      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-[#3cc4ce] flex-shrink-0" />

      <Link href={`/blog/${post.slug}`} className="block h-full p-5 flex flex-col flex-1">
        {/* Title */}
        <h2 className="text-base font-black text-[#121212] mb-2 line-clamp-2 uppercase tracking-tight group-hover:underline">
          {post.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-[#525252] mb-4 line-clamp-2 flex-grow">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#e6b448] border border-black text-black font-bold text-[10px] uppercase px-2 py-0.5 whitespace-nowrap"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Date + read time */}
        <div className="flex items-center gap-2 text-xs font-bold text-[#737373] uppercase tracking-wide mt-auto border-t border-black/10 pt-3">
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span className="text-gray-300">|</span>
          <span>{post.readingTime} min read</span>
        </div>
      </Link>
    </article>
  );
}
