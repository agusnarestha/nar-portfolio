import { getPostBySlug, getAllPosts } from "@/utils/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import TableOfContents from "@/components/blog/TableOfContents";
import { MDXComponents } from "@/components/blog/MDXComponents";
import { Metadata } from "next";
import JsonLd from "@/components/blog/JsonLd";

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
    <div className="container mx-auto px-4 py-8">
      <JsonLd post={post} />
      <Link
        href="/blog"
        className="inline-block mb-8 text-blue-600 hover:underline"
      >
        ← Back to Blog
      </Link>

      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <time className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="px-3 py-1 bg-[#525252] text-white text-sm rounded-full"
              >
                {tag}
              </Link>
            ))}
          </div>
        </header>

        <div className="flex gap-8">
          <article className="flex-1 prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-pre:bg-gray-100 prose-pre:text-gray-800 dark:prose-pre:text-gray-200 prose-code:text-blue-600 prose-strong:text-gray-900">
            <MDXRemote source={post.content} components={MDXComponents} />
          </article>

          <aside className="hidden lg:block w-64">
            <TableOfContents content={post.content} />
          </aside>
        </div>
      </div>
    </div>
  );
}
