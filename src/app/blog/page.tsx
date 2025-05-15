import { getAllPosts, getAllTags } from "@/utils/blog";
import BlogCard from "@/components/blog/BlogCard";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Blog | Agus Narestha Portfolio",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900mb-8 text-center">
          Blog
        </h1>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Filter by Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {/* "All" tag */}
            <Link
              key="all"
              href="/blog"
              className="px-4 py-2 bg-[#525252] text-white rounded-full hover:bg-[#949494] transition-colors duration-200"
            >
              All
            </Link>
            {/* Individual tags */}
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="px-4 py-2 bg-[#525252] text-white rounded-full hover:bg-[#949494]  transition-colors duration-200"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
