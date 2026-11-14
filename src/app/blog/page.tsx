import { getAllPosts, getAllTags } from "@/utils/blog";
import BlogCard from "@/components/blog/BlogCard";
import Link from "next/link";
import { Metadata } from "next";
import PaperSheet from "@/components/collage/PaperSheet";
import Tape from "@/components/collage/Tape";

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
    <div className="container mx-auto my-24 max-[768px]:mt-32">
      <div className="relative mx-auto mt-24 max-w-6xl px-4 max-[768px]:mt-28 sm:px-8">
        <div className="relative">
          <div className="relative mb-6 inline-block border-2 border-ink bg-sky px-5 py-2 shadow-paper-sm">
            <Tape
              tone="mint"
              rotate={-4}
              className="absolute -top-3 left-6 h-4 w-16"
            />
            <h1 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
              Blog
            </h1>
          </div>

          <p className="mb-8 font-body text-[15px] leading-relaxed text-ink-2 max-[375px]:text-[14px]">
            Explore my thoughts and insights on web development, programming,
            and technology.
          </p>

          <PaperSheet tone="butter" className="mb-12 p-5">
            <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-ink">
              Filter by Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              <Link
                key="all"
                href="/blog"
                className="inline-block border-2 border-ink bg-highlight px-3 py-1.5 font-mono text-xs font-medium uppercase text-ink shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5"
              >
                All
              </Link>
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="inline-block border-2 border-ink bg-sheet px-3 py-1.5 font-mono text-xs font-medium uppercase text-ink shadow-paper-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-butter"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </PaperSheet>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
