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
import remarkGfm from "remark-gfm";
import Tape from "@/components/collage/Tape";

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
    title: `${post.title} | Agus Narestha`,
    description: post.description,
    openGraph: {
      title: `${post.title} | Agus Narestha`,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modifiedDate ?? post.date,
      authors: ["Agus Narestha"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Agus Narestha`,
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
    <div className="container mx-auto my-24 max-[768px]:mt-32">
      <JsonLd post={post} />
      <div className="relative mx-auto mt-24 max-w-6xl max-[768px]:mt-28">
        <div className="relative">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 border-2 border-ink bg-sheet px-3 py-2 font-mono text-xs font-medium uppercase tracking-widest text-ink shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5 hover:bg-butter"
          >
            ← Back to Blog
          </Link>

          <header className="relative mb-10 border-2 border-ink bg-butter p-5 shadow-paper sm:p-6">
            <Tape
              tone="pink"
              rotate={-4}
              className="absolute -top-3 left-6 h-4 w-16"
            />
            <h1 className="mb-5 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink max-[375px]:text-xl sm:text-3xl md:text-4xl">
              {post.title}
            </h1>

            <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-wide text-ink-2">
              <span>By Agus Narestha</span>
              <span className="text-ink-3">/</span>
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span className="text-ink-3">/</span>
              <span>{post.readingTime} min read</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="inline-block border border-ink bg-sheet px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-ink shadow-paper-sm transition-transform duration-150 hover:-translate-y-0.5 hover:bg-pink-light"
                >
                  #{tag}
                </Link>
              ))}
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
          </header>

          <MobileTableOfContents content={post.content} />

          <div className="flex flex-col gap-8 lg:flex-row">
            <article
              className="prose prose-sm w-full max-w-none border-2 border-ink bg-sheet p-5 shadow-paper sm:prose-base sm:p-7 md:prose-lg md:p-9
                prose-headings:font-display prose-headings:font-extrabold prose-headings:tracking-tight
                prose-a:font-medium prose-a:text-cobalt prose-a:no-underline hover:prose-a:underline
                prose-strong:text-ink prose-code:text-tomato-dark
                prose-pre:rounded-none prose-pre:border-2 prose-pre:border-ink
                [--tw-prose-body:#444A57] [--tw-prose-headings:#15161A]
                [--tw-prose-links:#2446F2] [--tw-prose-bold:#15161A]
                [--tw-prose-code:#C2341A] [--tw-prose-pre-bg:#F6F8FB]
                [&_pre]:overflow-x-auto [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto"
            >
              <MDXRemote
                source={post.content}
                components={MDXComponents}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
            </article>

            <aside className="hidden w-64 shrink-0 self-start lg:sticky lg:top-28 lg:block lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
              <div className="relative border-2 border-ink bg-butter p-5 shadow-paper-sm">
                <Tape
                  tone="yellow"
                  rotate={-4}
                  className="absolute -top-3 left-6 h-4 w-14"
                />
                <TableOfContents content={post.content} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
