import Script from "next/script";

export default function PortfolioJsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://agusnarestha.dev/#person",
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://agusnarestha.dev/#website",
    url: "https://agusnarestha.dev",
    name: "Agus Narestha Portfolio",
    description:
      "Personal portfolio of Agus Narestha - Web Developer & Data Enthusiast",
    publisher: {
      "@id": "https://agusnarestha.dev/#person",
    },
    inLanguage: "en-US",
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
    </>
  );
}

