import { getPostsByTag, getAllTags } from "@/utils/blog";
import BlogCard from "@/components/blog/BlogCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const baseUrl = "https://agusnarestha.dev";
  const url = `${baseUrl}/blog/tag/${tag}`;

  return {
    title: `Posts tagged with "${tag}"`,
    description: `Browse all articles tagged with "${tag}" on Agus Narestha's blog. Explore insights about ${tag} and related topics.`,
    openGraph: {
      title: `Posts tagged with "${tag}"`,
      description: `Browse all articles tagged with "${tag}" on Agus Narestha's blog.`,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Posts tagged with "${tag}" | Agus Narestha`,
      description: `Browse all articles tagged with "${tag}" on Agus Narestha's blog.`,
    },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const tags = getAllTags();
  const canonicalTag = tags.find(
    (t) => t.toLowerCase() === decodedTag.toLowerCase()
  );

  if (!canonicalTag) {
    notFound();
  }

  const posts = getPostsByTag(canonicalTag);

  return (
    <div className="container mx-auto my-32 px-4 max-[480px]:px-8">
      <div className="relative max-w-6xl mx-auto mt-24 max-[768px]:mt-28">

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mb-8 font-black text-xs uppercase tracking-widest
            border-2 border-black bg-white px-3 py-2
            shadow-[3px_3px_0_#000] hover:shadow-[1px_1px_0_#000]
            hover:translate-x-[2px] hover:translate-y-[2px]
            transition-all duration-100"
        >
          ← Back to Blog
        </Link>

        {/* Page heading */}
        <div className="mb-6">
          <h1
            className="inline-block font-black text-2xl uppercase tracking-tight
              bg-[#e6b448] border-2 border-black px-4 py-1
              shadow-[5px_5px_0_#000]"
          >
            #{canonicalTag}
          </h1>
        </div>

        {/* All Tags panel */}
        <div className="mb-10 p-5 bg-[#fffbe6] border-2 border-black shadow-[5px_5px_0_#000]">
          <h2 className="font-black text-sm uppercase tracking-widest mb-4">All Tags</h2>
          <div className="flex flex-wrap gap-2">
            <Link
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
                className={`inline-block font-bold text-xs uppercase px-3 py-1.5 border-2 border-black
                  shadow-[3px_3px_0_#000]
                  hover:shadow-[1px_1px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]
                  transition-all duration-100
                  ${tag.toLowerCase() === canonicalTag.toLowerCase()
                    ? "bg-[#e6b448] text-black"
                    : "bg-white text-black hover:bg-[#e6b448]"
                  }`}
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
  );
}
