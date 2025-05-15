import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {post.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString()}
          </time>
        </div>
      </Link>
    </article>
  );
}
