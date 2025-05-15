import { getPostsByTag, getAllTags } from "@/utils/blog";
import BlogCard from "@/components/blog/BlogCard";
import Link from "next/link";
import { notFound } from "next/navigation";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export function generateMetadata({ params }: TagPageProps) {
  return {
    title: `Posts tagged with "${params.tag}"`,
    description: `Browse all posts tagged with "${params.tag}"`,
  };
}

export default function TagPage({ params }: TagPageProps) {
  const posts = getPostsByTag(params.tag);
  const tags = getAllTags();

  if (!tags.includes(params.tag)) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Posts tagged with "{params.tag}"
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          All Tags
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                tag === params.tag
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800"
              }`}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
