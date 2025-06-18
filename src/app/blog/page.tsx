import { getAllPosts, getAllTags } from "@/utils/blog";
import BlogCard from "@/components/blog/BlogCard";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog ",
  description:
    "Explore articles about web development, programming, and technology insights from Agus Narestha's blog.",
  openGraph: {
    title: "Blog ",
    description:
      "Explore articles about web development, programming, and technology insights from Agus Narestha's blog.",
    url: "https://agusnarestha.dev/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Agus Narestha Portfolio",
    description:
      "Explore articles about web development, programming, and technology insights from Agus Narestha's blog.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="container mx-auto my-32">
      <div className="relative max-w-6xl mx-auto mt-24 max-[768px]:mt-28 dark:text-[#E4E6EB] dark:fill-[#E4E6EB]">
        <div className="relative max-[480px]:px-8">
          <div className="flex items-center">
            <h1 className="font-bold text-[#121212] text-4xl mt-1 max-[375px]:text-2xl max-[425px]:text-[22px] max-[600px]:text-[26px]">
              Blog
            </h1>
          </div>
          <p className="mt-3 text-[17px] mb-2 text-[#525252] max-[375px]:text-[15px] max-[425px]:text-[16px] max-[600px]:text-[17px]">
            Explore my thoughts and insights on web development, programming,
            and technology.
          </p>
          <hr className="border-[#d1d5db]"></hr>
        </div>

        <div className="mt-9 mb-16 p-6 bg-[#FFE5E5] dark:bg-[#FF6B6B] rounded-lg border-2 border-black dark:border-white max-[480px]:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 max-[375px]:text-xl max-[425px]:text-[22px]">
            Filter by Tags
          </h2>
          <div className="flex flex-wrap gap-3 max-[375px]:gap-2">
            {/* "All" tag */}
            <Link
              key="all"
              href="/blog"
              className="px-4 py-2 bg-[#525252] text-white rounded-lg border-2 border-black dark:border-white font-medium hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 max-[375px]:text-sm max-[425px]:text-base max-[375px]:px-3 max-[375px]:py-1.5"
            >
              All
            </Link>
            {/* Individual tags */}
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="px-4 py-2 bg-[#525252] text-white rounded-lg border-2 border-black dark:border-white font-medium hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 text-sm sm:text-base max-[375px]:text-xs max-[375px]:px-2 max-[375px]:py-1"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-[480px]:px-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
