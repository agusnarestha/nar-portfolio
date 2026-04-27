import { getPostBySlug, getAllPosts } from "@/utils/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import TableOfContents from "@/components/blog/TableOfContents";
import MobileTableOfContents from "@/components/blog/MobileTableOfContents";
import { MDXComponents } from "@/components/blog/MDXComponents";
import { Metadata } from "next";
import JsonLd from "@/components/blog/JsonLd";
import ShareButtons from "@/components/blog/ShareButtons";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const url = `https://agusnarestha.dev/blog/${slug}`;
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return {
    title: `${post.title} | by Agus Narestha | ${formattedDate}`,
    description: post.description,
    openGraph: {
      title: `${post.title} | by Agus Narestha | ${formattedDate}`,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Agus Narestha"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | by Agus Narestha | ${formattedDate}`,
      description: post.description,
    },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto my-32">
      <JsonLd post={post} />
      <div className="relative max-w-6xl mx-auto mt-24 max-[768px]:mt-28">
        <div className="relative max-[480px]:px-8">

          {/* Back button */}
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

          {/* Post header */}
          <header className="mb-10 p-6 bg-[#fffbe6] border-2 border-black shadow-[6px_6px_0_#000]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#121212] uppercase tracking-tight mb-5 max-[375px]:text-xl">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#525252] uppercase tracking-wide mb-5">
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span className="text-gray-300">|</span>
              <span>{post.readingTime} min read</span>
            </div>

            {/* Tags + Share */}
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="inline-block bg-[#e6b448] border-2 border-black text-black font-bold text-xs uppercase px-3 py-1
                    shadow-[2px_2px_0_#000]
                    hover:shadow-[1px_1px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px]
                    transition-all duration-100"
                >
                  #{tag}
                </Link>
              ))}
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
          </header>

          <MobileTableOfContents content={post.content} />

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Article body */}
            <article className="w-full lg:flex-1 prose prose-sm sm:prose-base md:prose-lg max-w-none
              prose-headings:font-black prose-headings:uppercase
              prose-a:text-[#3cc4ce]
              prose-strong:text-gray-900
              prose-pre:bg-gray-50 prose-pre:border-2 prose-pre:border-black prose-pre:rounded-none
              prose-code:text-[#df548e]
              bg-white border-2 border-black
              shadow-[4px_4px_0_#000]
              p-5 sm:p-7 md:p-9">
              <MDXRemote source={post.content} components={MDXComponents} />
            </article>

            {/* Desktop Table of Contents */}
            <aside className="hidden lg:block w-64 shrink-0 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto">
              <div className="bg-white border-2 border-black shadow-[4px_4px_0_#000] p-5">
                <TableOfContents content={post.content} />
              </div>
            </aside>
          </div>

        </div>
      </div>
    </div>
  );
}
