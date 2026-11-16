"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { BlogPost } from "@/types/blog";
import Tape from "@/components/collage/Tape";
import Tag from "@/components/collage/Tag";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <m.article
      initial={reduceMotion ? false : { opacity: 0, y: 12, rotate: -1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reduceMotion ? undefined : { y: -4, rotate: -1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative flex h-full flex-col border-2 border-ink bg-sheet p-4 shadow-paper"
    >
      <Tape
        tone="sky"
        rotate={-4}
        className="absolute -top-3 left-6 z-10 h-4 w-14"
      />

      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <h2 className="mb-2 line-clamp-2 font-display text-base font-bold leading-tight tracking-tight text-ink decoration-cobalt decoration-2 underline-offset-2 group-hover:underline">
          {post.title}
        </h2>

        <p className="mb-4 line-clamp-2 flex-grow font-body text-sm text-ink-2">
          {post.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Tag key={tag} tone="butter">
              #{tag}
            </Tag>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 border-t border-dashed border-ink/30 pt-3 font-mono text-xs uppercase tracking-wide text-ink-2">
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span className="text-ink-3">/</span>
          <span>{post.readingTime} min read</span>
        </div>
      </Link>
    </m.article>
  );
}
