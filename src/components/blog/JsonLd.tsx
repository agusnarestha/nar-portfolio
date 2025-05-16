"use client";

import { BlogPost } from "@/types/blog";
import Script from "next/script";

interface JsonLdProps {
  post: BlogPost;
}

export default function JsonLd({ post }: JsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "Agus Narestha",
    },
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    url: `https://agusnarestha.dev/blog/${post.slug}`,
  };

  return (
    <Script
      id="blog-post-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
