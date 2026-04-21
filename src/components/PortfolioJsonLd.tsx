import Script from "next/script";

export default function PortfolioJsonLd() {
  const baseUrl = "https://agusnarestha.dev";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Agus Narestha",
    url: baseUrl,
    jobTitle: "Web Developer & Data Enthusiast",
    worksFor: {
      "@type": "Organization",
      name: "Self-employed",
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
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Agus Narestha Portfolio",
    description:
      "Personal portfolio of Agus Narestha - Web Developer & Data Enthusiast",
    publisher: {
      "@id": `${baseUrl}/#person`,
    },
    inLanguage: "en-US",
    // SearchAction enables the Google Sitelinks Search Box
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // SiteNavigationElement tells Google which pages are your main nav links
  // These become the sitelink candidates shown under the main search result
  const navigationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#nav-home`,
        name: "Home",
        description: "Agus Narestha - Web Developer & Data Enthusiast portfolio homepage",
        url: baseUrl,
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#nav-about`,
        name: "About",
        description: "Learn more about Agus Narestha - web developer and software engineer",
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
    ],
  };

  // BreadcrumbList helps Google understand the site hierarchy
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}/#breadcrumb`,
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
        name: "About",
        item: `${baseUrl}/about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: `${baseUrl}/project`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
    ],
  };

  return (
    <>
      <Script
        id="person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="navigation-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

