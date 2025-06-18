import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-lg overflow-hidden transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm">
            {post.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#525252] text-white text-xs font-medium rounded-full border border-current"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <time className="font-medium">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span className="font-medium">{post.readingTime} min read</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
