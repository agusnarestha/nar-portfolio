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
        <div className="relative max-[480px]:px-8">

          {/* Page heading */}
          <div className="mb-6">
            <h1
              className="inline-block font-black text-3xl uppercase tracking-tight
                bg-[#3cc4ce] border-2 border-black px-4 py-1
                shadow-[5px_5px_0_#000]
                max-[375px]:text-xl max-[425px]:text-2xl"
            >
              Blog
            </h1>
          </div>
          <p className="mb-8 text-[15px] text-[#525252] font-medium max-[375px]:text-[14px]">
            Explore my thoughts and insights on web development, programming, and technology.
          </p>

          {/* Filter by Tags panel */}
          <div
            className="mb-12 p-5 bg-[#fffbe6] border-2 border-black shadow-[5px_5px_0_#000]"
          >
            <h2 className="font-black text-sm uppercase tracking-widest mb-4">
              Filter by Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {/* "All" tag */}
              <Link
                key="all"
                href="/blog"
                className="inline-block bg-black text-white font-bold text-xs uppercase px-3 py-1.5 border border-black
                  shadow-[3px_3px_0_#888]
                  hover:shadow-[1px_1px_0_#888] hover:translate-x-[2px] hover:translate-y-[2px]
                  transition-all duration-100"
              >
                All
              </Link>
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="inline-block bg-white text-black font-bold text-xs uppercase px-3 py-1.5 border-2 border-black
                    shadow-[3px_3px_0_#000]
                    hover:shadow-[1px_1px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]
                    hover:bg-[#e6b448]
                    transition-all duration-100"
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
