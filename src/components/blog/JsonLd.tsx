import { BlogPost } from "@/types/blog";
import Script from "next/script";

interface JsonLdProps {
  post: BlogPost;
}

export default function JsonLd({ post }: JsonLdProps) {
  const baseUrl = "https://agusnarestha.dev";
  const postUrl = `${baseUrl}/blog/${post.slug}`;
  const breadcrumbId = `${postUrl}#breadcrumb`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          name: "Agus Narestha",
          url: baseUrl,
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/emoji.webp`,
          },
        },
        datePublished: post.date,
        dateModified: post.modifiedDate ?? post.date,
        keywords: post.tags.join(", "),
        url: postUrl,
        inLanguage: "en-US",
        isPartOf: {
          "@type": "Blog",
          "@id": `${baseUrl}/blog`,
          name: "Agus Narestha Blog",
          url: `${baseUrl}/blog`,
        },
        breadcrumb: {
          "@id": breadcrumbId,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${baseUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },
    ],
  };

  return (
    <Script
      id="blog-post-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
