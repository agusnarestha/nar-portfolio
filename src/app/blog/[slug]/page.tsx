import { getPostBySlug, getAllPosts } from "@/utils/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/blog"
        className="inline-block mb-8 text-blue-600 hover:underline"
      >
        ← Back to Blog
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <time className="text-sm text-gray-500 ">
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

      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600  prose-pre:bg-gray-100  prose-pre:text-gray-800 dark:prose-pre:text-gray-200 prose-code:text-blue-600  prose-strong:text-gray-900">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
