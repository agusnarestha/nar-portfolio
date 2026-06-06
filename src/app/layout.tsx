import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "./globals.css";
import PortfolioJsonLd from "@/components/PortfolioJsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://agusnarestha.dev"),
  title: {
    default: "Agus Narestha - Web Developer & Data Enthusiast",
    template: "%s | Agus Narestha",
  },
  description:
    "Portfolio of Agus Narestha — web developer specializing in modern web technologies, data analysis, and full-stack development.",
  category: "technology",
  applicationName: "Agus Narestha Portfolio",
  generator: "Next.js",
  openGraph: {
    title: "Agus Narestha - Web Developer & Data Enthusiast",
    description:
      "Portfolio of Agus Narestha — web developer specializing in modern web technologies, data analysis, and full-stack development.",
    url: "https://agusnarestha.dev",
    siteName: "Agus Narestha Portfolio",
    type: "website",
    locale: "en_US",
  },
  keywords: [
    "Agus Narestha",
    "Web Developer",
    "Data Enthusiast",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Laravel",
    "TypeScript",
    "Web Development",
    "Data Analysis",
    "Data Visualization",
    "Projects",
    "Blog",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "Node.js",
    "Database Management",
    "Data Processing",
  ],
  authors: [{ name: "Agus Narestha", url: "https://agusnarestha.dev" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Agus Narestha - Web Developer & Data Enthusiast",
    description:
      "Portfolio of Agus Narestha — web developer specializing in modern web technologies, data analysis, and full-stack development.",
    creator: "@agusnarestha",
    site: "@agusnarestha",
  },
  other: {
    "google-site-verification": "Hqx3xeh09OgoTUxXBJvvPqYvcp46ccE63zLCqko-8so",
  },
  alternates: {
    canonical: "https://agusnarestha.dev",
    types: {
      "application/rss+xml": "https://agusnarestha.dev/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="da6ad19e-934b-47ec-b254-4b3f41d490be"
        ></script>
      </head>
      <GoogleTagManager gtmId="GTM-PHV2VZN6" />
      <GoogleAnalytics gaId="G-B2ZN13JQ9F" />
      <PortfolioJsonLd />
      <body className="font-body relative max-w-6xl mx-auto px-4 sm:px-8 max-[768px]:mt-28 bg-surface">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
