import Script from "next/script";

export default function PortfolioJsonLd() {
  const baseUrl = "https://agusnarestha.dev";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Agus Narestha",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/emoji.webp`,
        },
        sameAs: [
          "https://github.com/agusnarestha",
          "https://linkedin.com/in/agusnarestha",
        ],
        founder: {
          "@id": `${baseUrl}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Agus Narestha",
        url: baseUrl,
        jobTitle: "Web Developer & Data Enthusiast",
        worksFor: {
          "@id": `${baseUrl}/#organization`,
        },
        sameAs: [
          "https://github.com/agusnarestha",
          "https://linkedin.com/in/agusnarestha",
        ],
        knowsAbout: [
          "Web Development",
          "Data Analysis",
          "Data Visualization",
          "React",
          "Next.js",
          "TypeScript",
          "Full Stack Development",
          "Database Management",
          "Data Processing",
        ],
        description:
          "Web developer and data enthusiast passionate about creating modern web applications and working with data to derive meaningful insights.",
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Agus Narestha Portfolio",
        alternateName: ["Agus Narestha", "agusnarestha.dev"],
        description:
          "Personal portfolio of Agus Narestha — Web Developer & Data Enthusiast",
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/blog?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#nav-home`,
        name: "Home",
        description: "Agus Narestha — Web Developer & Data Enthusiast portfolio homepage",
        url: baseUrl,
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#nav-about`,
        name: "About",
        description: "Learn more about Agus Narestha — web developer and software engineer",
        url: `${baseUrl}/about`,
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#nav-projects`,
        name: "Projects",
        description: "Explore Agus Narestha's portfolio of web development projects",
        url: `${baseUrl}/project`,
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#nav-blog`,
        name: "Blog",
        description: "Articles about web development, programming, and technology insights",
        url: `${baseUrl}/blog`,
      },
      {
        "@type": "Blog",
        "@id": `${baseUrl}/blog`,
        name: "Agus Narestha Blog",
        url: `${baseUrl}/blog`,
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <Script
      id="structured-data-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
