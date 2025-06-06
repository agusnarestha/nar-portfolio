import Script from "next/script";

export default function PortfolioJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Agus Narestha",
    url: "https://agusnarestha.dev",
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

  return (
    <Script
      id="portfolio-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
