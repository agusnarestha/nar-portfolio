import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "./globals.css";
import Head from "next/head";
import PortfolioJsonLd from "@/components/PortfolioJsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://agusnarestha.dev"),
  title: {
    default: "Agus Narestha - Web Developer & Data Enthusiast",
    template: "%s | Agus Narestha Portfolio",
  },
  description:
    "Agus Narestha is a passionate web developer and data enthusiast specializing in modern web technologies and data analysis. Explore my portfolio of projects, blog posts, and professional experience in web development and data science.",
  openGraph: {
    title: "Agus Narestha - Web Developer & Data Enthusiast",
    description:
      "Agus Narestha is a passionate web developer and data enthusiast specializing in modern web technologies and data analysis. Explore my portfolio of projects, blog posts, and professional experience in web development and data science.",
    url: "https://www.agusnarestha.dev",
    siteName: "Agus Narestha Portfolio",
    type: "website",
    images: [
      {
        url: "https://agusnarestha.dev/emoji.png",
        width: 1200,
        height: 630,
        alt: "Agus Narestha Portfolio Preview",
      },
    ],
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
  authors: [{ name: "Agus Narestha" }],
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
      "Agus Narestha is a passionate web developer and data enthusiast specializing in modern web technologies and data analysis. Explore my portfolio of projects, blog posts, and professional experience in web development and data science.",
    images: ["https://agusnarestha.dev/emoji.png"],
    creator: "@agusnarestha",
  },
  other: {
    "google-site-verification": "Hqx3xeh09OgoTUxXBJvvPqYvcp46ccE63zLCqko-8so",
  },
  alternates: {
    canonical: "https://agusnarestha.dev",
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
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="da6ad19e-934b-47ec-b254-4b3f41d490be"
        ></script>
      </head>
      <GoogleTagManager gtmId="GTM-PHV2VZN6" />
      <GoogleAnalytics gaId="G-B2ZN13JQ9F" />
      <PortfolioJsonLd />
      <body className="font-SpaceGrotesk relative max-w-6xl mx-auto px-8 max-[768px]:mt-28 max-[480px]:px-0 ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
