import { getPostBySlug, getAllPosts } from "@/utils/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import TableOfContents from "@/components/blog/TableOfContents";
import MobileTableOfContents from "@/components/blog/MobileTableOfContents";
import { MDXComponents } from "@/components/blog/MDXComponents";
import { Metadata } from "next";
import JsonLd from "@/components/blog/JsonLd";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { format } from "date-fns";
import ShareButtons from "@/components/blog/ShareButtons";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const url = `https://agusnarestha.dev/blog/${params.slug}`;
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
    alternates: {
      canonical: url,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto my-32">
      <JsonLd post={post} />
      <div className="relative max-w-6xl mx-auto mt-24 max-[768px]:mt-28 dark:text-[#E4E6EB] dark:fill-[#E4E6EB]">
        <div className="relative max-[480px]:px-8">
          <Link
            href="/blog"
            className="inline-block mb-8 text-gray-900 dark:text-white font-medium hover:-translate-x-1 transition-transform duration-200 max-[375px]:text-sm max-[425px]:text-base"
          >
            ← Back to Blog
          </Link>

          <header className="mb-12 p-4 sm:p-6 md:p-8 bg-[#FFE5E5] dark:bg-[#FF6B6B] rounded-lg border-2 border-black dark:border-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 max-[375px]:text-2xl max-[425px]:text-[22px] max-[600px]:text-[26px]">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-900 dark:text-white font-medium mb-4 sm:mb-6 max-[375px]:text-xs max-[425px]:text-sm">
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span className="w-1 h-1 bg-gray-900 dark:bg-white rounded-full"></span>
              <span>{post.readingTime} min read</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 max-[375px]:gap-1.5">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#525252] text-white rounded-lg border-2 border-black dark:border-white font-medium hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 text-sm sm:text-base max-[375px]:text-xs max-[375px]:px-2 max-[375px]:py-1"
                >
                  {tag}
                </Link>
              ))}
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
          </header>

          <MobileTableOfContents content={post.content} />

          <div className="flex flex-col lg:flex-row gap-8">
            <article className="w-full lg:flex-1 prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-pre:bg-gray-100 prose-pre:text-gray-800 dark:prose-pre:text-gray-200 prose-code:text-blue-600 prose-strong:text-gray-900 bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg border-2 border-black dark:border-white">
              <MDXRemote source={post.content} components={MDXComponents} />
            </article>

            {/* Desktop Table of Contents */}
            <aside className="hidden lg:block w-64 sticky top-8 self-start">
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg border-2 border-black dark:border-white">
                <TableOfContents content={post.content} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
