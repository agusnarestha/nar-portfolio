import { getAllPosts, getAllTags } from "@/utils/blog";
import BlogCard from "@/components/blog/BlogCard";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read articles about web development, programming, and technology insights from Agus Narestha.",
  openGraph: {
    title: "Blog",
    description:
      "Read articles about web development, programming, and technology insights from Agus Narestha.",
    url: "https://agusnarestha.dev/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Agus Narestha",
    description:
      "Read articles about web development, programming, and technology insights from Agus Narestha.",
  },
  alternates: {
    canonical: "https://agusnarestha.dev/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="container mx-auto my-32">
      <div className="relative max-w-6xl mx-auto mt-24 max-[768px]:mt-28">
        <div className="relative">

          {/* Page heading */}
          <div className="mb-6">
            <h1
              className="neo-badge text-3xl bg-[#06b6d4]
                max-[375px]:text-xl max-[425px]:text-2xl"
            >
              Blog
            </h1>
          </div>
          <p className="mb-8 text-[15px] text-gray-600 font-medium max-[375px]:text-[14px]">
            Explore my thoughts and insights on web development, programming, and technology.
          </p>

          {/* Filter by Tags panel */}
          <div
            className="mb-12 p-5 bg-[#fef3c7] border-[3px] border-black shadow-[8px_8px_0_#000000]"
          >
            <h2 className="font-display font-bold text-sm uppercase tracking-widest mb-4">
              Filter by Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {/* "All" tag */}
              <Link
                key="all"
                href="/blog"
                className="inline-block bg-black text-white font-mono font-bold text-xs uppercase px-3 py-1.5 border-[3px] border-black
                  shadow-[6px_6px_0_#000000]
                  hover:shadow-[2px_2px_0_#000000] hover:translate-x-[4px] hover:translate-y-[4px]
                  transition-all duration-150"
              >
                All
              </Link>
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="inline-block bg-white text-black font-mono font-bold text-xs uppercase px-3 py-1.5 border-[3px] border-black
                    shadow-[6px_6px_0_#000000]
                    hover:shadow-[2px_2px_0_#000000] hover:translate-x-[4px] hover:translate-y-[4px]
                    hover:bg-[#fbbf24]
                    transition-all duration-150"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
