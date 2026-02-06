"use client";

import { BlogPost } from "@/types/blog";
import Script from "next/script";

interface JsonLdProps {
  post: BlogPost;
}

export default function JsonLd({ post }: JsonLdProps) {
  const baseUrl = "https://agusnarestha.dev";
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    headline: post.title,
    description: post.description,
    image: `${postUrl}/opengraph-image`,
    author: {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Agus Narestha",
      url: baseUrl,
    },
    publisher: {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Agus Narestha",
      url: baseUrl,
    },
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    url: postUrl,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      "@id": `${baseUrl}/blog`,
      name: "Agus Narestha Blog",
      url: `${baseUrl}/blog`,
    },
  };

  return (
    <Script
      id="blog-post-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
