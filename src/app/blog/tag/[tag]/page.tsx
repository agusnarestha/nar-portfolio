import { getPostsByTag, getAllTags } from "@/utils/blog";
import BlogCard from "@/components/blog/BlogCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PaperSheet from "@/components/collage/PaperSheet";
import Tape from "@/components/collage/Tape";

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
    <div className="container mx-auto my-24 max-[768px]:mt-32">
      <div className="relative mx-auto mt-24 max-w-6xl px-4 max-[768px]:mt-28 sm:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 border-2 border-ink bg-sheet px-3 py-2 font-mono text-xs font-medium uppercase tracking-widest text-ink shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5 hover:bg-butter"
        >
          ← Back to Blog
        </Link>

        <div className="mb-6">
          <div className="relative inline-block border-2 border-ink bg-pink-light px-4 py-1.5 shadow-paper-sm">
            <Tape
              tone="yellow"
              rotate={-4}
              className="absolute -top-3 left-5 h-4 w-14"
            />
            <h1 className="font-display text-2xl font-extrabold uppercase tracking-tight text-ink">
              #{canonicalTag}
            </h1>
          </div>
        </div>

        <PaperSheet tone="butter" className="mb-10 p-5">
          <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-ink">
            All Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className="inline-block border-2 border-ink bg-sheet px-3 py-1.5 font-mono text-xs font-medium uppercase text-ink shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5 hover:bg-highlight"
            >
              All
            </Link>
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className={`inline-block border-2 border-ink px-3 py-1.5 font-mono text-xs font-medium uppercase text-ink shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5 ${
                  tag.toLowerCase() === canonicalTag.toLowerCase()
                    ? "bg-highlight"
                    : "bg-sheet hover:bg-butter"
                }`}
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
  );
}
