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
    <div className="container mx-auto my-32">
      <h1 className="text-4xl font-bold text-gray-900  mb-8">
        Posts tagged with "{params.tag}"
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">All Tags</h2>
        <div className="flex flex-wrap gap-2">
          {/* "All" tag */}
          <Link
            key="all"
            href="/blog"
            className="px-4 py-2 bg-[#525252] text-white rounded-full hover:bg-[#949494] transition-colors duration-200"
          >
            All
          </Link>
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                tag === params.tag
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-[#525252] text-white hover:bg-[#949494]"
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
